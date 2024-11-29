import { Body, Controller, Get, HttpStatus, Param, ParseFilePipeBuilder, Post, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { diskStorage } from 'multer';
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
    console.log(params.id)
    return this.userService.getUser(params.id);
  }

  @Get('profile/:id')
  getProfile(@Param() params:any, @Res() res) {
    return of(res.sendFile(join(process.cwd(),'../uploads',params.id)))
  }

  @UseGuards(AuthenticatedGuard)
  @Post('image')
  @UseInterceptors(FileInterceptor('file',{storage:diskStorage({
    destination: '../uploads',
    filename: (req,file,cb)=>{
      cb(null, Date.now().toString()+"."+file.mimetype.split('/')[1].toString())
    }
  })},/*{dest:'../uploads'}*/))
  createPost(@UploadedFile(
      new ParseFilePipeBuilder()
      .addFileTypeValidator({
        fileType: 'image',
      })
      //.addMaxSizeValidator({
      //  maxSize: 100000
      //})
      .build({
        errorHttpStatusCode: HttpStatus.BAD_REQUEST,
      }),
    )
      file: Express.Multer.File,
      @Session() session:Record<string,any>
    ){
        return this.userService.newProfileImage(file,session)
      }
  
  @Post('create')
  createUser(@Body() createUserDto:CreateUserDto){
    
    return this.userService.createUser(createUserDto)
  }

}
