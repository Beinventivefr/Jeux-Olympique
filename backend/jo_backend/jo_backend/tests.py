from django.test import TestCase

from category.models import Category

# Create your tests here.
class CategoryTestCase(TestCase):

    def test_create_category(self):

        # Vérifiaction des éléments contenue dans la base de données
        nbr_of_category_before_add = Category.objects.count()

        # Ajout d'un élément dans la base de données
        new_category = Category()
        new_category.wording = "Mur"
        new_category.save()

        nbr_of_category_after_add = Category.objects.count()

        # Vérifier que le nombre d'objets dans la base de données a augmenté d'une unité.
        self.assertTrue(nbr_of_category_after_add == nbr_of_category_before_add + 1)
