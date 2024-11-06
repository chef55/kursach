import { isNotEmpty, IsNotEmpty } from "class-validator";


export class CreatePostDto{
    @IsNotEmpty()
    description:string

    @IsNotEmpty()
    image_name:string

    @IsNotEmpty()
    encoding:string

    @IsNotEmpty()
    mimetype:string

    @IsNotEmpty()
    image:Buffer
}