import {Component, OnInit} from '@angular/core';
import {ShippingService} from '../shipping.service';
import {Shipping} from '../models';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  // shippingCosts = this.shippingService.getShippingList();
  shippings: Shipping[];
  constructor(private shippingService: ShippingService) {
    
  }

  ngOnInit(): void {
    this.getShippings();
  }
  getShippings(): void {
    this.shippingService.getShippingList().subscribe((shippingList) => this.shippings = shippingList);
  }
}
