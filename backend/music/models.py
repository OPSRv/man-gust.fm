import time

from django.contrib.auth.models import User
from django.contrib.contenttypes.fields import GenericRelation
from django.db import models
from django.forms import JSONField
from likes.models import Like
from mutagen.mp3 import MP3


def logo_directory_path(instance, filename):
    return f'music_band/{instance.name}/logo/{filename}'.format(filename=filename)


def baner_directory_path(instance, filename):
    return f'music_band/{instance.name}/baner/{filename}'.format(filename=filename)


class MusicBand(models.Model):
    likes = GenericRelation(Like)
    name = models.CharField(max_length=100, blank=False,
                            default='', verbose_name="Назва колективу")
    music_styles = models.CharField(
        max_length=32, blank=False, default='', verbose_name="Музичний стиль")
    about_band = models.TextField(
        blank=False, default='', verbose_name="Інформація про колектив")
    logo = models.ImageField(verbose_name="Логотип",
                             upload_to=logo_directory_path)
    baner = models.ImageField(
        verbose_name="Банер", upload_to=baner_directory_path, help_text="Розміри 3840x1104")
    instagram_link = models.CharField(
        max_length=256, blank=True, default='', verbose_name="Instagram")
    facebook_link = models.CharField(
        max_length=256, blank=True, default='', verbose_name="FaceBook")
    youtube_link = models.CharField(
        max_length=256, blank=True, default='', verbose_name="Youtube")
    telegram_link = models.CharField(
        max_length=128, blank=True, default='', verbose_name="Telegram")
    soundcloud_link = models.CharField(
        max_length=128, blank=True, default='', verbose_name="SoundCloud")
    itunes_link = models.CharField(max_length=128, blank=True, default='', verbose_name=" iTunes")
    bandcamp_link = models.CharField(max_length=128, blank=True, default='', verbose_name=" Bandcamp")
    spotify_link = models.CharField(max_length=128, blank=True, default='', verbose_name=" Spotify")
    tik_tok_link = models.CharField(max_length=128, blank=True, default='', verbose_name=" TikTok")
    mobile_number = models.CharField(
        max_length=16, blank=True, default='', verbose_name="Номер телефону")
    email_band = models.EmailField(verbose_name="Електронна пошта")
    is_published = models.BooleanField(default=True, verbose_name="Публікація")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['id']
        verbose_name = "Виконавця"
        verbose_name_plural = "Виконавці"

    def __str__(self):
        return self.name  # повертає назву колективу

    @property
    def total_likes(self):
        return self.likes.count()


def songs_directory_path(instance, filename):
    return f'music_band/{instance.artist.name}/songs/{instance.name}/{filename}'.format(filename=filename)


def songs_image_directory_path(instance, filename):
    return f'music_band/{instance.artist.name}/songs/{instance.name}/{filename}'.format(filename=filename)


class Song(models.Model):
    likes = GenericRelation(Like)
    name = models.CharField(max_length=100, blank=False,
                            default='', verbose_name="Назва пісні")
    artist = models.ForeignKey(
        MusicBand, blank=False, on_delete=models.CASCADE, verbose_name="Виконавець", related_name="songs")
    song_url = models.FileField(
        upload_to=songs_directory_path, blank=False, verbose_name="Пісня", help_text="Формат файлу mp3")
    song_image = models.ImageField(
        upload_to=songs_image_directory_path, blank=False, verbose_name="Обкладинка пісні", )
    duration = models.CharField(
        max_length=10, blank=True, default='', verbose_name="Тривалість", help_text="Виглядає у форматі 00:00, вираховується автоматично")
    single = models.BooleanField(default=True)
    is_published = models.BooleanField(default=True)

    class Meta:
        ordering = ['id']
        verbose_name = "Трек"
        verbose_name_plural = "Треки"

    def __str__(self):
        return self.artist.name + ' - ' + self.name

    def save(self, *args, **kwargs):
        if self.song_url:
            audio = MP3(self.song_url)
            ty_res = time.gmtime(audio.info.length)
            res = time.strftime("%M:%S", ty_res)
            self.duration = res
        super().save(*args, **kwargs)

    @property
    def total_likes(self):
        return self.likes.count()


def album_image_directory_path(instance, filename):
    return f'music_band/{instance.artist.name}/songs/album/{instance.name}/{filename}'.format(filename=filename)


class Album(models.Model):
    name = models.CharField(max_length=100, blank=False,
                            default='', verbose_name="Назва альбому")
    artist = models.ForeignKey(
        MusicBand, blank=False, on_delete=models.CASCADE, verbose_name="Виконавець")
    album_image = models.ImageField(
        upload_to=album_image_directory_path, blank=False, verbose_name="Обкладинка альбому", )
    song = models.ManyToManyField(
        Song, blank=True, verbose_name="Пісні", related_name='+')
    is_published = models.BooleanField(default=True)

    class Meta:
        ordering = ['id']
        verbose_name = "Альбом"
        verbose_name_plural = "Альбоми"

    def __str__(self):
        return self.name


def photo_directory_path(instance, filename):
    return f'music_band/{instance.artist}/photo/{filename}'.format(filename=filename)


class Photo(models.Model):
    artist = models.ForeignKey(
        MusicBand, blank=False, on_delete=models.CASCADE, verbose_name="Виконавець")
    photo = models.ImageField(
        upload_to=photo_directory_path, blank=False, verbose_name="Фото")
    is_published = models.BooleanField(default=True)

    class Meta:
        ordering = ['id']
        verbose_name = "Фото"
        verbose_name_plural = "Фото"

    def __str__(self):
        return self.artist.name


class Video(models.Model):
    artist = models.ForeignKey(
        MusicBand, blank=False, on_delete=models.CASCADE, verbose_name="Виконавець")
    name = models.CharField(max_length=100, blank=False,
                            default='', verbose_name="Назва відео")
    video_url = models.CharField(
        max_length=100, blank=False, default='', verbose_name=" відео")
    is_published = models.BooleanField(default=True)

    class Meta:
        ordering = ['id']
        verbose_name = "Відео"
        verbose_name_plural = "Відео"

    def __str__(self):
        return self.name


def playList_directory_path(instance, filename):
    return f'playlist/{instance.name}/{filename}'.format(filename=filename)


class PlayList(models.Model):
    pass
#     name = models.CharField(max_length=100, blank=False,
#                             default='', verbose_name="Назва плейлиста")
#     image = models.ImageField(
#         upload_to=logo_directory_path, blank=False, verbose_name="Обкладинка плейлиста")
#     song = models.ManyToManyField(
#         Song, blank=True, verbose_name="Пісні", related_name='+', symmetrical=False)

#     # user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='+')

#     user = models.ManyToManyField(
#         User, blank=True, verbose_name="Власник", related_name='+', symmetrical=False,)

#     is_published = models.BooleanField(default=True)

#     class Meta:
#         ordering = ['id']
#         verbose_name = "Плейлист"
#         verbose_name_plural = "Плейлисти"

#     def __str__(self):
#         return self.name
