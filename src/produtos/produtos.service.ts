import { Injectable } from '@nestjs/common';
import { Produto } from './interfaces/produtos.interface';

@Injectable()
export class ProdutosService {
  listar(): Produto[] {
    return [
      {
        id: 1,
        nome: 'Farinha de trigo sem fermento',
        idUnidadeMedida: 1,
      },
      {
        id: 2,
        nome: 'Leite líquido integral',
        idUnidadeMedida: 3,
      },
    ];
  }
}
