import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../shared/Models/Paging';
import { Product } from '../shared/Models/Product';
import { Observable } from 'rxjs';
import { Brand } from '../shared/Models/brands';
import {Type} from '../shared/Models/types';
import { ShopParams } from '../shared/Models/shopParams';
@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private http:HttpClient) {}
  baseUrl="http://localhost:5044/api/";

  getProduct(ShopParams: ShopParams): Observable<Pagination<Product[]>> 
  {
    let params= new HttpParams();
    if(ShopParams.brandId>0)
      params=params.append('brandId', ShopParams.brandId);
    if(ShopParams.typeId>0)
      params=params.append('typeId', ShopParams.typeId);
    if(ShopParams.sort)
      params=params.append('sort',ShopParams.sort);
    if(ShopParams.search)
      params=params.append('search',ShopParams.search);
    return this.http.get<Pagination<Product[]>>(this.baseUrl + 'Product',{params:params});
  }

  getBrands():Observable<Brand[]>
  {
    return this.http.get<Brand[]>(this.baseUrl +"Product/brands");
  }

  getTypes():Observable<Type[]>{
    return this.http.get<Type[]>(this.baseUrl + "product/types");
  }

  getProductById(id:number):Observable<Product>{
    return this.http.get<Product>(this.baseUrl + 'product/' + id)
  }
}
