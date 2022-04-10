from django.db import models
from django.forms import JSONField


def artists_upload_to(instance, filename):
    return f'music_band/{filename}'.format(filename=filename)

class MusicBand(models.Model):
    name = models.CharField(max_length=100, blank=False, default='', verbose_name="Назва колективу")
    music_styles = models.CharField(max_length=32, blank=False, default='', verbose_name="Музичний стиль")
    about_band = models.TextField(blank=False, default='', verbose_name="Інформація про колектив")
    logo = models.ImageField(verbose_name="Логотип", upload_to=f"artists/{name}/logo")
    baner = models.ImageField(verbose_name="Банер 3840x1104", upload_to=f"artists/{name}/baner")
    instagram_link = models.CharField(max_length=256, blank=True, default='', verbose_name="Посилання на Instagram")
    facebook_link = models.CharField(max_length=256, blank=True, default='', verbose_name="Посилання на FaceBook")
    youtube_link = models.CharField(max_length=256, blank=True, default='', verbose_name="Посилання на Youtube")
    telegram_link = models.CharField(max_length=128, blank=True, default='', verbose_name="Посилання на Telegram")
    soundcloud_link = models.CharField(max_length=128, blank=True, default='', verbose_name="Посилання на SoundCloud")
    mobile_number = models.CharField(max_length=16, blank=True, default='', verbose_name="Номер телефону")
    email_band = models.EmailField(verbose_name="Електронна пошта")
    youtube_video_link = JSONField(default=list, blank=True, verbose_name="Посилання на відео з Youtube")
    is_published = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['id']
        verbose_name = "Виконавця"
        verbose_name_plural = "Виконавці"

    def __str__(self):
        return self.name  # повертає назву колективу


def songs_directory_path(instance, filename):
    return f'songs/artists/{instance.artist.name}/song/{filename}'.format(filename=filename)

def songs_image_directory_path(instance, filename):
    return f'songs/artists/{instance.artist.name}/song/{instance.song.name}/image/{filename}'.format(filename=filename)

class Song(models.Model):
    name = models.CharField(max_length=100, blank=False, default='', verbose_name="Назва пісні")
    artist = models.ForeignKey(MusicBand,blank=False, on_delete=models.CASCADE, verbose_name="Виконавець")
    song_url = models.FileField(upload_to=songs_directory_path, blank=False, verbose_name="Пісня")
    song_image = models.ImageField(upload_to=songs_image_directory_path, blank=False, verbose_name="Обкладинка пісні", )
    is_published = models.BooleanField(default=False)

    class Meta:
        ordering = ['id']
        verbose_name = "Пісня"
        verbose_name_plural = "Пісні"

    def __str__(self):
        return self.artist.name + ' - ' + self.name  # Повертає назву виконавця та назву пісні


    