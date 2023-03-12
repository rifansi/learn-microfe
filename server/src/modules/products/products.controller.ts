import { Controller, Get, Param } from '@nestjs/common';
import { products, Product } from 'src/product';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Get()
  async index(): Promise<Product[]> {
    return products;
  }
}
