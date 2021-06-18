import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLikeComponent } from './product-like.component';

describe('ProductLikeComponent', () => {
  let component: ProductLikeComponent;
  let fixture: ComponentFixture<ProductLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
