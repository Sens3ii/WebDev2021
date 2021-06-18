from django.urls import path

from rest_framework_jwt.views import obtain_jwt_token

from api.views import *

urlpatterns = [
    path('login/', obtain_jwt_token),

    # FBV
    # path('categories/', category_list),
    # path('categories/<int:pk>/', category_detail),

    # path('products/', product_list),
    # path('products/<int:pk>/', product_detail),

    path('shipping/', shipping_list),
    path('shipping/<int:pk>/', shipping_detail),

    path('images/', image_list),
    path('images/<int:pk>/', image_detail),

    path('comments/', comment_list),
    path('comments/<int:pk>/', comment_detail),

    # CBV
    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:pk>/', CategoryDetailAPIView.as_view()),

    path('products/', ProductListAPIView.as_view()),
    path('products/<int:pk>/', ProductDetailAPIView.as_view()),

    # path('shipping/', ShippingListAPIView.as_view()),
    # path('shipping/<int:pk>/', ShippingDetailAPIView.as_view()),
    #
    # path('images/', ImageListAPIView.as_view()),
    # path('images/<int:pk>/', ImageDetailAPIView.as_view()),
    #
    # path('comments/', CommentListAPIView.as_view()),
    # path('comments/<int:pk>/', CommentDetailAPIView.as_view()),
]
