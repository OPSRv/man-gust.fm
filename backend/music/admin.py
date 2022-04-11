from django.contrib import admin
from django.utils.safestring import mark_safe
from .models import Album, MusicBand, Song, PlayList


@admin.register(MusicBand)
class MusicBandAdmin(admin.ModelAdmin):
    model = MusicBand
    list_display = ['id', 'name', 'get_image',
                    'is_published', 'youtube_video_link']
    list_display_links = ('name', 'get_image')

    def get_image(self, obj):
        return mark_safe(f'<img src="{obj.logo.url}" width="64" height="64">')

    get_image.short_description = 'logo'


@admin.register(Song)
class SongAdmin(admin.ModelAdmin):
    model = Song
    list_display = ['id', 'artist', 'name', 'get_image', 'is_published']
    list_display_links = ('id', 'artist', 'name', 'get_image')

    def get_image(self, obj):
        return mark_safe(f'<img src="{obj.song_image.url}" width="64" height="64">')

    get_image.short_description = 'song_image'


@admin.register(Album)
class AlbumAdmin(admin.ModelAdmin):
    model = Album
    list_display = ['id', 'artist', 'name', 'get_image', 'is_published']
    list_display_links = ('id', 'artist', 'name', 'get_image')

    def get_image(self, obj):
        return mark_safe(f'<img src="{obj.album_image.url}" width="64" height="64">')

    get_image.short_description = 'album_image'


@admin.register(PlayList)
class PlayListAdmin(admin.ModelAdmin):
    model = PlayList
    list_display = ['id', 'name', 'get_image', 'is_published']
    list_display_links = ('name', 'get_image')

    def get_image(self, obj):
        return mark_safe(f'<img src="{obj.image.url}" width="64" height="64">')

    get_image.short_description = 'image'
