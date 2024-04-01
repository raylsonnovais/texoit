import IUser from  './IUser';
import ICreateUserDTO from './ICreateUser';

export default interface IUserRepository {

  create(data: ICreateUserDTO): Promise<IUser>;

  save(user: IUser): Promise<IUser>;

  findById(id: string): Promise<IUser | undefined>;

  findByEmail(email: string): Promise<IUser | undefined>;

  findByName(name: string): Promise<IUser | undefined>;

  findAll(): Promise<IUser[]>;

}
