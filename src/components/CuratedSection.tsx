"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CuratedSection = () => {
    const [images] = useState([
        // New Arrivals
        { src: "https://artue.io/static/image/artwork/dae0cc60-bbdf-11ed-89f8-9f38f12355f3/230126-19788_400px.webp", title: "Eternal Spring", artist: "Hyon Kyoung", category: "New Arrivals" },
        { src: "https://artue.io/static/image/artwork/e51aaf90-1706-11f1-808c-cdb170b9b60e/e51aaf91-1706-11f1-808c-cdb170b9b60e_400px.webp", title: "Blue Morning", artist: "Sunghoon Kim", category: "New Arrivals" },
        { src: "https://artue.io/static/image/artwork/ee74e9e0-1709-11f1-9da9-7fb2385aaa37/ee74e9e1-1709-11f1-9da9-7fb2385aaa37_400px.webp", title: "Forest Study", artist: "Jane Doe", category: "New Arrivals" },

        // Yerang Hwang
        { src: "https://artue.io/static/image/artwork/dd74d830-b4fa-11ee-83da-4b228deffaba/dd74d831-b4fa-11ee-83da-4b228deffaba_400px.webp", title: "Forest Breath", artist: "Yerang Hwang", category: "Yerang Hwang" },
        { src: "https://artue.io/static/image/artwork/6af2ebc0-b4fb-11ee-8d19-bf8d16a67857/6af2ebc1-b4fb-11ee-8d19-bf8d16a67857_400px.webp", title: "Quiet Echo", artist: "Yerang Hwang", category: "Yerang Hwang" },
        { src: "https://artue.io/static/image/artwork/3e2d6f20-b4fb-11ee-8d19-bf8d16a67857/3e2d6f21-b4fb-11ee-8d19-bf8d16a67857_400px.webp", title: "Morning Dew", artist: "Yerang Hwang", category: "Yerang Hwang" },

        // Chansong Kim
        { src: "https://artue.io/static/image/artwork/bdb6d910-81fd-11ee-bac4-2fa3bc70fc91/bdb6d911-81fd-11ee-bac4-2fa3bc70fc91_400px.webp", title: "Air & Skin", artist: "Chansong Kim", category: "Chansong Kim" },
        { src: "https://artue.io/static/image/artwork/835d5140-466b-11ee-8bf1-0b0884708a43/835d5141-466b-11ee-8bf1-0b0884708a43_400px.webp", title: "Tactile Space", artist: "Chansong Kim", category: "Chansong Kim" },
        { src: "https://artue.io/static/image/artwork/initial/Chansong%20Kim_%EA%B3%B5%EA%B8%B0%EA%B0%80%20%EC%82%B4%EA%B0%97%EC%97%90%20%EB%8B%BF%EC%9D%84%20%EB%95%8C_front_400px.webp", title: "Touch of Light", artist: "Chansong Kim", category: "Chansong Kim" },

        // Hiroshi Nagai
        { src: "https://artue.io/static/image/artwork/05a23ea0-fe03-11ee-af29-f1a17ffdc288/05a23ea1-fe03-11ee-af29-f1a17ffdc288_400px.webp", title: "Long Vacation", artist: "Hiroshi Nagai", category: "Hiroshi Nagai" },
        { src: "https://artue.io/static/image/artwork/25248f80-fe17-11ee-af29-f1a17ffdc288/2524b690-fe17-11ee-af29-f1a17ffdc288_400px.webp", title: "Poolside Blue", artist: "Hiroshi Nagai", category: "Hiroshi Nagai" },
        { src: "https://artue.io/static/image/artwork/75ee4af0-4c5b-11ee-9181-73503862b6b2/75ee4af1-4c5b-11ee-9181-73503862b6b2_400px.webp", title: "A Tropical Night", artist: "Hiroshi Nagai", category: "Hiroshi Nagai" },

        // Ikumi Nakada
        { src: "https://artue.io/static/image/artwork/af892e80-d475-11ef-a67a-251d9b4dea6a/af892e81-d475-11ef-a67a-251d9b4dea6a_400px.webp", title: "Floating Dreams", artist: "Ikumi Nakada", category: "Ikumi Nakada" },
        { src: "https://artue.io/static/image/artwork/0aa2ed60-d750-11ef-8ec5-1b68d917dae3/0aa2ed61-d750-11ef-8ec5-1b68d917dae3_400px.webp", title: "Midnight Whisper", artist: "Ikumi Nakada", category: "Ikumi Nakada" },
        { src: "https://artue.io/static/image/artwork/37da8230-d74f-11ef-8e89-ed36710b5c79/37da8231-d74f-11ef-8e89-ed36710b5c79_400px.webp", title: "Childhood Memory", artist: "Ikumi Nakada", category: "Ikumi Nakada" },
    ]);

    const categories = Array.from(new Set(images.map(img => img.category)));
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const scrollRef = useRef<HTMLDivElement>(null);

    const activeColors = ["#C13028", "#8299D4", "#E1A140", "#008050", "#24428F"];
    const filteredImages = images.filter(img => img.category === activeCategory);

    const handleCategoryClick = (cat: string) => {
        setActiveCategory(cat);
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
    };

    return (
        <section className="bg-[#F4F4F0] w-full selection:bg-[#C13028] selection:text-[#F4F4F0] border-t border-[#111111]/10">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-8 px-6 md:px-12 py-16 md:py-24 w-full">

                {/* Left Column - Static Category List */}
                <div className="w-full lg:col-span-4 flex flex-col justify-center space-y-4 lg:pr-8">
                    <h3 className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#111111]/40 font-bold mb-8">
                        Featured Curations
                    </h3>
                    <div className="flex flex-col space-y-2">
                        {categories.map((cat, idx) => {
                            const isActive = cat === activeCategory;
                            const color = activeColors[idx % activeColors.length];

                            return (
                                <motion.button
                                    key={cat}
                                    onClick={() => handleCategoryClick(cat)}
                                    className="relative group w-full text-left py-4 px-6 overflow-hidden transition-all duration-300"
                                    initial={false}
                                >
                                    {/* Hover/Active Background Block */}
                                    <motion.div
                                        className="absolute inset-0 z-0 origin-left"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: isActive ? 1 : 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        style={{ backgroundColor: color }}
                                    />

                                    {/* Static Hover Tint for better UX */}
                                    {!isActive && (
                                        <div
                                            className="absolute inset-0 z-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 opacity-20"
                                            style={{ backgroundColor: color }}
                                        />
                                    )}

                                    <span className={`
                                relative z-10 font-sans uppercase tracking-[0.2em] transition-all duration-300
                                ${isActive ? "text-[#F4F4F0] text-3xl font-bold" : "text-[#111111]/60 text-xl font-medium group-hover:text-[#111111] group-hover:pl-2"}
                            `}>
                                        {cat}
                                    </span>
                                </motion.button>
                            );
                        })}
                    </div>
                </div>

                {/* Right Column - Gallery */}
                <div
                    ref={scrollRef}
                    className="w-full lg:col-span-8 flex overflow-x-auto gap-10 lg:gap-14 cursor-grab pb-10 items-center no-scrollbar"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredImages.map((art, idx) => (
                            <motion.div
                                key={`${art.title}-${idx}`}
                                initial={{ opacity: 0, x: 40, scale: 0.98 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -40, scale: 0.98 }}
                                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                className="shrink-0 group w-[320px] md:w-[420px]"
                            >
                                <div className="w-full h-[380px] md:h-[480px] overflow-hidden bg-transparent">
                                    <img
                                        src={art.src}
                                        alt={art.title}
                                        className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-[1.2s] ease-out mix-blend-multiply"
                                    />
                                </div>
                                <div className="border-b border-[#111111] w-full mt-6 mb-4 opacity-10 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="flex flex-col items-start px-1 space-y-1">
                                    <p className="text-[10px] md:text-xs text-gray-400 font-sans tracking-[0.3em] uppercase font-bold">{art.artist}</p>
                                    <p className="text-lg md:text-xl font-bold text-[#111111] font-serif">{art.title}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    <div className="shrink-0 w-[5vw]" />
                </div>
            </div>
        </section>
    );
};
