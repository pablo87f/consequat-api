import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  schema: 'pessoas',
  name: 't_usuarios',
  synchronize: true,
})
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 100 })
  senha: string;

  @CreateDateColumn()
  criadoEm: string;

  @Column({ default: true })
  ativo: boolean;
}
