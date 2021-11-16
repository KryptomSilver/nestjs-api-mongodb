import {
  Controller,
  Get,
  NotFoundException,
  Param,
} from '@nestjs/common';
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
  @Get(':productID')
  async getProduct(@Param('productID') productID): Promise<IProduct> {
    const findProduct = await this.ProductService.getProduct(productID);
    if (!findProduct) throw new NotFoundException('Product not found');
    const product = await this.ProductService.getProduct(productID);
    return product;
  }
}
