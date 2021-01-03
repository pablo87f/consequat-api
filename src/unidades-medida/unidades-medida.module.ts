import { UnidadesMedidaService } from './unidades-medida.service';
import { UnidadesMedidaController } from './unidades-medida.controller';
import { Module } from '@nestjs/common';
import { unidadesMedidaProviders } from './unidades-medida.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UnidadesMedidaController],
  providers: [...unidadesMedidaProviders, UnidadesMedidaService],
})
export class UnidadesMedidaModule {}
