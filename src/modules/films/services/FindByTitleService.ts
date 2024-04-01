import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Film from '../typeorm/entities/Film';
import FilmsRepository from '../typeorm/repositories/FilmeRepository';

interface IRequest {
  title: string;
}

class FindByTitleService {

  public async execute({ title }: IRequest): Promise<Film[]> {
    const filmsRepository = getCustomRepository(FilmsRepository);
    const films = await filmsRepository.findByTitle(title);

    if (!films) {
      throw new AppError('Films not found.', 404);
    }

    return films;
  }
}

export default FindByTitleService;
