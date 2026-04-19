"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import confetti from "canvas-confetti"
import GradientButton from "../GradientButton"
import { ArrowRight, Flame, WandSparkles } from "lucide-react"

const confettiColors = ["#FF3CAC", "#F687B3", "#D8B4FE", "#C084FC", "#F472B6"];

export default function CakeScreen({ onNext }) {
  const [lit, setLit] = useState(false)

  const lightCandle = () => {
    if (lit) return
    setLit(true)
    setTimeout(() => burst(), 500);
    setTimeout(() => burst(), 1000);
  }

  const burst = () => {
    confetti({
      particleCount: 140,
      spread: 90,
      origin: { y: 0.6 },
      colors: confettiColors,
    })
  }

  return (
    <div className="px-4 py-4 text-center relative min-h-[90dvh] flex flex-col items-center justify-between">
      {/* Happy Birthday Text - Moved to the very top */}
      <div className="h-32 flex items-center justify-center w-full">
        <AnimatePresence>
          {lit && (
            <motion.div 
              className="w-full text-center z-20 px-2"
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 drop-shadow-2xl"
                style={{ filter: "drop-shadow(0 0 30px rgba(255,105,180,0.6))" }}>
                Happy Birthday, <br className="md:hidden" /> Fariha Khan!
              </h2>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative flex flex-col items-center gap-8 md:gap-12 flex-1 justify-center scale-90 sm:scale-100">
        {/* Floating Sparkles around the cake */}
        {lit && (
          <div className="absolute inset-0 pointer-events-none">
             {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0], 
                    scale: [0, 1.2, 0],
                    x: (Math.random() - 0.5) * 300,
                    y: (Math.random() - 0.5) * 300,
                  }}
                  transition={{ 
                    duration: 2 + Math.random() * 2, 
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                >
                  ✨
                </motion.div>
             ))}
          </div>
        )}

        <div className="relative z-10">
          <Cake lit={lit} />
        </div>
        
        <div className="h-24 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!lit ? (
              <motion.div
                key="light"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="z-20"
              >
                <GradientButton onClick={lightCandle} className="px-8 py-3 md:px-10 md:py-4 text-base md:text-lg">
                  <Flame size={20} className="animate-pulse" />
                  Light the Candle
                </GradientButton>
              </motion.div>
            ) : (
              <motion.div
                key="next"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 }}
                className="z-20"
              >
                <GradientButton onClick={onNext} className="px-8 py-3 md:px-10 md:py-4 text-base md:text-lg">
                  Open Memories
                  <ArrowRight size={20} className="ml-1" />
                </GradientButton>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Make a Wish prompt at the bottom */}
      <div className="h-12">
        {lit && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-pink-200 text-base md:text-lg font-medium tracking-wide"
          >
            ✨ Now make a secret wish... ✨
          </motion.p>
        )}
      </div>
    </div >
  )
}

function Cake({ lit }) {
  return (
    <div className="flex flex-col items-center">
      <div className="cake">
        <div className="plate"></div>
        <div className="layer layer-bottom"></div>
        <div className="layer layer-middle"></div>
        <div className="layer layer-top"></div>
        <div className="icing"></div>
        <div className="drip drip1"></div>
        <div className="drip drip2"></div>
        <div className="drip drip3"></div>
        <div className="candle">
          {lit && <motion.div
            initial={{ opacity: 0, scaleY: 0.2, y: 10 }}
            animate={{ opacity: 1, scaleY: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.25, 0.1, 0.25, 1.0],
            }}
            className="flame"></motion.div>}
        </div>
      </div>
    </div>
  )
}