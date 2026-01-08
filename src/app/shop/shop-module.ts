import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing-module';
import { Shop } from './shop/shop';


@NgModule({
  declarations: [
    Shop
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
