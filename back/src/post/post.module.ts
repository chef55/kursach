import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostTable } from 'src/typeorm';
import { PostService } from './post.service';
import { PostController } from './post.controller';
@Module({
    imports: [TypeOrmModule.forFeature([PostTable])],
    controllers: [PostController],
    providers: [PostService],
})
export class PostModule {}
