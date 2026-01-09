import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home/home';

const routes: Routes = [
  { path: '', component: Home ,title: 'HomeComponent' },
  {path: 'shop', loadChildren:() => import ('./shop/shop-routing-module').then(mod => mod.ShopRoutingModule)},

  {path: '**', redirectTo: '' ,pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
