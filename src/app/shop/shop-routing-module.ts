import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shop } from './shop/shop';
import { ProductDetails } from './product-details/product-details';

const routes: Routes = [
  {path: '', component: Shop ,title: 'Shop' },
  {path:':id', component:ProductDetails, title: 'ProductDetails'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
