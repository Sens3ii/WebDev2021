from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def to_json(self):
        return{
            'id': self.id,
            'name': self.name,
        }

    def __str__(self):
        return f'{self.id}: {self.name}'
