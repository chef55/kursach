import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserTable } from '../typeorm/User';
import { DataSource, Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { Multer } from 'multer';
import { AppDataSource } from 'src/typeorm/DataSource';
import { createReadStream } from 'fs';
import { join } from 'path';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserTable) private readonly userRepository: Repository<UserTable>){}

  async getUser(id:string){
    return this.userRepository.findOneBy({id})
  }

  async newProfileImage(file: Express.Multer.File, session: Record<string,any>){
    //const user = await this.userRepository.findOneBy({id:session.passport.user.id})
    const up = await AppDataSource.createQueryBuilder().update(UserTable).set({image_id:file.filename}).where("id=:id",{id:session.passport.user.id}).execute()
    return file.fieldname
  }

  async getProfile(id:string){
    const user = await this.userRepository.findOneBy({id})
    const data={username:user.username, image_id: user.image_id}
    //console.log(data)
    return data
  }

  async getProfileImage(id:string){
    const user= await this.userRepository.findOneBy({id})
    const file = createReadStream(join(process.cwd(),'../uploads',user.image_id))
    //return new StreamableFile(file)
    return file
  }

  async findUserByName(username:string){
    return this.userRepository.findOneBy({username})
  }
  
  async findUserByEmail(email:string){
    return this.userRepository.findOneBy({email})
  }

  async createUser(createUserDto:CreateUserDto){
      const newUser = await this.userRepository.create(createUserDto)
      return this.userRepository.save(newUser)
  }
}
