import { Injectable, StreamableFile } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, IntegerType, Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { PostTable, UserTable } from 'src/typeorm';
import { CreatePostDto } from 'src/dtos/CreatePost.dto';
import { diskStorage } from 'multer';
import { UserService } from 'src/user/user.service';
import { createReadStream } from 'fs';
import { join } from 'path';
import { AppDataSource } from 'src/typeorm/DataSource';
//import 

@Injectable()
export class PostService {
  constructor(private userService:UserService,
    @InjectRepository(PostTable) private readonly postRepository: Repository<PostTable>){}

  async getPostData(id:string){
    const post= await this.postRepository.findOneBy({id})
    const reply = { description: post.description }
    return reply
  }


  
  async getPostImage(id:string){
    const post= await this.postRepository.findOneBy({id})
    const file = createReadStream(join(process.cwd(),'../uploads',post.image_id))
    //return new StreamableFile(file)
    return file
  }

  async getFeed(num){
    const a= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    const arr = await AppDataSource.getRepository(PostTable).createQueryBuilder('post').leftJoinAndSelect('post.user','user').where({id:In(a)}).getMany()
    const imgs=[]
    const ids=[]
    const users=[]
    const desc = []
    arr.map((e)=>{
      //console.log(e)
      imgs.push(e.image_id)
      ids.push(e.id)
      users.push(e.user.id)
      desc.push(e.description)
    })
    //console.log(arr)
    return {images:imgs,ids:ids,users:users,description:desc}
  }

  async getUserPosts(id){
    const arr = await AppDataSource.getRepository(PostTable).createQueryBuilder('post').leftJoinAndSelect('post.user','user').where('user.id=:id',{id:id}).getMany()
    const imgs=[]
    const ids=[]
    const users=[]
    const desc = []
    arr.map((e)=>{
      //console.log(e)
      imgs.push(e.image_id)
      ids.push(e.id)
      users.push(e.user.id)
      desc.push(e.description)
    })
    return {images:imgs,ids:ids,users:users,description:desc}
  }

  async createPost(file: Express.Multer.File, createPostDto:CreatePostDto, session: Record<string,any>){
    //console.log(session.passport)
    const user = await AppDataSource.getRepository(UserTable).findOneBy({id:session.passport.user.id})
    createPostDto.image_id= file.filename
    createPostDto.image_name= file.originalname
    createPostDto.user = user.id
    const newPost = await this.postRepository.create(createPostDto)
    return this.postRepository.save(newPost)
  }
}
