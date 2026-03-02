"use client"

import { useState, useEffect } from 'react'
import { AppData, StatusType } from '@/lib/db'
import Link from 'next/link'
import { Save, LogOut } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function AdminPage() {
    const [password, setPassword] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')
    const [formData, setFormData] = useState<Partial<AppData>>({})

    // Fetch current data once authenticated
    useEffect(() => {
        if (isAuthenticated) {
            setLoading(true)
            fetch('/api/status')
                .then(res => res.json())
                .then(data => {
                    setFormData({
                        status: data.status,
                        note: data.note,
                        probability: data.probability,
                        arrestCount: data.arrestCount,
                        releaseCount: data.releaseCount,
                    })
                    setLoading(false)
                })
                .catch(err => {
                    console.error(err)
                    setErrorMsg('Failed to fetch existing data.')
                    setLoading(false)
                })
        }
    }, [isAuthenticated])

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        if (password) {
            setIsAuthenticated(true)
            setErrorMsg('')
        }
    }

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setErrorMsg('')
        setSuccessMsg('')

        try {
            const res = await fetch('/api/update-status', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, password })
            })

            if (!res.ok) {
                if (res.status === 401) {
                    setIsAuthenticated(false)
                    setPassword('')
                    throw new Error('Invalid Password')
                }
                throw new Error('Failed to update status')
            }

            setSuccessMsg('Status updated successfully!')
            setTimeout(() => setSuccessMsg(''), 3000)
        } catch (err: any) {
            setErrorMsg(err.message || 'An error occurred')
        } finally {
            setLoading(false)
        }
    }

    if (!isAuthenticated) {
        return (
            <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col items-center justify-center p-4">
                <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
                    <h1 className="text-3xl font-black uppercase tracking-widest mb-8 text-center border-b-2 border-slate-100 pb-4">
                        Security Clearance
                    </h1>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block font-mono text-sm text-slate-500 uppercase mb-2">Access Code</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-300 rounded-lg text-slate-900 p-4 font-mono focus:border-slate-500 focus:outline-none transition-colors"
                                placeholder="ENTER PASSWORD"
                            />
                        </div>
                        {errorMsg && <p className="text-red-500 font-mono text-sm">{errorMsg}</p>}
                        <button
                            type="submit"
                            className="w-full bg-slate-900 text-white rounded-lg shadow-md font-black uppercase py-4 hover:bg-slate-800 transition-colors"
                        >
                            Authenticate
                        </button>
                    </form>
                    <div className="mt-8 text-center flex justify-center">
                        <Link href="/" className="text-xs font-mono text-slate-500 hover:text-slate-900 underline uppercase transition-colors">Return to Public Tracker</Link>
                    </div>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-12 border-b-2 border-slate-200 pb-4">
                    <h1 className="text-4xl font-black uppercase tracking-widest">
                        Command Center
                    </h1>
                    <button
                        onClick={() => {
                            setIsAuthenticated(false)
                            setPassword('')
                        }}
                        className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-mono uppercase text-sm transition-colors"
                    >
                        <LogOut className="w-4 h-4" />
                        Lock Session
                    </button>
                </div>

                {loading && !formData.status && (
                    <div className="animate-pulse space-y-8">
                        <div className="h-24 bg-slate-200 border border-slate-300 rounded-xl"></div>
                        <div className="h-64 bg-slate-200 border border-slate-300 rounded-xl"></div>
                    </div>
                )}

                {formData.status && (
                    <form onSubmit={handleSave} className="space-y-8">

                        {/* Status Selection */}
                        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 md:p-8">
                            <label className="block font-mono text-sm text-slate-500 uppercase mb-4">Current Status</label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {(['YES', 'NO', 'UNKNOWN'] as StatusType[]).map((s) => (
                                    <button
                                        key={s}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, status: s })}
                                        className={cn(
                                            "py-6 text-2xl font-black uppercase transition-all border-2 rounded-xl",
                                            formData.status === s
                                                ? s === 'YES' ? "bg-red-600 border-red-500 text-white"
                                                    : s === 'NO' ? "bg-green-600 border-green-500 text-white"
                                                        : "bg-yellow-500 border-yellow-400 text-slate-900"
                                                : "bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-300"
                                        )}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Note & Probability */}
                            <div className="space-y-8 bg-white border border-slate-200 rounded-2xl shadow-sm p-6 md:p-8">
                                <div>
                                    <label className="block font-mono text-sm text-slate-500 uppercase mb-2">Context Note (Optional)</label>
                                    <textarea
                                        value={formData.note || ''}
                                        onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                                        className="w-full bg-slate-50 border border-slate-300 rounded-xl text-slate-900 p-4 font-mono focus:border-slate-500 focus:outline-none transition-colors h-32 resize-none"
                                        placeholder="Enter additional details..."
                                    />
                                </div>

                                <div>
                                    <label className="block font-mono text-sm text-slate-600 font-bold uppercase mb-2">
                                        Arrest Probability: {formData.probability}%
                                    </label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={formData.probability || 0}
                                        onChange={(e) => setFormData({ ...formData, probability: parseInt(e.target.value) })}
                                        className="w-full accent-slate-900"
                                    />
                                </div>
                            </div>

                            {/* Counters */}
                            <div className="space-y-8 bg-white border border-slate-200 rounded-2xl shadow-sm p-6 md:p-8">
                                <div>
                                    <label className="block font-mono text-sm text-slate-500 uppercase mb-2">Total Arrests</label>
                                    <input
                                        type="number"
                                        min="0"
                                        value={formData.arrestCount || 0}
                                        onChange={(e) => setFormData({ ...formData, arrestCount: parseInt(e.target.value) })}
                                        className="w-full bg-slate-50 border border-slate-300 rounded-xl text-slate-900 p-4 font-black text-2xl focus:border-slate-500 focus:outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block font-mono text-sm text-slate-500 uppercase mb-2">Total Releases</label>
                                    <input
                                        type="number"
                                        min="0"
                                        value={formData.releaseCount || 0}
                                        onChange={(e) => setFormData({ ...formData, releaseCount: parseInt(e.target.value) })}
                                        className="w-full bg-slate-50 border border-slate-300 rounded-xl text-slate-900 p-4 font-black text-2xl focus:border-slate-500 focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Messages & Submit */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
                            <div className="font-mono text-sm font-bold min-h-[24px]">
                                {errorMsg && <span className="text-red-500 uppercase">{errorMsg}</span>}
                                {successMsg && <span className="text-green-600 uppercase">{successMsg}</span>}
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className={cn(
                                    "flex items-center gap-3 bg-slate-900 text-white rounded-xl shadow-md font-black uppercase px-8 py-4 text-lg hover:bg-slate-800 transition-colors w-full md:w-auto justify-center",
                                    loading && "opacity-50 cursor-not-allowed"
                                )}
                            >
                                <Save className={cn("w-5 h-5", loading && "animate-pulse")} />
                                {loading ? 'Transmitting...' : 'Commit Changes'}
                            </button>
                        </div>

                    </form>
                )}

                <div className="mt-16 text-center">
                    <Link href="/" className="text-sm font-mono text-slate-500 hover:text-slate-900 underline uppercase transition-colors">Return to Public Tracker</Link>
                </div>
            </div>
        </main>
    )
}
