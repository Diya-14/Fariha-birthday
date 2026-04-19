"use client"

import { useState, useRef, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import LoaderScreen from "@/components/screens/LoaderScreen"
import IntroScreen from "@/components/screens/IntroScreen"
import CakeScreen from "@/components/screens/CakeScreen"
import Confetti from "../components/screens/confetti" 
import PhotosScreen from "@/components/screens/PhotosScreen"
import MessageScreen from "@/components/screens/MessageScreen"


export default function HomePage() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [isConfettiActive, setIsConfettiActive] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    if (currentScreen >= 1 && audioRef.current) {
      audioRef.current.play().catch(err => console.log("Audio play blocked:", err))
    }
    
    // Confetti active on Photos and Message screens, but NOT on Cake screen
    if (currentScreen >= 3) {
      setIsConfettiActive(true)
    } else {
      setIsConfettiActive(false)
    }
  }, [currentScreen])

  const screens = [
    <LoaderScreen key="loader" onDone={() => setCurrentScreen(1)} />,
    <IntroScreen key="intro" onNext={() => setCurrentScreen(2)} />,
    <CakeScreen key="cake" onNext={() => setCurrentScreen(3)} />,
    <PhotosScreen key="photos" onNext={() => setCurrentScreen(4)} />,
    <MessageScreen key="message" />,
  ]
  
  return (
    <main className="min-h-screen bg-gradient-to-tr from-rose-950/40 via-black to-rose-950/40 overflow-hidden relative">
      {isConfettiActive && <Confetti />}

      {/* Music Visualizer / Indicator */}
      {currentScreen >= 1 && (
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed bottom-6 left-6 z-50 flex items-end gap-1 h-8"
        >
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 bg-pink-500/60 rounded-full"
              animate={{ 
                height: ["20%", "100%", "20%"],
              }}
              transition={{ 
                duration: 0.8 + (i * 0.2), 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          ))}
          <span className="ml-2 text-xs font-medium text-pink-300/80 uppercase tracking-widest hidden md:inline">Playing Birthday Mix</span>
        </motion.div>
      )}

      <div className="relative z-10 flex min-h-screen items-center justify-center p-4 md:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            transition={{ duration: 0.8 }}
            className={`w-full ${currentScreen === 3 ? "max-w-7xl" : "max-w-3xl md:max-w-4xl"}`}
          >
            {screens[currentScreen]}
          </motion.div>
        </AnimatePresence>
      </div> 
      {/* You can change the background song if you want */}
      <audio ref={audioRef} src="/birthday.mp3" preload="auto" loop />

      {/* Watermark */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="fixed bottom-4 right-4 text-sm text-white/40 pointer-events-none z-50 font-light">
        @Diya-14
      </motion.div>
    </main>
  )
}
 