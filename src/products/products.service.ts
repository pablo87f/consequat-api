import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/products.interface';

@Injectable()
export class ProductsService {
  listar(): Product[] {
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
