"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-cards"
import { Mail } from "lucide-react"
import GradientButton from "../GradientButton"

export default function PhotosScreen({ onNext }) {
  const swiperRef = useRef(null)

  const photos = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
  ]

  return (
    <div className="px-4 md:px-6 py-10">
      <div className="text-center mb-6">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow"
        >
          Some Sweet Moments
        </motion.h2>
        <p className="text-sm text-rose-100/90 mt-1">(Swipe the cards)</p>
      </div>

      <div className="relative flex justify-center">

        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Swiper
            effect="cards"
            grabCursor
            modules={[EffectCards]}
            onSwiper={(sw) => (swiperRef.current = sw)}
            className="w-[280px] h-[440px] sm:w-[320px] h-[480px] md:w-[380px] md:h-[540px]"
          >
            {photos.map((src, i) => (
              <SwiperSlide key={i}>
                <motion.div 
                  whileHover={{ rotate: 0 }}
                  initial={{ rotate: i % 2 === 0 ? 2 : -2 }}
                  className="h-full w-full bg-white p-2 pb-16 shadow-2xl rounded-sm border border-white/50 flex flex-col relative group"
                >
                  {/* Image Container with Smart Fit */}
                  <div className="w-full flex-1 overflow-hidden bg-neutral-900 rounded-sm relative flex items-center justify-center">
                    {/* Blurred background for professional look */}
                    <img
                      src={src}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover blur-xl opacity-30"
                    />
                    {/* Main Image - Now using object-contain to ensure NO FACES ARE HIDDEN */}
                    <img
                      src={src}
                      alt={`Memory ${i + 1}`}
                      className="relative z-10 h-full w-full object-contain group-hover:scale-[1.02] transition-transform duration-700 ease-in-out"
                    />
                  </div>
                  
                  {/* Handwritten Style Label */}
                  <div className="absolute bottom-0 left-0 w-full h-16 flex items-center justify-center">
                    <span className="text-pink-600 text-2xl md:text-3xl font-bold tracking-tight opacity-80 group-hover:opacity-100 transition-opacity">
                      Moment #{i + 1} ✨
                    </span>
                  </div>

                  {/* Aesthetic Tape effect in the corner */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/40 backdrop-blur-sm -rotate-2 border border-white/10 z-20 pointer-events-none" />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 0.5 } }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="mt-8 flex justify-center"
      >
        <GradientButton onClick={onNext}>
          <Mail size={20} className="mt-0.5" /> Open My Message
        </GradientButton>
      </motion.div>
    </div>
  )
}
