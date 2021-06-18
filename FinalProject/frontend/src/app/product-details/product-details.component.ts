import {Component, OnInit} from '@angular/core';
import {Product} from '../models';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ProductService} from '../product.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  updateName: string;
  product: Product = {
    id: +this.route.snapshot.paramMap.get('id'),
    name: 'Test one',
    images: [],
    price: 0,
    short_description: '3245678567456345236357375473557357457',
    rating: 0,
    full_description: 'There is no description',
    category: null,
    comments: []
  };

  activeImageId: number = 0;

  loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private  productService: ProductService,
    private cartService: CartService) {
    this.updateName = '';

  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getProduct(id);
  }

  goBack(): void {
    this.location.back();
  }

  getProduct(id: number): void {
    this.loading = true;
    this.productService.getProduct(id).subscribe((product) => this.product = product);
    this.loading = false;
  }

  updateProduct(): void {
    this.product.name = this.updateName;
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.updateProduct(this.product, id).subscribe();
  }

  share(product): void {
    window.alert(`You will be redirected to Telegram`);
    // Later change to URL_PATH
    window.open(`https://t.me/share/url?url=http://localhost:4200/products/${product.id}&text=Hi! Look what I have found!`
    );
  }

  addToCart(product): void {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  onNotify(): void {
    window.alert('You will be notified when the product goes on sale');
  }
}
