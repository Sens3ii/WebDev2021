import {Injectable} from '@angular/core';
import {categories} from './categories';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() {
  }

  getCategory(id: number): Observable<any> {
    return of(categories.find(category => category.id === id));
  }

  getCategories(): Observable<any> {
    return of(categories);
  }
}
