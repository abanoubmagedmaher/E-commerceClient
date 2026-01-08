import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../shared/Models/Paging';
import { Product } from '../shared/Models/Product';
import { Observable } from 'rxjs';
import { Brand } from '../shared/Models/brands';
import {Type} from '../shared/Models/types';
@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private http:HttpClient) {}
  baseUrl="http://localhost:5044/api/";

  getProduct(brandId?:number, typeId?:number,sort?:string): Observable<Pagination<Product[]>> 
  {
    let params= new HttpParams();
    if(brandId)
      params=params.append('brandId', brandId);
    if(typeId)
      params=params.append('typeId', typeId);
    if(sort)
      params=params.append('sort',sort);
    
    return this.http.get<Pagination<Product[]>>(this.baseUrl + 'Product',{params:params});
  }

  getBrands():Observable<Brand[]>
  {
    return this.http.get<Brand[]>(this.baseUrl +"Product/brands");
  }

  getTypes():Observable<Type[]>{
    return this.http.get<Type[]>(this.baseUrl + "product/types");
  }

}
