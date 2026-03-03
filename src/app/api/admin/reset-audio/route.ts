import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// POST /api/admin/reset-audio — reset audio play count
export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { password } = body

        if (process.env.ADMIN_PASSWORD && password !== process.env.ADMIN_PASSWORD) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        await prisma.audioStat.upsert({
            where: { id: 1 },
            update: { playCount: 0 },
            create: { id: 1, playCount: 0 },
        })

        return NextResponse.json({ success: true, message: 'Audio counter reset to 0.' })
    } catch (error) {
        console.error('Admin reset-audio error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
