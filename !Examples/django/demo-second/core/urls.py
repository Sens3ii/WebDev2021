from django.urls import path
from core.views import products_list, product_detail

urlpatterns = [
    path('products/', products_list),
    path('products/<int:product_id>/', product_detail),
]
