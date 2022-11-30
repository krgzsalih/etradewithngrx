import { IProduct } from './../../models/Product';
import { Action } from '@ngrx/store';

export enum CartActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
}

export class AddProduct implements Action {
  type: string = CartActionTypes.ADD_PRODUCT;
  constructor(public payload: IProduct) {}
}

export class RemoveProduct implements Action {
  type: string = CartActionTypes.REMOVE_PRODUCT;
  constructor(public payload: IProduct) {}
}

export type CartActions = AddProduct | RemoveProduct;
