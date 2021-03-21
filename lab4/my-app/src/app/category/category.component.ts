import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {
  products;
  category;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
    this.router.events.subscribe((value => {
      this.getProducts();
      this.getCategory();
    }));
  }

  ngOnInit(): void {
    this.getProducts();
    this.getCategory();
  }  

  onNotify(): void {
    window.alert('You will be notified when the product goes on sale');
  }

  share(product): void {
    window.alert(`You will be redirected to Telegram`);
    window.open(`https://t.me/share/url?url=${product.link}&text=Hi! Share you this product from Amazon:)`
    );
  }

  getProducts(): void {
    const id = +this.route.snapshot.paramMap.get('categoryId');
    this.productService.getProductsByCategoryId(id).subscribe(products => this.products = products);
  }

  getCategory(): void {
    const id = +this.route.snapshot.paramMap.get('categoryId');
    this.categoryService.getCategory(id).subscribe(category => this.category = category);
  }
  
  removeUpload(product): void {
    let indexOfProd: number = this.products.indexOf(product);
    if (indexOfProd !== -1)
      this.products.splice(indexOfProd, 1);
  }
}
