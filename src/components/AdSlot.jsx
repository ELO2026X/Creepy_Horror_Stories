import React from 'react';

const AdSlot = ({ publisherId = "ca-pub-6275575304084608", slotId = "YOUR_AD_SLOT_ID", className }) => {
    return (
        <div className={`bg-[#0a0a0a] border border-gray-800/30 p-8 flex flex-col items-center justify-center min-h-[150px] relative overflow-hidden group ${className}`}>
            <div className="absolute top-0 left-0 w-full h-[1px] bg-red-900/20 animate-scan"></div>
            <p className="text-xs text-gray-700 font-mono uppercase tracking-[0.2em] mb-4">External Broadcast Signal [Sponsor]</p>

            <div className="w-full max-w-[728px] h-[90px] bg-black/40 border border-dashed border-gray-800 flex items-center justify-center text-gray-600 font-mono text-xs">
                <ins className="adsbygoogle block"
                    data-ad-client={publisherId}
                    data-ad-slot={slotId}
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
                <span className="opacity-30">Ad Signal Active</span>
            </div>
        </div>
    );
};

export default AdSlot;
