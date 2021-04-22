from django.db import models
from api.models import Category
# CREATE TABLE core_product(
#     id INTEGER,
#     name VARCHAR (300),
#     price NUMBER default 0
# );


class Product(models.Model):
    name = models.CharField(max_length=300)
    price = models.FloatField(default=0)
    description = models.TextField(default='')
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, null=True, related_name='products')  # SET_NULL, null = True

    # tags = models.ManyToManyField(Tag)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price
        }

    def __str__(self):
        return f'{self.id}: {self.name} | {self.price}'


# class Tag(models.Model):
#     name = models.CharField(max_length=100)

#     def to_json(self):
#         return {
#             'id': self.id,
#             'name': self.name,
#         }


# class ProductTag(models.Model):
#     tag = models.ForeignKey(Tag)
#     product = models.ForeignKey(Product)
