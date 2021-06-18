from random_word import RandomWords
import random
from bs4 import BeautifulSoup
import requests
r = RandomWords()

BASE_URL = "http://127.0.0.1:8000/api/"
CATEGORIES_COUNT = 6


def getImgByWord(word):
    url = f'https://yandex.kz/images/search?text={word}'
    print(url)
    result = requests.get(url)  # getting page
    html = result.text  # get full html document
    soup = BeautifulSoup(html, 'html.parser')
    images = []
    # print(html)
    for img_tag in soup.find_all('img'):
        src = f"http:{img_tag['src']}"
        if (len(src) > 35): images.append(src)
    print(len(images))
    print(images)
    return images


def createCategory(categoryName, img_url):
    res = requests.post(BASE_URL+"categories/" , json={
        "name": (categoryName + " Category").title(),
        "image": img_url,
        "description": f"This is the description of {categoryName} category. You can see it here."
    })

    print(res.json())
    return res.json()['id']

def createProduct(productName, categoryId):
    res = requests.post(BASE_URL+"products/", json=
        {
            "name": (productName + f" product {j}").title(),
            "price": random.randint(20, 3000),
            "rating": random.randint(0, 100) / 10,
            "short_description": f"Description of {productName} here",
            "full_description": f"It is the full description of {productName} product here. You can read it and be filled with knowledge of this product",
            "category_id": categoryId
        }
    )
    print(res.json())
    return res.json()["id"]

for i in range(CATEGORIES_COUNT):
    random_word = str(r.get_random_word(hasDictionaryDef="true"))
    images = getImgByWord(random_word)
    created_category_id = createCategory(random_word, images[0])
    images = images[1:]

    for j in range(len(images) // 3):
        created_product_id = createProduct(random_word, created_category_id)
        for k in range(3):
            r = requests.post(BASE_URL+"images/", json={
                "url": images[j*3+k],
                "product_id": created_product_id
            })
