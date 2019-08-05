import { Product } from './product';

export class ProductService {
  getProduct(): Product {
    return new Product('iPhone 7');
  }
}
