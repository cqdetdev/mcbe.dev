import { createPost, createUser, getUser, savePost, saveUser } from "@/server/database/entities"
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";
import { handler } from "../../auth/[...nextauth]/route";

const MIN_LENGTH = 5;

export async function POST(req: Request) {
    const session = await getServerSession<any, any>(handler);
    if (!session) {
        return notFound();
    }
    try {
        const body = await req.json();
        let user = await getUser(session.user.name);
        const title: string = body.title;
        const content: string = body.content;

        if (!user) {
            user = createUser();
            user.username = session.user.name;
            user.email = session.user.email;
            user.avatar = session.user.image;
            await saveUser(user);
        }

        if (title.length < MIN_LENGTH || content.length < MIN_LENGTH) {
            return NextResponse.json({ "error": "Title and content must be at least 5 characters long." })
        }

        const post = createPost();
        post.title = title;
        post.text = content;
        post.userID = user.id;

        user.posts.push(post);

        await saveUser(user)
        await savePost(post)

        if (!post._id) {
            return NextResponse.json({ "error": "Failed to create post." })
        }

        return NextResponse.json({ "id": post._id.toString(), success: true });
    } catch (error: any) {
        return NextResponse.json({ error: error.toString(), success: false });
    }
}