"use client"

import { useState, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { RefreshCcw, Check, Copy } from 'lucide-react'
import { cn } from '@/lib/utils'
import { StatusType } from '@/lib/db'
import { useRef } from 'react'

interface StatusDisplayProps {
    status: StatusType
    lastUpdated: string
    note?: string
}

export function StatusDisplay({ status, lastUpdated, note }: StatusDisplayProps) {
    const getStatusColor = (s: StatusType) => {
        switch (s) {
            case 'YES': return 'text-red-600 bg-red-100 border-4 border-red-600 shadow-[8px_8px_0_rgba(220,38,38,1)]'
            case 'NO': return 'text-green-600 bg-green-100 border-4 border-green-600 shadow-[8px_8px_0_rgba(22,163,74,1)]'
            case 'UNKNOWN': return 'text-orange-500 bg-orange-100 border-4 border-orange-500 shadow-[8px_8px_0_rgba(249,115,22,1)]'
            default: return 'text-slate-900 bg-slate-100 border-4 border-slate-900 shadow-[8px_8px_0_rgba(15,23,42,1)]'
        }
    }

    // Client-side only date formatting to prevent hydration mismatch 
    const [dateStr, setDateStr] = useState<string>('')
    useEffect(() => {
        setDateStr(new Date(lastUpdated).toLocaleString('en-US', {
            hour12: true,
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }))
    }, [lastUpdated])

    return (
        <div className="flex flex-col items-center justify-center space-y-8 py-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, type: 'spring', bounce: 0.6 }}
                className={cn(
                    "px-12 py-6 rounded-3xl transform hover:scale-105 transition-transform cursor-crosshair",
                    getStatusColor(status)
                )}
            >
                <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none">
                    {status}
                </h2>
            </motion.div>

            <div className="text-center space-y-4">
                {note && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="bg-blue-100 border-4 border-blue-600 rounded-2xl p-4 shadow-[4px_4px_0_rgba(37,99,235,1)] max-w-2xl mx-auto -rotate-1 hover:rotate-1 transition-transform"
                    >
                        <p className="text-lg md:text-xl font-bold text-blue-900">
                            📢 "{note}"
                        </p>
                    </motion.div>
                )}

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 border-2 border-slate-300"
                >
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
                    <p className="text-sm text-slate-600 font-black uppercase tracking-widest">
                        {dateStr ? `Updated: ${dateStr}` : "Loading timestamp..."}
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

interface ProbabilityMeterProps {
    probability: number
}

export function ProbabilityMeter({ probability }: ProbabilityMeterProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (isInView) {
            let start = 0
            const duration = 1500
            const increment = probability / (duration / 16)

            const timer = setInterval(() => {
                start += increment
                if (start > probability) {
                    setCount(probability)
                    clearInterval(timer)
                } else {
                    setCount(Math.floor(start))
                }
            }, 16)
            return () => clearInterval(timer)
        }
    }, [isInView, probability])

    return (
        <div ref={ref} className="w-full space-y-4 relative z-10">
            <div className="flex justify-between items-end font-black uppercase tracking-widest">
                <span className="text-sm md:text-lg text-slate-800">Jail Probability 🤔</span>
                <span className="text-3xl md:text-4xl text-rose-600 drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">{count}%</span>
            </div>

            <div className="h-8 w-full bg-white border-4 border-slate-900 rounded-full overflow-hidden relative shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)]">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${probability}%` } : { width: 0 }}
                    transition={{ duration: 1.5, type: 'spring', bounce: 0.4, delay: 0.2 }}
                    className={cn(
                        "h-full relative overflow-hidden",
                        probability > 75 ? "bg-red-500" : probability > 30 ? "bg-yellow-400" : "bg-green-400"
                    )}
                >
                    {/* Candy stripe animated effect */}
                    <div className="absolute inset-0 opacity-30" style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)',
                        backgroundSize: '28px 28px'
                    }} />
                </motion.div>
            </div>
        </div>
    )
}

function useCounter(end: number, inView: boolean) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (inView) {
            let start = 0
            const duration = 2000
            const increment = Math.max(end / (duration / 16), 1)

            if (end === 0) return setCount(0)

            const timer = setInterval(() => {
                start += increment
                if (start >= end) {
                    setCount(end)
                    clearInterval(timer)
                } else {
                    setCount(Math.floor(start))
                }
            }, 16)
            return () => clearInterval(timer)
        }
    }, [inView, end])

    return count
}

interface CountersProps {
    arrestCount: number
    releaseCount: number
}

export function Counters({ arrestCount, releaseCount }: CountersProps) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    const aCount = useCounter(arrestCount, inView)
    const rCount = useCounter(releaseCount, inView)

    return (
        <div ref={ref} className="grid grid-cols-2 gap-4 md:gap-8 w-full">
            <div className="flex flex-col items-center justify-center border-4 border-slate-900 bg-red-200 shadow-[8px_8px_0_rgba(15,23,42,1)] p-8 min-w-[140px] rounded-3xl hover:-translate-y-2 transition-transform duration-300">
                <span className="text-5xl md:text-7xl font-black text-slate-900 drop-shadow-[2px_2px_0_rgba(255,255,255,1)]">{aCount}</span>
                <span className="text-xs md:text-sm font-black text-red-900 uppercase mt-4 tracking-widest text-center">🚔 Times Arrested</span>
            </div>
            <div className="flex flex-col items-center justify-center border-4 border-slate-900 bg-green-200 shadow-[8px_8px_0_rgba(15,23,42,1)] p-8 min-w-[140px] rounded-3xl hover:-translate-y-2 transition-transform duration-300">
                <span className="text-5xl md:text-7xl font-black text-slate-900 drop-shadow-[2px_2px_0_rgba(255,255,255,1)]">{rCount}</span>
                <span className="text-xs md:text-sm font-black text-green-900 uppercase mt-4 tracking-widest text-center">🕊️ Times Released</span>
            </div>
        </div>
    )
}

interface DramaticRefreshProps {
    onRefresh: () => Promise<void>
}

export function DramaticRefresh({ onRefresh }: DramaticRefreshProps) {
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [loadingMsg, setLoadingMsg] = useState('')

    const messages = [
        "Calling the cops...",
        "Checking the news...",
        "Looking out the window...",
        "Asking neighbors...",
        "Refreshing the drama..."
    ]

    const handleRefresh = async () => {
        if (isRefreshing) return
        setIsRefreshing(true)

        for (let i = 0; i < messages.length; i++) {
            setLoadingMsg(messages[i])
            await new Promise(r => setTimeout(r, 600))
        }

        try {
            await onRefresh()
        } finally {
            setIsRefreshing(false)
            setLoadingMsg('')
        }
    }

    return (
        <div className="flex flex-col items-center space-y-6 w-full max-w-sm">
            {isRefreshing && (
                <div className="fixed inset-0 z-50 bg-pink-200/90 backdrop-blur-sm flex flex-col items-center justify-center px-4 text-center">
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 0.5 }}
                        className="text-8xl mb-8"
                    >
                        👀
                    </motion.div>
                    <motion.p
                        key={loadingMsg}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.5 }}
                        className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-widest drop-shadow-[2px_2px_0_rgba(255,255,255,1)]"
                    >
                        {loadingMsg}
                    </motion.p>
                </div>
            )}

            <button
                onClick={handleRefresh}
                disabled={isRefreshing}
                className={cn(
                    "group relative overflow-hidden bg-yellow-400 border-4 border-slate-900 text-slate-900 rounded-full shadow-[8px_8px_0_rgba(15,23,42,1)] font-black uppercase tracking-widest px-10 py-5 text-lg hover:bg-yellow-300 hover:-translate-y-1 hover:shadow-[12px_12px_0_rgba(15,23,42,1)] active:translate-y-2 active:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed w-full",
                )}
            >
                <span className="flex items-center justify-center gap-3 relative z-10">
                    <RefreshCcw className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
                    Check the tea ☕
                </span>
            </button>
        </div>
    )
}

interface ShareFeatureProps {
    status: StatusType
}

export function ShareFeature({ status }: ShareFeatureProps) {
    const [copied, setCopied] = useState(false)

    const handleShare = async () => {
        const time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
        const url = typeof window !== 'undefined' ? window.location.href : 'https://isdurgaprasaiinjail.com'
        const text = `As of ${time}, status is: ${status}. Check the tea here: ${url}`

        try {
            await navigator.clipboard.writeText(text)
            setCopied(true)
            setTimeout(() => setCopied(false), 3000)
        } catch (err) {
            console.error('Failed to copy text: ', err)
        }
    }

    return (
        <button
            onClick={handleShare}
            className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-200 transition-colors py-3 px-6 rounded-full border-2 border-slate-300 bg-white shadow-sm"
        >
            {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
            {copied ? "COPIED TO CLIPBOARD LMAO" : "SHARE THIS GOSSIP"}
        </button>
    )
}
