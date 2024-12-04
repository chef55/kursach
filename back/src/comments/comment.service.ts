import { Injectable, StreamableFile } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, IntegerType, Repository } from 'typeorm';
import { CommentTable, LikeTable, PostTable, UserTable } from 'src/typeorm';
import { UserService } from 'src/user/user.service';
import { AppDataSource } from 'src/typeorm/DataSource';
import { CreateCommentDto } from 'src/dtos/CreateComment.dto';
//import 

@Injectable()
export class CommentService {
  constructor(@InjectRepository(CommentTable) private readonly commentRepositiory: Repository<CommentTable>){}

  async getPostComments(post_id:string){
    const comments = await AppDataSource.getRepository(CommentTable).createQueryBuilder('comment').leftJoinAndSelect('comment.post','post').where('post_id=:id',{id:post_id}).leftJoinAndSelect('comment.user','user').getMany()
    //console.log('chef')
    //console.log(comments)
    //const com = await AppDataSource.getRepository(UserTable).findBy({})
    return comments
  }


  async newComment(createCommentDto:CreateCommentDto, session: Record<string,any>){
    const user = await AppDataSource.getRepository(UserTable).findOneBy({id:session.passport.user.id})
    const post = await AppDataSource.getRepository(PostTable).findOneBy({id:createCommentDto.post})
    const date = (new Date(Date.now())).toLocaleString()
    const newLike = await this.commentRepositiory.create({user:user, post:post,text: createCommentDto.text, date: date})
    await this.commentRepositiory.save(newLike)
    return AppDataSource.getRepository(CommentTable).createQueryBuilder('comment').leftJoinAndSelect('comment.post','post').where('post_id=:id',{id:createCommentDto.post}).leftJoinAndSelect('comment.user','user').getMany()
  }
}

