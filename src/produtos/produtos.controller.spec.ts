import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosController } from './produtos.controller';
import { ProdutosService } from './produtos.service';

describe('ProdutosController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [ProdutosController],
      providers: [ProdutosService],
    }).compile();
  });

  describe('listar', () => {
    it('Deve retornar um array com os dois proodutos cadastrados', () => {
      const produtosController = app.get<ProdutosController>(
        ProdutosController,
      );
      expect(produtosController.recuperarTodos()).toBe('Hello World!');
    });
  });
});
