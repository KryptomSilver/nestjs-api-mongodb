import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { productDTO } from './dto/product.dto';
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
  @Post()
  async createProduct(@Body() productDTO: productDTO): Promise<IProduct> {
    const product = await this.ProductService.createProduct(productDTO);
    return product;
  }
  @Delete(':productID')
  async deleteProduct(@Param('productID') productID) {
    const findProduct = await this.ProductService.getProduct(productID);
    if (!findProduct) throw new NotFoundException('Product not found');
    const product = await this.ProductService.deleteProduct(productID);
    return product;
  }
  @Put(':productID')
  async updateProduct(
    @Param('productID') productID,
    @Body() productDTO: productDTO,
  ) {
    const findProduct = await this.ProductService.getProduct(productID);
    if (!findProduct) throw new NotFoundException('Product not found');
    const product = await this.ProductService.updateProduct(
      productID,
      productDTO,
    );
    return product;
  }
}
