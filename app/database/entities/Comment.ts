import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, type Relation } from "typeorm"
import Post from "./Post"
import User from "./User"

@Entity()
export default class Comment {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    text!: string

    @Column()
    likes!: number

    @Column()
    dislikes!: number

    @ManyToOne(() => Post, (post) => post.comments)
    post!: Relation<Post>;

    @ManyToOne(() => User, (user) => user.comments)
    user!: Relation<User>

    @Column()
    createdAt: Date = new Date()

    @Column()
    updatedAt: Date = new Date()
}