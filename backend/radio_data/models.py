from django.db import models


class Slider(models.Model):
    link = models.CharField(max_length=256, blank=True, default='')
    cover = models.ImageField(upload_to='slider/cover')
    title = models.CharField(max_length=256, blank=True, default='')
    description = models.TextField(blank=True, default='')
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['id']
        verbose_name = "Слайдер"
        verbose_name_plural = "Слайдер"
