from .serializers import SliderSerializer
from .models import Slider
from rest_framework import viewsets


class SliderViewSet(viewsets.ModelViewSet):
    queryset = Slider.objects.all()
    serializer_class = SliderSerializer
    lookup_field = 'theme'
    pagination_class = None
