import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { User } from './user';

@Entity()
export default class Country {
  @PrimaryColumn()
  id: number;

  @Column({
    length: 128
  })
  name: string;

  @OneToMany(type => User, users => users.country)
  users: User[];

  //@OneToMany(type => Event, event => event.country)
  //events: Event[];
}
