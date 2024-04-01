import { Router } from "express";
import usersRouter from "@modules/users/routes/users.routes";
import sessionsRouter from "@modules/users/routes/sessions.routes";
import filmsRouter from "@modules/films/routes/films.routes";

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/films', filmsRouter);

export default routes;
