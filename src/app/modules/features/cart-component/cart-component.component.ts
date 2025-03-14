import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartItem } from '../../shared/models/cart-item.model';
import { Store } from '@ngrx/store';
import {
  decreaseItemTotal,
  increaseItemTotal,
  removeItemFromCart,
} from '../../app_store/cart/cart.actions';

@Component({
  selector: 'cart',
  imports: [],
  templateUrl: './cart-component.component.html',
  styleUrl: './cart-component.component.scss',
})
export class CartComponentComponent implements OnInit, OnChanges {

  @Input()
  items: CartItem[] = [];

  amount = 0;
  grandTotal = 0;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.priceCheck();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.priceCheck()
  }

  removeItem(item: CartItem) {
    this.store.dispatch(removeItemFromCart({ id: item.id }));
  }

  decItem(item: CartItem) {
    this.store.dispatch(decreaseItemTotal({ id: item.id }));
  }

  incItem(item: CartItem) {
    this.store.dispatch(increaseItemTotal({ id: item.id }));
  }

  calculateTotal() {
    let total = 0;
    for (let index = 0; index < this.items.length; index++) {
      const item = this.items[index];
      total += item.total * item.product.price;
    }

    this.amount = total;
  }

  applyDiscount(value: string) {
    if (value.toLowerCase() == 'save10') {
      let discount = (10 / 100) * this.amount;
      this.grandTotal = this.amount - discount;
    }

    if (value.toLowerCase() == 'save20') {
      let discount = (20 / 100) * this.amount;
      this.grandTotal = this.amount - discount;
    }
  }

  priceCheck() {
    this.calculateTotal();
    this.grandTotal = this.amount;
  }
}
