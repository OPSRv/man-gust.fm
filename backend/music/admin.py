from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import Album, MusicBand, Photo, Song, Video


@admin.register(MusicBand)
class MusicBandAdmin(admin.ModelAdmin):
    model = MusicBand
    list_display = ['id', 'name', 'get_image',
                    'is_published']
    list_display_links = ('name', 'get_image')
    list_filter = ['name']
    search_fields = ['name']

    fieldsets = (
        ('Основна інформація', {
            'fields': ('name',
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
                       'email_band',
                       )
        }),
    )

    def get_image(self, obj):
        return mark_safe(f'<img src="{obj.logo.url}" width="64" height="64">')

    get_image.short_description = 'logo'


@admin.register(Song)
class SongAdmin(admin.ModelAdmin):
    model = Song
    list_display = ['id', 'get_image', 'artist',
                    'name', 'duration', 'single',  'is_published']
    list_display_links = ('id', 'artist', 'name', 'get_image')
    search_fields = ['name', 'artist__name']
    fields = [('artist',
               'name', 'single'), 'song_url',
              'song_image', 'duration', 'is_published']

    def get_image(self, obj):
        return mark_safe(f'<img src="{obj.song_image.url}" width="64" height="64">')

    get_image.short_description = 'song_image'


@ admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    model = Video
    list_display = ['id', 'artist', 'name',
                    'is_published']
    list_display_links = ('id', 'artist', 'name')
    search_fields = ['name', 'artist__name']


@ admin.register(Album)
class AlbumAdmin(admin.ModelAdmin):
    model = Album
    list_display = ['id', 'artist', 'name', 'get_image', 'is_published']
    list_display_links = ('id', 'artist', 'name', 'get_image')
    search_fields = ['name', 'artist__name']

    def get_image(self, obj):
        return mark_safe(f'<img src="{obj.album_image.url}" width="64" height="64">')

    get_image.short_description = 'album_image'


@ admin.register(Photo)
class PhotoAdmin(admin.ModelAdmin):
    model = Photo
    list_display = ['id', 'artist', 'get_image', 'is_published']
    list_display_links = ('id', 'artist', 'get_image')
    search_fields = ['name', 'artist__name']

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
