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
        <main className="min-h-screen bg-[#fff8e7] text-slate-900 p-4 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
            <div className="max-w-4xl mx-auto space-y-8 relative z-10">
                <Link
                    href="/"
                    className="text-slate-500 hover:text-pink-500 font-bold text-sm underline underline-offset-4 transition-colors inline-block mb-8"
                >
                    ← Back to Live Tracker 🕵️
                </Link>

                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-widest border-b-4 border-dashed border-slate-300 pb-4 text-slate-900 drop-shadow-[2px_2px_0_rgba(255,255,255,1)]">
                    Status History 📜
                </h1>

                {loading ? (
                    <div className="animate-pulse flex flex-col space-y-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="h-16 w-full bg-slate-200 border-4 border-slate-300 rounded-2xl"></div>
                        ))}
                    </div>
                ) : history.length === 0 ? (
                    <div className="text-center py-12 text-slate-500 font-bold text-lg bg-yellow-100 rounded-3xl border-4 border-slate-900 shadow-[8px_8px_0_rgba(15,23,42,1)]">
                        No historical drama found yet. 🍵
                    </div>
                ) : (
                    <div className="overflow-x-auto bg-white rounded-3xl border-4 border-slate-900 shadow-[8px_8px_0_rgba(15,23,42,1)] mb-12">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-pink-100 font-black text-sm text-slate-800 uppercase tracking-wider border-b-4 border-slate-900">
                                    <th className="p-4 border-r-4 border-slate-900">Date & Time</th>
                                    <th className="p-4 border-r-4 border-slate-900">Status</th>
                                    <th className="p-4">The Tea ☕</th>
                                </tr>
                            </thead>
                            <tbody className="font-bold text-sm text-slate-700">
                                {history.map((entry) => (
                                    <tr key={entry.id} className="hover:bg-yellow-50 transition-colors border-b-4 border-slate-200 last:border-0">
                                        <td className="p-4 whitespace-nowrap border-r-4 border-slate-200">
                                            {new Date(entry.date).toLocaleString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </td>
                                        <td className={cn("p-4 font-black border-r-4 border-slate-200", getStatusColor(entry.status))}>
                                            {entry.status}
                                        </td>
                                        <td className="p-4 italic">
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
