import { kv } from '@vercel/kv'

export type StatusType = 'YES' | 'NO' | 'UNKNOWN'

export interface AppData {
    status: StatusType
    note: string
    probability: number
    arrestCount: number
    releaseCount: number
    lastUpdated: string
}

export interface HistoryEntry {
    id: string
    date: string
    status: StatusType
    note: string
}

const DEFAULT_DATA: AppData = {
    status: 'NO',
    note: 'Released from police custody (March 6, 2026).',
    probability: 5,
    arrestCount: 14,
    releaseCount: 14,
    lastUpdated: new Date().toISOString(),
}

// Fallback in-memory store for local dev without KV
let fallbackData = { ...DEFAULT_DATA }
let fallbackHistory: HistoryEntry[] = []

const isKvAvailable = () => !!process.env.KV_REST_API_URL && !!process.env.KV_REST_API_TOKEN

export async function getAppData(): Promise<AppData> {
    if (isKvAvailable()) {
        try {
            const data = await kv.get<AppData>('app_data')
            return data || DEFAULT_DATA
        } catch (e) {
            console.error('KV getAppData error:', e)
            return DEFAULT_DATA
        }
    }
    return fallbackData
}

export async function setAppData(data: AppData): Promise<void> {
    if (isKvAvailable()) {
        try {
            await kv.set('app_data', data)
        } catch (e) {
            console.error('KV setAppData error:', e)
        }
    } else {
        fallbackData = data
    }
}

export async function getHistory(): Promise<HistoryEntry[]> {
    if (isKvAvailable()) {
        try {
            const history = await kv.lrange<HistoryEntry>('status_history', 0, 99) // Get last 100
            return history || []
        } catch (e) {
            console.error('KV getHistory error:', e)
            return []
        }
    }
    return fallbackHistory
}

export async function addHistoryEntry(entry: Omit<HistoryEntry, 'id'>): Promise<void> {
    const newEntry: HistoryEntry = {
        ...entry,
        id: crypto.randomUUID(),
    }

    if (isKvAvailable()) {
        try {
            await kv.lpush('status_history', newEntry)
            // Keep only the latest 100 entries to manage size
            await kv.ltrim('status_history', 0, 99)
        } catch (e) {
            console.error('KV addHistoryEntry error:', e)
        }
    } else {
        fallbackHistory = [newEntry, ...fallbackHistory].slice(0, 100)
    }
}
