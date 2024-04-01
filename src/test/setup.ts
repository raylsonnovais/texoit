import { createConnection, ConnectionOptions, getConnection } from 'typeorm';
import { resolve } from 'path';
import User from '../../src/modules/users/typeorm/entities/User';
import Film from '../../src/modules/films/typeorm/entities/Film';

beforeAll(async () => {
  console.log('beforeAll');
  try {
    const connectionOptions: ConnectionOptions = {
      type: 'sqlite',
      database: ':memory:',
      entities: [User, Film],
      migrations: [resolve(__dirname, '..', '..', 'shared', 'typeorm', 'migrations', '*.{ts,js}')],
      synchronize: true,
      logging: false,
    };
    await createConnection(connectionOptions);
  } catch (error) {
    console.error('Error setting up connection:', error);
    throw error;
  }
});

afterAll(async () => {
  await getConnection().close();
});
