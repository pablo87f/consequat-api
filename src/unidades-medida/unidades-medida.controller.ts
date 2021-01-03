import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UnidadeMedida } from './unidade-medida.entity';
import { UnidadesMedidaService } from './unidades-medida.service';

@ApiTags('unidades-medida')
@Controller('/unidades-medida')
export class UnidadesMedidaController {
  constructor(private readonly unidadesMedidaService: UnidadesMedidaService) {}

  @Get()
  async recuperarTodos(): Promise<UnidadeMedida[]> {
    return await this.unidadesMedidaService.recuperarTodos();
  }
}
