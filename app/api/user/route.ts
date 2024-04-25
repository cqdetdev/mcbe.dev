import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        res.status(200).json({})
    } catch (err) {
        res.status(500).json({ error: 'failed to load data' })
    }
}