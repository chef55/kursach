import { Column, Entity, IsNull, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserTable } from "./User";
import { PostTable } from "./Post";

@Entity()
export class ImageTable{
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name:'comment_id',
    })
    id:string;

    @Column()
    image_name:string;
}