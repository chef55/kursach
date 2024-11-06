import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserTable } from '../typeorm/User';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/CreateUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserTable) private readonly userRepository: Repository<UserTable>){}

  getHello(): string {
    return 'Hello World!';
  }

  getUser(id:string){
    return this.userRepository.findOneBy({id})
  }

  findUserByName(username:string){
    return this.userRepository.findOneBy({username})
  }
  
  findUserByEmail(email:string){
    return this.userRepository.findOneBy({email})
  }

  createUser(createUserDto:CreateUserDto){
      const newUser = this.userRepository.create(createUserDto)
      return this.userRepository.save(newUser)
  }
}
