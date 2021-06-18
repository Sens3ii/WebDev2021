from rest_framework import serializers
from rest_framework.relations import PrimaryKeyRelatedField

from api.models import Category, Product, Shipping, Comment, Image


class CategorySerializer(serializers.ModelSerializer):
    products = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ('id', 'name', 'image', 'description',
                  'products')


class CommentSerializer(serializers.ModelSerializer):
    product = PrimaryKeyRelatedField(read_only=True)
    product_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Comment
        fields = ('id', 'sender', 'body', 'product', 'product_id')


class ProductSerializerId(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name', 'price')


class ImageSerializer(serializers.ModelSerializer):
    product = PrimaryKeyRelatedField(read_only=True)
    product_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Image
        fields = ('id', 'url', 'product', 'product_id')


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    category_id = serializers.IntegerField(write_only=True)
    # images = serializers.PrimaryKeyRelatedField(many=True, read_only=True)  # only for ids
    # comments = serializers.PrimaryKeyRelatedField(many=True, read_only=True)  # only for ids
    # images = ImageSerializer(many=True, read_only=True)
    images = serializers.SlugRelatedField(
        many=True,
        read_only=True,
        slug_field='url'
    )
    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'rating', 'short_description', 'full_description',
                  'category', 'images', 'comments', 'category_id')


class ShippingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shipping
        fields = ('id', 'type', 'price', 'description')
