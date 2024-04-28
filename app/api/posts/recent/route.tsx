import { getPost, getRecentPosts, getUser } from "@/server/database/entities"
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const post = await getRecentPosts(10);
    if (!post.length) {
        return notFound();
    }

    return NextResponse.json(post);
}