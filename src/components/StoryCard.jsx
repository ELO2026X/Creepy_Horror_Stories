import React from 'react';

const StoryCard = ({ story, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="group relative bg-[#080808] border border-gray-800/60 p-0 cursor-pointer overflow-hidden transition-all duration-500 hover:border-red-900/60 hover:shadow-[0_0_40px_rgba(220,38,38,0.05)] rounded-sm"
        >
            {/* Top Tab for "File" Look */}
            <div className="absolute top-0 right-0 bg-gray-900/50 px-3 py-1 border-b border-l border-gray-800 text-[9px] font-mono text-gray-500 uppercase tracking-widest group-hover:bg-red-950/30 group-hover:text-red-400 transition-colors">
                Case File #{story.id.toUpperCase().substring(0, 4)}
            </div>

            {/* Story Image */}
            {story.imageUrl && (
                <div className="w-full h-56 overflow-hidden relative border-b border-gray-800/50">
                    <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <img
                        src={story.imageUrl}
                        alt={story.title}
                        className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter grayscale contrast-125 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />

                    {/* Status Indicator */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-2 z-20">
                        <div className={`w-2 h-2 rounded-full ${story.is3D ? 'bg-red-500 animate-pulse shadow-[0_0_10px_#ef4444]' : 'bg-gray-600'}`} />
                        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 group-hover:text-gray-200">
                            {story.is3D ? 'Live Feed' : 'Archived'}
                        </span>
                    </div>
                </div>
            )}

            <div className="p-8 pt-6 relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-900/0 group-hover:bg-red-900/50 transition-all duration-500" />

                <h3 className="text-3xl font-bold mb-3 text-gray-300 group-hover:text-red-500 transition-colors uppercase tracking-tighter font-header leading-none">
                    {story.title}
                </h3>

                <div className="flex items-center gap-4 mb-4 text-[10px] font-mono text-gray-600 uppercase tracking-widest border-b border-gray-900 pb-4 group-hover:border-red-900/20 transition-colors">
                    <span className="text-red-900 group-hover:text-red-700">Auth: {story.author}</span>
                    <span>//</span>
                    <span>{story.date}</span>
                </div>

                <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2 font-serif group-hover:text-gray-400 transition-colors">
                    {story.summary}
                </p>

                <div className="flex flex-wrap gap-2">
                    {story.tags.map(tag => (
                        <span key={tag} className="text-[9px] uppercase tracking-widest bg-black px-2 py-1 text-gray-600 border border-gray-800 group-hover:border-red-900/30 group-hover:text-red-900/70 transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StoryCard;
