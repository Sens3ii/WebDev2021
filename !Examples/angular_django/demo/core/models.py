from django.db import models


# 1) OneToOne relation - (for each User, we have only one Profile)
# 2) OneToMany relation - (each Category will have number of Product)
# 3) ManyToMany relation - (Product and Tag)


# class Tag(models.Model):
#     name = models.CharField(max_length=100)

#
# class ProductTag(models.Model):
#     tag = models.ForeignKey(Tag)
#     product = models.ForeignKey(Product)

class Category(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
        # ordering = ('name',)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }

    def __str__(self):
        return f'{self.id}: {self.name}'


class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField(default=0)
    description = models.TextField(default='')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True,
                                 related_name='products')

    # tags = models.ManyToManyField(Tag)

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

    def __str__(self):
        return f'{self.id}: {self.name} | {self.price}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description
        }
