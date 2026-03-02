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
import { AppData } from '@/lib/db'
import Link from 'next/link'

export default function Home() {
  const [data, setData] = useState<AppData | null>(null)
  const [error, setError] = useState(false)
  const { scrollY } = useScroll()

  // Parallax effects
  const bgY = useTransform(scrollY, [0, 1000], ['0%', '20%'])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.95])

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
    fetchData()
  }, [])

  if (error) {
    return (
      <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4 tracking-widest">SYSTEM ERROR</h1>
        <p className="text-white/60 font-mono">Unable to verify status at this time.</p>
        <button
          onClick={fetchData}
          className="mt-8 px-6 py-3 bg-white/10 text-white border border-white/20 rounded-xl font-bold uppercase hover:bg-white/20 transition-colors"
        >
          Retry Connection
        </button>
      </main>
    )
  }

  if (!data) {
    return (
      <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
        {/* Cinematic abstract background while loading */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#050505] opacity-50"></div>
        <div className="animate-pulse flex flex-col items-center space-y-6 relative z-10">
          <div className="h-16 w-16 bg-white/10 rounded-full"></div>
          <div className="h-12 w-64 bg-white/10 rounded-xl"></div>
          <div className="h-4 w-48 bg-white/5 rounded-lg"></div>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-[#050505] text-white selection:bg-white/20 selection:text-white flex flex-col w-full overflow-x-hidden">

      {/* 
        HERO SECTION 
        100vh, fixed background, parallax effects 
      */}
      <section className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden">

        {/* Fixed cinematic background */}
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 z-0 origin-top"
        >
          {/* Using a dramatic gradient mesh and the user's image as an abstract overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-[#050505] to-blue-900/10 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] z-10 pointer-events-none" />

          <img
            src="/dp_pic.jpg"
            alt="Cinematic Background"
            className="w-full h-[120%] object-cover opacity-10 blur-sm scale-110"
          />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity, scale: heroScale }}
          className="relative z-20 flex flex-col items-center justify-center px-4 w-full max-w-5xl mx-auto space-y-8"
        >
          <div className="text-center space-y-6">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              src="/dp_pic.jpg"
              alt="Durga Prasain"
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mx-auto shadow-[0_0_40px_rgba(255,255,255,0.1)] border border-white/20 mb-8"
            />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-2xl"
            >
              Is Durga Prasain<br />in jail today?
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 shadow-2xl max-w-3xl mx-auto"
            >
              <p className="text-base md:text-xl text-white/80 font-medium italic">
                "मलाई मारेर वा जेल हालेर केही हुनेवाला छैन, यो देशको अवस्था परिवर्तन हुनुपर्छ।"
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-12 w-full max-w-2xl bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
          >
            {/* Subtle animated gradient glow based on status */}
            <div className={`absolute inset-0 opacity-20 transition-opacity duration-1000 group-hover:opacity-30 blur-3xl ${data.status === 'YES' ? 'bg-red-500' :
                data.status === 'NO' ? 'bg-green-500' : 'bg-yellow-500'
              }`} />

            <div className="relative z-10 w-full">
              <StatusDisplay
                status={data.status}
                lastUpdated={data.lastUpdated}
                note={data.note}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40 text-xs font-mono uppercase tracking-widest gap-2"
        >
          Scroll for data
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
        </motion.div>
      </section>

      {/* 
        SCROLL EXPERIENCE 
        Stats, Actions, and Information 
      */}
      <section className="relative z-20 bg-[#050505] w-full pt-20 pb-32 px-4 shadow-[0_-20px_50px_rgba(5,5,5,1)]">
        <div className="max-w-4xl mx-auto flex flex-col space-y-24">

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full flex justify-center"
          >
            <DramaticRefresh onRefresh={fetchData} />
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Probability Block */}
            <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 shadow-xl backdrop-blur-md">
              <ProbabilityMeter probability={data.probability} />
            </div>

            {/* Counters Block */}
            <div className="col-span-1 md:col-span-2">
              <Counters arrestCount={data.arrestCount} releaseCount={data.releaseCount} />
            </div>
          </motion.div>

          {/* Share & Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center space-y-8 pt-12 border-t border-white/5"
          >
            <ShareFeature status={data.status} />

            <Link
              href="/history"
              className="text-white/40 hover:text-white font-mono text-sm underline underline-offset-8 transition-colors duration-300"
            >
              Access Classified Timeline →
            </Link>
          </motion.div>

        </div>
      </section>
    </main>
  )
}
