import { Product } from './product.model';

export interface CartItem {
  id: number;
  total: number;
  product: Product;
}
