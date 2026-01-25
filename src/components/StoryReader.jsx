import React, { useEffect, useState } from 'react';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import AdSlot from './AdSlot';

const StoryReader = ({ story, onBack }) => {

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="animate-fade-in relative">
            <button
                onClick={onBack}
                className="group flex items-center gap-2 text-red-600 mb-8 hover:text-red-400 transition-colors uppercase text-sm font-bold tracking-widest"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Return to Index
            </button>

            {/* Special Visuals for Fractal Saint */}
            {story.id === 'fractal-saint' && (
                <div className="fixed inset-0 pointer-events-none z-0 opacity-10 mix-blend-screen overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-red-500/20 rounded-full animate-[spin_60s_linear_infinite]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-red-500/30 rotate-45 animate-[spin_40s_linear_infinite_reverse]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-red-500/10 rotate-12 animate-[pulse_4s_ease-in-out_infinite]" />
                </div>
            )}

            <article className="prose prose-invert prose-red max-w-none relative z-10">
                <header className="mb-12 border-b border-red-900/20 pb-8">
                    <h2 className="text-5xl font-black text-gray-100 mb-4 uppercase tracking-tighter">{story.title}</h2>
                    <div className="flex gap-4 text-xs font-sans uppercase tracking-widest text-red-700">
                        <span>Author: {story.author}</span>
                        <span>|</span>
                        <span>Archive: {story.date}</span>
                    </div>
                </header>

                <div
                    className="text-xl leading-relaxed first-letter:text-7xl first-letter:font-bold first-letter:text-red-600 first-letter:mr-3 first-letter:float-left"
                    dangerouslySetInnerHTML={{ __html: story.content }}
                />

                {/* --- INTERNAL PAGE AD SLOT --- */}
                <AdSlot className="mt-16 mb-8" />
            </article>

            <footer className="mt-16 p-8 bg-red-950/5 border border-red-900/20 rounded-lg relative z-10">
                <div className="flex items-start gap-4">
                    <AlertCircle className="text-red-600 shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-red-500 uppercase tracking-widest text-sm mb-2">Researcher's Note</h4>
                        <p className="text-sm italic text-gray-500">The contents of this file have been linked to severe psychological distress. If you begin to hear a rhythmic clicking or experience spatial anomalies, cease reading immediately.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default StoryReader;
