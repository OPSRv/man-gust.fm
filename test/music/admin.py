from django.contrib import admin
from backend.music.models import MusicBand
from django.utils.safestring import mark_safe

@admin.register(MusicBand)
class MusicBandAdmin(admin.ModelAdmin):
    model = MusicBand
    list_display = ['id', 'name','music_styles','about_band','logo','baner','instagram_link','facebook_link','youtube_link','telegram_link','soundcloud_link','mobile_number','email_band','is_published','created_at']
    list_display_links = ('username', 'get_image', 'position', 'is_staff')
    readonly_fields = ('get_image',)

    def get_image(self, obj):
        return mark_safe(f'<img src="{obj.user_picture.url}" width="64" height="64">')
    
    get_image.short_description = 'logo'
