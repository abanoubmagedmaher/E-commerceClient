import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing-module';
import { NavBar } from './nav-bar/nav-bar';


@NgModule({
  declarations: [
    NavBar
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    NavBar
  ]
})
export class CoreModule { }
