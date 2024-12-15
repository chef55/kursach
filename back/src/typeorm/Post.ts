import { Column, Entity, IsNull, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserTable } from "./User";
import { LikeTable } from "./Like";
import { CommentTable } from "./Comment";

@Entity()
export class PostTable{
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name:'post_id',
    })
    id:string;

    @Column('varchar')
    description='';

    @Column('varchar')
    image_id='';

    @Column('varchar')
    image_name=''

    @ManyToOne(()=>UserTable, (user)=>user.posts, { onDelete: 'CASCADE' })
    user: UserTable

    @OneToMany(()=>LikeTable, (like)=>like.post)
    likes: LikeTable[]

    @OneToMany(()=>CommentTable, (comment)=>comment.post)
    comments: CommentTable[]
}