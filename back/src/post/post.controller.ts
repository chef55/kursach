import { Body, Controller, Get, HttpStatus, Param, ParseFilePipeBuilder, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from '../dtos/CreatePost.dto';
import { AuthenticatedGuard } from 'src/auth/local-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Session } from '@nestjs/common'
import { UserService } from 'src/user/user.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('/post/:id')
  getPostWithoutImage(@Param() params:any) {
    console.log(params.id)
    return this.postService.getPostWithoutImage(params.id);
  }

  @Get('/image/:id')
  getImageWithoutPost(@Param() params:any){
    return this.postService.getImageWithoutPost(params.id)
  }
  
  //@UseGuards(AuthenticatedGuard)
  @Post('create')
  @UseInterceptors(FileInterceptor('file',{dest:'../uploads'}))
  createPost(@UploadedFile(
      new ParseFilePipeBuilder()
      .addFileTypeValidator({
        fileType: 'image',
      })
      //.addMaxSizeValidator({
      //  maxSize: 100000
      //})
      .build({
        errorHttpStatusCode: HttpStatus.BAD_REQUEST,
      }),
    )
      file: Express.Multer.File,
      @Body() createPostDto:CreatePostDto, @Session() session:Record<string,any>){
        //console.log(session)
        return this.postService.createPost(file, createPostDto, session)
      }
}
