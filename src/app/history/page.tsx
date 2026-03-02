"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { HistoryEntry } from '@/lib/db'
import { cn } from '@/lib/utils'
import { StatusType } from '@/lib/db'

export default function HistoryPage() {
    const [history, setHistory] = useState<HistoryEntry[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchHistory() {
            try {
                const res = await fetch('/api/history')
                if (res.ok) {
                    const data = await res.json()
                    setHistory(data)
                }
            } catch (err) {
                console.error('Failed to fetch history', err)
            } finally {
                setLoading(false)
            }
        }
        fetchHistory()
    }, [])

    const getStatusColor = (s: StatusType) => {
        switch (s) {
            case 'YES': return 'text-red-500'
            case 'NO': return 'text-green-500'
            case 'UNKNOWN': return 'text-yellow-500'
            default: return 'text-white'
        }
    }

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 p-4 md:p-12">
            <div className="max-w-4xl mx-auto space-y-8">
                <Link
                    href="/"
                    className="text-slate-500 hover:text-slate-900 font-mono text-sm underline underline-offset-4 transition-colors inline-block mb-8"
                >
                    ← Back to Live Tracker
                </Link>

                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-widest border-b-2 border-slate-200 pb-4">
                    Status History
                </h1>

                {loading ? (
                    <div className="animate-pulse flex flex-col space-y-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="h-16 w-full bg-slate-200 rounded-lg"></div>
                        ))}
                    </div>
                ) : history.length === 0 ? (
                    <div className="text-center py-12 text-slate-500 font-mono text-lg bg-white rounded-xl border border-slate-200 shadow-sm">
                        No historical records found.
                    </div>
                ) : (
                    <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 font-mono text-sm text-slate-500 uppercase tracking-wider border-b border-slate-200">
                                    <th className="p-4 font-semibold">Date & Time</th>
                                    <th className="p-4 font-semibold">Status</th>
                                    <th className="p-4 font-semibold">Note</th>
                                </tr>
                            </thead>
                            <tbody className="font-mono text-sm">
                                {history.map((entry) => (
                                    <tr key={entry.id} className="hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0">
                                        <td className="p-4 text-slate-600 whitespace-nowrap">
                                            {new Date(entry.date).toLocaleString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </td>
                                        <td className={cn("p-4 font-bold", getStatusColor(entry.status))}>
                                            {entry.status}
                                        </td>
                                        <td className="p-4 text-slate-700">
                                            {entry.note || '-'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </main>
    )
}
