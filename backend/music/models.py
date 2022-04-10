from django.db import models
from django.forms import JSONField


def logo_directory_path(instance, filename):
    return f'music_band/{instance.name}/logo/{filename}'.format(filename=filename)


def baner_directory_path(instance, filename):
    return f'music_band/{instance.name}/baner/{filename}'.format(filename=filename)


class MusicBand(models.Model):
    name = models.CharField(max_length=100, blank=False,
                            default='', verbose_name="Назва колективу")
    music_styles = models.CharField(
        max_length=32, blank=False, default='', verbose_name="Музичний стиль")
    about_band = models.TextField(
        blank=False, default='', verbose_name="Інформація про колектив")
    logo = models.ImageField(verbose_name="Логотип",
                             upload_to=logo_directory_path)
    baner = models.ImageField(
        verbose_name="Банер 3840x1104", upload_to=baner_directory_path)
    instagram_link = models.CharField(
        max_length=256, blank=True, default='', verbose_name="Посилання на Instagram")
    facebook_link = models.CharField(
        max_length=256, blank=True, default='', verbose_name="Посилання на FaceBook")
    youtube_link = models.CharField(
        max_length=256, blank=True, default='', verbose_name="Посилання на Youtube")
    telegram_link = models.CharField(
        max_length=128, blank=True, default='', verbose_name="Посилання на Telegram")
    soundcloud_link = models.CharField(
        max_length=128, blank=True, default='', verbose_name="Посилання на SoundCloud")
    mobile_number = models.CharField(
        max_length=16, blank=True, default='', verbose_name="Номер телефону")
    email_band = models.EmailField(verbose_name="Електронна пошта")
    youtube_video_link = JSONField()
    is_published = models.BooleanField(default=True, verbose_name="Публікація")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['id']
        verbose_name = "Виконавця"
        verbose_name_plural = "Виконавці"

    def __str__(self):
        return self.name  # повертає назву колективу


def songs_directory_path(instance, filename):
    return f'music_band/{instance.artist.name}/songs/{instance.name}/{filename}'.format(filename=filename)


def songs_image_directory_path(instance, filename):
    return f'music_band/{instance.artist.name}/songs/{instance.name}/{filename}'.format(filename=filename)


class Song(models.Model):
    name = models.CharField(max_length=100, blank=False,
                            default='', verbose_name="Назва пісні")
    artist = models.ForeignKey(
        MusicBand, blank=False, on_delete=models.CASCADE, verbose_name="Виконавець")
    song_url = models.FileField(
        upload_to=songs_directory_path, blank=False, verbose_name="Пісня")
    song_image = models.ImageField(
        upload_to=songs_image_directory_path, blank=False, verbose_name="Обкладинка пісні", )
    is_published = models.BooleanField(default=True)

    class Meta:
        ordering = ['id']
        verbose_name = "Пісня"
        verbose_name_plural = "Пісні"

    def __str__(self):
        # Повертає назву виконавця та назву пісні
        return self.artist.name + ' - ' + self.name


def playList_directory_path(instance, filename):
    return f'playlist/{instance.name}/{filename}'.format(filename=filename)


class PlayList(models.Model):
    name = models.CharField(max_length=100, blank=False,
                            default='', verbose_name="Назва плейлиста")
    image = models.ImageField(
        upload_to=logo_directory_path, blank=False, verbose_name="Обкладинка плейлиста")
    song = models.ManyToManyField(
        Song, blank=True, verbose_name="Пісні", related_name='+', symmetrical=False)

    # user = models.OneToOneField('auth.User', on_delete=models.CASCADE, related_name='+')

    user = models.ManyToManyField(
        'auth.User', blank=True, verbose_name="Власник", related_name='+', symmetrical=False)

    is_published = models.BooleanField(default=True)

    class Meta:
        ordering = ['id']
        verbose_name = "Плейлист"
        verbose_name_plural = "Плейлисти"

    def __str__(self):
        return self.name
