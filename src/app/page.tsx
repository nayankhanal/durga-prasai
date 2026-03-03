"use client"

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  StatusDisplay,
  ProbabilityMeter,
  Counters,
  DramaticRefresh,
  ShareFeature
} from '@/components/ui/StatusWidgets'
import { VotingSection } from '@/components/ui/VotingSection'
import { AudioPlayer } from '@/components/ui/AudioPlayer'
import { AppData } from '@/lib/db'
import Link from 'next/link'

export default function Home() {
  const [data, setData] = useState<AppData | null>(null)
  const [error, setError] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()

  // Parallax effects but make them bouncy/fun
  const bgY = useTransform(scrollY, [0, 1000], ['0%', '10%'])
  const overlayRotation = useTransform(scrollY, [0, 1000], [0, 45])

  const fetchData = async () => {
    try {
      const res = await fetch('/api/status')
      if (!res.ok) throw new Error('Failed to fetch')
      const json = await res.json()
      setData(json)
      setError(false)
    } catch (err) {
      console.error(err)
      setError(true)
    }
  }

  useEffect(() => {
    setMounted(true)
    fetchData()
  }, [])

  if (!mounted) return null // Fix hydration errors fully

  if (error) {
    return (
      <main className="min-h-screen bg-rose-200 text-rose-900 flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-6xl font-black mb-4 tracking-widest drop-shadow-[4px_4px_0_rgba(0,0,0,1)] text-white">OOPSIE WOOPSIE!</h1>
        <p className="font-bold text-xl">The servers are doing a little dance and crashed.</p>
        <button
          onClick={fetchData}
          className="mt-8 px-8 py-4 bg-yellow-400 text-black border-4 border-black rounded-full font-black uppercase hover:-translate-y-2 hover:shadow-[4px_8px_0_rgba(0,0,0,1)] transition-all"
        >
          Try Again! 🔄
        </button>
      </main>
    )
  }

  if (!data) {
    return (
      <main className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-4 overflow-hidden">
        <div className="animate-bounce-slow flex flex-col items-center space-y-6">
          <div className="text-6xl">🕵️‍♂️</div>
          <div className="text-2xl font-black text-pink-500 uppercase tracking-widest animate-pulse">
            Snooping Around...
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-[#fff8e7] text-slate-900 flex flex-col w-full overflow-x-hidden relative">

      {/* 
        NOISY/FUNNY BACKGROUND PATTERN 
      */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      {/* 
        HERO SECTION 
      */}
      <section className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 pb-12">

        {/* Parallax abstract background element */}
        <motion.div
          style={{ y: bgY, rotate: overlayRotation }}
          className="absolute inset-0 z-0 origin-center flex items-center justify-center pointer-events-none opacity-20"
        >
          <div className="w-[150vw] h-[150vw] md:w-[80vw] md:h-[80vw] rounded-full bg-gradient-to-tr from-yellow-300 via-pink-300 to-cyan-300 blur-3xl"></div>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
          className="relative z-20 flex flex-col items-center justify-center px-4 w-full max-w-5xl mx-auto space-y-8"
        >
          <div className="text-center space-y-6 flex flex-col items-center w-full">

            {/* Funny Photo Container */}
            <div className="relative group w-48 h-48 md:w-64 md:h-64 mb-4">
              <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity animate-pulse"></div>
              <motion.img
                whileHover={{ scale: 1.1, rotate: 5 }}
                src="/dp_pic.jpg"
                alt="Durga Prasain"
                className="w-full h-full rounded-full object-cover object-top mx-auto border-8 border-white shadow-[8px_8px_0_rgba(0,0,0,0.1)] relative z-10 bg-pink-100"
              />
              <div
                className="absolute -bottom-4 -right-4 text-6xl z-20 hover:animate-spin origin-center cursor-pointer"
                onMouseEnter={() => {
                  try {
                    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
                    const osc = ctx.createOscillator()
                    const gain = ctx.createGain()
                    osc.connect(gain)
                    gain.connect(ctx.destination)
                    gain.gain.value = 0.15
                    osc.type = 'sawtooth'
                    // Siren sweep up and down
                    const now = ctx.currentTime
                    osc.frequency.setValueAtTime(400, now)
                    osc.frequency.linearRampToValueAtTime(800, now + 0.3)
                    osc.frequency.linearRampToValueAtTime(400, now + 0.6)
                    osc.frequency.linearRampToValueAtTime(800, now + 0.9)
                    osc.frequency.linearRampToValueAtTime(400, now + 1.2)
                    gain.gain.setValueAtTime(0.15, now)
                    gain.gain.linearRampToValueAtTime(0, now + 1.3)
                    osc.start(now)
                    osc.stop(now + 1.3)
                  } catch { }
                }}
              >
                🚨
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 drop-shadow-[4px_4px_0_rgba(255,255,255,1)]">
              Is Durga Prasain<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500">in jail today?</span>
            </h1>

            <div className="bg-white px-8 py-6 rounded-3xl border-4 border-slate-200 shadow-[8px_8px_0_rgba(0,0,0,0.05)] max-w-3xl transform -rotate-1 hover:rotate-1 transition-transform">
              <p className="text-lg md:text-2xl text-slate-700 font-bold italic">
                "मलाई मारेर वा जेल हालेर केही हुनेवाला छैन, यो देशको अवस्था परिवर्तन हुनुपर्छ।"
              </p>
            </div>
          </div>

          <div className="mt-8 w-full max-w-2xl bg-white border-4 border-slate-900 rounded-[3rem] p-8 md:p-12 shadow-[12px_12px_0_rgba(15,23,42,1)] relative overflow-hidden group hover:-translate-y-2 transition-transform">
            {/* Funny Background pattern inside status card */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '24px 24px' }} />

            <div className="relative z-10 w-full">
              <StatusDisplay
                status={data.status}
                lastUpdated={data.lastUpdated}
                note={data.note}
              />
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-400 font-bold uppercase tracking-widest gap-2 animate-bounce cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          👇 Scroll Down for the tea 👇
        </motion.div>
      </section>

      {/* 
        SCROLL EXPERIENCE 
      */}
      <section className="relative z-20 bg-white w-full pt-20 pb-32 px-4 border-t-4 border-slate-900">
        <div className="max-w-4xl mx-auto flex flex-col space-y-24">

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="w-full flex justify-center"
          >
            <DramaticRefresh onRefresh={fetchData} />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="col-span-1 md:col-span-2 bg-[#fff8e7] border-4 border-slate-900 rounded-[2rem] p-8 shadow-[8px_8px_0_rgba(15,23,42,1)]"
            >
              <ProbabilityMeter probability={data.probability} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-1 md:col-span-2"
            >
              <Counters arrestCount={data.arrestCount} releaseCount={data.releaseCount} />
            </motion.div>
          </div>

          {/* AUDIO PLAYER SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.4 }}
          >
            <AudioPlayer />
          </motion.div>

          {/* VOTING SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.4 }}
          >
            <VotingSection />
          </motion.div>


          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-8 pt-12 border-t-4 border-dashed border-slate-200"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <ShareFeature status={data.status} />
              <a
                href="https://buymemomo.com/nayan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-black text-white bg-pink-500 hover:bg-pink-400 py-3 px-6 rounded-full border-4 border-slate-900 shadow-[4px_4px_0_rgba(15,23,42,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0_rgba(15,23,42,1)] active:translate-y-1 active:shadow-none transition-all"
              >
                🥟 BUY MOMO FOR DURGA DAA
              </a>
            </div>

            <Link
              href="/history"
              className="text-slate-500 hover:text-pink-500 font-bold text-lg underline underline-offset-8 transition-colors duration-300 flex items-center gap-2"
            >
              📜 View Drama History 📜
            </Link>
          </motion.div>

        </div>
      </section>
    </main>
  )
}
