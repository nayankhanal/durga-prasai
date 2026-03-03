"use client"

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, MessageCircle, Loader2, X, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ChatMsg {
    id: string
    message: string
    createdAt: string
}

export function FloatingChat() {
    const [isOpen, setIsOpen] = useState(true)
    const [messages, setMessages] = useState<ChatMsg[]>([])
    const [input, setInput] = useState('')
    const [sending, setSending] = useState(false)
    const [error, setError] = useState('')
    const [cooldown, setCooldown] = useState(0)
    const [unread, setUnread] = useState(0)
    const scrollRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const lastCountRef = useRef(0)

    const fetchMessages = useCallback(async () => {
        try {
            const res = await fetch('/api/chat')
            if (res.ok) {
                const data = await res.json()
                setMessages(data)
                if (!isOpen && data.length > lastCountRef.current) {
                    setUnread((prev) => prev + (data.length - lastCountRef.current))
                }
                lastCountRef.current = data.length
            }
        } catch (err) {
            console.error('Failed to fetch chat:', err)
        }
    }, [isOpen])

    useEffect(() => {
        fetchMessages()
        const interval = setInterval(fetchMessages, 5000)
        return () => clearInterval(interval)
    }, [fetchMessages])

    useEffect(() => {
        if (scrollRef.current && isOpen) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages, isOpen])

    useEffect(() => {
        if (isOpen) {
            setUnread(0)
            setTimeout(() => inputRef.current?.focus(), 300)
        }
    }, [isOpen])

    useEffect(() => {
        if (cooldown <= 0) return
        const timer = setInterval(() => {
            setCooldown((prev) => Math.max(0, prev - 1))
        }, 1000)
        return () => clearInterval(timer)
    }, [cooldown])

    const handleSend = async () => {
        if (!input.trim() || sending || cooldown > 0) return

        setSending(true)
        setError('')

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input.trim() }),
            })

            if (res.status === 429) {
                const data = await res.json()
                const seconds = Math.ceil((data.retryAfterMs || 10000) / 1000)
                setCooldown(seconds)
                setError(`Wait ${seconds}s before sending again`)
                return
            }

            if (!res.ok) {
                const data = await res.json()
                setError(data.error || 'Failed to send')
                return
            }

            setInput('')
            await fetchMessages()
        } catch {
            setError('Network error')
        } finally {
            setSending(false)
        }
    }

    const formatTime = (dateStr: string) => {
        const date = new Date(dateStr)
        const now = new Date()
        const diffMs = now.getTime() - date.getTime()
        const diffMins = Math.floor(diffMs / 60000)

        if (diffMins < 1) return 'just now'
        if (diffMins < 60) return `${diffMins}m ago`
        const diffHours = Math.floor(diffMins / 60)
        if (diffHours < 24) return `${diffHours}h ago`
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    }

    return (
        <>
            {/* Toggle button when closed */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        onClick={() => setIsOpen(true)}
                        className={cn(
                            "fixed top-1/2 -translate-y-1/2 right-0 z-50",
                            "bg-white border-4 border-r-0 border-slate-900 rounded-l-3xl",
                            "shadow-[-4px_4px_0_rgba(15,23,42,1)]",
                            "pl-3 pr-2 py-6 flex flex-col items-center gap-3",
                            "hover:bg-slate-50 hover:pl-4 transition-all cursor-pointer group"
                        )}
                    >
                        <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-900 transition-colors rotate-180" />
                        <div className="relative">
                            <MessageCircle className="w-6 h-6 text-pink-500" />
                            {unread > 0 && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border-2 border-white"
                                >
                                    <span className="text-[10px] font-black text-white">
                                        {unread > 9 ? '9+' : unread}
                                    </span>
                                </motion.div>
                            )}
                        </div>
                        <span className="text-xs font-black text-slate-400 group-hover:text-slate-900 uppercase tracking-widest [writing-mode:vertical-lr] mt-2 transition-colors">
                            Live Chat
                        </span>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Full-height sidebar panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '100%', opacity: 0 }}
                        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
                        className="fixed top-0 right-0 bottom-0 z-50 w-[400px] max-w-[90vw] flex flex-col bg-white border-l-4 border-slate-900 shadow-[-12px_0_0_rgba(15,23,42,0.05)]"
                    >
                        {/* Header */}
                        <div className="flex items-center gap-4 px-6 py-5 border-b-4 border-slate-100 bg-white shadow-sm z-10">
                            <div className="p-2.5 bg-pink-100 rounded-2xl border-2 border-pink-200">
                                <MessageCircle className="w-6 h-6 text-pink-500" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-black text-slate-900 uppercase tracking-wider">
                                    Public Chat 💬
                                </h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-xs text-green-600 font-bold uppercase tracking-widest">Live Now</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-3 hover:bg-slate-100 rounded-2xl transition-all hover:scale-105 active:scale-95 group border-2 border-transparent hover:border-slate-200"
                            >
                                <X className="w-6 h-6 text-slate-400 group-hover:text-slate-900" />
                            </button>
                        </div>

                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '24px 24px', zIndex: 0 }} />

                        {/* Messages */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto px-6 py-6 space-y-4 relative z-10"
                        >
                            {messages.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full space-y-4 opacity-50">
                                    <div className="text-6xl animate-bounce-slow">🎤</div>
                                    <p className="text-slate-900 font-black text-xl uppercase tracking-wider">
                                        Silence.
                                    </p>
                                    <p className="text-slate-500 font-bold text-center">
                                        Be the first to break it! Let the gossip begin.
                                    </p>
                                </div>
                            ) : (
                                <AnimatePresence initial={false}>
                                    {messages.map((msg) => (
                                        <motion.div
                                            key={msg.id}
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            transition={{ type: 'spring', bounce: 0.4 }}
                                        >
                                            <div className="bg-slate-50 border-2 border-slate-100 rounded-3xl rounded-tl-sm px-5 py-4 transition-all hover:shadow-md hover:border-pink-200 group">
                                                <div className="flex items-center justify-between gap-2 mb-2">
                                                    <span className="text-xs font-black text-pink-500 uppercase tracking-wider">
                                                        Anonymous 🎭
                                                    </span>
                                                    <span className="text-xs text-slate-400 font-bold group-hover:text-pink-400 transition-colors">
                                                        {formatTime(msg.createdAt)}
                                                    </span>
                                                </div>
                                                <p className="text-base text-slate-700 font-semibold leading-relaxed break-words">
                                                    {msg.message}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-6 border-t-4 border-slate-100 bg-white relative z-10 shadow-[0_-8px_20px_rgba(0,0,0,0.02)]">
                            <AnimatePresence>
                                {error && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                                        animate={{ opacity: 1, height: 'auto', marginBottom: 16 }}
                                        exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                                        className="px-4 py-3 bg-red-100 border-2 border-red-200 rounded-2xl"
                                    >
                                        <p className="text-xs text-red-600 font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2">
                                            <span>⚠️</span> {error}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="flex gap-3 relative">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    maxLength={300}
                                    placeholder={cooldown > 0 ? `Chill for ${cooldown}s... 🧊` : 'Spill the tea here...'}
                                    disabled={sending || cooldown > 0}
                                    className={cn(
                                        "flex-1 bg-slate-50 border-4 border-slate-200 rounded-2xl px-5 py-4 text-slate-900 placeholder-slate-400 font-bold text-base",
                                        "focus:outline-none focus:border-slate-900 focus:bg-white transition-all shadow-inner",
                                        "disabled:opacity-50 disabled:cursor-not-allowed"
                                    )}
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim() || sending || cooldown > 0}
                                    className={cn(
                                        "px-6 py-4 rounded-2xl font-black transition-all flex items-center justify-center",
                                        "bg-slate-900 text-white border-4 border-slate-900 shadow-[4px_4px_0_rgba(244,114,182,1)]",
                                        "hover:-translate-y-1 hover:shadow-[6px_6px_0_rgba(244,114,182,1)]",
                                        "active:translate-y-1 active:shadow-none",
                                        "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0_rgba(244,114,182,1)]"
                                    )}
                                >
                                    {sending ? (
                                        <Loader2 className="w-6 h-6 animate-spin" />
                                    ) : (
                                        <Send className="w-6 h-6" />
                                    )}
                                </button>
                            </div>
                            <div className="flex justify-between mt-3 px-2">
                                <span className="text-xs text-slate-400 font-bold tracking-wider">
                                    {input.length}<span className="text-slate-300">/300</span>
                                </span>
                                <span className="text-xs text-slate-400 font-bold tracking-wider uppercase">
                                    Press Enter ↵
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
