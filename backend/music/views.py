from cgitb import lookup
from rest_framework import generics
from . import serializers
from .models import Album, MusicBand, PlayList, Song
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend


class MusicBandViewSet(viewsets.ModelViewSet):
    queryset = MusicBand.objects.filter(is_published=True)
    lookup_field = 'name'
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['name', 'music_styles']

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return serializers.MusicBandSerializerDetail
        return serializers.MusicBandSerializer


class SongsViewSet(viewsets.ModelViewSet):
    queryset = Song.objects.filter(is_published=True)
    lookup_field = 'name'
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['artist__name']

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return serializers.SongSerializerDetail
        return serializers.SongsSerializer


class AlbumViewSet(viewsets.ModelViewSet):
    queryset = Album.objects.filter(is_published=True)
    lookup_field = 'name'
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['artist__name']

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return serializers.AlbumSerializerDetail
        return serializers.AlbumSerializer


class PlayListViewSet(viewsets.ModelViewSet):
    queryset = PlayList.objects.filter(is_published=True)
    lookup_field = 'name'

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return serializers.PlayListSerializerDetail
        return serializers.PlayListSerializer
