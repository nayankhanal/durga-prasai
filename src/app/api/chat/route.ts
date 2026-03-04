export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getClientIpHash } from '@/lib/ip'
import { checkRateLimit } from '@/lib/rate-limit'
import { filterProfanity } from '@/lib/profanity'

// GET /api/chat — fetch last 100 messages
export async function GET() {
    try {
        const messages = await prisma.chatMessage.findMany({
            orderBy: { createdAt: 'asc' },
            take: 100,
        })

        return NextResponse.json(messages)
    } catch (error) {
        console.error('Chat GET error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

// POST /api/chat — send a message
export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { message } = body

        if (!message || typeof message !== 'string') {
            return NextResponse.json({ error: 'Message is required' }, { status: 400 })
        }

        const trimmed = message.trim()
        if (trimmed.length === 0 || trimmed.length > 300) {
            return NextResponse.json(
                { error: 'Message must be 1-300 characters' },
                { status: 400 }
            )
        }

        // Rate limit check
        const ipHash = await getClientIpHash()
        const { allowed, retryAfterMs } = checkRateLimit(ipHash)

        if (!allowed) {
            return NextResponse.json(
                {
                    error: 'Too many messages. Please wait.',
                    retryAfterMs,
                },
                { status: 429 }
            )
        }

        // Profanity filter
        const filtered = filterProfanity(trimmed)

        // Sanitize: strip HTML tags to prevent XSS
        const sanitized = filtered.replace(/<[^>]*>/g, '')

        const newMessage = await prisma.chatMessage.create({
            data: {
                message: sanitized,
            },
        })

        return NextResponse.json(newMessage, { status: 201 })
    } catch (error) {
        console.error('Chat POST error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
