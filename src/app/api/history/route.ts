export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { getHistory } from '@/lib/db'

export async function GET() {
    try {
        const history = await getHistory()
        return NextResponse.json(history, { status: 200 })
    } catch (error) {
        console.error('API Error (History):', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
