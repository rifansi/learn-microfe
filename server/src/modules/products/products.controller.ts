import { Controller, Get, Param } from '@nestjs/common';
import { products, Product } from 'src/product';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Get()
  async index(): Promise<Product[]> {
    return products;
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Product> {
    const productId = parseInt(id);
    const product = products.find((p) => p.id === productId);

    if (!product) {
      throw new Error(`Product with ID ${id} not found`);
    }

    return product;
  }
}
