import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter, CartState } from './cart.reducer';
export const state = createFeatureSelector<CartState>('cart');

//
export const selectItems = createSelector(
  state,
  adapter.getSelectors().selectAll
);
