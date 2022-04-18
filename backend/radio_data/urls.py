from . import views
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'slider', views.SliderViewSet, basename="slider")
urlpatterns = router.urls
