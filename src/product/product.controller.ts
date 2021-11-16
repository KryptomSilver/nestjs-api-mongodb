import { Controller, Get } from '@nestjs/common';
import { IProduct } from './interfaces/product.interface';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private ProductService: ProductService) {}
  @Get()
  async getProducts(): Promise<IProduct[]> {
    const products = await this.ProductService.getProducts();
    return products;
  }
}
