import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ObjectIdColumn, ObjectId, type Relation, AfterLoad, JoinColumn } from "typeorm"
import Post from "./Post"
import Comment from "./Comment"

@Entity()
export default class User {
    @ObjectIdColumn()
    id!: ObjectId;

    @ObjectIdColumn()
    _id!: ObjectId

    @Column()
    username!: string;

    @Column()
    email!: string;

    @Column()
    avatar!: string;

    @Column()
    likes: number = 0;

    @Column()
    dislikes: number = 0;

    @Column()
    posts!: Relation<Post>[];

    @Column()
    comments!: Comment[];

    @Column()
    createdAt: Date = new Date();

    @Column()
    updatedAt: Date = new Date();

    @AfterLoad()
    async nullChecks() {
        if (!this.posts) {
            this.posts = []
        }

        if (!this.comments) {
            this.comments = []
        }
    }
}