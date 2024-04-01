import { Repository, EntityRepository } from 'typeorm';
import Film from '../entities/Film';

@EntityRepository(Film)
class UsersRepository extends Repository<Film> {
  public async findByYear(year: string): Promise<Film[]> {
    const film = await this.find({
      where: {
        year,
      },
    });

    return film;
  }

  public async findById(id: string): Promise<Film | undefined> {
    const film = await this.findOne({
      where: {
        id,
      },
    });

    return film;
  }

  public async findByTitle(title: string): Promise<Film[]> {
    const film = await this.find({
      where: {
        title,
      },
    });

    return film;
  }

  public async findByStudios(studios: string): Promise<Film[]> {
    const film = await this.find({
      where: {
        studios,
      },
    });

    return film;
  }

  public async findByProducers(producers: string): Promise<Film[]> {
    const film = await this.find({
      where: {
        producers,
      },
    });

    return film;
  }
}

export default UsersRepository;
