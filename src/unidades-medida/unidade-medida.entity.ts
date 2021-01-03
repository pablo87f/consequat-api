import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  schema: 'cadastro',
  name: 't_unidade_medida',
  synchronize: true,
})
export class UnidadeMedida {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 3 })
  sigla: string;

  @Column({ default: true })
  ativo: boolean;
}
