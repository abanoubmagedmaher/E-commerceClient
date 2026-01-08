import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home/home';
import { Shop } from './shop/shop/shop';
import { ProductDetails } from './shop/product-details/product-details';
const routes: Routes = [
  { path: '', component: Home ,title: 'HomeComponent' },
  {path: 'shop', component: Shop ,title: 'Shop' },
  {path:'shop/:id', component:ProductDetails, title: 'ProductDetails'},
  {path: '**', redirectTo: '' ,pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
