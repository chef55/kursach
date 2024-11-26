import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { PostTable } from 'src/typeorm';
import { CreatePostDto } from 'src/dtos/CreatePost.dto';
import { diskStorage } from 'multer';
import { UserService } from 'src/user/user.service';
//import 

@Injectable()
export class PostService {
  constructor(private userService:UserService,
    @InjectRepository(PostTable) private readonly postRepository: Repository<PostTable>){}

  async getPostWithoutImage(id:string){
    const post= await this.postRepository.findOneBy({id})
    //const {image,image_name,encoding, mimetype,...result}=post
    //return result
  }

  async getImageWithoutPost(id:string){
    const post= await this.postRepository.findOneBy({id})
    const {description,...result}=post
    //result.image.buffer.toString(result.encoding)
    //return result
  }

  async createPost(file: Express.Multer.File, createPostDto:CreatePostDto, session: Record<string,any>){
    //console.log(session.passport)
    const user = await this.userService.getUser(session.passport.user.id)
    createPostDto.image_id= file.filename
    createPostDto.image_name= file.originalname
    createPostDto.user = user.id
    const newPost = this.postRepository.create(createPostDto)
    return this.postRepository.save(newPost)
  }
}
