export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { setAppData, addHistoryEntry, AppData } from '@/lib/db'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { password, ...data } = body

        if (!process.env.ADMIN_PASSWORD) {
            console.warn('ADMIN_PASSWORD is not set in environment variables.')
            // Allow for local dev if not set, but warn
        }

        if (process.env.ADMIN_PASSWORD && password !== process.env.ADMIN_PASSWORD) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const appData = data as AppData
        appData.lastUpdated = new Date().toISOString()

        // 1. Update Current Status
        await setAppData(appData)

        // 2. Add to History
        await addHistoryEntry({
            date: appData.lastUpdated,
            status: appData.status,
            note: appData.note,
        })

        return NextResponse.json({ success: true, data: appData }, { status: 200 })
    } catch (error) {
        console.error('API Error (Update):', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
