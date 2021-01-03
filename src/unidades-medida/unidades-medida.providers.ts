import { Connection } from 'typeorm';
import { UnidadeMedida } from './unidade-medida.entity';
import { unidadesMedidaRepositoryProviderKey } from './contants';
import { databaseConnectionProviderKey } from 'src/database/constants';

export const unidadesMedidaProviders = [
  {
    provide: unidadesMedidaRepositoryProviderKey,
    useFactory: (connection: Connection) =>
      connection.getRepository(UnidadeMedida),
    inject: [databaseConnectionProviderKey],
  },
];
