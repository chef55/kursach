import { Body, Controller, Get, HttpStatus, Param, ParseFilePipeBuilder, Post, Res, StreamableFile, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { LikeService } from './like.service';
import { AuthenticatedGuard } from 'src/auth/local-auth.guard';
import { Session } from '@nestjs/common'
import { UserService } from 'src/user/user.service';
import { CreateLikeDto } from 'src/dtos/CreateLike.sto';
import { AppDataSource } from 'src/typeorm/DataSource';
import { LikeTable } from 'src/typeorm';

@Controller('like')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @Get('post/:id')
  getPostLikes(@Param() params:any) {
    return this.likeService.getPostLikes(params.id)
  }

  @Get('user/:id')
  getUserLikes(@Param() params:any, @Res() res) {
    return AppDataSource.getRepository(LikeTable).createQueryBuilder("like").select("post").where('user_id=:id',{id:params.id})
  }

  @Get('liked/:id')
  getLiked(@Param() params:any, @Session() session:Record<string,any>){
    return this.likeService.getLiked(params.id,session)
  }
  
  //@UseGuards(AuthenticatedGuard)
  @Post('create')
  postLike(@Body() createLikeDto:CreateLikeDto, @Session() session:Record<string,any>){
    return this.likeService.newLike(createLikeDto,session)
  }
}
