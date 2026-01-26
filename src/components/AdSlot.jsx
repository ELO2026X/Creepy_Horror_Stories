import React from 'react';

const AdSlot = ({ publisherId = "ca-pub-6275575304084608", slotId = "YOUR_AD_SLOT_ID", className }) => {
    return (
        <div className={`bg-[#0a0a0a] border border-gray-800/30 p-8 flex flex-col items-center justify-center min-h-[150px] relative overflow-hidden group ${className}`}>
            <div className="absolute top-0 left-0 w-full h-[1px] bg-red-900/20 animate-scan"></div>
            <p className="text-xs text-gray-700 font-mono uppercase tracking-[0.2em] mb-4">External Broadcast Signal [Sponsor]</p>

            <div className="w-full max-w-[728px] h-[90px] bg-black border border-gray-800 flex items-center justify-center relative overflow-hidden group-hover:border-red-900/40 transition-colors">

                {/* Fallback / Background visuals (Visible if ad doesn't load) */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="w-full h-full bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] bg-cover opacity-10 mix-blend-screen"></div>
                    <div className="absolute inset-0 bg-red-900/10 animate-pulse"></div>
                </div>

                <span className="absolute z-0 text-[10px] font-mono text-red-900/50 uppercase tracking-[0.3em] animate-pulse">
                    $$ NO SIGNAL // AWAITING INPUT $$
                </span>

                {/* Ad Unit (Covers the background if active) */}
                <ins className="adsbygoogle block relative z-10"
                    style={{ display: 'block', width: '100%', height: '100%' }}
                    data-ad-client={publisherId}
                    data-ad-slot={slotId}
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
            </div>
        </div>
    );
};

// Initialize Ads (Global check to prevent multiple script tags or errors)
try {
    if (window && window.adsbygoogle) {
        // This push causes the ad script to scan for new <ins> tags
        // We wrap it in a timeout or useEffect in a real component, but usually the script handles it.
        // React strict mode might cause double-calls, but adsbygoogle usually handles that.
    }
} catch (e) {
    console.error("AdSense Error:", e);
}

export default AdSlot;
