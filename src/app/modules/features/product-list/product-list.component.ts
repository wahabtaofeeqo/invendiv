import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartComponentComponent } from '../cart-component/cart-component.component';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/models/product.model';
import { Store } from '@ngrx/store';
import { CartItem } from '../../shared/models/cart-item.model';
import { addItemToCart } from '../../app_store/cart/cart.actions';
import { selectItems } from '../../app_store/cart/cart.selector';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterModule, CartComponentComponent, NavbarComponent, FooterComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {

  showCart = false;
  cart: CartItem[] = [];

  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private store: Store, private service: ProductService) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe((products) => {
      this.products = products;
      this.filteredProducts = products;
    });

    this.store.select(selectItems).subscribe((items) => {
      this.cart = items;
    });
  }

  addItemToCart(product: Product) {
    const item: CartItem = {
      product,
      total: 1,
      id: product.id,
    };

    this.store.dispatch(addItemToCart({ item }));
  }

  doFilter(term: any) {
    this.filteredProducts = this.products.filter((item => item.name.toLowerCase().includes(term)))
  }
}
