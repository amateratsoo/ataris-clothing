import express from 'express';
import cors from 'cors';
import { router } from './routes/routes';
import { database } from './database/database';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3335;

async function bootstrap() {
  await database();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors({ 
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  }));
  app.use(router);

  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
}

bootstrap();
