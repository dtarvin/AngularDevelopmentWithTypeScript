import { Product } from './product';
import { ProductService } from './product.service';

export class MockProductService implements ProductService {
  getProduct(): Product {
    return new Product('Samsung 7');
  }
}