import { Router } from 'express';
import FilmsController from '../controllers/FilmsController';
import { Pool } from 'pg'; // Import Pool from the correct package

const filmsRouter = Router();

const filmsController = new FilmsController();

filmsRouter.post('/', filmsController.create);

export default filmsRouter;
