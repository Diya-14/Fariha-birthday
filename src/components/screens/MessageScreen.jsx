"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { ArrowRight } from "lucide-react";

export default function MessageScreen() {
    return (
        <div className="px-4 md:px-6 py-10 text-center relative">
            {/* Floating Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-4xl opacity-20"
                        initial={{ y: "100vh", x: Math.random() * 100 + "%" }}
                        animate={{ 
                            y: "-10vh",
                            rotate: 360,
                        }}
                        transition={{ 
                            duration: 10 + Math.random() * 10, 
                            repeat: Infinity, 
                            ease: "linear",
                            delay: i * 2
                        }}
                    >
                        {["❤️", "💖", "✨", "🌸", "⭐", "🎉"][i % 6]}
                    </motion.div>
                ))}
            </div>

            <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="text-3xl sm:text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow-lg mb-6 md:mb-10 leading-tight px-2"
            >
                A Special Message for You 💌
            </motion.h2>

            <div className="mx-auto relative w-full max-w-3xl flex justify-center px-2">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="relative h-auto max-w-xl bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-6 md:p-10 text-center"
                >
                    {/* Corner Decorations - Hidden on small mobile to avoid clutter */}
                    <div className="absolute -top-4 -left-4 text-2xl md:text-3xl hidden sm:block">✨</div>
                    <div className="absolute -bottom-4 -right-4 text-2xl md:text-3xl hidden sm:block">💖</div>

                    <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed font-medium">
                        Happy Birthday, Fariha Khan! 🎂 You deserve all the happiness, love, and smiles in the world today and always. ✨ 
                        <br /><br />
                        You have this special way of making everything around you brighter—your smile, your kindness, and the way
                        you make everyone feel so special. 🌸 I hope your day is filled with laughter, surprises, and moments that
                        make your heart dance with joy. 💃✨ 
                        <br /><br />
                        You’re truly one of a kind, Fariha, and I just want you to know how much you are appreciated. 
                        Keep being the amazing person you are, spreading magic wherever you go. 🎆
                        Wishing you endless happiness, success, and all the sweet things life has to offer! 🍭💕
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="mt-8 md:mt-12 space-y-4"
            >
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-300 drop-shadow-sm px-4">
                    Have the Best Day Ever! 🎈🎊
                </p>
                <div className="flex justify-center gap-4 text-4xl">
                    <span>🎁</span>
                    <span>🎂</span>
                    <span>🥳</span>
                </div>
                <p className="text-pink-200/60 italic text-sm mt-8">
                    — with lots of love and magic ✨
                </p>
            </motion.div>
        </div>
    )
}