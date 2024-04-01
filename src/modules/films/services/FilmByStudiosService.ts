import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Film from '../typeorm/entities/Film';
import FilmsRepository from '../typeorm/repositories/FilmeRepository';

interface IRequest {
  studios: string;
}

class FilmByStudiosService {

  public async execute({ studios }: IRequest): Promise<Film[]> {
    const filmsRepository = getCustomRepository(FilmsRepository);
    const films = await filmsRepository.findByStudios(studios);

    if (!films) {
      throw new AppError('Films not found.', 404);
    }

    return films;
  }
}

export default FilmByStudiosService;
