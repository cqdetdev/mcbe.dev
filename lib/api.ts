import Post from "@/server/database/entities/Post"
import User from "@/server/database/entities/User";

export const BASE_URL = "http://localhost:3000/api"

export const fetchPost = async (id: string): Promise<Post | null> => {
    const res = await fetch(`${BASE_URL}/posts/${id}`)
    if (!res.ok) {
        return null;
    }
    return await res.json()
}

export const fetchRecentPost = async (): Promise<Post[] | null> => {
    const res = await fetch(`${BASE_URL}/posts/recent`)
    if (!res.ok) {
        return null;
    }
    return await res.json()
}

export const createPost = async (title: string, content: string): Promise<string | null> => {
    const res = await fetch(`${BASE_URL}/posts/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title,
            content: content,
        })
    })

    if (!res.ok) {
        return null
    }
    return (await res.json()).id;
}

export const fetchUser = async (id: string): Promise<User | null> => {
    const res = await fetch(`${BASE_URL}/users/${id}`)
    if (!res.ok) {
        return null;
    }
    return await res.json()
}