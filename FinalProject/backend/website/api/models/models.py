from django.db import models


class Shipping(models.Model):
    type = models.CharField(max_length=100)
    price = models.FloatField(default=0)
    description = models.CharField(max_length=100)

    class Meta:
        verbose_name = 'Shipping'
        verbose_name_plural = 'Shippings'

    def __str__(self):
        return f'{self.id}: {self.type} - {self.price}'


class Category(models.Model):
    name = models.CharField(max_length=200)
    image = models.TextField()
    description = models.TextField()

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return f'{self.id}: {self.name}'


class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField(default=0)
    rating = models.FloatField(default=0)
    short_description = models.TextField(default='')
    full_description = models.TextField(default='')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True,
                                 related_name='products')

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

    def __str__(self):
        return f'{self.id}: {self.name} | {self.price}'


class Image(models.Model):
    url = models.TextField()
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True,
                                related_name='images')

    class Meta:
        verbose_name = 'Image'
        verbose_name_plural = 'Images'

    def __str__(self):
        return f'{self.id}'


class Comment(models.Model):
    sender = models.CharField(max_length=200)
    body = models.TextField()
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True,
                                related_name='comments')

    class Meta:
        verbose_name = 'Comment'
        verbose_name_plural = 'Comments'

    def __str__(self):
        return f'{self.id} - {self.sender}'
