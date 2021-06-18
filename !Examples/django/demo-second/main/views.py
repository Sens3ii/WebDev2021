from django.http.response import HttpResponse, JsonResponse


def hello(request):
    return HttpResponse('<h1>hello</h1>')


def hours_ahead(request, hours):
    return HttpResponse('<h1>Hours ahead</h1>')


# def products_list(request):
#     return HttpResponse('<h1>List of products</h1>')


# def products_detail(request, product_id):
#     return HttpResponse('<h1>Proruct page {product_id}</h1>')


products = [
    {
        'id': i,
        'name': f'Product {i}',
        'price': i * 1000
    } for i in range(1, 11)
]


def products_list(request):
    return JsonResponse(products, safe=0)


def product_detail(request, product_id):
    for product in products:
        if product['id'] == product_id:
            return JsonResponse(product)
    return JsonResponse({'message': 'Product with selected ID not found'})
