import { Connection } from 'typeorm';
import { Usuario } from './usuario.entity';
import { usuariosRepositoryProviderKey } from './contants';
import { databaseConnectionProviderKey } from 'src/database/constants';

export const usuariosProviders = [
  {
    provide: usuariosRepositoryProviderKey,
    useFactory: (connection: Connection) => connection.getRepository(Usuario),
    inject: [databaseConnectionProviderKey],
  },
];
