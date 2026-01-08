import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop-service';
import { Product } from '../../shared/Models/Product';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.html',
  styleUrl: './shop.scss',
})
export class Shop implements OnInit{
  constructor(private shopService:ShopService) {}
  product:Product[]=[];
  
  ngOnInit(): void {
    this.shopService.getProduct().subscribe({
      next:(response)=>{
        this.product=response.data;
        console.log('Products fetched successfully:', this.product);
      },
      error:(error)=>{
        console.error('Error fetching products:', error);
      },
      complete:()=>{
        console.log('Product fetch completed.');
      }
    })
  }

}
