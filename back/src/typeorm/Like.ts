import { Column, Entity, IsNull, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserTable } from "./User";
import { PostTable } from "./Post";

@Entity()
export class LikeTable{
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name:'like_id',
    })

    id:string;

    @ManyToOne(()=>UserTable, (user)=>user.likes)
    user: UserTable

    @ManyToOne(()=>PostTable, (post)=>post.likes)
    post: UserTable
}