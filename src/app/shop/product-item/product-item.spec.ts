import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItem } from './product-item';

describe('ProductItem', () => {
  let component: ProductItem;
  let fixture: ComponentFixture<ProductItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
