import { createAction, props } from '@ngrx/store';
import { Product } from '../../shared/models/product.model';
import { CartItem } from '../../shared/models/cart-item.model';

export const addItemToCart = createAction(
  'Add Item To Cart [Cart API]',
  props<{ item: CartItem }>()
);
export const removeItemFromCart = createAction(
  'Remove Item From Cart [Cart API]',
  props<{ id: number }>()
);

export const updateItemInCart = createAction(
  'Remove Item From Cart [Cart API]',
  props<{ product: Product }>()
);

export const increaseItemTotal = createAction(
  'Increase Cart Items [Cart API]',
  props<{ id: number }>()
);

export const decreaseItemTotal = createAction(
  'Decrease Cart Items [Cart API]',
  props<{ id: number }>()
);
