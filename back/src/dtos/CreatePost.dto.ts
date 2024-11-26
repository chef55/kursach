import { isNotEmpty, IsNotEmpty } from "class-validator";


export class CreatePostDto{
    @IsNotEmpty()
    description:string
    image_id:string
    image_name:string
    user
}