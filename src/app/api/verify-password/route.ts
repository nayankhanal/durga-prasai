export const runtime = 'nodejs'

import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const { password } = await request.json()

        if (!process.env.ADMIN_PASSWORD) {
            console.warn('ADMIN_PASSWORD is not set. Granting access for local dev.')
            return NextResponse.json({ success: true })
        }

        if (password !== process.env.ADMIN_PASSWORD) {
            return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
        }

        return NextResponse.json({ success: true })
    } catch {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
