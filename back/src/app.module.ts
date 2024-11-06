import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import entities from './typeorm';
import { PostModule } from './post/post.module';

@Module({
  imports: [UserModule, AuthModule, PostModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin123',
      database: 'website_db',
    entities,
    synchronize:true
    }),
    PassportModule.register({session:true})],
  controllers: [],
  providers: [],
})
export class AppModule {}
