"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const EditorialSection = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="relative w-full min-h-screen overflow-hidden bg-[#111111] flex flex-col lg:flex-row">

            {/* Background Color Blocks - Collision Animation */}
            <div className="absolute inset-0 flex flex-col lg:flex-row pointer-events-none z-0">
                <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    animate={{
                        backgroundColor: isHovered ? "#24428F" : "#C13028"
                    }}
                    className="w-full lg:w-[58.333%] h-1/2 lg:h-full transition-colors duration-300"
                />
                <div className="w-[1px] h-full bg-[#111111] hidden lg:block z-10" />
                <motion.div
                    initial={{ x: "100%" }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    animate={{
                        backgroundColor: isHovered ? "#C13028" : "#24428F"
                    }}
                    className="w-full lg:w-[41.666%] h-1/2 lg:h-full transition-colors duration-300"
                />
            </div>

            {/* Main Content Grid */}
            <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 min-h-screen">

                {/* Left Column: Collage Visual (7 cols) */}
                <div className="lg:col-span-7 flex flex-col items-center justify-center p-8 md:p-16 lg:p-24">
                    <motion.div
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="relative w-full max-w-3xl"
                    >
                        {/* Huge Serif Text Background */}
                        <h3 className="absolute -top-12 -left-8 md:-top-20 md:-left-12 z-20 font-serif text-6xl md:text-8xl lg:text-9xl text-[#F4F4F0] mix-blend-difference pointer-events-none tracking-tighter italic">
                            ART IS <br /> CULTURE.
                        </h3>

                        {/* Collage Image */}
                        <motion.div
                            animate={{
                                rotate: isHovered ? 0 : 2,
                                scale: isHovered ? 1.05 : 1
                            }}
                            className="relative aspect-[4/5] md:aspect-[16/11] border-[12px] md:border-[20px] border-[#111111] shadow-2xl overflow-hidden bg-white"
                        >
                            <motion.img
                                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
                                alt="Collage Art Space"
                                animate={{
                                    filter: isHovered ? "grayscale(1) brightness(0.8)" : "grayscale(0) brightness(1)"
                                }}
                                className="w-full h-full object-cover transition-all duration-700"
                            />
                        </motion.div>

                        <p className="mt-8 font-sans text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#F4F4F0] font-black opacity-80 pl-4">
                            Magazine Cutout Artue Edition — Issue № 01
                        </p>
                    </motion.div>
                </div>

                {/* Right Column: Bold Typography (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-transparent">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="max-w-lg"
                    >
                        <h2 className={`
              font-serif text-4xl md:text-6xl xl:text-7xl leading-[1.1] tracking-tight mb-12 transition-colors duration-300
              ${isHovered ? "text-[#F4F4F0]" : "text-[#F5A382]"}
            `}>
                            The New Habitus: <br />
                            Asian Art in <br />
                            Modern Spaces.
                        </h2>

                        <p className={`
              font-sans text-sm md:text-lg leading-relaxed mb-16 font-medium transition-colors duration-300
              ${isHovered ? "text-[#F4F4F0]/80" : "text-[#F5A382]/80"}
            `}>
                            Redefining the boundaries between cultural legacy and contemporary living. Discover how visionaries are curaing their environment with soul and precision.
                        </p>

                        {/* Massive Ginger Yellow Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-8 md:py-12 bg-[#FFB900] text-[#111111] font-sans text-xl md:text-2xl font-black uppercase tracking-[0.3em] transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1"
                        >
                            READ THE JOURNAL
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            {/* Aesthetic Accents */}
            <div className="absolute top-20 right-20 w-32 h-32 border-[2px] border-[#F5A382]/20 rounded-full hidden lg:flex items-center justify-center">
                <div className="w-16 h-[1px] bg-[#F5A382]/40 rotate-45" />
            </div>
            <div className="absolute bottom-10 left-10 hidden lg:block">
                <p className="font-sans text-[10px] text-[#F4F4F0]/20 uppercase tracking-[1em] rotate-90 origin-left">
                    ARTUE TASTEMAKER 2026
                </p>
            </div>

        </section>
    );
};
