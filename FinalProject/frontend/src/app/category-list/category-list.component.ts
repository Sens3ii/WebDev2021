import {Component, OnInit} from '@angular/core';
import {Category, Product} from '../models'
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  ids: number;
  createName: string;
  categoryList: Category[];
  image: string;
  products: Product[];
  // @ts-ignore
  loading: boolean;
  description: string;

  constructor(private categoryListService: CategoryService) {
    this.ids = 69;
    this.createName = '';
    this.categoryList = [];
    this.description = '';
    this.products = [];
  }

  ngOnInit(): void {
    this.getCategoryList();
  }

  getCategoryList() {
    this.loading = true;
    this.categoryListService.getCategoryList().subscribe((categoryList) => this.categoryList = categoryList);
    this.loading = false;
  }

  deleteCategory(id: number): void {
    this.categoryList = this.categoryList.filter((x) => x.id !== id);
    // console.log(this.categoryList.length);
    this.categoryListService.deleteCategory(id).subscribe(); // no effect
    // this.getCategoryList();
    // console.log(this.categoryList.length);
  }

  createCategory(): void {
    const temp: Category = {
      id: this.ids,
      name: this.createName,
      image: this.image,
      description: this.description,
      products: this.products
    }
    this.createName = '';
    this.ids = this.ids + 1;
    // this.categoryList.push(temp);
    this.categoryListService.addCategory(temp);
    this.getCategoryList();
  }
}
