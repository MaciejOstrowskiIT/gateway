import express, { Application, Router } from 'express';
import { routes } from '../routes';
import { Route } from '../routes/Route';

export const registerRoutes = (app: Application): void => {
  const router: Router = express.Router();
  routes.forEach((route: Route) => route.registerRoute(router));
  app.use(router);
};