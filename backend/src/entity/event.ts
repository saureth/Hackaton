import {
  Column,
  PrimaryColumn,
  JoinColumn,
  OneToOne,
  ManyToOne
} from 'typeorm';
import Campaign from './campaign';
import Country from './country';

export default class Event {
  @OneToOne(type => Campaign, { primary: true })
  @JoinColumn({ name: 'campaignId' })
  campaignId: Campaign;

  @PrimaryColumn()
  id: number;

  @Column()
  startDate: Date;

  @Column()
  finishDate: Date;

  @ManyToOne(type => Country, country => country.users, {
    eager: true
  })
  country: Country;
}
