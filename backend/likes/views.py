from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.viewsets import ModelViewSet

from .api.serializers import FanSerializer
from .models import Like


class LikesViewSet(ModelViewSet):
    queryset = Like.objects.all()
    serializer_class = FanSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, )
