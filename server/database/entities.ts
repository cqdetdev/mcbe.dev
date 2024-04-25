import { src } from "."
import User from "./entities/User"

export const getUser = async (name: string): Promise<User | null> => {
    return await src.getRepository(User).findOne({
        where: {
            username: name,
        }
    })
}

export const createUser = (): User => {
    return src.getRepository(User).create();
}

export const saveUser = async (user: User): Promise<User> => {
    return await src.getRepository(User).save(user)
}