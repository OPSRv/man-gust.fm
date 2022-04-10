from .serializers import PodcastSerializer, PodcastSongSerializer
from .models import Podcast, PodcastSong
from rest_framework import viewsets


class PodcastViewSet(viewsets.ModelViewSet):
    queryset = Podcast.objects.all()
    serializer_class = PodcastSerializer
    lookup_field = 'name'


class PodcastSongViewSet(viewsets.ModelViewSet):
    queryset = PodcastSong.objects.all()
    serializer_class = PodcastSongSerializer
    lookup_field = 'title'
