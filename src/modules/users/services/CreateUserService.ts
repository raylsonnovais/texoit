import AppError from '@shared/errors/AppError';
import { hash } from 'bcryptjs';
import IUser from '../models/IUser';
import UserRepository from '../typeorm/repositories/UserRepository';
import { getCustomRepository } from 'typeorm';

interface IRequest {
  name: string;
  email: string;
  password: string;
}


class CreateUserService {

  public async execute({ name, email, password }: IRequest): Promise<IUser> {
    const usersRepository = getCustomRepository(UserRepository);
    const emailExists = await usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already used.');
    }

    const hashedPassword = await hash(password, 8);

    const user = await usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
