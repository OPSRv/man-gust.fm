from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import Album, MusicBand, Photo, Song, Video


@admin.register(MusicBand)
class MusicBandAdmin(admin.ModelAdmin):
    model = MusicBand
    list_display = ['id', 'musicband_name', 'get_image',
                    'is_published']
    list_display_links = ('musicband_name', 'get_image')
    list_filter = ['musicband_name']
    search_fields = ['musicband_name']

    fieldsets = (
        ('Основна інформація', {
            'fields': ('musicband_name',
                       'music_styles',
                       'about_band'
                       )
        }),
        ('Банер та лого', {
            'fields': ('logo',
                       'baner',
                       )
        }),
        ('Посилання', {
            'fields': ('instagram_link',
                       'facebook_link',
                       'youtube_link',
                       'telegram_link',
                       'soundcloud_link',
                       'itunes_link',
                       'bandcamp_link',
                       'spotify_link',
                       'tik_tok_link',
                       )
        }),
        ('Контакти', {
            'fields': ('mobile_number',
                       'email_band', 'is_published'
                       )
        }),
    )

    def get_image(self, obj):
        return mark_safe(f'<img src="{obj.logo.url}" width="64" height="64">')

    get_image.short_description = 'logo'


@admin.register(Song)
class SongAdmin(admin.ModelAdmin):
    model = Song
    list_display = ['id', 'get_image', 'musicband',
                    'song_name', 'duration', 'single',  'is_published']
    list_display_links = ('id', 'musicband', 'song_name', 'get_image')
    search_fields = ['song_name', 'musicband__musicband_name']
    fields = [('musicband',
               'song_name', 'single'), 'song_url',
              'song_image', 'duration', 'is_published']

    def get_image(self, obj):
        return mark_safe(f'<img src="{obj.song_image.url}" width="64" height="64">')

    get_image.short_description = 'song_image'


@ admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    model = Video
    list_display = ['id', 'musicband', 'video_name',
                    'is_published']
    list_display_links = ('id', 'musicband', 'video_name')
    search_fields = ['video_name', 'musicband__musicband_name']


@ admin.register(Album)
class AlbumAdmin(admin.ModelAdmin):
    model = Album
    list_display = ['id', 'musicband',
                    'album_name', 'get_image', 'is_published']
    list_display_links = ('id', 'musicband', 'album_name', 'get_image')
    search_fields = ['album_name', 'musicband__musicband_name']

    def get_image(self, obj):
        return mark_safe(f'<img src="{obj.album_image.url}" width="64" height="64">')

    get_image.short_description = 'album_image'


@ admin.register(Photo)
class PhotoAdmin(admin.ModelAdmin):
    model = Photo
    list_display = ['id', 'musicband', 'get_image', 'is_published']
    list_display_links = ('id', 'musicband', 'get_image')
    search_fields = ['musicband__musicband_name']

    def get_image(self, obj):
        return mark_safe(f'<img src="{obj.photo.url}" width="64" height="64">')

    get_image.short_description = 'photo'


# @admin.register(PlayList)
# class PlayListAdmin(admin.ModelAdmin):
#     model = PlayList
#     list_display = ['id', 'name', 'get_image', 'is_published']
#     list_display_links = ('name', 'get_image')

#     def get_image(self, obj):
#         return mark_safe(f'<img src="{obj.image.url}" width="64" height="64">')

#     get_image.short_description = 'image'
