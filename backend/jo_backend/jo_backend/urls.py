from rest_framework import routers

from category.views import CategoryViewSet

router = routers.DefaultRouter()
router.register('api/categories', CategoryViewSet)
