import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ObjectIdColumn, ObjectId } from "typeorm"
import Post from "./Post"
import Comment from "./Comment"

@Entity()
export default class User {
    @ObjectIdColumn()
    _id!: ObjectId

    @Column()
    username!: string

    @Column()
    email!: string

    @Column()
    avatar!: string

    @Column()
    likes: number = 0;

    @Column()
    dislikes: number = 0;

    @OneToMany(() => Post, (post: Post) => post.user)
    posts!: Post[];

    @OneToMany(() => Comment, (comment: Comment) => comment.user)
    comments!: Comment[];

    @Column()
    createdAt: Date = new Date();

    @Column({})
    updatedAt: Date = new Date();
}