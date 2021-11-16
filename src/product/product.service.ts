import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { productDTO } from './dto/product.dto';
import { IProduct } from './interfaces/product.interface';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<IProduct>,
  ) {}
  async getProducts(): Promise<IProduct[]> {
    const products = await this.productModel.find();
    return products;
  }
  async getProduct(id: string): Promise<IProduct> {
    const product = await this.productModel.findById(id);
    return product;
  }
}
