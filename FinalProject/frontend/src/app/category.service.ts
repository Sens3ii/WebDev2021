import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CATEGORY_LIST } from './test-database';
import { Category } from './models'
import { Observable, of } from 'rxjs';
// import { title } from 'node:process';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  category_list = CATEGORY_LIST; // local copy
  option = new HttpHeaders({ 'Content-Type': 'application/json' });
  BASIC_URL: string;
  constructor(private client: HttpClient) {
    this.BASIC_URL = 'http://127.0.0.1:8000';
  }
  // tslint:disable-next-line:typedef
  getCategoryList(): Observable<Category[]> {
    return this.client.get<Category[]>(`${this.BASIC_URL}/api/categories`);
    //this.category_list =
    // return of(this.category_list);
  }
  // tslint:disable-next-line:typedef
  getCategory(id: number): Observable<Category> {
    return this.client.get<Category>(`${this.BASIC_URL}/api/categories/${id}`);
    // const category = this.category_list.find((x) => x.id === id);
    // @ts-ignore
    // return of(category);
  }
  addCategory(category: Category): Observable<Category> {
    // @ts-ignore
    return this.client.post<Category>(`${this.BASIC_URL}/api/categories`, category, this.option);
    // return of(this.category_list.push(category));
  }
  updateCategory(category: Category, id: number): Observable<Category> {
    // @ts-ignore
    return this.client.put<Category>(`${this.BASIC_URL}/api/categories/${id}`, category, this.option);
    // const category_index = this.category_list.findIndex((x) => x.id === id);
    // if (category_index !== -1) {
    //   this.category_list[category_index] = category;
    // }
    // return of(this.category_list.find((category) => true)); // temp placeholder
  }
  deleteCategory(id: number): Observable<any> {
    // category = {
    //   id = 0;
    //   title = '';
    // }
    return this.client.delete(`${this.BASIC_URL}/api/categories/${id}`);
    // this.category_list = this.category_list.filter((x) => x.id !== id);
    // console.log(this.category_list.length);
    // this.category_list = this.category_list.filter((category) => category.id !== id);
    // return of(this.category_list);
  }
}
