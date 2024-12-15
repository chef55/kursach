import { Body, Controller, Get, HttpStatus, Param, ParseFilePipeBuilder, Post, Res, StreamableFile, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { LikeService } from './like.service';
import { AuthenticatedGuard } from 'src/auth/local-auth.guard';
import { Session } from '@nestjs/common'
import { UserService } from 'src/user/user.service';
import { CreateLikeDto } from 'src/dtos/CreateLike.sto';
import { AppDataSource } from 'src/typeorm/DataSource';
import { LikeTable } from 'src/typeorm';
import { AuthGuard } from '@nestjs/passport';

@Controller('like')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @Get('post/:id')
  getPostLikes(@Param() params:any) {
    return this.likeService.getPostLikes(params.id)
  }

  @UseGuards(AuthenticatedGuard)
  @Get('liked')
  getUserLikes(@Session() session:Record<string,any>) {
    return this.likeService.getUserLikes(session.passport.user.id)
  }

  @UseGuards(AuthenticatedGuard)
  @Get('liked/:id')
  getLiked(@Param() params:any, @Session() session:Record<string,any>){
    return this.likeService.getLiked(params.id,session)
  }
  
  @UseGuards(AuthenticatedGuard)
  @Post('create')
  postLike(@Body() createLikeDto:CreateLikeDto, @Session() session:Record<string,any>){
    return this.likeService.newLike(createLikeDto,session)
  }
}
