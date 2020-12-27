import { Entity, Column, PrimaryGeneratedColumn, IsNull } from 'typeorm';

@Entity({
  schema: 'cadastro',
  name: 'produtos',
  synchronize: true,
})
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  nome: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  descricao?: string;

  @Column({ default: true })
  ativo: boolean;
}
