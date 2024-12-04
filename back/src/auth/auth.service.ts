import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SessionTable } from 'src/typeorm';
import { AppDataSource } from 'src/typeorm/DataSource';
import { UserService } from 'src/user/user.service';


@Injectable()
export class AuthService {
  constructor(
    private userService:UserService){}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findUserByName(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null
  }

  async deleteSession(session:string){
    const del = await AppDataSource.createQueryBuilder().delete().from(SessionTable).where('id=:id',{id:session}).execute()
  }
}
