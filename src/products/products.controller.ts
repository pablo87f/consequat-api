import { Controller, Get } from '@nestjs/common';
import { Product } from './interfaces/products.interface';
import { ProductsService } from './products.service';

@Controller('/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  listar(): Product[] {
    return this.productsService.listar();
  }
}
