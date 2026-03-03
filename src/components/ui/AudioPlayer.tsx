"use client"

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Volume2, Music } from 'lucide-react'
import { cn } from '@/lib/utils'

// Audio files in /public/audio/ — add your files here
const AUDIO_FILES = [
    '/audio/track1.mp3',
]

export function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [playCount, setPlayCount] = useState(0)
    const [hasTrackedPlay, setHasTrackedPlay] = useState(false)
    const [progress, setProgress] = useState(0)
    const [duration, setDuration] = useState(0)
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [audioSrc] = useState(() => {
        return AUDIO_FILES[Math.floor(Math.random() * AUDIO_FILES.length)]
    })

    const fetchStats = useCallback(async () => {
        try {
            const res = await fetch('/api/audio/stats')
            if (res.ok) {
                const data = await res.json()
                setPlayCount(data.playCount)
            }
        } catch (err) {
            console.error('Failed to fetch audio stats:', err)
        }
    }, [])

    useEffect(() => {
        fetchStats()
    }, [fetchStats])

    // Update progress bar
    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        const updateProgress = () => {
            if (audio.duration) {
                setProgress((audio.currentTime / audio.duration) * 100)
            }
        }

        const handleLoadedMetadata = () => {
            setDuration(audio.duration)
        }

        const handleEnded = () => {
            setIsPlaying(false)
            setProgress(0)
            setHasTrackedPlay(false)
        }

        audio.addEventListener('timeupdate', updateProgress)
        audio.addEventListener('loadedmetadata', handleLoadedMetadata)
        audio.addEventListener('ended', handleEnded)

        return () => {
            audio.removeEventListener('timeupdate', updateProgress)
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
            audio.removeEventListener('ended', handleEnded)
        }
    }, [])

    const handlePlay = async () => {
        const audio = audioRef.current
        if (!audio) return

        if (isPlaying) {
            audio.pause()
            setIsPlaying(false)
        } else {
            await audio.play()
            setIsPlaying(true)

            // Track play count only once per play session
            if (!hasTrackedPlay) {
                setHasTrackedPlay(true)
                try {
                    const res = await fetch('/api/audio/play', { method: 'POST' })
                    if (res.ok) {
                        const data = await res.json()
                        setPlayCount(data.playCount)
                    }
                } catch (err) {
                    console.error('Failed to track play:', err)
                }
            }
        }
    }

    const formatTime = (seconds: number) => {
        if (!seconds || isNaN(seconds)) return '0:00'
        const mins = Math.floor(seconds / 60)
        const secs = Math.floor(seconds % 60)
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    return (
        <div className="w-full max-w-xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', bounce: 0.4 }}
                className="bg-gradient-to-br from-violet-100 to-pink-100 border-4 border-slate-900 rounded-[2rem] p-6 md:p-8 shadow-[8px_8px_0_rgba(15,23,42,1)] space-y-6"
            >
                <audio ref={audioRef} src={audioSrc} preload="metadata" />

                {/* Header */}
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-violet-200 rounded-xl border-2 border-violet-300">
                        <Music className="w-5 h-5 text-violet-600" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 uppercase tracking-wider">
                        Now Playing 🎵
                    </h3>
                </div>

                {/* Player */}
                <div className="flex items-center gap-4">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handlePlay}
                        className={cn(
                            "w-16 h-16 rounded-full flex items-center justify-center border-4 border-slate-900 shadow-[4px_4px_0_rgba(15,23,42,1)] transition-all",
                            "hover:-translate-y-1 hover:shadow-[6px_6px_0_rgba(15,23,42,1)]",
                            "active:translate-y-1 active:shadow-none",
                            isPlaying
                                ? "bg-gradient-to-br from-pink-500 to-rose-500 text-white"
                                : "bg-gradient-to-br from-violet-500 to-purple-500 text-white"
                        )}
                    >
                        {isPlaying ? (
                            <Pause className="w-7 h-7" />
                        ) : (
                            <Play className="w-7 h-7 ml-1" />
                        )}
                    </motion.button>

                    <div className="flex-1 space-y-2">
                        {/* Progress bar */}
                        <div className="h-3 w-full bg-white border-2 border-slate-300 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-violet-500 to-pink-500 rounded-full"
                                style={{ width: `${progress}%` }}
                                transition={{ duration: 0.1 }}
                            />
                        </div>
                        <div className="flex justify-between text-xs font-bold text-slate-500">
                            <span>{formatTime(audioRef.current?.currentTime || 0)}</span>
                            <span>{formatTime(duration)}</span>
                        </div>
                    </div>

                    <Volume2 className="w-5 h-5 text-slate-400" />
                </div>

                {/* Play count */}
                <div className="flex items-center justify-center gap-2 py-3 px-4 bg-white/60 rounded-xl border-2 border-slate-200">
                    <span className="text-sm font-black text-slate-600">
                        Played{' '}
                        <motion.span
                            key={playCount}
                            initial={{ scale: 1.5, color: '#ec4899' }}
                            animate={{ scale: 1, color: '#0f172a' }}
                            className="inline-block text-lg"
                        >
                            {playCount.toLocaleString()}
                        </motion.span>
                        {' '}times 🔥
                    </span>
                </div>

                <p className="text-[10px] text-slate-400 font-bold text-center uppercase tracking-wider">
                    Place your audio files in /public/audio/ folder
                </p>
            </motion.div>
        </div>
    )
}
