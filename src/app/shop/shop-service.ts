import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../shared/Models/Paging';
import { Product } from '../shared/Models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private http:HttpClient) {}
  baseUrl="http://localhost:5044/api/";

  getProduct(): Observable<Pagination<Product[]>> 
  {
    return this.http.get<Pagination<Product[]>>(this.baseUrl + 'Product');
  }
}
