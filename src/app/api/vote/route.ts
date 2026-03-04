export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getClientIpHash } from '@/lib/ip'

// GET /api/vote — get vote counts
export async function GET() {
    try {
        const [keepCount, releaseCount] = await Promise.all([
            prisma.userVote.count({ where: { voteType: 'KEEP' } }),
            prisma.userVote.count({ where: { voteType: 'RELEASE' } }),
        ])

        const total = keepCount + releaseCount

        return NextResponse.json({ keepCount, releaseCount, total })
    } catch (error) {
        console.error('Vote GET error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

// POST /api/vote — cast a vote
export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { voteType } = body

        if (!voteType || !['KEEP', 'RELEASE'].includes(voteType)) {
            return NextResponse.json(
                { error: 'voteType must be KEEP or RELEASE' },
                { status: 400 }
            )
        }

        const ipHash = await getClientIpHash()

        // Check if user has already voted
        const existingVote = await prisma.userVote.findUnique({
            where: { ipHash },
        })

        if (existingVote) {
            return NextResponse.json(
                { error: 'You have already voted.', existingVote: existingVote.voteType },
                { status: 409 }
            )
        }

        // Create vote
        await prisma.userVote.create({
            data: {
                ipHash,
                voteType,
            },
        })

        // Return updated counts
        const [keepCount, releaseCount] = await Promise.all([
            prisma.userVote.count({ where: { voteType: 'KEEP' } }),
            prisma.userVote.count({ where: { voteType: 'RELEASE' } }),
        ])

        return NextResponse.json(
            { success: true, keepCount, releaseCount, total: keepCount + releaseCount },
            { status: 201 }
        )
    } catch (error) {
        console.error('Vote POST error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
