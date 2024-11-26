import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    //console.log('val')
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: "Bad Request",
        message: 'Incorrect username or password',
      },HttpStatus.BAD_REQUEST)
    }
    return user;
  }
}