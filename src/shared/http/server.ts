import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { createConnection, getConnection } from 'typeorm';
import fs from 'fs';
import csvParser from 'csv-parser';

import routes from './routes';
import AppError from '@shared/errors/AppError';
import Film from '../../modules/films/typeorm/entities/Film';
import User from '../../modules/users/typeorm/entities/User';
import '@shared/typeorm';

import CreateFilmService from '../../modules/films/services/CreateFilmService';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);


createConnection({
  type: 'sqlite',
  database: './data/database.sqlite',
  entities: [User, Film],
  synchronize: true,
  dropSchema: false,
})
  .then(async () => {
    const userRepository = getConnection().getRepository(User);
    const userTableExists = await userRepository.query(
      `SELECT name FROM sqlite_master WHERE type='table' AND name='${userRepository.metadata.tableName}'`
    );
    const filmRepository = getConnection().getRepository(Film);
    const filmTableExists = await filmRepository.query(
      `SELECT name FROM sqlite_master WHERE type='table' AND name='${filmRepository.metadata.tableName}'`
    );

    if (userTableExists.length > 0 && filmTableExists.length > 0) {
      await filmRepository.query('DELETE FROM films WHERE 1=1;');

      console.log('Tabela "films" limpa. Iniciando o servidor...');
      await startServer();
    } else {
      console.log('Uma ou mais tabelas não existem. Finalizando o processo...');
    }
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });

async function startServer() {
  fs.createReadStream('./data/movielist.csv')
    .pipe(csvParser({ separator: ';' }))
    .on('data', async (row) => {
      try {
        const createFilmService = new CreateFilmService();
        await createFilmService.execute({
          year: row.year,
          title: row.title,
          studios: row.studios,
          producers: row.producers,
          winner: row.winner,
        });
      } catch (error) {
        console.error('Erro ao processar linha do CSV:', error);
      }
    })
    .on('end', () => {
      console.log('Arquivo CSV processado com sucesso!');
    });

  app.listen(3000, () => {
    console.log('Servidor está rodando na porta 3000!');
  });
}

