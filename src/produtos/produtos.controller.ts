import { Body, Controller, Get, Post } from '@nestjs/common';
import { CriarProdutoDto } from './dtos/criarProduto.dto';
import { Produto } from './produto.entity';
import { ProdutosService } from './produtos.service';

@Controller('/produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get()
  async recuperarTodos(): Promise<Produto[]> {
    return await this.produtosService.recuperarTodos();
  }

  @Post()
  async criar(@Body() criarProdutoDto: CriarProdutoDto): Promise<Produto> {
    return this.produtosService.criar(criarProdutoDto);
  }
}
