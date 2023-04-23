from rest_framework import serializers

from category.models import Category


class CategorySerializer(serializers.ModelSerializer):

    libelle = serializers.CharField(source='wording')

    class Meta:
        model = Category
        exclude = ['wording']
