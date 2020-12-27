import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ProdutosController } from './produtos.controller';
import { produtoProviders } from './produtos.providers';
import { ProdutosService } from './produtos.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProdutosController],
  providers: [...produtoProviders, ProdutosService],
})
export class ProdutosModule {}
