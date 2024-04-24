import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, type Relation } from "typeorm"
import User from "./User"
import Comment from "./Comment"

@Entity()
export default class Post {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    title!: string

    @Column()
    text!: string

    @Column()
    likes!: number

    @Column()
    dislikes!: number

    @ManyToOne(() => User, (user: User) => user.posts)
    user!: Relation<User>

    @OneToMany(() => Comment, (comment: Comment) => comment.post)
    comments!: Comment[]

    @Column()
    createdAt: Date = new Date()

    @Column()
    updatedAt: Date = new Date()
}