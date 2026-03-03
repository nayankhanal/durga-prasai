"use client"

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Lock, Unlock, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface VoteData {
    keepCount: number
    releaseCount: number
    total: number
}

export function VotingSection() {
    const [votes, setVotes] = useState<VoteData>({ keepCount: 0, releaseCount: 0, total: 0 })
    const [hasVoted, setHasVoted] = useState(false)
    const [votedFor, setVotedFor] = useState<'KEEP' | 'RELEASE' | null>(null)
    const [voting, setVoting] = useState(false)
    const [error, setError] = useState('')

    const fetchVotes = useCallback(async () => {
        try {
            const res = await fetch('/api/vote')
            if (res.ok) {
                const data = await res.json()
                setVotes(data)
            }
        } catch (err) {
            console.error('Failed to fetch votes:', err)
        }
    }, [])

    useEffect(() => {
        // Check localStorage for existing vote
        const saved = localStorage.getItem('durga_vote')
        if (saved) {
            setHasVoted(true)
            setVotedFor(saved as 'KEEP' | 'RELEASE')
        }

        fetchVotes()
        const interval = setInterval(fetchVotes, 10000)
        return () => clearInterval(interval)
    }, [fetchVotes])

    const handleVote = async (voteType: 'KEEP' | 'RELEASE') => {
        if (hasVoted || voting) return

        setVoting(true)
        setError('')

        try {
            const res = await fetch('/api/vote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ voteType }),
            })

            if (res.status === 409) {
                // Already voted (server-side check)
                const data = await res.json()
                setHasVoted(true)
                setVotedFor(data.existingVote || voteType)
                localStorage.setItem('durga_vote', data.existingVote || voteType)
                return
            }

            if (!res.ok) {
                const data = await res.json()
                setError(data.error || 'Failed to vote')
                return
            }

            const data = await res.json()
            setVotes({ keepCount: data.keepCount, releaseCount: data.releaseCount, total: data.total })
            setHasVoted(true)
            setVotedFor(voteType)
            localStorage.setItem('durga_vote', voteType)
        } catch {
            setError('Network error')
        } finally {
            setVoting(false)
        }
    }

    const keepPercent = votes.total > 0 ? (votes.keepCount / votes.total) * 100 : 50
    const releasePercent = votes.total > 0 ? (votes.releaseCount / votes.total) * 100 : 50

    return (
        <div className="w-full max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', bounce: 0.4 }}
                className="bg-white border-4 border-slate-900 rounded-[2rem] p-8 md:p-10 shadow-[8px_8px_0_rgba(15,23,42,1)] space-y-8"
            >
                {/* Title */}
                <div className="text-center space-y-2">
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-slate-900">
                        Cast Your Vote ⚖️
                    </h3>
                    <p className="text-sm text-slate-500 font-bold">
                        What should happen to Durga dai?
                    </p>
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.button
                        whileHover={!hasVoted ? { scale: 1.03, y: -4 } : {}}
                        whileTap={!hasVoted ? { scale: 0.97 } : {}}
                        onClick={() => handleVote('KEEP')}
                        disabled={hasVoted || voting}
                        className={cn(
                            "relative overflow-hidden py-6 px-8 rounded-2xl border-4 font-black text-xl uppercase tracking-wider transition-all",
                            hasVoted && votedFor === 'KEEP'
                                ? "bg-red-500 border-red-700 text-white shadow-[4px_4px_0_rgba(153,27,27,1)] scale-105"
                                : hasVoted
                                    ? "bg-slate-100 border-slate-300 text-slate-400 cursor-not-allowed"
                                    : "bg-gradient-to-br from-red-500 to-rose-600 border-slate-900 text-white shadow-[6px_6px_0_rgba(15,23,42,1)] hover:shadow-[8px_8px_0_rgba(15,23,42,1)] cursor-pointer"
                        )}
                    >
                        {!hasVoted && (
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
                        )}
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            <Lock className="w-6 h-6" />
                            Keep Him 🔒
                        </span>
                        {hasVoted && votedFor === 'KEEP' && (
                            <CheckCircle className="absolute top-3 right-3 w-6 h-6 text-white/80" />
                        )}
                    </motion.button>

                    <motion.button
                        whileHover={!hasVoted ? { scale: 1.03, y: -4 } : {}}
                        whileTap={!hasVoted ? { scale: 0.97 } : {}}
                        onClick={() => handleVote('RELEASE')}
                        disabled={hasVoted || voting}
                        className={cn(
                            "relative overflow-hidden py-6 px-8 rounded-2xl border-4 font-black text-xl uppercase tracking-wider transition-all",
                            hasVoted && votedFor === 'RELEASE'
                                ? "bg-emerald-500 border-emerald-700 text-white shadow-[4px_4px_0_rgba(4,120,87,1)] scale-105"
                                : hasVoted
                                    ? "bg-slate-100 border-slate-300 text-slate-400 cursor-not-allowed"
                                    : "bg-gradient-to-br from-emerald-500 to-green-600 border-slate-900 text-white shadow-[6px_6px_0_rgba(15,23,42,1)] hover:shadow-[8px_8px_0_rgba(15,23,42,1)] cursor-pointer"
                        )}
                    >
                        {!hasVoted && (
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
                        )}
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            <Unlock className="w-6 h-6" />
                            Release Him 🕊️
                        </span>
                        {hasVoted && votedFor === 'RELEASE' && (
                            <CheckCircle className="absolute top-3 right-3 w-6 h-6 text-white/80" />
                        )}
                    </motion.button>
                </div>

                {/* Already voted message */}
                {hasVoted && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-3 px-6 bg-blue-50 border-2 border-blue-200 rounded-xl"
                    >
                        <p className="text-sm font-black text-blue-600 uppercase">
                            ✅ You have already voted.
                        </p>
                    </motion.div>
                )}

                {error && (
                    <div className="text-center py-2 px-4 bg-red-50 border-2 border-red-200 rounded-xl">
                        <p className="text-sm font-bold text-red-500">{error}</p>
                    </div>
                )}

                {/* Progress bars */}
                <div className="space-y-4">
                    {/* Keep bar */}
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-black text-red-600 uppercase tracking-wider">
                                🔒 Keep Him
                            </span>
                            <span className="text-sm font-black text-slate-600">
                                {votes.keepCount} votes ({keepPercent.toFixed(1)}%)
                            </span>
                        </div>
                        <div className="h-6 w-full bg-slate-100 border-2 border-slate-300 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${keepPercent}%` }}
                                transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
                                className="h-full bg-gradient-to-r from-red-500 to-rose-400 rounded-full relative overflow-hidden"
                            >
                                <div
                                    className="absolute inset-0 opacity-25"
                                    style={{
                                        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(255,255,255,0.3) 6px, rgba(255,255,255,0.3) 12px)',
                                    }}
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Release bar */}
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-black text-emerald-600 uppercase tracking-wider">
                                🕊️ Release Him
                            </span>
                            <span className="text-sm font-black text-slate-600">
                                {votes.releaseCount} votes ({releasePercent.toFixed(1)}%)
                            </span>
                        </div>
                        <div className="h-6 w-full bg-slate-100 border-2 border-slate-300 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${releasePercent}%` }}
                                transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
                                className="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full relative overflow-hidden"
                            >
                                <div
                                    className="absolute inset-0 opacity-25"
                                    style={{
                                        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(255,255,255,0.3) 6px, rgba(255,255,255,0.3) 12px)',
                                    }}
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Total */}
                    <div className="text-center pt-2">
                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                            Total Votes: {votes.total.toLocaleString()}
                        </span>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
