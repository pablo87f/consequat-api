import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { unidadesMedidaRepositoryProviderKey } from './contants';
import { UnidadeMedida } from './unidade-medida.entity';

@Injectable()
export class UnidadesMedidaService {
  constructor(
    @Inject(unidadesMedidaRepositoryProviderKey)
    private unidadesMedidaRepository: Repository<UnidadeMedida>,
  ) {}

  async recuperarTodos(): Promise<UnidadeMedida[]> {
    return this.unidadesMedidaRepository.find();
  }
}
