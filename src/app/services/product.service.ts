import { IProduct } from './../models/Product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productDetail: IProduct;

  constructor() {}

  getProductDetail(product: IProduct) {
    this.productDetail = product;
  }
}
