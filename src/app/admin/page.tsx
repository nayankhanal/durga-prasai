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
            <main className="min-h-screen bg-[#fff8e7] text-slate-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '32px 32px' }} />
                <div className="w-full max-w-md bg-white border-4 border-slate-900 rounded-3xl shadow-[8px_8px_0_rgba(15,23,42,1)] p-8 relative z-10 transform -rotate-1 hover:rotate-1 transition-transform duration-300">
                    <h1 className="text-3xl font-black uppercase tracking-widest mb-8 text-center border-b-4 border-dashed border-red-300 pb-4 text-slate-900">
                        Top Secret Access 🕵️
                    </h1>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block font-black text-sm text-slate-600 uppercase mb-2">Password Pls</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-slate-100 border-4 border-slate-900 rounded-xl text-slate-900 p-4 font-bold focus:bg-white focus:outline-none transition-colors shadow-[inset_0_4px_0_rgba(0,0,0,0.1)]"
                                placeholder="ENTER PASSWORD"
                            />
                        </div>
                        {errorMsg && <p className="text-red-500 font-mono text-sm">{errorMsg}</p>}
                        <button
                            type="submit"
                            className="w-full bg-yellow-400 text-slate-900 border-4 border-slate-900 rounded-xl shadow-[4px_4px_0_rgba(15,23,42,1)] font-black uppercase py-4 hover:-translate-y-1 hover:shadow-[6px_6px_0_rgba(15,23,42,1)] active:translate-y-1 active:shadow-none transition-all"
                        >
                            Let me in! 🚪
                        </button>
                    </form>
                    <div className="mt-8 text-center flex justify-center">
                        <Link href="/" className="text-xs font-bold text-slate-500 hover:text-pink-500 underline uppercase transition-colors">Return to Safety</Link>
                    </div>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-[#fff8e7] text-slate-900 p-4 md:p-8 relative overflow-x-hidden">
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '32px 32px' }} />
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b-4 border-dashed border-slate-300 pb-6 gap-4">
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-widest text-slate-900 drop-shadow-[2px_2px_0_rgba(255,255,255,1)]">
                        Control Room 🎛️
                    </h1>
                    <button
                        onClick={() => {
                            setIsAuthenticated(false)
                            setPassword('')
                        }}
                        className="flex items-center gap-2 text-slate-500 hover:text-red-500 font-bold uppercase text-sm transition-colors border-2 border-transparent hover:border-red-500 px-4 py-2 rounded-full"
                    >
                        <LogOut className="w-4 h-4" />
                        Lock Session
                    </button>
                </div>

                {loading && !formData.status && (
                    <div className="animate-pulse space-y-8">
                        <div className="h-24 bg-slate-200 border-4 border-slate-300 rounded-3xl"></div>
                        <div className="h-64 bg-slate-200 border-4 border-slate-300 rounded-3xl"></div>
                    </div>
                )}

                {formData.status && (
                    <form onSubmit={handleSave} className="space-y-8">

                        {/* Status Selection */}
                        <div className="bg-yellow-100 border-4 border-slate-900 rounded-3xl shadow-[8px_8px_0_rgba(15,23,42,1)] p-6 md:p-8 transform hover:-rotate-1 transition-transform">
                            <label className="block font-black text-lg text-slate-800 uppercase mb-4">Current Status</label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {(['YES', 'NO', 'UNKNOWN'] as StatusType[]).map((s) => (
                                    <button
                                        key={s}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, status: s })}
                                        className={cn(
                                            "py-6 text-2xl font-black uppercase transition-all rounded-2xl border-4",
                                            formData.status === s
                                                ? s === 'YES' ? "bg-red-500 border-slate-900 text-white shadow-[4px_4px_0_rgba(15,23,42,1)] scale-105"
                                                    : s === 'NO' ? "bg-green-500 border-slate-900 text-white shadow-[4px_4px_0_rgba(15,23,42,1)] scale-105"
                                                        : "bg-orange-400 border-slate-900 text-white shadow-[4px_4px_0_rgba(15,23,42,1)] scale-105"
                                                : "bg-white border-slate-300 text-slate-400 hover:border-slate-500 hover:bg-slate-50 hover:text-slate-600 hover:-translate-y-1"
                                        )}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Note & Probability */}
                            <div className="space-y-8 bg-pink-100 border-4 border-slate-900 rounded-3xl shadow-[8px_8px_0_rgba(15,23,42,1)] p-6 md:p-8 transform hover:rotate-1 transition-transform">
                                <div>
                                    <label className="block font-black text-sm text-slate-700 uppercase mb-2">Context Note / Gossip</label>
                                    <textarea
                                        value={formData.note || ''}
                                        onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                                        className="w-full bg-white border-4 border-slate-900 rounded-2xl text-slate-900 p-4 font-bold focus:shadow-[inset_0_0_0_4px_rgba(244,114,182,0.5)] focus:outline-none transition-colors h-32 resize-none"
                                        placeholder="Spill the tea here..."
                                    />
                                </div>

                                <div>
                                    <label className="block font-black text-xl text-slate-800 uppercase mb-2">
                                        Arrest Probability: <span className="text-pink-600 drop-shadow-[1px_1px_0_rgba(255,255,255,1)]">{formData.probability}%</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={formData.probability || 0}
                                        onChange={(e) => setFormData({ ...formData, probability: parseInt(e.target.value) })}
                                        className="w-full accent-pink-500 h-4 bg-white border-2 border-slate-900 rounded-full appearance-none cursor-pointer"
                                    />
                                </div>
                            </div>

                            {/* Counters */}
                            <div className="flex flex-col space-y-8 bg-blue-100 border-4 border-slate-900 rounded-3xl shadow-[8px_8px_0_rgba(15,23,42,1)] p-6 md:p-8">
                                <div>
                                    <label className="block font-black text-sm text-slate-700 uppercase mb-2">Total Arrests 🚔</label>
                                    <input
                                        type="number"
                                        min="0"
                                        value={formData.arrestCount || 0}
                                        onChange={(e) => setFormData({ ...formData, arrestCount: parseInt(e.target.value) })}
                                        className="w-full bg-white border-4 border-slate-900 rounded-2xl text-slate-900 p-4 font-black text-3xl focus:shadow-[inset_0_0_0_4px_rgba(59,130,246,0.5)] focus:outline-none transition-colors"
                                    />
                                </div>
                                <div className="mt-auto">
                                    <label className="block font-black text-sm text-slate-700 uppercase mb-2">Total Releases 🕊️</label>
                                    <input
                                        type="number"
                                        min="0"
                                        value={formData.releaseCount || 0}
                                        onChange={(e) => setFormData({ ...formData, releaseCount: parseInt(e.target.value) })}
                                        className="w-full bg-white border-4 border-slate-900 rounded-2xl text-slate-900 p-4 font-black text-3xl focus:shadow-[inset_0_0_0_4px_rgba(59,130,246,0.5)] focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Messages & Submit */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t-4 border-dashed border-slate-300">
                            <div className="font-bold text-lg min-h-[28px]">
                                {errorMsg && <span className="text-red-600 bg-red-100 px-4 py-2 rounded-lg border-2 border-red-200 uppercase">{errorMsg}</span>}
                                {successMsg && <span className="text-green-700 bg-green-100 px-4 py-2 rounded-lg border-2 border-green-200 uppercase">{successMsg}</span>}
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className={cn(
                                    "flex items-center gap-3 bg-indigo-500 text-white rounded-2xl shadow-[6px_6px_0_rgba(15,23,42,1)] border-4 border-slate-900 font-black uppercase px-8 py-4 text-xl hover:-translate-y-1 hover:shadow-[8px_8px_0_rgba(15,23,42,1)] active:translate-y-1 active:shadow-none transition-all w-full md:w-auto justify-center",
                                    loading && "opacity-50 cursor-not-allowed hidden"
                                )}
                            >
                                <Save className={cn("w-6 h-6", loading && "animate-spin")} />
                                {loading ? 'Saving...' : 'Deploy Changes 🚀'}
                            </button>
                        </div>

                    </form>
                )}

                <div className="mt-16 text-center">
                    <Link href="/" className="text-sm font-bold text-slate-500 hover:text-pink-500 underline uppercase transition-colors">Return to Safety</Link>
                </div>
            </div>
        </main>
    )
}
