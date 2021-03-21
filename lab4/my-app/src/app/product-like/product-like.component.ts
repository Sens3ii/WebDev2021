import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-product-like',
  templateUrl: './product-like.component.html',
  styleUrls: ['./product-like.component.css']
})
export class ProductLikeComponent implements OnInit {
  @Input() product;
  @Input() cntLikes = 0;

  constructor() {
  }
  ngOnInit(): void {
  }

  onClick(): void {
    this.cntLikes++;
  }
}
