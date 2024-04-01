import CreateUserService from '../../../../modules/users/services/CreateUserService';
import UserRepository from '../../../../modules/users/typeorm/repositories/UserRepository';
import AppError from '../../../../shared/errors/AppError';


describe('CreateUserService', () => {
  it('should be able to create a new user', async () => {
    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('johndoe@example.com');
  });

});
