from django.db import models

# CREATE TABLE core_product(
#     id INTEGER,
#     name VARCHAR (300),
#     price NUMBER default 0
# );


class Product(models.Model):
    name = models.CharField(max_length=300)
    price = models.FloatField(default=0)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price
        }
