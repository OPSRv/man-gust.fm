
# from django.urls import include, path
# from rest_framework import routers
# from . import views

# router = routers.DefaultRouter()
# router.register(r'musicbands', views.MusicBandViewSet, basename="musicbands")
# router.register(r'songs', views.SongsViewSet, basename="songs")
# router.register(r'playlists', views.PlayListViewSet, basename="playlists")

# urlpatterns = [
#     path('api/', include(router.urls)),
# ]


from . import views
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'musicbands', views.MusicBandViewSet, basename="musicbands")
router.register(r'songs', views.SongsViewSet, basename="songs")
router.register(r'album', views.AlbumViewSet, basename="album")
router.register(r'playlists', views.PlayListViewSet, basename="playlists")
urlpatterns = router.urls
