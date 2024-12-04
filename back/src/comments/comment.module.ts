import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentTable, PostTable, UserTable } from 'src/typeorm';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
@Module({
    imports: [TypeOrmModule.forFeature([PostTable,CommentTable,UserTable])],
    controllers: [CommentController],
    providers: [CommentService],
})
export class CommentModule {}
