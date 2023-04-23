from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsAuthenticatedOrReadOnly(BasePermission):
    """
    Allows read-only access to anonymous users (unauthenticated),
    and full access to authenticated users.
    """

    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        return request.user and request.user.is_authenticated

    def has_object_permission(self, request, view, obj):
        return request.method in ('POST', 'PUT', 'PATCH', 'DELETE') and request.user and request.user.is_authenticated
