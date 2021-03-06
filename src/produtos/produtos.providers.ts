import { Connection } from 'typeorm';
import { Produto } from './produto.entity';
import { produtosRepositoryProviderKey } from './contants';
import { databaseConnectionProviderKey } from 'src/database/constants';

export const produtoProviders = [
  {
    provide: produtosRepositoryProviderKey,
    useFactory: (connection: Connection) => connection.getRepository(Produto),
    inject: [databaseConnectionProviderKey],
  },
];
