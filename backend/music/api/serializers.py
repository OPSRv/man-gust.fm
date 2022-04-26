from likes import services as likes_services
from rest_framework.serializers import ModelSerializer, SerializerMethodField

from ..models import Album, MusicBand, Photo, PlayList, Song, Video


class MusicBandSerializer(ModelSerializer):
    is_fan = SerializerMethodField()

    class Meta:
        model = MusicBand
        fields = ('id', 'musicband_name', 'logo',
                  'theme', 'is_fan', 'total_likes',)

    def get_is_fan(self, obj) -> bool:
        user = self.context.get('request').user
        return likes_services.is_fan(obj, user)


class SongsSerializer(ModelSerializer):
    musicband = MusicBandSerializer(read_only=True)
    is_fan = SerializerMethodField()

    class Meta:
        model = Song
        fields = ('id', 'musicband', 'song_name', 'duration',
                  'song_url', 'song_image', 'total_likes', 'is_fan',)

    def get_is_fan(self, obj) -> bool:
        user = self.context.get('request').user
        return likes_services.is_fan(obj, user)


class MusicBandSerializerDetail(ModelSerializer):
    is_fan = SerializerMethodField()

    class Meta:
        model = MusicBand
        fields = (
            'id',
            'musicband_name',
            'theme',
            'about_band',
            'logo',
            'baner',
            'instagram_link',
            'facebook_link',
            'youtube_link',
            'telegram_link',
            'soundcloud_link',
            'itunes_link',
            'bandcamp_link',
            'spotify_link',
            'tik_tok_link',
            'mobile_number',
            'email_band',
            'is_fan', 'total_likes',

        )

    def get_is_fan(self, obj) -> bool:
        user = self.context.get('request').user
        return likes_services.is_fan(obj, user)


class SongLikedSerializer(ModelSerializer):
    musicband = MusicBandSerializer(read_only=True)
    is_fan = SerializerMethodField()

    class Meta:
        model = Song
        fields = ('id', 'musicband', 'song_name', 'duration',
                  'song_url', 'song_image', 'total_likes', 'is_fan',)

    def get_is_fan(self, obj) -> bool:
        """Проверяет, лайкнул ли `request.user` твит (`obj`).
            """
        user = self.context.get('request').user
        return likes_services.is_fan(obj, user)


class AlbumSerializer(ModelSerializer):
    class Meta:
        model = Album
        fields = ('id', 'album_name', 'album_image')


class AlbumSerializerDetail(ModelSerializer):
    song = SongsSerializer(read_only=True, many=True)

    class Meta:
        model = Album
        fields = '__all__'


class VideoSerializer(ModelSerializer):
    class Meta:
        model = Video
        fields = '__all__'


class PhotoSerializer(ModelSerializer):
    class Meta:
        model = Photo
        fields = '__all__'


class PlayListSerializer(ModelSerializer):
    class Meta:
        model = PlayList
        fields = '__all__'


class PlayListSerializerDetail(ModelSerializer):
    class Meta:
        model = PlayList
        song = SongsSerializer(many=True, read_only=True)
        fields = ('id', 'name', 'image', 'user', 'song')
