import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProducts() {
    return of(products);
  }
}

const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1617854818583-09e7f077a156?w=600',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1617854818583-09e7f077a156?w=600',
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1617854818583-09e7f077a156?w=600',
  },
  {
    id: 4,
    name: 'DSLR Camera',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1617854818583-09e7f077a156?w=600',
  },
  {
    id: 5,
    name: 'Gaming Mouse',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1617854818583-09e7f077a156?w=600',
  },
  {
    id: 6,
    name: 'Mechanical Keyboard',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1617854818583-09e7f077a156?w=600',
  },
  {
    id: 7,
    name: 'External Hard Drive',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1617854818583-09e7f077a156?w=600',
  },
  {
    id: 8,
    name: 'Smartphone Tripod',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1617854818583-09e7f077a156?w=600',
  },
];
