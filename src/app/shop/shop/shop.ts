import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop-service';
import { Product } from '../../shared/Models/Product';
import { Brand } from '../../shared/Models/brands';
import { Type } from '../../shared/Models/types';
import { ShopParams } from '../../shared/Models/shopParams';
@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.html',
  styleUrl: './shop.scss',
})
export class Shop implements OnInit {
  constructor(private shopService: ShopService) { }
  products: Product[] = [];
  brands: Brand[] = [];
  types: Type[] = [];
totalCount=0;
 
  ShopParams: ShopParams = new ShopParams();
  sortOptions=[
    {name:'Alphabetical',value:'name'},
    {name:'Price: Low to High',value:'priceAsc'},
    {name:'Price: High to Low',value:'priceDesc'},
  
  ]
 

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();  
  }

  getProducts() {
    this.shopService.getProduct(this.ShopParams).subscribe({
      next: (response) => {
        this.products = response.data;
        console.log('Products fetched successfully:', this.products);
        this.ShopParams.pageNumber=response.pageIndex;
        this.ShopParams.pageSize=response.pageSize;
        this.totalCount=response.count;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      },
      complete: () => {
        console.log('Product fetch completed.');
      }
    })
  }

  getBrands() {
    this.shopService.getBrands().subscribe({
      next: (response) => {
        this.brands = [{id:0,name:'All'}, ...response]; // spred Operator to add 'All' option then the fetched brands
        console.log('Brands fetched successfully:', this.brands);
      },
      error: (error) => {
        console.error('Error fetching brands:', error);
      },
      complete: () => {
        console.log('Brand fetch completed.');
      }
    })
  }
  getTypes() {
    this.shopService.getTypes().subscribe({
      next: (response) => {
        this.types = [{id:0,name:'All'}, ...response]; // spred Operator to add 'All' option then the fetched types
        console.log('Types fetched successfully:', this.types);
      },
      error: (error) => {
        console.error('Error fetching types:', error);
      },
      complete: () => {
        console.log('Type fetch completed.');
      }
    })
  }
 
  onBrandSelected(brandId: number) {
    this.ShopParams.brandId = brandId;
    this.getProducts();
  }

  onTypeSelected(typeId: number) {
    this.ShopParams.typeId = typeId;
    this.getProducts();
  }

  onSortedSelected(event:any){
    this.ShopParams.sort=event.target.value;
    this.getProducts();
  }
}
