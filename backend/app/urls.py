from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path

from .yasg import urlpatterns as doc_urls

# Register API
apipatterns = [
    path('', include('music.urls')),
    path('', include('radio_data.urls')),
    path('', include('podcast.urls')),
    path('', include('blog.urls')),
    path('', include('likes.urls')),
]

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include(apipatterns)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += doc_urls
