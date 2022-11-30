import { RemoveProduct } from './../../store/actions/cart-actions';
import { Store } from '@ngrx/store';
import { IProduct } from './../../models/Product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: IProduct[] = [];
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.store.select('cartReducer').subscribe((state) => (this.cart = state));
  }

  deleteProduct(product: IProduct) {
    this.store.dispatch(new RemoveProduct(product));
  }

  clearCart() {
    // this.cart = [];
    this.store.dispatch({ type: 'CLEAR_CART' });
  }
}
