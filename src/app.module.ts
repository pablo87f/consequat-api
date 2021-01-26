import { UsuariosController } from './usuarios/usuarios.controller';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProdutosModule } from './produtos/produtos.module';
import { UnidadesMedidaModule } from './unidades-medida/unidades-medida.module';
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    UnidadesMedidaModule,
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true,
    }),
    DatabaseModule,
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: process.env.POSTGRES_HOST,
    //   port: parseInt(process.env.POSTGRES_PORT),
    //   username: process.env.POSTGRES_USER,
    //   password: process.env.POSTGRES_PASSWORD,
    //   database: process.env.POSTGRES_DATABASE,
    //   entities: [],
    //   synchronize: true,
    // }),
    ProdutosModule,
    AuthModule,
    UsuariosModule,
  ],
  controllers: [UsuariosController, AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
