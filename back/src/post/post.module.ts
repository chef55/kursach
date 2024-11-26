import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageTable, PostTable, UserTable } from 'src/typeorm';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { UserService } from 'src/user/user.service';
@Module({
    imports: [TypeOrmModule.forFeature([PostTable,ImageTable,UserTable])],
    controllers: [PostController],
    providers: [PostService,UserService],
})
export class PostModule {}
