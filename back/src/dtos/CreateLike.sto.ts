import { isNotEmpty, IsNotEmpty } from "class-validator";
import { IntegerType } from "typeorm";


export class CreateLikeDto{
    @IsNotEmpty()
    post:string

    user:string
    
}