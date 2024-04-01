import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Film from '../typeorm/entities/Film';
import FilmsRepository from '../typeorm/repositories/FilmeRepository';

interface IRequest {
  year: string;
}

class FindByYearService {

  public async execute({ year }: IRequest): Promise<Film[]> {
    const filmsRepository = getCustomRepository(FilmsRepository);
    const films = await filmsRepository.findByYear(year);

    if (!films) {
      throw new AppError('Films not found.', 404);
    }

    return films;
  }
}

export default FindByYearService;
