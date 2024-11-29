import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PostTable } from "./Post";
import { LikeTable } from "./Like";
import { CommentTable } from "./Comment";

@Entity()
export class UserTable{
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name:'user_id',
    })
    id:string;

    @Column()
    email:string;

    @Column()
    username:string;

    @Column()
    password:string;

    @Column()
    image_id:string;

    @OneToMany(()=>PostTable, (post)=>post.user)
    posts: PostTable[]

    @OneToMany(()=>LikeTable, (like)=>like.user)
    likes: LikeTable[]
    
    @OneToMany(()=>CommentTable, (comment)=>comment.post)
    comments: CommentTable[]
}