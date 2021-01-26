import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [UsuariosModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
