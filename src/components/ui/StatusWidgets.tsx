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
            case 'YES': return 'text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]'
            case 'NO': return 'text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]'
            case 'UNKNOWN': return 'text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.8)]'
            default: return 'text-white'
        }
    }

    return (
        <div className="flex flex-col items-center justify-center space-y-8 py-4">
            <motion.h2
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
                className={cn(
                    "text-8xl md:text-[10rem] font-black uppercase tracking-tighter leading-none",
                    getStatusColor(status)
                )}
            >
                {status}
            </motion.h2>

            <div className="text-center space-y-4">
                {note && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-xl md:text-2xl font-light text-white/80 max-w-2xl px-4"
                    >
                        "{note}"
                    </motion.p>
                )}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
                >
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-xs text-white/50 font-mono uppercase tracking-widest">
                        LIVE UPDATE: {new Date(lastUpdated).toLocaleString('en-US', {
                            hour12: true,
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                        })}
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
            <div className="flex justify-between items-end font-mono uppercase tracking-widest">
                <span className="text-sm text-white/60">Arrest Probability Today</span>
                <span className="text-3xl font-black text-white">{count}%</span>
            </div>

            <div className="h-4 w-full bg-black/50 border border-white/10 rounded-full overflow-hidden relative backdrop-blur-sm shadow-inner">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${probability}%` } : { width: 0 }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
                    className={cn(
                        "h-full relative overflow-hidden",
                        probability > 75 ? "bg-red-500" : probability > 30 ? "bg-yellow-500" : "bg-green-500"
                    )}
                >
                    {/* Animated shine effect on the bar */}
                    <div className="absolute top-0 inset-x-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                </motion.div>
            </div>
        </div>
    )
}

// Simple Counter Hook for numbers
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
            <div className="flex flex-col items-center justify-center border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl p-8 min-w-[140px] rounded-[2rem] hover:bg-white/10 transition-colors duration-500">
                <span className="text-5xl md:text-7xl font-black text-white drop-shadow-lg">{aCount}</span>
                <span className="text-xs md:text-sm font-mono text-white/40 uppercase mt-4 tracking-widest text-center">Total Arrests</span>
            </div>
            <div className="flex flex-col items-center justify-center border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl p-8 min-w-[140px] rounded-[2rem] hover:bg-white/10 transition-colors duration-500">
                <span className="text-5xl md:text-7xl font-black text-white drop-shadow-lg">{rCount}</span>
                <span className="text-xs md:text-sm font-mono text-white/40 uppercase mt-4 tracking-widest text-center">Total Releases</span>
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
        "Establishing secure connection...",
        "Bypassing firewalls...",
        "Accessing classified records...",
        "Decrypting status...",
        "Finalizing feed..."
    ]

    const handleRefresh = async () => {
        if (isRefreshing) return
        setIsRefreshing(true)

        // Cycle through dramatic messages
        for (let i = 0; i < messages.length; i++) {
            setLoadingMsg(messages[i])
            await new Promise(r => setTimeout(r, 800))
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
                <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="w-16 h-16 border-4 border-white/10 border-t-white rounded-full mb-8"
                    />
                    <motion.p
                        key={loadingMsg}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-lg md:text-xl font-mono text-white uppercase tracking-widest text-center px-4"
                    >
                        {loadingMsg}
                    </motion.p>
                </div>
            )}

            <button
                onClick={handleRefresh}
                disabled={isRefreshing}
                className={cn(
                    "group relative overflow-hidden bg-gradient-to-r from-red-900/40 via-black to-red-900/40 border-2 border-red-900/50 text-white rounded-full shadow-[0_0_30px_rgba(220,38,38,0.2)] font-black uppercase tracking-[0.2em] px-10 py-5 text-lg hover:shadow-[0_0_50px_rgba(220,38,38,0.4)] hover:border-red-500/50 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed w-full",
                )}
            >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="flex items-center justify-center gap-3 relative z-10">
                    <RefreshCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700" />
                    Check Again
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
        const text = `As of ${time}, status is: ${status}. Check here: ${url}`

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
            className="flex items-center gap-2 text-xs font-mono text-white/50 hover:text-white transition-colors py-3 px-6 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md"
        >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            {copied ? "DATA COPIED TO CLIPBOARD" : "SHARE THIS INTEL"}
        </button>
    )
}
