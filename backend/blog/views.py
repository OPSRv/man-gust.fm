from cgitb import lookup
from django_filters.rest_framework import DjangoFilterBackend
from .models import Blog
from . import serializers
from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 2
    page_size_query_param = 'page_size'
    max_page_size = 3


class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    filter_backends = [DjangoFilterBackend]
    lookup_field = 'name'
    filterset_fields = ['name']
    pagination_class = PageNumberPagination

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return serializers.BlogSerializerDetail
        return serializers.BlogSerializer
