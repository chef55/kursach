import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from "express-session"
import * as passport from 'passport';
import { TypeormStore } from 'connect-typeorm';
import { SessionTable } from './typeorm';
import { AppDataSource } from './typeorm/DataSource';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.setGlobalPrefix('api')
  AppDataSource.initialize()
  const sessionRepo = AppDataSource.getRepository(SessionTable)
  app.enableCors({
    origin:"http://localhost:3000",
    credentials: true,
    //methods: ['GET','POST']
  });
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe({exceptionFactory: (errors) => new BadRequestException(errors)}));
  app.use(
    session({
      name:'my_name_chef',
      secret:'mynamejeff',
      resave:false,
      saveUninitialized:false,
      cookie:{
        maxAge:600000
      },
      store: new TypeormStore({cleanupLimit:10}).connect(sessionRepo)
    }),
  )
  app.use(passport.initialize())
  app.use(passport.session())
  await app.listen(3001);
}
bootstrap();
