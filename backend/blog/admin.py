from django.contrib import admin
from django.utils.safestring import mark_safe
from .models import Blog


@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ['id', 'name',  'get_image', 'created_at',
                    'is_published']
    list_display_links = ['id', 'name',  'get_image']
    list_filter = ['created_at']
    search_fields = ['name', 'description']
    list_per_page = 10

    def get_image(self, obj):
        return mark_safe(f'<img src="{obj.image.url}" width="64" height="64">')

    get_image.short_description = 'image'
