from django.db import models


def podcasts_directory_path(instance, filename):
    return f'podcasts/{instance.name}/image/{filename}'.format(filename=filename)


class Podcast(models.Model):
    name = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to=podcasts_directory_path)
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['id']
        verbose_name = "Подкаст"
        verbose_name_plural = "Подкасти"


def podcasts_audio_directory_path(instance, filename):
    return f'podcasts/{instance.podcast}/{instance.title}/{filename}'.format(filename=filename)


def podcasts_cover_directory_path(instance, filename):
    return f'podcasts/{instance.podcast}/{instance.title}/cover/{filename}'.format(filename=filename)


class PodcastSong(models.Model):
    podcast = models.ForeignKey(
        Podcast, blank=False, on_delete=models.CASCADE, verbose_name="Виконавець")
    release = models.IntegerField(default=0)
    title = models.CharField(max_length=200)
    description = models.TextField()
    cover = models.ImageField(upload_to=podcasts_cover_directory_path)
    audio = models.FileField(upload_to=podcasts_audio_directory_path)
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['id']
        verbose_name = "Пісня подкасту"
        verbose_name_plural = "Пісні подкасту"
