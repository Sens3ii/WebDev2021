import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {CartService} from '../cart.service';
import {Product} from "../models";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  totalPrice = this.cartService.getTotalPrice();

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
  }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
    this.totalPrice = 0
  }

  ngOnInit(): void {

    this.totalPrice = this.cartService.getTotalPrice();
  }

}
