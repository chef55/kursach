import { Body, Controller, Get, HttpStatus, Param, ParseFilePipeBuilder, Post, Res, StreamableFile, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from '../dtos/CreatePost.dto';
import { AuthenticatedGuard } from 'src/auth/local-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Session } from '@nestjs/common'
import { UserService } from 'src/user/user.service';
import { of } from 'rxjs';
import { join } from 'path';
import { createReadStream } from 'fs';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('data/:id')
  getPostData(@Param() params:any) {
    return this.postService.getPostData(params.id);
  }
  
  @Get('image/:id')
  getPostImage(@Param() params:any, @Res() res) {
    return of(res.sendFile(join(process.cwd(),'../uploads',params.id)))
  }

  @Get('feed')
  getFeed(@Param() params:any){
    return this.postService.getFeed(params.amount)
  }

  @Get('user/:id')
  getUserImages(@Param() params:any) {
    return this.postService.getUserPosts(params.id)
  }
  
  @UseGuards(AuthenticatedGuard)
  @Get('delete/:id')
  deletePost(@Param() params:any, @Session() session:Record<string,any>) {
    return this.postService.deletePost(params.id,session)
  }
  
  @UseGuards(AuthenticatedGuard)
  @Post('create')
  @UseInterceptors(FileInterceptor('file',{storage:diskStorage({
    destination: '../uploads',
    filename: (req,file,cb)=>{
      cb(null, Date.now().toString()+"."+file.mimetype.split('/')[1].toString())
    }
  })},))
  createPost(@UploadedFile(
    new ParseFilePipeBuilder()
    .addFileTypeValidator({
      fileType: 'image',
    })
    .build({
      errorHttpStatusCode: HttpStatus.BAD_REQUEST,
    }),
  )
  file: Express.Multer.File,
  @Body() createPostDto:CreatePostDto, @Session() session:Record<string,any>){
  return this.postService.createPost(file, createPostDto, session)
  }
}
