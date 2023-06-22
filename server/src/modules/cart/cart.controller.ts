import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { Product, products } from '../../product';

interface CartItem extends Product {
  quantity: number;
}

interface Cart {
  items: CartItem[];
}

const initialCart = (indexes: number[]): Cart => ({
  items: indexes.map((index) => ({
    ...products[index],
    quantity: 1,
  })),
});

@Controller('cart')
export class CartController {
  private carts: Record<number, Cart> = {
    1: initialCart([0, 1]),
    2: initialCart([1, 2]),
  };

  constructor() {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async index(@Request() req): Promise<Cart> {
    return this.carts[req.user.userId] ?? { items: [] };
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Request() req, @Body() { id }: { id: string }): Promise<Cart> {
    const cart = this.carts[req.user.userId];
    const cartItem = cart.items.find((item) => item.id === parseInt(id));
    if (cartItem) {
      cartItem.quantity++;
    } else {
      cart.items.push({ ...products[parseInt(id)], quantity: 1 });
    }
    return cart;
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  async delete(@Request() req): Promise<Cart> {
    const cart = this.carts[req.user.userId];
    cart.items = [];
    return cart;
  }
}
