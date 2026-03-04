export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// POST /api/admin/clear-chat — delete all chat messages
export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { password } = body

        if (process.env.ADMIN_PASSWORD && password !== process.env.ADMIN_PASSWORD) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        await prisma.chatMessage.deleteMany()

        return NextResponse.json({ success: true, message: 'All chat messages cleared.' })
    } catch (error) {
        console.error('Admin clear-chat error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
