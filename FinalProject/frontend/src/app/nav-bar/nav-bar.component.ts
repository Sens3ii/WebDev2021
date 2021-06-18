import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../category.service";
import {Category} from "../models";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  categoryList: Category[];
  loading = false;
  url: string;

  constructor(private categoryListService: CategoryService,
    private router: Router) {
    this.categoryList = [];
    this.url = this.router.url;
  }

  getCategoryList() {
    this.loading = true;
    this.categoryListService.getCategoryList().subscribe((categoryList) => this.categoryList = categoryList);

    this.loading = false;
  }

  ngOnInit(): void {
    this.getCategoryList();
  }

}
