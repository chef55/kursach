import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../dtos/CreateUser.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')

  getUser(@Param() params:any) {
    console.log(params.id)
    return this.userService.getUser(params.id);
  }
  
  @Post('create')
  createUser(@Body() createUserDto:CreateUserDto){
    return this.userService.createUser(createUserDto)
  }

}
