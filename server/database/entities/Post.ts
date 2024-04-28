import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, type Relation, ObjectIdColumn, ObjectId, JoinColumn } from "typeorm"
import User from "./User"
import Comment from "./Comment"

@Entity()
export default class Post {
    @ObjectIdColumn()
    _id!: ObjectId;

    @ObjectIdColumn()
    id!: ObjectId;

    @Column()
    title!: string;

    @Column()
    text!: string;

    @Column()
    likes: number = 0;

    @Column()
    dislikes: number = 0;

    @Column()
    userID!: ObjectId

    @Column()
    comments!: Comment[];

    @Column()
    createdAt: Date = new Date();

    @Column()
    updatedAt: Date = new Date();
}