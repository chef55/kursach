import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LikeTable, PostTable, UserTable } from 'src/typeorm';
import { LikeService } from './like.service';
import { LikeController } from './like.controller';
@Module({
    imports: [TypeOrmModule.forFeature([PostTable,LikeTable,UserTable])],
    controllers: [LikeController],
    providers: [LikeService],
})
export class LikeModule {}
