import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Shipping } from './models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  BASIC_URL: string;
  tempShippings: Shipping[];

  addToCart(product): void {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  getTotalPrice() {
    return this.getItems().reduce((acc, cur) => acc + cur.price, 0);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  constructor(private http: HttpClient) {
    this.BASIC_URL = 'http://127.0.0.1:8000';
  }
}
