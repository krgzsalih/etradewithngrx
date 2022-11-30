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
    private store: Store<any>,
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
    this.store.select('cartReducer').subscribe((state) => {
      console.log(state, ' state');
      for (let i = 0; i < state; i++) {
        console.log('ilk girdi');
        if (state.length == 0 || state[i].id !== product.id) {
          console.log('girdi');
          this.store.dispatch(new AddProduct(product));
        } else {
          console.log('buraya girdi');
          // state[i].quantity++;
        }
      }

      // if (item.state.id !== product.id) {
      //
      // } else {
      //   this.productDetail.quantity++;""
      // }
    });
  }
  getProductDetail() {
    this.productDetail = this.service.productDetail;
    console.log(this.productDetail, ' PD');
  }
}
