import { IsEmail, IsNotEmpty } from "class-validator";
import { UserAlreadyExist } from "../validation/UserAlreadyExist";
import { EmailAlreadyExist } from "../validation/EmailAlreadyExist";


export class CreateUserDto{

    @IsEmail({},{message:"Invalid email"})
    @EmailAlreadyExist({message:"Email already taken"})
    email:string;

    @UserAlreadyExist({message:"Username already taken"})
    @IsNotEmpty()
    username:string;

    @IsNotEmpty()
    password:string;
}