import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    }).compile();
  });

  describe('listar', () => {
    it('Deve retornar um array com os dois proodutos cadastrados', () => {
      const produtoController = app.get<ProductsController>(ProductsController);
      expect(produtoController.listar()).toBe('Hello World!');
    });
  });
});
