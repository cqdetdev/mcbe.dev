import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, type Relation, ObjectIdColumn, ObjectId } from "typeorm"
import Post from "./Post"
import User from "./User"

@Entity()
export default class Comment {
    @ObjectIdColumn()
    id!: number

    @Column()
    text!: string

    @Column()
    likes!: number

    @Column()
    dislikes!: number

    @Column()
    postID!: ObjectId

    @Column()
    userID!: ObjectId

    @Column()
    createdAt: Date = new Date()

    @Column()
    updatedAt: Date = new Date()
}