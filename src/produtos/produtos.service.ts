import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { produtosRepositoryProviderKey } from './contants';
import { CriarProdutoDto } from './dtos/criarProduto.dto';
import { Produto } from './produto.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @Inject(produtosRepositoryProviderKey)
    private produtoRepository: Repository<Produto>,
  ) {}

  async recuperarTodos(): Promise<Produto[]> {
    return this.produtoRepository.find();
  }

  async criar(criarProdutoDto: CriarProdutoDto): Promise<Produto> {
    const produtoNovo = this.produtoRepository.create({
      descricao: criarProdutoDto?.descricao,
      nome: criarProdutoDto.nome,
    });
    return await this.produtoRepository.save(produtoNovo);
  }
}
