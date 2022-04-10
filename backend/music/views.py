from cgitb import lookup
from rest_framework import generics
from . import serializers
from .models import MusicBand, PlayList, Song
from rest_framework import viewsets


class MusicBandViewSet(viewsets.ModelViewSet):
    queryset = MusicBand.objects.filter(is_published=True)
    lookup_field = 'name'
    def get_serializer_class(self):
        if self.action == 'retrieve':
            return serializers.MusicBandSerializerDetail
        return serializers.MusicBandSerializer


class SongsViewSet(viewsets.ModelViewSet):
    queryset = Song.objects.filter(is_published=True)
    lookup_field = 'name'
    def get_serializer_class(self):
        if self.action == 'retrieve':
            return serializers.SongSerializerDetail
        return serializers.SongsSerializer



class PlayListViewSet(viewsets.ModelViewSet):
    queryset = PlayList.objects.filter(is_published=True)
    lookup_field = 'name'
    def get_serializer_class(self):
        if self.action == 'retrieve':
            return serializers.PlayListSerializerDetail
        return serializers.PlayListSerializer