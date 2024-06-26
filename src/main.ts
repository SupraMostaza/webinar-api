import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  console.log('DATABASE_HOST:', process.env.DATABASE_HOST);
  console.log('DATABASE_PORT:', process.env.DATABASE_PORT);
  console.log('DATABASE_USER:', process.env.DATABASE_USER);
  console.log('DATABASE_PASSWORD:', process.env.DATABASE_PASSWORD);
  console.log('DATABASE_NAME:', process.env.DATABASE_NAME);

  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://webinar-web-sigma.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  const port = process.env.PORT || 4000;
  await app.listen(port);
}
bootstrap();
