import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { Product } from './shared/Models/Product';
import { Pagination } from './shared/Models/Paging';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('E-commerceClient');

  constructor(private HTTP:HttpClient){

  }
  
  products:Product[] = [];

  ngOnInit(): void {
     this.HTTP.get<Pagination<Product[]>>("https://localhost:7189/api/Product?pageSize=50").subscribe({
      next: (response) => {
        this.products = response.data;
        console.log('Products loaded', response);
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
      complete: () => {
        console.log('Request completed');
      }
     });
  }

}
