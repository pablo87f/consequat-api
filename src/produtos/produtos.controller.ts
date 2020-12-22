import { Controller, Get } from '@nestjs/common';
import { Produto } from './interfaces/produtos.interface';
import { ProdutosService } from './produtos.service';

@Controller('/produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get()
  listar(): Produto[] {
    return this.produtosService.listar();
  }
}
