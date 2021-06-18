import {Component, OnInit, Input} from '@angular/core';
import {Product, Category, Comment} from '../models';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() categoryId: number;
  ids: number;
  createName: string;
  createPrice: number;
  createShortDescription: string;
  createRating: number;
  createFullDescription: string;
  productList: Product[];
  images: string[];
  currentPath: string;
  // @ts-ignore
  loading: boolean;
  category: Category;
  comments: Comment[];

  constructor(private productListService: ProductService,
              private cartService: CartService,
              private router: Router) {
    this.ids = 7;
    this.createName = '';
    this.createPrice = 0;
    this.createRating = 0;
    this.category = {
      id: 1,
      name: '',
      image: '',
      description: '',
      products: null
    };
    this.createShortDescription = '';
    this.createFullDescription = '';
    this.images = [];
    this.productList = [];
    // console.log(window.location.href)
    // console.log(this.router.url);
    this.currentPath = this.router.url;
    this.comments = [];
  }

  ngOnInit(): void {
    this.getProductList(this.categoryId);
  }

  getProductList(id: number) {
    console.log('calling list');
    this.loading = true;
    this.productListService.getProductList(id).subscribe((productList) => this.productList = productList);
    this.loading = false;
  }

  deleteProduct(id: number): void {
    this.productList = this.productList.filter((product) => product.id !== id);
    this.productListService.deleteProduct(id).subscribe();
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

  createProduct(): void {
    const temp: Product = {
      id: this.ids,
      name: this.createName,
      images: this.images,
      price: this.createPrice,
      short_description: this.createShortDescription,
      rating: this.createRating,
      full_description: this.createFullDescription,
      category: this.category,
      comments: this.comments
    }
    this.createName = '';
    this.ids = this.ids + 1;
    this.productListService.addProduct(temp);
    this.getProductList(this.ids); // maybe can be removed!
  }
}
