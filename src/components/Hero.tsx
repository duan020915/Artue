"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Logo, LogoText } from "./Logo";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Hero() {
    const router = useRouter();
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleScrollNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: scrollRef.current.offsetWidth * 0.8, behavior: "smooth" });
        }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        },
    };

    const [hoverArt, setHoverArt] = useState(false);
    const [hoverManifesto, setHoverManifesto] = useState(false);
    const [hoverHabitus, setHoverHabitus] = useState(false);
    const [hoverAesthetics, setHoverAesthetics] = useState(false);
    const [hoverRecommendation, setHoverRecommendation] = useState(false);

    const mainImage = "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80";
    const inkWashSideImage = "https://images.unsplash.com/photo-1762115331515-9740ca3dcd21?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluayUyMHdhc2glMjBwYWludGluZ3xlbnwwfHwwfHx8MA%3D%3D";
    const rightMainImage = "https://images.unsplash.com/photo-1642285231485-6ae1f9e03bfa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8JUU2JUIwJUI0JUU1JUEyJUE4JUU3JTk0JUJCfGVufDB8fDB8fHww";

    return (
        <div className="bg-[#111111] p-[1px] min-h-screen font-sans selection:bg-[#C13028] selection:text-white overflow-hidden tracking-wide">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-[1px] w-full min-h-screen relative"
            >
                {/* ==================== 顶部导航栏 ==================== */}
                <motion.nav
                    variants={itemVariants}
                    className="bg-[#F4F4F0] px-6 py-4 flex flex-col sm:flex-row justify-between items-center z-40 w-full relative shrink-0 font-sans"
                >
                    <div className="flex items-center gap-4">
                        <Logo size="sm" />
                        <LogoText size="sm" />
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-[#111111] font-bold mt-4 sm:mt-0">
                        <Link href="/" className="hover:text-[#C13028] transition-colors">Discovery</Link>
                        <Link href="/exhibition-list" className="hover:text-[#C13028] transition-colors">Exhibitions</Link>
                        <Link href="/3d-on-view" className="hover:text-[#C13028] transition-colors">3D On View</Link>
                        <Link href="/galleries" className="hover:text-[#C13028] transition-colors">Galleries</Link>
                        <Link href="/about" className="hover:text-[#C13028] transition-colors">About</Link>
                        <span className="w-[1px] h-4 bg-[#111111] opacity-20"></span>
                        <span className="text-[#111111]/60 font-semibold tracking-wider">한국어</span>
                    </div>
                </motion.nav>

                {/* ==================== 中间核心区域 ==================== */}
                <div className="flex gap-[1px] w-full min-h-[50vh] xl:min-h-[60vh] overflow-hidden flex-col lg:flex-row flex-1">

                    {/* 左侧侧边栏 (1/6 宽度) */}
                    <motion.div
                        animate={{
                            width: hoverArt ? "0%" : "16.666%",
                            opacity: hoverArt ? 0 : 1
                        }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col gap-[1px] bg-[#111111] overflow-hidden shrink-0 h-full"
                    >
                        <div className="h-28 lg:h-32 xl:h-40 bg-[#8299D4] shrink-0 min-w-10"></div>

                        <div
                            className="h-28 lg:h-32 xl:h-40 bg-[#111111] border-b border-[#333333] flex flex-col items-center justify-center overflow-hidden relative shrink-0 min-w-10 p-4 cursor-crosshair group"
                            onMouseEnter={() => setHoverAesthetics(true)}
                            onMouseLeave={() => setHoverAesthetics(false)}
                        >
                            <div className="absolute inset-0 pointer-events-none opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:10px_10px]"></div>

                            <motion.span
                                animate={{ y: hoverAesthetics ? -10 : 0, scale: hoverAesthetics ? 0.9 : 1 }}
                                transition={{ duration: 0.4 }}
                                className="text-[#F4F4F0] font-serif uppercase tracking-[0.3em] font-bold text-[10px] lg:text-xs z-10"
                            >
                                Aesthetics
                            </motion.span>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: hoverAesthetics ? 0.5 : 0, y: hoverAesthetics ? 5 : 10 }}
                                transition={{ duration: 0.4 }}
                                className="absolute text-center mt-6 z-10"
                            >
                                <p className="text-[8px] font-sans tracking-[0.4em] text-[#F4F4F0] uppercase font-bold leading-relaxed">
                                    Form • Space <br /> Proportion
                                </p>
                            </motion.div>

                            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#8299D4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#8299D4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Perfectly centered ink wash image */}
                        <div className="flex-1 bg-[#111111] flex items-center justify-center overflow-hidden relative shrink-0 min-w-10 p-4 xl:p-6">
                            <div className="w-full h-full max-h-[250px] xl:max-h-[300px] relative group shadow-[0_0_15px_rgba(0,0,0,0.8)] border border-[#111111] mx-auto flex items-center justify-center">
                                <img
                                    src={inkWashSideImage}
                                    alt="Ink Wash Detail"
                                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* 核心标题区 (5/12 宽度) */}
                    <motion.div
                        className="bg-[#F4F4F0] p-10 xl:p-14 flex flex-col justify-between shrink-0 overflow-hidden relative"
                        animate={{ width: "41.666%" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="min-w-[400px]">
                            {/* Serif exclusively for large brand statements */}
                            <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-serif text-[#111111] uppercase leading-tight tracking-tighter flex flex-col items-start gap-1 whitespace-nowrap">
                                <span className="bg-[#13C2C2] px-2 leading-none pb-1 mix-blend-multiply">A NEW WAY</span>
                                <span className="bg-[#13C2C2] px-2 leading-none pb-1 mix-blend-multiply">TO FEEL ART.</span>
                                <span className="bg-[#13C2C2] px-2 leading-none pb-1 mix-blend-multiply">LET ART RETURN</span>
                                <span className="bg-[#13C2C2] px-2 leading-none pb-1 mix-blend-multiply">TO CULTURE,</span>
                                <span className="bg-[#13C2C2] px-2 leading-none pb-1 mix-blend-multiply">NOT CAPITAL.</span>
                            </h1>
                            <div className="mt-8 text-[#111111] font-sans text-sm md:text-base tracking-wide max-w-[400px]">
                                <span className="block mb-3 font-bold text-[#24428F] tracking-widest text-xs">
                                    (새로운 예술의 발견, 자본이 아닌 문화로.)
                                </span>
                                <p className="opacity-80 leading-relaxed font-medium text-sm tracking-widest">
                                    Our AI recommendation engine cuts through the noise of the market, matching your
                                    personal resonance with emerging contemporary voices.
                                </p>
                            </div>
                        </div>
                        <div className="mt-16 flex gap-4 relative min-w-[300px]">
                            <Link href="/exhibition-list">
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#111111] text-white px-10 py-5 font-sans uppercase tracking-[0.2em] text-xs font-bold hover:bg-[#C13028] transition-[background-color,transform] rounded-none shrink-0">
                                    Explore
                                </motion.button>
                            </Link>
                            <Link href="/about">
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-transparent text-[#111111] border border-[#111111] px-10 py-5 font-sans uppercase tracking-[0.2em] text-xs font-bold hover:bg-[#111111] hover:text-white transition-[background-color,color,transform] rounded-none shrink-0">
                                    About
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* 红色宣言区 / 蓝色填充区 列组合 (2/12 宽度) */}
                    <motion.div
                        animate={{ width: "16.666%" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col gap-[1px] shrink-0"
                    >
                        <div
                            onMouseEnter={() => setHoverManifesto(true)}
                            onMouseLeave={() => setHoverManifesto(false)}
                            className="flex-1 text-[#F4F4F0] bg-[#C13028] p-8 flex flex-col justify-end relative overflow-hidden group cursor-crosshair min-h-[30vh]"
                        >
                            <div className="min-w-[200px]">
                                {/* Position aligned identically to the Habitus layout below for symmetry */}
                                <motion.div animate={{ y: hoverManifesto ? -50 : 0, opacity: hoverManifesto ? 0 : 1 }} transition={{ duration: 0.4 }} className="absolute inset-0 flex flex-col items-center justify-end pb-12 text-center pointer-events-none">
                                    <h3 className="font-serif text-[28px] uppercase tracking-widest font-normal mb-6">Manifesto:</h3>
                                    <p className="font-sans uppercase tracking-[0.2em] text-[10px] lg:text-xs border-t border-[#F4F4F0] pt-4 w-3/4 mx-auto font-bold opacity-90">Culture Over<br />Capital</p>
                                </motion.div>
                                <motion.div initial={{ y: "100%", opacity: 0 }} animate={{ y: hoverManifesto ? "0%" : "100%", opacity: hoverManifesto ? 1 : 0 }} transition={{ duration: 0.4 }} className="absolute inset-0 p-8 flex flex-col justify-center bg-[#111111] text-[#F4F4F0]">
                                    <h4 className="font-serif text-2xl uppercase mb-6 text-[#E1A140] tracking-tighter">Core Values</h4>
                                    <ul className="flex flex-col gap-4 font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">
                                        <li className="flex items-center gap-3 border-b border-[#333333] pb-2"><span className="w-2 h-2 bg-[#F5A382] inline-block"></span> Intuitive Collecting</li>
                                        <li className="flex items-center gap-3 border-b border-[#333333] pb-2"><span className="w-2 h-2 bg-[#C13028] inline-block"></span> Culture & Identity</li>
                                        <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#008050] inline-block"></span> Personal Resonance</li>
                                    </ul>
                                </motion.div>
                            </div>
                        </div>

                        {/* Reverting to E1A140 Yellow */}
                        <div
                            className="flex-1 bg-[#E1A140] hidden lg:flex flex-col justify-center overflow-hidden relative cursor-crosshair"
                            onMouseEnter={() => setHoverHabitus(true)}
                            onMouseLeave={() => setHoverHabitus(false)}
                        >
                            <div className="absolute inset-0 p-8 flex flex-col justify-center text-[#111111]">
                                {/* Aligned to mirror the Manifesto block positioning above on the mirror axis */}
                                <motion.div
                                    animate={{ y: hoverHabitus ? 20 : 0, opacity: hoverHabitus ? 0 : 1 }}
                                    transition={{ duration: 0.4 }}
                                    // Changed to justify-start and pt-12 to align with the bottom-aligned Manifesto block across the center axis
                                    className="absolute inset-0 flex flex-col items-center justify-start pt-12 text-center pointer-events-none"
                                >
                                    <h3 className="font-serif text-[28px] uppercase tracking-widest font-normal mb-8">Habitus</h3>
                                </motion.div>

                                <motion.div
                                    initial={{ y: "80%", opacity: 0 }}
                                    animate={{ y: hoverHabitus ? "0%" : "80%", opacity: hoverHabitus ? 1 : 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0 flex items-center justify-center p-6 text-center bg-[#111111] text-[#F4F4F0]"
                                >
                                    {/* Changed border color logic for blue to match */}
                                    <p className="font-serif text-[11px] leading-relaxed italic opacity-90 border-l px-4 border-[#E1A140]">
                                        "A system of embodied dispositions... that organize the ways in which individuals perceive the social world."<br />
                                        <span className="block mt-2 font-sans text-[9px] uppercase tracking-widest text-[#E1A140] font-bold not-italic">— Pierre Bourdieu</span>
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* 主画廊展示区 */}
                    <motion.div
                        onMouseEnter={() => setHoverArt(true)}
                        onMouseLeave={() => setHoverArt(false)}
                        animate={{ flexGrow: 1 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-[#24428F] p-4 flex flex-col relative z-40 overflow-hidden cursor-crosshair min-h-[50vh]"
                    >
                        <div className="absolute inset-4 border border-[#8299D4] z-10 pointer-events-none mix-blend-overlay"></div>

                        <motion.div
                            className="absolute inset-4 bg-center bg-cover bg-no-repeat transition-all duration-700 w-auto"
                            style={{ backgroundImage: `url('${rightMainImage}')` }}
                        >
                            <div className="absolute inset-0 bg-[#24428F]/10 mix-blend-multiply pointer-events-none transition-opacity duration-500 opacity-60 hover:opacity-0"></div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: hoverArt ? 1 : 0, y: hoverArt ? 0 : 10 }}
                            transition={{ duration: 0.4, delay: hoverArt ? 0.3 : 0 }}
                            className="absolute bottom-10 left-10 pointer-events-none z-20"
                        >
                            <span className="text-[#F4F4F0] font-sans tracking-[0.3em] uppercase text-xs font-bold opacity-90 drop-shadow-lg">
                                Ink Symphony, 2026
                            </span>
                        </motion.div>
                    </motion.div>
                </div>


                {/* ==================== 底部信息栏与滑动图集区 ==================== */}
                <div className="flex w-full min-h-[80px] h-32 lg:h-36 items-stretch gap-[1px] flex-col lg:flex-row bg-[#111111] shrink-0">
                    <Link href="/galleries" className="w-full lg:w-[22%] bg-[#008050] flex flex-col items-center justify-center shrink-0 cursor-pointer hover:opacity-95 transition-all overflow-hidden p-2">
                        <span className="text-[#F4F4F0] font-serif uppercase tracking-widest text-lg lg:text-xl xl:text-2xl font-normal leading-tight text-center">
                            500+<br />Emerging<br />Artists
                        </span>
                    </Link>

                    <Link href="/" className="w-full lg:w-[22%] bg-[#F5A382] flex flex-col items-center justify-center shrink-0 cursor-pointer hover:opacity-95 transition-all overflow-hidden p-2">
                        <span className="text-[#111111] font-serif uppercase tracking-widest text-lg lg:text-xl xl:text-2xl font-normal leading-tight text-center">
                            Intuitive<br />Discovery
                        </span>
                    </Link>

                    {/* Recommendation for you - Interactive Block */}
                    <div
                        className="flex-1 relative flex bg-[#111111] overflow-hidden"
                        onMouseEnter={() => setHoverRecommendation(true)}
                        onMouseLeave={() => setHoverRecommendation(false)}
                    >
                        {/* The interactive blue block */}
                        <motion.div
                            animate={{
                                width: hoverRecommendation ? "22%" : "100%",
                                zIndex: hoverRecommendation ? 30 : 20
                            }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-[#8299D4] flex flex-col items-center justify-center shrink-0 cursor-pointer overflow-hidden px-4"
                        >
                            <span className="text-[#111111] font-serif uppercase tracking-widest text-base lg:text-lg xl:text-xl font-normal leading-tight text-center whitespace-pre-wrap">
                                Recommendation<br />For You
                            </span>
                        </motion.div>

                        {/* Artwork Slider - Revealed on Hover */}
                        <div className="flex-1 bg-[#F4F4F0] py-4 px-4 flex flex-col justify-center overflow-hidden relative group">
                            <div className="absolute right-0 top-0 bottom-0 z-20 pointer-events-none">
                                <div className="w-16 h-full bg-gradient-to-l from-[#F4F4F0] hidden lg:block"></div>
                            </div>

                            <div
                                ref={scrollRef}
                                className="flex gap-8 w-full h-full items-center overflow-x-auto scrollbar-hide z-10 px-2 lg:px-4"
                                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                            >
                                {[
                                    "https://artue.io/static/image/artwork/b9ffe3e0-d717-11f0-b94e-a700d676d55e/b9ffe3e1-d717-11f0-b94e-a700d676d55e_400px.webp",
                                    "https://artue.io/static/image/artwork/b654d4b0-9c0f-11ef-b0ac-b1724fcdc6b9/b654d4b1-9c0f-11ef-b0ac-b1724fcdc6b9_400px.webp",
                                    "https://artue.io/static/image/artwork/initial/Yunsup%20Kim_Contemporary%20art%20and%20a%20lion_front_400px.webp",
                                    "https://artue.io/static/image/artwork/eaf1fbb0-67a4-11f0-acbb-1f4c46528d42/eaf1fbb1-67a4-11f0-acbb-1f4c46528d42_400px.webp",
                                    "https://artue.io/static/image/artwork/75ee4af0-4c5b-11ee-9181-73503862b6b2/75ee4af1-4c5b-11ee-9181-73503862b6b2_400px.webp",
                                ].map((src, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.05 }}
                                        onClick={(e) => { e.stopPropagation(); router.push("/exhibition-list"); }}
                                        className="w-[200px] h-full shrink-0 relative overflow-hidden flex items-center justify-center bg-transparent rounded-none"
                                    >
                                        <img src={src} alt={`Artwork ${idx}`} className="w-full h-full object-cover rounded-none block mix-blend-multiply" />
                                    </motion.div>
                                ))}
                            </div>

                            <div
                                className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col justify-center z-30 transition-transform hover:scale-105"
                                onClick={handleScrollNext}
                            >
                                <div className="bg-[#111111] text-[#F4F4F0] p-4 flex flex-col gap-1 items-end rounded-none shadow-lg cursor-pointer">
                                    <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold">More</span>
                                    <span className="text-[10px] uppercase tracking-[0.3em] font-sans flex items-center gap-2 opacity-80 font-bold">
                                        Slide »
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 右下角滚动提示 */}
                    <div
                        className="w-full lg:w-[8.333%] bg-[#F4F4F0] p-4 flex flex-col justify-between items-end border-t lg:border-t-0 border-[#111111] lg:border-l z-10 relative group cursor-pointer shrink-0"
                        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                    >
                        <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-[#111111] origin-top-right rotate-90 lg:rotate-0 whitespace-nowrap opacity-70 group-hover:opacity-100 transition-opacity">
                            Scroll -&gt;
                        </span>
                        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#111111] font-bold text-right pt-2 whitespace-pre-wrap leading-relaxed hidden lg:block group-hover:text-[#C13028] transition-colors">
                            Featured <br /> Exhibition <br /> ↓
                        </span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
