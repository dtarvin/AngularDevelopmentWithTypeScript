import { ProductService } from './product.service';
import { MockProductService } from './mock.product.service';

export function productServiceFactory (isProd: boolean) {
    if (isProd) {
        return new ProductService();
    } else {
        return new MockProductService();
    }
}