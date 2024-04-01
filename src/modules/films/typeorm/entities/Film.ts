import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';


@Entity('films')
class Film {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  year: string;

  @Column()
  title: string;

  @Column()
  studios: string;

  @Column()
  producers: string;

  @Column()
  winner: string;

}

export default Film;
