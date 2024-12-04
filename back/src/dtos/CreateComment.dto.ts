import { isNotEmpty, IsNotEmpty } from "class-validator";
import { IntegerType } from "typeorm";


export class CreateCommentDto{
    @IsNotEmpty()
    post:string

    @IsNotEmpty()
    text:string
    
}