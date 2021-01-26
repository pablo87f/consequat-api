import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CriarUsuarioDto } from './dtos/criar-usuario.dto';
import { Usuario } from './usuario.entity';
import { UsuariosService } from './usuarios.service';

@ApiTags('usuarios')
@Controller('/usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  async recuperarTodos(): Promise<Usuario[]> {
    return await this.usuariosService.recuperarTodos();
  }

  @Get(':id')
  async recuperar(@Param('id') id: number): Promise<Usuario> {
    const usuario = await this.usuariosService.recuperarPorId(id);
    if (!usuario)
      throw new NotFoundException(`Recurso '/usuarios/${id}' não encontrado`);
    return usuario;
  }

  @Post()
  @ApiBody({ type: CriarUsuarioDto })
  async criar(
    @Body()
    criarUsuarioDto: CriarUsuarioDto,
  ): Promise<Usuario> {
    const usuarioCriado = await this.usuariosService.criar(criarUsuarioDto);

    return usuarioCriado;
  }
}
