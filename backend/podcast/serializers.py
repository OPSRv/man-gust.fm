from rest_framework import serializers
from .models import Podcast, PodcastSong
from likes import services as likes_services
from rest_framework.serializers import ModelSerializer, SerializerMethodField


class PodcastSerializer(serializers.ModelSerializer):
    class Meta:
        model = Podcast
        fields = '__all__'


class PodcastSongSerializer(serializers.ModelSerializer):
    # podcast = PodcastSerializer(read_only=True)
    is_fan = SerializerMethodField()

    class Meta:
        model = PodcastSong
        fields = '__all__'
        fields = ('id',
                  'podcast',
                  'release',
                  'podcast_song_name',
                  'description',
                  'cover',
                  'audio',
                  'duration',
                  'total_likes', 'is_fan',)

    def get_is_fan(self, obj) -> bool:
        user = self.context.get('request').user
        return likes_services.is_fan(obj, user)
