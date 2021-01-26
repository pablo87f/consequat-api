import { Injectable, NotFoundException } from '@nestjs/common';
import { compare } from 'bcrypt';
import { Usuario } from 'src/usuarios/usuario.entity';
import { UsuariosService } from '../usuarios/usuarios.service';

export type UsuarioSemSenha = Omit<Usuario, 'senha'>;

@Injectable()
export class AuthService {
  constructor(private usuariosService: UsuariosService) {}

  async validateUser(
    email: string,
    senha: string,
  ): Promise<UsuarioSemSenha | undefined> {
    const usuario = await this.usuariosService.recuperarPorEmail(email);

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrato');
    }

    const senhaEstaCorreta = await compare(senha, usuario.senha);

    if (senhaEstaCorreta) {
      const camposSemSenha = <UsuarioSemSenha>usuario;
      return camposSemSenha;
    }
    return undefined;
  }
}
