import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing-module';
import { NavBar } from './nav-bar/nav-bar';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavBar
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    RouterModule
  ],
  exports: [
    NavBar
  ]
})
export class CoreModule { }
