import { Inject, Injectable } from '@nestjs/common';
import { ApiError } from 'src/common/errors/api-error';
import { UnidadeMedida } from 'src/unidades-medida/unidade-medida.entity';
import { Repository } from 'typeorm';
import { produtosRepositoryProviderKey } from './contants';
import { CriarProdutoDto } from './dtos/criar-produto.dto';
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

  async criar({ nome, idUnidadeMedida }: CriarProdutoDto): Promise<Produto> {
    const produtoExistente = await this.produtoRepository.findOne({
      where: {
        nome: nome,
      },
    });

    if (produtoExistente)
      throw new ApiError(
        `Produto com nome '${nome}' já existe`,
        409,
        'JA_EXISTE',
      );

    const unidadeMedida = new UnidadeMedida();
    unidadeMedida.id = idUnidadeMedida;

    const produtoNovo = this.produtoRepository.create({
      unidadeMedida,
      nome,
    });

    return await this.produtoRepository.save(produtoNovo);
  }
}
