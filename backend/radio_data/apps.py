from tabnanny import verbose
from django.apps import AppConfig


class RadioDataConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'radio_data'
    verbose_name = 'Наповнення додатку'
