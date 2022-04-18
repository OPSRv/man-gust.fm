from multiprocessing import context

from django.contrib.contenttypes.models import ContentType
from django.shortcuts import get_object_or_404
from django_filters.rest_framework import DjangoFilterBackend
from requests import Response, request
from likes.api.mixins import LikedMixin
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.viewsets import ModelViewSet

from .api.serializers import (AlbumSerializer, AlbumSerializerDetail,
                              MusicBandSerializer, MusicBandSerializerDetail,
                              PhotoSerializer, SongLikedSerializer,
                              SongsSerializer, VideoSerializer)
from .models import Album, MusicBand, Photo, Song, Video
from rest_framework.decorators import api_view


class MusicBandViewSet(
        ModelViewSet):
    queryset = MusicBand.objects.filter(is_published=True)
    lookup_field = 'name'
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['name', 'music_styles', 'likes__user']
    pagination_class = None
    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get_serializer_class(self):
        ''' method for get serializer class '''
        if self.action == 'retrieve':
            return MusicBandSerializerDetail
        return MusicBandSerializer


class MusicBandLikedViewSet(LikedMixin,
                            ModelViewSet):
    queryset = MusicBand.objects.filter(is_published=True)
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['likes__user']
    pagination_class = None
    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return MusicBandSerializerDetail
        return MusicBandSerializer


class SongViewSet(ModelViewSet):
    queryset = Song.objects.filter(is_published=True)
    lookup_field = 'name'
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['artist__name', 'single', 'likes__user']
    serializer_class = SongsSerializer
    pagination_class = None
    permission_classes = (IsAuthenticatedOrReadOnly, )


class SongLikedSet(LikedMixin,
                   ModelViewSet):
    queryset = Song.objects.filter(is_published=True)
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['likes__user']
    serializer_class = SongLikedSerializer
    pagination_class = None
    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get_queryset(self):
        '''song liked by user'''
        return super().get_queryset().filter(
            likes__user=self.request.user
        )


class AlbumViewSet(ModelViewSet):
    queryset = Album.objects.filter(is_published=True)
    lookup_field = 'name'
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['artist__name']
    pagination_class = None

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return AlbumSerializerDetail
        return AlbumSerializer


class VideoViewSet(ModelViewSet):
    queryset = Video.objects.filter(is_published=True)
    lookup_field = 'name'
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['artist__name']
    serializer_class = VideoSerializer
    pagination_class = None


class PhotoViewSet(ModelViewSet):
    queryset = Photo.objects.filter(is_published=True)
    lookup_field = 'artist'
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['artist__name']
    serializer_class = PhotoSerializer
    pagination_class = None


# class PlayListViewSet(ModelViewSet):
#     queryset = PlayList.objects.filter(is_published=True)
#     lookup_field = 'name'
#     pagination_class = None

#     def get_serializer_class(self):
#         if self.action == 'retrieve':
#             return PlayListSerializerDetail
#         return PlayListSerializer
