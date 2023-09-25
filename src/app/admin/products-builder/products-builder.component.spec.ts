import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsBuilderComponent } from './products-builder.component';

describe('ProductsBuilderComponent', () => {
  let component: ProductsBuilderComponent;
  let fixture: ComponentFixture<ProductsBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsBuilderComponent]
    });
    fixture = TestBed.createComponent(ProductsBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
