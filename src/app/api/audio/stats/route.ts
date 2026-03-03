import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/audio/stats — get play count
export async function GET() {
    try {
        const stat = await prisma.audioStat.findUnique({
            where: { id: 1 },
        })

        return NextResponse.json({ playCount: stat?.playCount ?? 0 })
    } catch (error) {
        console.error('Audio stats GET error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
