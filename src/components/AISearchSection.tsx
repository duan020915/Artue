"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

const COLORS = ["#C13028", "#24428F", "#008050"];

const PILLS = [
    { id: 1, text: "Calm & Melancholy", bg: "#008050", color: "#F4F4F0", top: "30%", left: "10%" },
    { id: 2, text: "Vivid Contrast", bg: "#C13028", color: "#F4F4F0", top: "35%", left: "80%" },
    { id: 3, text: "Warm Apartment", bg: "#F5A382", color: "#111111", top: "70%", left: "15%" },
    { id: 4, text: "Minimalist Ink", bg: "#8299D4", color: "#111111", top: "75%", left: "75%" },
    { id: 5, text: "Seoul Concrete", bg: "#F4F4F0", color: "#111111", top: "25%", left: "60%" },
    { id: 6, text: "Morning Mist", bg: "#13C2C2", color: "#111111", top: "20%", left: "20%" },
    { id: 7, text: "Midnight Jazz", bg: "#24428F", color: "#F4F4F0", top: "82%", left: "45%" },
];

interface Bloom {
    id: number;
    x: string;
    y: string;
    color: string;
}

const MagneticPill = ({ pill, onClick, onHover }: {
    pill: typeof PILLS[0];
    onClick: () => void;
    onHover: (x: string, y: string, color: string) => void;
}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { damping: 20, stiffness: 150 });
    const springY = useSpring(y, { damping: 20, stiffness: 150 });

    return (
        <motion.div
            style={{
                position: "absolute",
                top: pill.top,
                left: pill.left,
                x: springX,
                y: springY,
                zIndex: 20,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={{ opacity: { duration: 0.8 }, scale: { duration: 0.8 }, y: { duration: 5 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" } }}
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                x.set((e.clientX - (rect.left + rect.width / 2)) * 0.35);
                y.set((e.clientY - (rect.top + rect.height / 2)) * 0.35);
            }}
            onMouseEnter={() => onHover(pill.left, pill.top, pill.bg)}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            onClick={onClick}
            className="cursor-pointer"
        >
            <motion.div
                whileHover={{ scale: 1.1 }}
                style={{ backgroundColor: pill.bg, color: pill.color }}
                className="px-6 py-2 rounded-full text-[10px] md:text-xs font-sans font-bold uppercase tracking-[0.2em] shadow-lg"
            >
                {pill.text}
            </motion.div>
        </motion.div>
    );
};

const BloomBackground = React.memo(({ blooms }: { blooms: Bloom[] }) => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <AnimatePresence>
                {blooms.map(bloom => (
                    <motion.div
                        key={bloom.id}
                        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                        animate={{
                            scale: [0, 5, 8],
                            opacity: [0, 0.35, 0],
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 4, ease: "easeOut" }}
                        style={{
                            position: "absolute",
                            left: bloom.x,
                            top: bloom.y,
                            width: "250px",
                            height: "250px",
                            backgroundColor: bloom.color,
                            filter: "blur(70px)",
                            mixBlendMode: "multiply",
                            borderRadius: "50%",
                            willChange: "transform, opacity",
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
});

BloomBackground.displayName = "BloomBackground";

export default function AISearchSection() {
    const [searchValue, setSearchValue] = useState("");
    const [blooms, setBlooms] = useState<Bloom[]>([]);
    const lastBloomTime = React.useRef(0);

    const addBloom = useCallback((x: string = "50%", y: string = "50%", specificColor?: string) => {
        const now = Date.now();
        // Throttle blooms on fast typing to prevent flickering/performance lag
        if (now - lastBloomTime.current < 150 && !specificColor) return;

        lastBloomTime.current = now;
        const id = now + Math.random();
        const color = specificColor || COLORS[Math.floor(Math.random() * COLORS.length)];

        setBlooms(prev => [...prev.slice(-10), { id, x, y, color }]);
        setTimeout(() => {
            setBlooms(prev => prev.filter(b => b.id !== id));
        }, 4500);
    }, []);

    return (
        <section className="w-full min-h-[90vh] bg-[#F4F4F0] flex flex-col items-center justify-center relative overflow-hidden px-6 py-20 selection:bg-[#C13028] selection:text-white border-t border-[#111111]/5">
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />

            <BloomBackground blooms={blooms} />

            <div className="absolute inset-0 pointer-events-none lg:pointer-events-auto">
                {PILLS.map((pill) => (
                    <MagneticPill key={pill.id} pill={pill} onClick={() => { setSearchValue(pill.text); addBloom(pill.left, pill.top, pill.bg); }} onHover={(x, y, color) => addBloom(x, y, color)} />
                ))}
            </div>

            <div className="z-10 w-full max-w-4xl flex flex-col items-center text-center pointer-events-none">
                <motion.h2
                    className="font-serif text-5xl md:text-7xl text-[#111111] mb-12 tracking-tight"
                >
                    What resonates <br className="md:hidden" /> with you today?
                </motion.h2>

                <div className="w-full md:w-3/4 flex flex-col items-center group pointer-events-auto">
                    <div className="w-full border-b border-[#111111] relative py-2">
                        <input
                            type="text"
                            value={searchValue}
                            onChange={(e) => { setSearchValue(e.target.value); addBloom(); }}
                            onFocus={() => addBloom()}
                            placeholder="Try 'a quiet morning', 'vivid red'..."
                            className="w-full bg-transparent border-none outline-none text-[#111111] font-sans text-lg md:text-xl placeholder:text-[#111111]/20 font-medium"
                        />
                    </div>
                    <p className="mt-4 text-[#111111]/40 font-sans text-[9px] uppercase tracking-[0.3em] font-bold">
                        (당신의 감성을 입력하세요)
                    </p>
                </div>

                <p className="mt-12 text-[#111111]/30 font-sans text-[10px] uppercase tracking-[0.4em] font-bold">
                    AI Aesthetic Resonance Engine
                </p>
            </div>

            {/* Decorative Traditional Seal or Lines */}
            <div className="absolute top-12 left-12 w-[1px] h-12 bg-[#111111]/10" />
            <div className="absolute bottom-12 right-12 w-8 h-8 border border-[#C13028]/20 flex items-center justify-center">
                <span className="text-[#C13028]/40 text-[8px] font-serif">美</span>
            </div>
        </section>
    );
}
