import { Body, Controller, Get, HttpStatus, Param, ParseFilePipeBuilder, Post, Res, StreamableFile, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { CommentService} from './comment.service';
import { AuthenticatedGuard } from 'src/auth/local-auth.guard';
import { Session } from '@nestjs/common'
import { CreateCommentDto } from 'src/dtos/CreateComment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get(':id')
  getPostLikes(@Param() params:any) {
    return this.commentService.getPostComments(params.id)
  }
  
  //@UseGuards(AuthenticatedGuard)
  @Post('create')
  postLike(@Body() createCommentDto:CreateCommentDto, @Session() session:Record<string,any>){
    return this.commentService.newComment(createCommentDto,session)
  }
}
