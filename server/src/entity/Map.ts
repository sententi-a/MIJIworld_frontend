import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
} from "typeorm";

@Entity()
export class Map {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  en_name: string;

  @Column()
  kr_name: string;

  @Column()
  map_id: number;
}
