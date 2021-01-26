import { Inject, Injectable } from '@nestjs/common';
import { ApiError } from 'src/common/errors/api-error';
import { Repository } from 'typeorm';
import { usuariosRepositoryProviderKey } from './contants';
import { CriarUsuarioDto } from './dtos/criar-usuario.dto';
import { Usuario } from './usuario.entity';
import { genSalt, hash, getRounds } from 'bcrypt';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsuariosService {
  constructor(
    @Inject(usuariosRepositoryProviderKey)
    private usuariosRepository: Repository<Usuario>,
  ) {}

  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async recuperarPorEmail(email: string): Promise<Usuario | undefined> {
    return this.usuariosRepository.findOne({ where: { email: email } });
  }

  async recuperarTodos(): Promise<Usuario[]> {
    return this.usuariosRepository.find({ where: { ativo: true } });
  }

  async recuperarPorId(id: number): Promise<Usuario> {
    return this.usuariosRepository.findOne(id);
  }

  async criar(criarUsuarioDto: CriarUsuarioDto): Promise<Usuario> {
    const { email, nome, senha } = criarUsuarioDto;

    const usuario = await this.recuperarPorEmail(email);

    if (usuario) {
      throw new ApiError(`Usuário com email '${email}' já existe`, 'JA_EXISTE');
    }
    const saltRounds = 12;
    const senhaCriptografada = await hash(senha, saltRounds);

    const usuarioNovo = this.usuariosRepository.create({
      nome,
      email,
      senha: senhaCriptografada,
    });

    return await this.usuariosRepository.save(usuarioNovo);
  }
}
