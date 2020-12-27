import { ApiProperty } from '@nestjs/swagger';

export class CriarProdutoDto {
  @ApiProperty()
  nome: string;

  @ApiProperty()
  descricao?: string;
}
