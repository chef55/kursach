import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { PostTable } from 'src/typeorm';
import { CreatePostDto } from 'src/dtos/CreatePost.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostTable) private readonly postRepository: Repository<PostTable>){}

  async getPostWithoutImage(id:string){
    const post= await this.postRepository.findOneBy({id})
    const {image,image_name,encoding, mimetype,...result}=post
    return result
  }

  async getImageWithoutPost(id:string){
    const post= await this.postRepository.findOneBy({id})
    const {description,...result}=post
    result.image.buffer.toString(result.encoding)
    return result
  }

  createPost(file: Express.Multer.File, createPostDto:CreatePostDto){
    createPostDto.image=file.buffer
    createPostDto.image_name=file.originalname
    createPostDto.encoding=file.encoding
    createPostDto.mimetype=file.mimetype
    const newPost = this.postRepository.create(createPostDto)
    return this.postRepository.save(newPost)
  }
}
