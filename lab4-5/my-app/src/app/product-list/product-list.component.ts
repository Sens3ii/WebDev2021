import {Component} from '@angular/core';

import {products} from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  constructor(){}

  onNotify(): void {
    window.alert('You will be notified when the product goes on sale');
  }

  share(product): void {
    window.alert(`You will be redirected to Telegram`);
    window.open(`https://t.me/share/url?url=${product.link}&text=Hi! Check this on Amazon!`
    );
  }

  removeUpload(product): void {
    const removeIndex: number = this.products.indexOf(product);
    if (removeIndex !== -1)
      this.products.splice(removeIndex, 1);
  }

}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
