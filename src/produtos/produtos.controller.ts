import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CriarProdutoDto } from './dtos/criar-produto.dto';
import { Produto } from './produto.entity';
import { ProdutosService } from './produtos.service';

@ApiTags('produtos')
@Controller('/produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get()
  async recuperarTodos(): Promise<Produto[]> {
    return await this.produtosService.recuperarTodos();
  }

  @Post()
  @ApiBody({ type: CriarProdutoDto })
  async criar(@Body() criarProdutoDto: CriarProdutoDto): Promise<Produto> {
    return this.produtosService.criar(criarProdutoDto);
  }
}
