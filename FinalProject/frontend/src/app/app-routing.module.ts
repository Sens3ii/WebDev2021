import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoryDetailsComponent} from './category-details/category-details.component';
import {CategoryListComponent} from './category-list/category-list.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from "./about/about.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {CartComponent} from "./cart/cart.component";
import {ShippingComponent} from "./shipping/shipping.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'cart', component: CartComponent},
  {path: 'shipping', component: ShippingComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'categories', component: CategoryListComponent},
  {path: 'categories/:id', component: CategoryDetailsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
