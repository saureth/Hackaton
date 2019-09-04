import { PrimaryColumn, Column } from 'typeorm';

export default class Campaign {
  @PrimaryColumn()
  id: number;

  @Column()
  studentsNumber: number;

  @Column()
  text: string;

  @Column()
  releaseExplore: boolean;

  @Column()
  releaseLearn: boolean;

  @Column()
  releaseImagine: boolean;

  @Column()
  releaseAct: boolean;
}
