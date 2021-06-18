import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PRODUCT_LIST } from './test-database';
import { Product } from './models';
import { Observable, of } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList = PRODUCT_LIST; // local copy
  option = new HttpHeaders({ 'Content-Type': 'application/json' });
  BASIC_URL: string;
  tempProducts: Product[];
  constructor(private client: HttpClient) {
    this.BASIC_URL = 'http://127.0.0.1:8000';
  }
  // tslint:disable-next-line:typedef
  getProductList(id: number = -1): Observable<Product[]> {
    console.log(id)
    // return this.client.get<Product[]>(`${this.BASIC_URL}/api/products`);
    // this.category_list =
    if(id === -1)
    {
      console.log(this.client.get<Product[]>(`${this.BASIC_URL}/api/products`));
      return this.client.get<Product[]>(`${this.BASIC_URL}/api/products`);
      // return of(this.productList);
    }
    else
    {
      console.log('filtred')
      const temp = this.client.get<Product[]>(`${this.BASIC_URL}/api/products`).pipe(map(product => product.filter(product => product.category.id === id)));
      // console.log(temp);
      // this.getDebugInfo(id);
      // const temp_ans = temp.filter(product => product.categoryId == id)
      // PRODUCT_LIST.filter(product => product.categoryId == id)
      return temp;
    }
  }

  getDebugInfo(id: number): void {
    this.getProductList(id).subscribe(products =>
    {
      this.tempProducts = products; // <- after this point you have the result
      console.log(this.tempProducts);
    });
  }
  // tslint:disable-next-line:typedef
  getProduct(id: number): Observable<Product> {
    return this.client.get<Product>(`${this.BASIC_URL}/api/products/${id}`);
    // const product = this.productList.find((x) => x.id === id);
    // @ts-ignore
    // return of(product);
  }
  addProduct(product: Product): Observable<Product> {
    // @ts-ignore
    return this.client.post<Product>(`${this.BASIC_URL}/api/products`, product, this.option);
    // return of(this.productList.push(product));
  }
  updateProduct(product: Product, id: number): Observable<Product> {
    // @ts-ignore
    return this.client.put<Product>(`${this.BASIC_URL}/api/products/${id}`, product, this.option);
    // const productIndex = this.productList.findIndex((x) => x.id === id);
    // if (productIndex !== -1) {
    //   this.productList[productIndex] = product;
    // }
    // return of(this.productList.find((product) => true)); // temp placeholder
  }
  deleteProduct(id: number): Observable<any> {
    // category = {
    //   id = 0;
    //   title = '';
    // }
    return this.client.delete(`${this.BASIC_URL}/api/products/${id}`);
    // this.category_list = this.category_list.filter((x) => x.id !== id);
    // console.log(this.category_list.length);
    // this.productList = this.productList.filter((product) => product.id !== id);
    // return of(this.productList);
  }
}
