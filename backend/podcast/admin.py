from django.contrib import admin
from .models import Podcast, PodcastSong
from django.utils.safestring import mark_safe


@admin.register(Podcast)
class PodcastAdmin(admin.ModelAdmin):
    model = Podcast
    list_display = ['id', 'podcast_name',
                    'get_image', 'theme', 'description', ]
    list_display_links = ('podcast_name', 'get_image', 'theme')

    def get_image(self, obj):
        return mark_safe(f'<img src="{obj.image.url}" width="64" height="64">')

    get_image.short_description = 'image'


@admin.register(PodcastSong)
class PodcastSongAdmin(admin.ModelAdmin):
    model = PodcastSong
    list_display = ['id', 'podcast', 'get_image', 'release',
                    'podcast_song_name', 'description', ]
    list_display_links = ('podcast_song_name', 'get_image')

    def get_image(self, obj):
        return mark_safe(f'<img src="{obj.cover.url}" width="64" height="64">')

    get_image.short_description = 'cover'
