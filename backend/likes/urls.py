
from rest_framework import routers

from . import views

router = routers.SimpleRouter()
router.register(r'like', views.LikesViewSet, basename="like")

urlpatterns = router.urls
