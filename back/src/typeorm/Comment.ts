import { Column, Entity, IsNull, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserTable } from "./User";
import { PostTable } from "./Post";

@Entity()
export class CommentTable{
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name:'comment_id',
    })

    id:string;

    @ManyToOne(()=>UserTable, (user)=>user.comments, { onDelete: 'CASCADE' })
    user: UserTable

    @ManyToOne(()=>PostTable, (post)=>post.comments, { onDelete: 'CASCADE' })
    post: PostTable

    @Column()
    text:string;

    @Column()
    date:string
}