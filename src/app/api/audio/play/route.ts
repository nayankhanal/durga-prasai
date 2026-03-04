export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// POST /api/audio/play — increment play count
export async function POST() {
    try {
        const stat = await prisma.audioStat.upsert({
            where: { id: 1 },
            update: { playCount: { increment: 1 } },
            create: { id: 1, playCount: 1 },
        })

        return NextResponse.json({ playCount: stat.playCount })
    } catch (error) {
        console.error('Audio play POST error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
