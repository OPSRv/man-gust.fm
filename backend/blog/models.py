from cgitb import text
from django.db import models


class Blog(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    thema = models.CharField(max_length=100)
    image = models.ImageField(upload_to='blog/image')
    text = models.TextField(default='')
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    like = models.IntegerField(default=0)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['id']
        verbose_name = "Блог"
        verbose_name_plural = "Замітка"
