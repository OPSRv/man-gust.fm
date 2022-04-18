from rest_framework import serializers
from .models import Blog
from rest_framework import viewsets


class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ('id', 'name', 'thema', 'image')


class BlogSerializerDetail(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'
