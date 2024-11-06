import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LogInDto } from '../dtos/LogIn.dto';
import { AuthenticatedGuard, LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

 //@UseGuards(AuthenticatedGuard)
  //@Get()
  //getUser(): string {
  //  console.log('chef')
  //  return 'idi nahui'
  //}

  

  @UseGuards(LocalAuthGuard)
  @Post('')
  authenticateUser(@Body() logInDto:LogInDto){
    console.log("sing in")
    return this.authService.validateUser(logInDto.username, logInDto.password)
  }
}
