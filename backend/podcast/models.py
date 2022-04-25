import time

from django.contrib.contenttypes.fields import GenericRelation
from django.core.validators import FileExtensionValidator
from django.db import models
from likes.models import Like
from mutagen.mp3 import MP3


def podcasts_directory_path(instance, filename):
    return f'podcasts/{instance.podcast_name}/image/{filename}'.format(filename=filename)


class Podcast(models.Model):
    podcast_name = models.CharField(
        max_length=200, verbose_name="Назва подкасту")
    theme = models.CharField(
        max_length=200, verbose_name="#Тематика", help_text="# вказувати не потрібно")
    description = models.TextField(max_length=450,
                                   verbose_name="Опис", help_text="до 450 символів")
    image = models.ImageField(
        upload_to=podcasts_directory_path, verbose_name="Зображення")
    is_published = models.BooleanField(default=True, verbose_name="Публікація")
    created_at = models.DateTimeField(
        auto_now_add=True, verbose_name="Дата створення")
    updated_at = models.DateTimeField(
        auto_now=True, verbose_name="Дата оновлення")

    def __str__(self):
        return self.podcast_name

    class Meta:
        ordering = ['id']
        verbose_name = "Подкаст"
        verbose_name_plural = "Подкасти"


def podcasts_audio_directory_path(instance, filename):
    return f'podcasts/{instance.podcast}/{instance.podcast_song_name}/{filename}'.format(filename=filename)


def podcasts_cover_directory_path(instance, filename):
    return f'podcasts/{instance.podcast}/{instance.podcast_song_name}/{filename}'.format(filename=filename)


class PodcastSong(models.Model):
    likes = GenericRelation(Like)
    podcast = models.ForeignKey(
        Podcast, blank=False, on_delete=models.CASCADE, verbose_name="Виконавець")
    release = models.IntegerField(default=0)
    podcast_song_name = models.CharField(max_length=200)
    description = models.TextField(
        max_length=450, blank=True, help_text="до 450 символів")
    cover = models.ImageField(upload_to=podcasts_cover_directory_path)
    audio = models.FileField(upload_to=podcasts_audio_directory_path, validators=[
                             FileExtensionValidator(['mp3'])])
    duration = models.CharField(
        max_length=10, blank=True, default='', verbose_name="Тривалість", help_text="Виглядає у форматі 00:00, вираховується автоматично")
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.podcast_song_name

    class Meta:
        ordering = ['-release']
        verbose_name = "Пісня подкасту"
        verbose_name_plural = "Пісні подкасту"

    def save(self, *args, **kwargs):
        if self.audio:
            audio = MP3(self.audio)
            ty_res = time.gmtime(audio.info.length)
            res = time.strftime("%M:%S", ty_res)
            self.duration = res
        super().save(*args, **kwargs)

    @property
    def total_likes(self):
        return self.likes.count()
