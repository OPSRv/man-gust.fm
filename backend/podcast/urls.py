from . import views
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'podcast', views.PodcastViewSet, basename="podcast")
router.register(r'podcast-song', views.PodcastSongViewSet,
                basename="podcast-song")
urlpatterns = router.urls
