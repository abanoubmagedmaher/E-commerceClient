import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing-module';
import { Shop } from './shop/shop';
import { ProductItem } from './product-item/product-item';


@NgModule({
  declarations: [
    Shop,
    ProductItem
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ],
  exports:[
    Shop
  ]
})
export class ShopModule { }
