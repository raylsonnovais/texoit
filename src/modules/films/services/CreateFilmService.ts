import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Film from '../typeorm/entities/Film';
import FilmsRepository from '../typeorm/repositories/FilmeRepository';
import ICreateFilm  from '../models/ICreateFilm';

class CreateFilmService {
  public async execute({ year, title, studios, producers, winner }: ICreateFilm): Promise<Film> {
    const filmsRepository = getCustomRepository(FilmsRepository);

    const film = filmsRepository.create({
      year,
      title,
      studios,
      producers,
      winner,
    });

    try {
      await filmsRepository.save(film);
    } catch (error) {
      throw new AppError('Error to save film', 500);
    }

    return film;
  }
}

export default CreateFilmService;
