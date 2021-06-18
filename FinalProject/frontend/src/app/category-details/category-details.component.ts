import {Component, OnInit} from '@angular/core';
import {CATEGORY_LIST} from '../test-database';
import {Category, Product} from '../models';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CategoryService} from '../category.service';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  updateTitle: string;
  category: Category = {
    id: +this.route.snapshot.paramMap.get('id'),
    name: 'sf1000',
    image: "",
    description: "",
    products: []
  }; ///// have to initialize
  loading: boolean;
  productList: Product[] = [];

  constructor(private route: ActivatedRoute,
              private location: Location,
              private categoryService: CategoryService,
              private productService: ProductService) {
    this.updateTitle = '';
  }

  ngOnInit(): void {

    const id = +this.route.snapshot.paramMap.get('id');

    // this.album = (Albums.find((x) => x.id === id));
    this.getCategory(id);
    this.getProductList(id);
  }

  goBack(): void {
    this.location.back();
  }

  getCategory(id: number): void {
    this.loading = true;
    this.categoryService.getCategory(id).subscribe((category) => this.category = category);
    this.loading = false;
  }

  // tslint:disable-next-line:variable-name
  updateCategory(): void {
    // console.log(this.album.title);
    this.category.name = this.updateTitle;
    // console.log(this.album.title);
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.updateCategory(this.category, id).subscribe();
  }

  getProductList(id: number): void {
    this.productService.getProductList(id).subscribe((productList) => this.productList = productList);
  }

}
