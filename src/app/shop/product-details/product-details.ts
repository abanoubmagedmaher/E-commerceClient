import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop-service';
import { Product } from '../../shared/Models/Product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails implements OnInit {
product? : Product;

  constructor(private shopService: ShopService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(){
    const id= this.activatedRoute.snapshot.paramMap.get('id');
    if(id)
      this.getProductById(+id);
  }
  getProductById(id: number){
    this.shopService.getProductById(id).subscribe({
      next:(response) =>{
        this.product=response;
      },
      error:(error) =>{
        console.log(error);
      },
      complete: () => {
        console.log('get product by id completed');
      }
    });
  }
}
