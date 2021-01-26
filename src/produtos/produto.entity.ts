import { UnidadeMedida } from 'src/unidades-medida/unidade-medida.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  schema: 'cadastro',
  name: 't_produtos',
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

  @ManyToOne(() => UnidadeMedida)
  @JoinColumn({ name: 'idUnidadeMedida' })
  unidadeMedida: UnidadeMedida;
}
