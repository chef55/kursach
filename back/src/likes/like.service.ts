import { Injectable, StreamableFile } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, IntegerType, Repository } from 'typeorm';
import { LikeTable, PostTable, UserTable } from 'src/typeorm';
import { UserService } from 'src/user/user.service';
import { AppDataSource } from 'src/typeorm/DataSource';
import { CreateLikeDto } from 'src/dtos/CreateLike.sto';
//import 

@Injectable()
export class LikeService {
  constructor(@InjectRepository(LikeTable) private readonly likeRepository: Repository<LikeTable>){}

  async getPostLikes(id:string){
    const count = await AppDataSource.getRepository(LikeTable).createQueryBuilder('like').leftJoinAndSelect('like.post','post').where('post_id=:id',{id:id}).getCount()
    return count
  }

  async getLiked(id:string, session: Record<string,any>){
    //console.log(session.passport)
    const user = await AppDataSource.getRepository(UserTable).findOneBy({id:session.passport.user.id})
    const post = await AppDataSource.getRepository(PostTable).findOneBy({id})
    const like = await AppDataSource.getRepository(LikeTable).findOneBy({user:user,post:post})
    return like?true:false
  }

  
  async getUserLikes(id:string){
    const posts = await AppDataSource.getRepository(PostTable).findOneBy({id})
    return posts
  }


  async newLike(createLikeDto:CreateLikeDto, session: Record<string,any>){
    const user = await AppDataSource.getRepository(UserTable).findOneBy({id:session.passport.user.id})
    const post = await AppDataSource.getRepository(PostTable).findOneBy({id:createLikeDto.post})
    const like = await AppDataSource.getRepository(LikeTable).findOneBy({user:user,post:post})
    if(like){
      await AppDataSource.getRepository(LikeTable).createQueryBuilder().delete().where('id=:id',{id:like.id}).execute()
      return {likes: await this.getPostLikes(createLikeDto.post),liked: false}
    }
    else{
      const newLike = await this.likeRepository.create({user:user, post:post})
      await this.likeRepository.save(newLike)
      return {likes: await this.getPostLikes(createLikeDto.post),liked: true}
    }
  }
}
