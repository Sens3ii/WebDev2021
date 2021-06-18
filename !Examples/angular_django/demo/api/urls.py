from django.urls import path

from rest_framework_jwt.views import obtain_jwt_token

from api.views import category_list, category_detail, CategoryListAPIView, CategoryDetailAPIView, \
    ProductListAPIView, ProductDetailAPIView

urlpatterns = [
    # path('categories/', category_list),
    # path('categories/<int:category_id>/', category_detail)

    path('login/', obtain_jwt_token),

    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:pk>/', CategoryDetailAPIView.as_view()),


    path('products/', ProductListAPIView.as_view()),
    path('products/<int:pk>/', ProductDetailAPIView.as_view())

]
