import { getPost, getUser } from "@/server/database/entities"
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const post = await getPost(params.id);
    if (!post) {
        return notFound();
    }

    return NextResponse.json(post);
}