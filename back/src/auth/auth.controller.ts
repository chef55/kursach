import { Body, Controller, Get, Post, Req, Session, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LogInDto } from '../dtos/LogIn.dto';
import { AuthenticatedGuard, LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthenticatedGuard)
  @Get()
  getAuthenticated(@Session() session: Record<string, any>){
    return session.passport
  }

  @Get('delete')
  deleteSession(@Session() session:Record<string,any>){
    return this.authService.deleteSession(session.id)
  }

  @UseGuards(LocalAuthGuard)
  @Post('')
  authenticateUser(@Body() logInDto:LogInDto){
    //console.log("sing in")
    return this.authService.validateUser(logInDto.username, logInDto.password)
  }
}
