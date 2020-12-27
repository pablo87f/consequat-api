import { createConnection } from 'typeorm';
import { databaseConnectionProviderKey } from './constants';

export const databaseProviders = [
  {
    provide: databaseConnectionProviderKey,
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: parseInt(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
        migrations: [__dirname + 'src/database/migrations/*.ts}'],
        cli: {
          migrationsDir: __dirname + 'src/database/migrations',
        },
        schema: 'cadastro',
      }),
  },
];
