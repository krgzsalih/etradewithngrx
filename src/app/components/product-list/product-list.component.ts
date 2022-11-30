import { AddProduct } from './../../store/actions/cart-actions';
import { IProduct } from './../../models/Product';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  cart: IProduct[] = [];
  products: IProduct[] = [
    { id: 1, name: 'elma', unitPrice: 15, quantity: 1 },
    { id: 2, name: 'armut', unitPrice: 25, quantity: 1 },
    { id: 3, name: 'karpuz', unitPrice: 12, quantity: 1 },
    { id: 4, name: 'incir', unitPrice: 52, quantity: 1 },
    { id: 5, name: 'kiraz', unitPrice: 23, quantity: 1 },
  ];

  constructor(private store: Store<any>, private service: ProductService) {}

  ngOnInit(): void {}

  addToCart(product: IProduct) {
    this.store.dispatch(new AddProduct(product));
  }
  getProductDetail(product: IProduct) {
    this.service.getProductDetail(product);
  }
}
