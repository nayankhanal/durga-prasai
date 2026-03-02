import { NextResponse } from 'next/server'
import { getAppData, getHistory } from '@/lib/db'

export async function GET() {
    try {
        const data = await getAppData()
        const history = await getHistory()

        return NextResponse.json({ ...data, history }, { status: 200 })
    } catch (error) {
        console.error('API Error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
