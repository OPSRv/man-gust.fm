from rest_framework import serializers
from .models import Album, MusicBand, PlayList, Song
from rest_framework import viewsets


class MusicBandSerializer(serializers.ModelSerializer):
    class Meta:
        model = MusicBand
        fields = ('id', 'name', 'logo')


class MusicBandSerializerDetail(serializers.ModelSerializer):
    class Meta:
        model = MusicBand
        fields = '__all__'


class SongsSerializer(serializers.ModelSerializer):
    artist = MusicBandSerializer(read_only=True)

    class Meta:
        model = Song
        fields = '__all__'


class SongSerializerDetail(serializers.ModelSerializer):
    artist = MusicBandSerializer(read_only=True, many=True)

    class Meta:
        model = Song
        fields = '__all__'


class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = ('id', 'name', 'album_image')


class AlbumSerializerDetail(serializers.ModelSerializer):
    artist = MusicBandSerializer(read_only=True)
    song = SongSerializerDetail(read_only=True, many=True)

    class Meta:
        model = Album
        fields = '__all__'


class PlayListSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlayList
        fields = '__all__'


class PlayListSerializerDetail(serializers.ModelSerializer):
    class Meta:
        model = PlayList
        song = SongsSerializer(many=True, read_only=True)
        fields = ('id', 'name', 'image', 'user', 'song')
