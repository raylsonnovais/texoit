import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Film from '../typeorm/entities/Film';
import FilmsRepository from '../typeorm/repositories/FilmeRepository';

interface IRequest {
  producer: string;
}

class FindByProducerService {

  public async execute({ producer }: IRequest): Promise<Film[]> {
    const filmsRepository = getCustomRepository(FilmsRepository);
    const films = await filmsRepository.findByProducers(producer);

    if (!films) {
      throw new AppError('Films not found.', 404);
    }

    return films;
  }
}

export default FindByProducerService;
