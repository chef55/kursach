import { Body, Controller, Get, HttpStatus, Param, ParseFilePipeBuilder, Post, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { Session } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthenticatedGuard } from 'src/auth/local-auth.guard';
import { join } from 'path';
import { of } from 'rxjs';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  getUser(@Param() params:any) {
    return this.userService.getUser(params.id);
  }

  @Get('image/:id')
  getProfile(@Param() params:any, @Res() res) {
    return of(res.sendFile(join(process.cwd(),'../uploads',params.id)))
  }

  @UseGuards(AuthenticatedGuard)
  @Post('image')
  @UseInterceptors(FileInterceptor('file'))
  createPost(@UploadedFile(
    new ParseFilePipeBuilder()
    .addFileTypeValidator({
      fileType: 'image',
    })
    .build({
      errorHttpStatusCode: HttpStatus.BAD_REQUEST,
    }),
  )
  file: Express.Multer.File,
  @Session() session:Record<string,any>){
    //console.log(file.originalname)
      return this.userService.newProfileImage(file,session)
  }
  
  @Post('create')
  createUser(@Body() createUserDto:CreateUserDto){
    createUserDto.image_id='default_profile.webp'
    return this.userService.createUser(createUserDto)
  }

}
