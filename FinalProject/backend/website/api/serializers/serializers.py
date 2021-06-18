from rest_framework import serializers

from api.models import Shipping, Image
from api.serializers import *


class ShippingSerializer2(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    type = serializers.CharField()
    price = serializers.FloatField()
    description = serializers.CharField()

    def create(self, validated_data):
        shipping = Shipping.objects.create(**validated_data)
        return shipping

    def update(self, instance, validated_data):
        instance.type = validated_data.get('type', instance.type)
        instance.price = validated_data.get('price', instance.price)
        instance.description = validated_data.get('description', instance.description)
        instance.save()
        return instance


class ImageSerializer2(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    product = ProductSerializerId(read_only=True)
    url = serializers.CharField()
    product_id = serializers.IntegerField(write_only=True)

    def create(self, validated_data):
        image = Image.objects.create(**validated_data)
        return image

    def update(self, instance, validated_data):
        instance.url = validated_data.get('url', instance.url)
        instance.product_id = validated_data.get('product_id', instance.product_id)
        instance.save()
        return instance
