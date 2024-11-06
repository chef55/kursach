import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTable } from 'src/typeorm/User';
@Module({
    imports: [TypeOrmModule.forFeature([UserTable])],
    controllers: [UserController],
    providers: [UserService],
    exports:[UserService]
})
export class UserModule {}
