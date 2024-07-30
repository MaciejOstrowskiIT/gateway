import express, { Application } from 'express';
import cors from 'cors';
import { logger } from './utils/logs';
import { registerRoutes } from './utils/registerRoutes';

const app: Application = express();
app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);

(async (): Promise<void> => {
  try {
    app.listen(process.env.PORT, (): void => {
      logger('info', `[Gateway] Working at port ${process.env.PORT}`);
    });
    registerRoutes(app);
  } catch (error) {
    logger('error', error as string);
  }
})();
