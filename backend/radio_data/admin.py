from django.contrib import admin
from .models import Slider
from django.utils.safestring import mark_safe

@admin.register(Slider)
class SliderAdmin(admin.ModelAdmin):
    model = Slider
    list_display = ['id', 'title', 'get_image', 'is_published']
    list_display_links = ('title', 'get_image')

    def get_image(self, obj):
        return mark_safe(f'<img src="{obj.cover.url}" width="64" height="64">')
    
    get_image.short_description = 'logo'