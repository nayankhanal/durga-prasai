export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// POST /api/admin/reset-votes — delete all votes
export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { password } = body

        if (process.env.ADMIN_PASSWORD && password !== process.env.ADMIN_PASSWORD) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        await prisma.userVote.deleteMany()

        return NextResponse.json({ success: true, message: 'All votes reset.' })
    } catch (error) {
        console.error('Admin reset-votes error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
