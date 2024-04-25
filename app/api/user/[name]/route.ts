import { getUser } from "@/server/database/entities"
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { name: string } }) {
}