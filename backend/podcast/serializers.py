from rest_framework import serializers
from .models import Podcast, PodcastSong


class PodcastSerializer(serializers.ModelSerializer):
    class Meta:
        model = Podcast
        fields = '__all__'


class PodcastSongSerializer(serializers.ModelSerializer):
    class Meta:
        model = PodcastSong
        fields = '__all__'
