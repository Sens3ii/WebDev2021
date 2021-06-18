import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Shipping} from './models';
import {Observable, of} from 'rxjs';
import {map, filter, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  option = new HttpHeaders({'Content-Type': 'application/json'});
  BASIC_URL: string;
  tempShippings: Shipping[];

  constructor(private client: HttpClient) {
    this.BASIC_URL = 'http://127.0.0.1:8000';
  }

  // tslint:disable-next-line:typedef
  getShippingList(): Observable<Shipping[]> {
    return this.client.get<Shipping[]>(`${this.BASIC_URL}/api/shipping`);
  }
}
