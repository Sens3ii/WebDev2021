from django.http.response import HttpResponse, JsonResponse
from api.models import Company, Vacancy


def company_list(request):
    vacancies = Company.objects.all()
    vacancies_json = [company.to_json() for company in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
        company_json = company.to_json()
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    if 'vacancies' in request.path:
        vacancies_of_company = Vacancy.objects.filter(
            company__name=company_json['name'])
        vacancies_of_company_json = [vacancy.to_json()
                                     for vacancy in vacancies_of_company]
        return JsonResponse(vacancies_of_company_json, safe=False)
    return JsonResponse(company_json)


def vacancy_list(request):
    if 'top_ten' in request.path:
        vacancies = Vacancy.objects.order_by('-salary')[:10]
    else:
        vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(vacancy.to_json())
