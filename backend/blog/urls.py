from . import views
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'blog', views.BlogViewSet, basename="blog")
urlpatterns = router.urls
