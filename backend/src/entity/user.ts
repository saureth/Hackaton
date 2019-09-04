import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import Country from './country';

@Entity()
export class User {
  @PrimaryColumn()
  id: number;

  @Column({
    length: 64
  })
  name: string;

  @Column({
    length: 64
  })
  email: string;

  @Column({
    length: 32
  })
  password: string;

  @ManyToOne(type => Country, country => country.users, {
    eager: true
  })
  country: Country;
}
