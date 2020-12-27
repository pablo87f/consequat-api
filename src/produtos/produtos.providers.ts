import { Connection } from 'typeorm';
import { Produto } from './produto.entity';
import { produtoRepositoryProviderKey } from './contants';
import { databaseConnectionProviderKey } from 'src/database/constants';

export const produtoProviders = [
  {
    provide: produtoRepositoryProviderKey,
    useFactory: (connection: Connection) => connection.getRepository(Produto),
    inject: [databaseConnectionProviderKey],
  },
];
