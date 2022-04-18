from rest_framework import routers

from . import views

router = routers.SimpleRouter()
router.register(r'musicbands', views.MusicBandViewSet, basename="musicbands")
router.register(r'musicband_like', views.MusicBandLikedViewSet,
                basename="musicband_like")
router.register(r'song', views.SongViewSet, basename="song")
router.register(r'song_like', views.SongLikedSet, basename="song_like")
router.register(r'album', views.AlbumViewSet, basename="album")
# router.register(r'playlists', views.PlayListViewSet, basename="playlists")
router.register(r'photo', views.PhotoViewSet, basename="photo")
router.register(r'video', views.VideoViewSet, basename="video")
urlpatterns = router.urls
