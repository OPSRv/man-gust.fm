from django_filters.rest_framework import DjangoFilterBackend
from likes.api.mixins import LikedMixin
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Podcast, PodcastSong
from .serializers import PodcastSerializer, PodcastSongSerializer


class PodcastViewSet(viewsets.ModelViewSet):
    queryset = Podcast.objects.filter(is_published=True)
    serializer_class = PodcastSerializer
    lookup_field = 'podcast_name'
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['theme']
    pagination_class = None


class PodcastSongViewSet(LikedMixin,
                         viewsets.ModelViewSet):
    queryset = PodcastSong.objects.filter(is_published=True)
    serializer_class = PodcastSongSerializer
    pagination_class = None
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['podcast__podcast_name']
    permission_classes = (IsAuthenticatedOrReadOnly, )
