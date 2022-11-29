import { ProductService } from './../../services/product.service';
import { AddProduct } from './../../store/actions/cart-actions';
import { Store } from '@ngrx/store';
import { IProduct } from './../../models/Product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  productDetail: IProduct;
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private service: ProductService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.productDetail = params['id'];
      this.getProductDetail();
    });
  }

  addToCart(product: IProduct) {
    this.store.dispatch(new AddProduct(product));
  }
  getProductDetail() {
    this.productDetail = this.service.productDetail;
    console.log(this.productDetail, ' PD');
  }
}
