import { src } from "."
import User from "./entities/User"
import Post from "./entities/Post"
import { ObjectId } from "mongodb"

export const getUser = async (name: string): Promise<User | null> => {
    return await src.getRepository(User).findOne({
        where: {
            username: name,
        }
    })
}

export const getUserByID = async (id: string): Promise<User | null> => {
    try {
        const oid = new ObjectId(id)
        return await src.getRepository(User).findOne({
            where: {
                _id: oid,
            }
        })
    } catch (err) {
        return null
    }
}

export const createUser = (): User => {
    return src.getRepository(User).create();
}

export const saveUser = async (user: User): Promise<User> => {
    return await src.getRepository(User).save(user)
}

export const getPost = async (id: string): Promise<Post | null> => {
    try {
        const oid = new ObjectId(id)
        return await src.getRepository(Post).findOne({
            where: {
                _id: oid,
            }
        })
    } catch (err) {
        return null
    }
}

export const getRecentPosts = async (count: number = 10): Promise<Post[]> => {
    return (await src.getRepository(Post).find({
        take: count,
    })).reverse()
}

export const createPost = (): Post => {
    return src.getRepository(Post).create();
}

export const savePost = async (post: Post): Promise<Post> => {
    return await src.getRepository(Post).save(post)
}