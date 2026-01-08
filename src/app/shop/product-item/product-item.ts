import { Component, Input } from '@angular/core';
import { Product } from '../../shared/Models/Product';

@Component({
  selector: 'app-product-item',
  standalone: false,
  templateUrl: './product-item.html',
  styleUrl: './product-item.scss',
})
export class ProductItem {

  @Input() product?:Product;
}
