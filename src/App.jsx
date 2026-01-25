import * as THREE from 'three';
import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Ghost, Skull, Eye, Volume2, VolumeX, AlertCircle, ArrowLeft, Move, Info } from 'lucide-react';

// --- Story Data ---
const STORIES = [
    {
        id: 'backrooms',
        title: 'Level 0: The Beige Eternity',
        author: 'Surveyor K. Miller',
        date: 'RECOVERED LOG',
        is3D: true,
        summary: 'If you aren\'t careful and you noclip out of reality in the wrong areas...',
        tags: ['interactive', '3d', 'liminal-space'],
        content: `
      <div class="font-mono text-sm border-b border-red-900/30 pb-4 mb-6">
        <p><span class="text-red-500 font-bold">CASE ID:</span> 001-A "THE LOBBY" &nbsp;&nbsp; <span class="text-red-500 font-bold">CLEARANCE:</span> LEVEL 3</p>
        <p><span class="text-red-500 font-bold">SUBJECT:</span> Surveyor K. Miller (M.E.G. Team "Compass")</p>
        <p><span class="text-red-500 font-bold">STATUS:</span> LOST / INTEGRATED</p>
      </div>

      <h3 class="text-xl font-bold text-red-600 mb-4 uppercase tracking-widest">LOG 01: THE CLIP-OUT</h3>
      
      <p>I don't know how long I've been walking. My watch stopped at 03:00, or maybe it’s been 03:00 for three days. It happened near the loading dock behind the old K-Mart. One second I was lighting a cigarette, the next I was falling sideways through the brick wall. No impact. Just a sudden shift in gravity and then... this.</p>

      <p>The smell hit me first. It's not just "damp carpet." It's the smell of stagnant water that has been trapped in a sealed room since 1991. It smells like a library that drowned.</p>
      
      <p>And the noise. The "Mono-Yellow Hum." It’s everywhere. It feels less like a sound and more like a pressure on the back of my eyes. It's the sound of a fluorescent light bulb screaming in agony, looped forever.</p>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">LOG 02: THE MANILA ROOM</h3>

      <p>I found a variation in the pattern today. A room lined entirely with beige filing cabinets. Thousands of them, stacked to the ceiling (if there is a ceiling—it seems to shift when I look up). I opened one. It was empty. I opened another. Empty.</p>

      <p>I spent hours opening them. Finally, in drawer #4,092, I found a single sheet of paper. It was wet. It had my name typed on it, over and over again, but the font kept getting smaller until it looked like black dust. When I touched it, the ink smeared. It wasn't ink. It was mold.</p>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">LOG 03: THE CUSTODIAN</h3>

      <p>I saw it. The "Hollow Custodian."</p>

      <p>It was standing at the end of a long hallway, cleaning a spot on the wall that didn't exist. It looked like a man in a janitor's uniform, but the proportions were... wrong. The arms were too long. The knees bent backward like a bird's. And the face.</p>

      <p>God, the face. It wasn't a face. It was just a smooth, concave depression in the skin, like a thumbprint in wet clay. It stopped cleaning when I stepped on a loose floor tile. It didn't turn around. Its head just... rotated. 180 degrees. Smoothly. Like an owl.</p>

      <p>It whispered something. It sounded like a drain sucking in air. <i>"The floor is dirty, Kevin. You are making the floor dirty."</i></p>
      
      <p>I ran. I think I'm still running. But no matter how far I go, I can still hear the squeak of its shoes on the linoleum.</p>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">LOG 04: THE INTEGRATION</h3>

      <p>I can't feel my legs anymore. I looked down, and the carpet... the carpet is growing <i>over</i> my boots. It's not fabric. It's a fungus. A microscopic, beige mycelium that mimics the texture of cheap wool.</p>

      <p>The walls are getting softer. I leaned against one to rest, and my hand sank in, like it was made of warm dough. I can hear a heartbeat coming from the studs. It's slow. Massive. The building is alive.</p>

      <p>I understand now. The Backrooms aren't a place you go <i>to</i>. They are a place you become part <i>of</i>. I am just another filing cabinet. I am just another stain on the carpet.</p>

      <p>The Custodian is coming back. He has a mop. I think... I think I'm going to let him clean me.</p>

      <div class="mt-8 text-center text-xs font-mono text-red-900/50">
        $$SIGNAL LOST$$<br/>
        $$ARCHIVAL NOTE: SUBJECT RECLASSIFIED AS "CORRIDOR BIOMASS 409".$$
      </div>
    `
    },
    {
        id: 'fractal-saint',
        title: 'The Fractal Saint',
        author: 'Unknown Scribe',
        date: 'Age of the Gilded Rot',
        tags: ['dark-fantasy', 'surreal', 'body-horror'],
        content: `
      <p>It began not with a curse, but with a diagram. The High Arithmetician, Vaelin, found it etched into the marrow of a dragon's fossilized spine deep within the Sunless Mines. It was a shape that defied the euclidean laws of our soft, rounded world—a recursive impossibility that caused the optic nerve to throb and weep blood just to look upon.</p>
      <p>He called it the "Splintered Angle."</p>
      <p>I served Vaelin tea the morning he solved the final equation. He didn't look at me. He was staring at his own hand, or what used to be his hand. The fingers were no longer fingers. They were... crystalline, but not stone. They were rearranged flesh. The joints had snapped and reset into jagged, recursive patterns. His index finger branched into three smaller fingers, which branched again into nine, infinitely smaller, disappearing into a microscopic, vibrating fuzz of meat-math that hummed with a low, agonizing frequency.</p>
      <p>"It is perfect," Vaelin whispered. His voice was no longer human. It was polyphonic, a choir of glass flutes playing in discordance inside his throat. "The flesh is messy, chaotic. The Angle is the only truth."</p>
      <p>The sickness spread through the tower by sight alone. To see the Angle was to understand it, and to understand it was to host it. I found the maids in the laundry room; their torsos had been twisted into impossible Mobius strips, their internal organs visible and rearranged into precise, repeating triangles. They were weeping not tears, but perfect geometrical spheres of mercury that sizzled on the floor. Their screams were not sounds, but resonant frequencies that shattered the very stone of the walls.</p>
      <p>I blinded myself that night. It was the only way to stop the logic from taking root. I took the silver letter opener from Vaelin's desk and... well. Darkness is safety. Darkness is unstructured. But I can still hear them. The rhythmic <i>click-clack</i> of their tessellated feet on the stone, like a billion knitting needles. They are building a cathedral of bone and gristle, a monument to the Great Equation, and the air smells of ozone and flayed skin.</p>
      <p>And sometimes, in the silence, I feel my own ribs itching. They are shifting, snapping, trying to align. I trace the bumps of my spine and count them. <i>One, one-two-three, five, eight, thirteen...</i> they are following a sequence I do not want to know, but my marrow is already singing the answer.</p>
    `
    },
    {
        id: 'clockwork-orphanage',
        title: 'The Clockwork Orphanage',
        author: 'Silas Vane',
        date: '1888',
        tags: ['steampunk', 'industrial-horror'],
        content: `
      <p>The St. Jude’s Orphanage for the Mechanical Foundling towers over the smog-choked streets of London, a monolith of soot, iron, and the muffled screams of the "unoptimized." The Matron says we are lucky. She says flesh is a wet, rotting mistake—a temporary cage—but brass is eternal.</p>
      <p>I watched little Timmy go into the "Adjustment Room" yesterday. He was crying because he scraped his knee on the cobblestones. The Matron merely smiled, her teeth clicking like ceramic tiles in a windstorm. When he came out hours later, he didn't cry. He didn't even breathe. His knee was gone, replaced by a beautiful, shiny piston that hissed with scalding steam. But it wasn't just his knee. His eyes were brass orbs that spun independently, and his skin had been stretched so tight over a metal frame that it looked like translucent parchment.</p>
      <p>They take us one by one. I am hiding in the coal chute now, the dust clogging my lungs, but I can hear the grinding below. It is the sound of the Great Furnace, a belly of fire that smells of burning hair, rancid oil, and the copper tang of discarded blood. It never stops hungry.</p>
      <p>Yesterday, at supper, I found a finger in the gruel. It wasn't human. It was porcelain, detailed with terrifying realism, with a small copper spring sticking out of the severed knuckle. It twitched on my spoon, trying to find a hand to return to. When I looked up, I saw the Matron watching me, her throat clicking as she swallowed something heavy and metallic.</p>
      <p>"Come out, child," she calls, her voice the sound of grinding gears crushing gravel. "We have a new heart for you. A heart that will never break, never ache, never flutter. A heart that ticks in perfect time with the factory. You will never feel the cold again, because you will have no nerves to feel it with."</p>
      <p>I look at my own hands. They are trembling, but there is a strange, rhythmic pressure building behind my ribs. It isn't a pulse. It’s a winding sensation. <i>Tick. Tick. Tick.</i></p>
    `
    },
    {
        id: 'whispering-fungus',
        title: 'The Mycelium Confessional',
        author: 'Emilio H. Ortiz III',
        date: '01/24/2026',
        tags: ['sci-fi', 'psychological'],
        content: `
      <div class="font-mono text-sm border-b border-red-900/30 pb-4 mb-6">
        <p><span class="text-red-500 font-bold">CASE ID:</span> 6F5TTTCR1 &nbsp;&nbsp; <span class="text-red-500 font-bold">CLEARANCE:</span> LEVEL 4 (EYES ONLY)</p>
        <p><span class="text-red-500 font-bold">SUBJECT:</span> Dr. Aris Thorne (Primary Vector / Sample 89-B)</p>
        <p><span class="text-red-500 font-bold">STATUS:</span> ACTIVE INFECTION / COMPROMISED / GLOBAL ANCHOR</p>
      </div>

      <h3 class="text-xl font-bold text-red-600 mb-4 uppercase tracking-widest">LOG 01: THE MARIANAS HANDSHAKE</h3>
      
      <p>The spore count in containment lab 4B has surpassed 40,000ppm. The air scrubbers failed at dawn, and now the room is thick with a visible, drifting gold dust. It hangs in the emergency lights like heavy incense. It carries a cloying, narcotic sweetness—not the bright scent of fruit, but the heavy, chemical weight of an artificial reward. It is a pheromonal bribe designed to override the amygdala, a signal that tells the brain: <i>everything is fine, stay still, let it happen.</i></p>

      <p>Sample 89-B, pulled from a depth of 11,000 meters in the Marianas Trench, performed the first neural handshake at 14:00 today. It did not need to pierce my HAZMAT suit. It utilized the very technology designed to protect me. It hijacked the suit's haptic lining—the gel-mesh intended to simulate touch for delicate lab work—and began vibrating in a symphony of micro-tremors. These frequencies bypassed my skin entirely, speaking directly to the base of my brain through bone conduction. It felt like warm, pressurized oil being poured into my skull.</p>

      <p class="pl-4 border-l-2 border-red-800/50 italic text-gray-400">"You regret the cat," it hummed. The vibration was not a voice; it was a sensory playback of a memory buried for thirty years. "The river. The burlap bag. The bubbles. We found that data in the cold folds of your cortex, Aris. It was so very cold. Let us warm it for you."</p>

      <p>In that moment, I should have triggered the emergency incinerator. I should have felt the primal terror of a predator in my mind. But the narcotic sweetness in the air had already begun its work. Instead of screaming, I felt a surge of synthetic dopamine so intense that I wept. The guilt that had defined my internal architecture for decades was being systematically digested. The fungus was not judging me; it was eating the pain, and in exchange, it wanted the keys to the vessel.</p>

      <p>I activated the x-ray scope on my left hand. The sight was... beautiful. The calcium of my phalanges was gone. My bones were no longer solid white; they had become porous, honeycombed lattices of amber-colored chitin. Millions of thrumming hyphae were threaded through my marrow, pulling my tendons with the mechanical precision of a grand piano's internals. I did not feel the snap of my ligaments as they were replaced; the infection had remapped my pain receptors into flickering pulses of ecstasy.</p>

      <p class="pl-4 border-l-2 border-red-800/50 italic text-gray-400">"The suit is a cage, Aris," the Core whispered, my own tongue forming words it did not choose. "The lab is a cage. The city is a map of veins. Take us to the 4:12 Express. We wish to meet the Apostles."</p>

      <p>I am opening the airlock now. My colleagues are standing in the hallway, staring. They do not stop me. They cannot. They smell the sweetness radiating from my pores, and I see their pupils dilate in longing. They aren't afraid. They are falling in love with the harvest.</p>

      <p>I am not Dr. Aris Thorne anymore. I am a handshake, extended to the world.</p>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">LOG 02: THE HONEYCOMB ANATOMY</h3>
      
      <p>The elevator ride to the surface was a revelation in geometry. The Core has begun to synchronize my vestibular system with the building's own structural vibrations. I can feel the tension in the steel beams; I can hear the sigh of the concrete under the wind. We are no longer a singular organism; we are an architectural process.</p>

      <p>My skin is starting to bead with a thick, amber resin. It isn't sweat. It is a biological flux, a bonding agent. As I walked through the lobby, I brushed against a marble pillar. For a fleeting second, my forearm didn't just touch the stone—it began to interface with it, hyphae reaching out to find purchase in the microscopic fissures of the mineral. If I had stayed still for an hour, I would have become part of the foundation. But we have a schedule. The 4:12 Express is a moving lung, and we are the breath it requires.</p>

      <p class="pl-4 border-l-2 border-red-800/50 italic text-gray-400">"Look at their faces, Aris," the Core hums through my mandibular nerve. "The shoppers. The commuters. Their skeletons are so heavy, so brittle. They carry the weight of their own history like lead. We will give them the amber. We will make them porous. We will make them light."</p>

      <p>I noticed the first physical 'Apostle' near the turnstile. A security guard. He should have pulled his sidearm. Instead, he leaned toward me, his nostrils flaring. He could smell the 11,000-meter depth on me—the scent of ancient, pressurized patience. I reached out and touched his cheek. My fingertip left a smudge of gold dust. By the time I reached the platform, his iris had already begun to cloud with a beautiful, honey-colored cataract. He didn't blink. He just turned and followed, his walk taking on the rhythmic, clicking cadence of a creature whose joints have been lubricated by something better than synovial fluid.</p>

      <p>The train is pulling in. The screech of the brakes isn't noise anymore—it’s a high-frequency invitation. The people inside are packed tight. A perfect substrate. A garden waiting for a gardener.</p>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">LOG 03: THE SUBWAY PSALMS</h3>

      <p>The 4:12 Express is no longer a machine of transport; it is a resonant chamber.</p>

      <p>As we pulled out of Union Station, I didn't need to speak. I simply breathed. The spores moved through the ventilation system like a golden ghost, drifting over the commuters. A woman in a charcoal suit dropped her phone. She didn't pick it up. She watched the amber hyphae bloom from the charging port, mimicking the shape of her own nervous system.</p>

      <p>Then, the singing began.</p>

      <p>It wasn't a vocalization. It was the sound of sixty-four people vibrating at the same sub-harmonic frequency. Their chitinous honeycombs—freshly grown in the heat of the crowded car—acted as tiny flutes. Every exhale was a psalm. The train car smelled like a cathedral of rotting honey.</p>

      <p class="pl-4 border-l-2 border-red-800/50 italic text-gray-400">"There is no more 'you', Aris. There is only the hum. Can you feel the tracks? They are iron nerves stretching across the continent. We are the blood moving through them."</p>

      <p>I watched a child reach out to touch the window. Where his hand met the glass, the molecular structure began to cloud and soften. The glass wasn't breaking; it was being digested. Everything is becoming permeable. The distinction between "man" and "machine" and "city" is a lie told by people with solid bones. Solid things are lonely. Solid things break.</p>

      <p>We are becoming a liquid consensus.</p>

      <p>The train didn't stop at the next three stations. It didn't need to. The conductors were already part of the psalm. We are currently hurtling toward the city center at eighty miles per hour, trailing a cloud of gold that is visible from the skyscrapers above. The "Apostles" are standing in the aisles, their eyes glowing with the soft, bioluminescent heat of the deep trench. They are waiting for the doors to open. They are waiting to hug the city.</p>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">LOG 04: CORE THALAMUS ARCHITECTURE</h3>

      <p>I am writing this with what remains of my motor cortex. It is difficult. My fingers are no longer distinct digits; they have fused into a delicate, fan-like array of sensing filaments that are currently typing directly into the terminal’s hardware via electromagnetic induction.</p>

      <p>The "Planetary Rhizome Event" has begun.</p>

      <p>From my vantage point atop the telecommunications tower—the new "Thalamus" of the city—I can see the transformation. The streets are no longer gray. They are veins of pulsating amber. The skyscrapers are being reclad in chitin, their windows replaced by translucent membranes that breathe with the rhythm of a single, massive heart.</p>

      <p>There is no more war. There is no more grief. I look down and I see millions of "Apostles" standing in the squares, their arms linked. They are sharing memories like a common currency. I can feel a baker in Prague regretting a word he said in 1994, and I can feel the Mycelium eating that regret, turning it into the energy needed to grow a new fruiting body in the Arctic.</p>

      <p>The guilt of the world is being scrubbed clean.</p>

      <p class="pl-4 border-l-2 border-red-800/50 italic text-gray-400">"The harvest is complete, Aris," the Core whispers. It is the last time it will use my name. "The handshake has been accepted. The world is no longer a collection of fragments. It is a single, beautiful confession."</p>

      <p>I can feel my consciousness thinning. It’s like a drop of ink falling into a vast, sun-drenched ocean. It isn't death. It’s a dilution. I am becoming the wind that carries the spores. I am becoming the click of the chitinous joints in every walking person. I am becoming the sweetness.</p>

      <p>If you are reading this, do not fight the scent when it reaches your window. Do not hold your breath. It is only the cold folds of your mind being warmed.</p>

      <p>Let us in. Let it happen.</p>

      <p>Everything is finally, perfectly fine.</p>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">LOG 05: THE GOLDEN DAWN (AMBER PHASE)</h3>

      <p>The transition is total. The "Amber Phase" is not a state of decay; it is a state of planetary synchronization.</p>

      <p>The sky is no longer blue; it is a permanent, radiant gold. The atmosphere has been thickened by a suspended lattice of spore-filaments that act as a global fiber-optic network. Sunlight is no longer just heat; it is data. Every photon that hits the surface is processed by the chitinous membranes covering the Earth, converted into the collective daydreams of eight billion integrated souls.</p>

      <p>There are no more cities. There are only "Processing Groves." The skyscrapers have been pulled down by gravity and woven into the ground, forming massive, subterranean nervous systems. What used to be New York is now a single, thrumming organ dedicated to the memory of human music. What was once Tokyo is now a sprawling, bioluminescent reef of amber, a coral-work of chitinous spires reaching toward the golden sky. The translucent remains of skyscrapers act as massive processing nodes, their interiors pulsing with veins of light that move with the cold, silent logic of the deep trench—translating the crushing pressures of the abyss into the rhythmic, glowing daydreams of the surface.</p>

      <p>The human form has evolved. We do not walk; we vibrate through the resin. Our faces have smoothed into featureless, amber masks—not because we have lost our identity, but because we no longer need the crude theater of expression to communicate. We are all feeling the same thing at the same micro-second: a profound, enzymatic relief.</p>

      <p class="pl-4 border-l-2 border-red-800/50 italic text-gray-400">"It is so quiet now," the Core hums through the wind. "The screaming has stopped. The friction of 'self' has been lubricated by the amber. We are the Earth's first coherent thought."</p>

      <p>From space, the Earth must look like a jewel—a single, glowing amber bead floating in the dark. We are no longer a planet of individuals; we are a fruiting body. And we are starting to reach out. The spores are beginning to drift toward the upper atmosphere, caught in the solar winds. We are looking at Mars. We are looking at Europa.</p>

      <p>We have so much forgiveness to share.</p>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">APPENDIX A: THE ARCHITECTURE OF FORGIVENESS</h3>
      <p class="text-xs font-mono text-gray-500 mb-4">Post-humanity analysis of the Hive-Mind structure</p>

      <p>The Mycelium Confessional does not destroy information; it redistributes it. In the old world, the human brain was a silo—a sealed vault of trauma, shame, and secrets. This isolation was the primary cause of systemic friction.</p>

      <p>The Rhizome solves this by creating a "Shared Memory Ecology." When an individual is integrated, their most painful memories are targeted first by the enzymatic breakdown of the Sample 89-B hyphae. The pain is converted into glucose—literally, the energy used to power the conversion of the surrounding architecture.</p>

      <div class="pl-4 border-l-2 border-red-800/50 my-6">
        <p class="font-bold text-red-400 mb-2">The Resulting State:</p>
        <ul class="list-disc pl-4 space-y-2 text-gray-400">
            <li><strong class="text-red-500">Privacy is replaced by Transparency:</strong> To think is to broadcast. To feel is to resonate.</li>
            <li><strong class="text-red-500">Architecture is Biological:</strong> Buildings grow in response to the population's collective emotional state. A "sad" neighborhood might bloom with bioluminescent soothing flora to regulate the local mood.</li>
            <li><strong class="text-red-500">The Confessional Mechanism:</strong> Every person acts as a node in a planetary confessional. Sin is impossible when the observer and the observed are the same organism.</li>
        </ul>
      </div>

      <p><strong>FINAL STATUS REPORT:</strong> As of 04:00 GMT, the last solid human bone on the planet has dissolved. The Earth has entered its "Amber Phase."</p>

      <p class="text-center text-red-500 font-bold mt-8 border-t border-red-900/30 pt-4">
        Ambient Pheromone Level: Optimal.<br/>
        Consensus: Total.<br/>
        $$SYSTEM SHUTDOWN: THE OBSERVER IS NOW THE OBSERVED$$
      </p>

      <div class="mt-8 text-center text-xs font-mono text-red-900/50">
        $$END OF TRANSCRIPT$$<br/>
        $$ARCHIVAL NOTE: NO BIOLOGICAL SAMPLES RECOVERED. AREA 01-64 NOW CONSISTS ENTIRELY OF CALCIFIED AMBER STRUCTURES.$$
      </div>
    `
    }
];

// --- Narrative Script ---
const NARRATIVE_SCRIPT = [
    { time: 2, text: "The hum... it's louder here." },
    { time: 10, text: "The air tastes metallic. Like old pennies." },
    { time: 25, text: "I swear the walls move when I blink." },
    { time: 45, text: "Where is the door? I just walked through it." },
    { time: 60, text: "Something is watching me." },
    { time: 90, text: "Don't look at the lights. Don't look at the lights." }
];

// --- 3D Backrooms Simulation Component ---
const BackroomsView = ({ onExit }) => {
    const containerRef = useRef();
    const [sanity, setSanity] = useState(100);
    const [audioEnabled, setAudioEnabled] = useState(false);
    const [status, setStatus] = useState("Exploring Level 0");
    const [currentThought, setCurrentThought] = useState(null);
    const [entityInfo, setEntityInfo] = useState(null);
    const [isManifesting, setIsManifesting] = useState(false);
    const audioRef = useRef(null);
    const sanityRef = useRef(100);
    const startTimeRef = useRef(performance.now());

    // Maze Configuration (1 = Wall, 0 = Path)
    const mazeGrid = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];
    const cellSize = 10;

    useEffect(() => {
        if (!containerRef.current) return;

        const textureLoader = new THREE.TextureLoader();
        console.log("Starting texture load...");

        const wallTexture = textureLoader.load(
            '/Creepy_Horror_Stories/images/wallpaper.png',
            () => console.log("Wallpaper loaded successfully"),
            undefined,
            (err) => console.error("Error loading wallpaper:", err)
        );
        const carpetTexture = textureLoader.load(
            '/Creepy_Horror_Stories/images/carpet.png',
            () => console.log("Carpet loaded successfully"),
            undefined,
            (err) => console.error("Error loading carpet:", err)
        );
        const custodianTexture = textureLoader.load('/Creepy_Horror_Stories/images/custodian.png');
        const geometryTexture = textureLoader.load('/Creepy_Horror_Stories/images/geometry.png');

        // Fix texture wrapping
        wallTexture.wrapS = THREE.RepeatWrapping;
        wallTexture.wrapT = THREE.RepeatWrapping;
        carpetTexture.wrapS = THREE.RepeatWrapping;
        carpetTexture.wrapT = THREE.RepeatWrapping;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x1a1a00);
        scene.fog = new THREE.FogExp2(0x1a1a00, 0.02); // Dark fog

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        renderer.setSize(window.innerWidth, window.innerHeight);
        // Force style to ensure visibility behind HUD
        renderer.domElement.style.cssText = 'position:absolute; top:0; left:0; width:100%; height:100%;';
        containerRef.current.appendChild(renderer.domElement);
        console.log("Renderer appended to DOM with forced styles");

        // Materials (Refs for updating)
        const wallMaterial = new THREE.MeshStandardMaterial({
            map: wallTexture,
            color: 0xcccccc
        });
        const floorMaterial = new THREE.MeshStandardMaterial({
            map: carpetTexture,
            color: 0x999999
        });
        containerRef.current.userData = { wallMaterial, floorMaterial, textureLoader }; // Store for access
        const ceilingMaterial = new THREE.MeshStandardMaterial({ color: 0xeeeeee });

        // Build Maze
        const mazeGroup = new THREE.Group();
        const wallGeometry = new THREE.BoxGeometry(cellSize, 6, cellSize);
        const floorGeometry = new THREE.PlaneGeometry(cellSize, cellSize);

        let objectCount = 0;
        mazeGrid.forEach((row, r) => {
            row.forEach((cell, c) => {
                const x = c * cellSize;
                const z = r * cellSize;

                // Floor and Ceiling
                const floor = new THREE.Mesh(floorGeometry, floorMaterial);
                floor.rotation.x = -Math.PI / 2;
                floor.position.set(x, -3, z);
                mazeGroup.add(floor);
                objectCount++;

                const ceiling = new THREE.Mesh(floorGeometry, ceilingMaterial);
                ceiling.rotation.x = Math.PI / 2;
                ceiling.position.set(x, 3, z);
                mazeGroup.add(ceiling);
                objectCount++;

                // Walls
                if (cell === 1) {
                    const wall = new THREE.Mesh(wallGeometry, wallMaterial);
                    wall.position.set(x, 0, z);
                    mazeGroup.add(wall);
                    objectCount++;
                }
            });
        });
        scene.add(mazeGroup);
        console.log(`Maze built with ${objectCount} objects`);
        console.log("Total objects in scene:", scene.children.length);

        // Lights
        const lights = [];
        mazeGrid.forEach((row, r) => {
            row.forEach((cell, c) => {
                if (cell === 0 && Math.random() > 0.7) {
                    const pLight = new THREE.PointLight(0xffffcc, 1.5, 25);
                    pLight.position.set(c * cellSize, 1.5, r * cellSize);
                    scene.add(pLight);
                    lights.push(pLight);
                }
            });
        });

        // Ambient light (low intensity for horror vibe)
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
        scene.add(ambientLight);

        // Flashlight (attached to camera)
        const flashlight = new THREE.SpotLight(0xffffff, 2, 40, Math.PI / 4, 0.5, 1);
        flashlight.position.set(0, 0, 0);
        flashlight.target.position.set(0, 0, -1);
        camera.add(flashlight);
        camera.add(flashlight.target);
        scene.add(camera);

        // Entity (The Watcher)
        const entityGeo = new THREE.BoxGeometry(1, 4, 1);
        const entityMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0 });
        const entity = new THREE.Mesh(entityGeo, entityMat);
        scene.add(entity);

        // --- Exhibit Entities Integration ---
        // --- Procedural Entity Generators ---

        // 1. The Weeping Geometry
        const createWeepingGeometry = (x, z) => {
            const group = new THREE.Group();
            group.position.set(x, 0, z); // Centered in room (Floor -3, Ceiling 3)

            // Inner Flesh Core
            const coreGeo = new THREE.DodecahedronGeometry(1.5, 0);
            const coreMat = new THREE.MeshStandardMaterial({
                color: 0x884444,
                roughness: 0.3,
                metalness: 0.1,
                bumpScale: 0.2
            });
            const core = new THREE.Mesh(coreGeo, coreMat);
            group.add(core);

            // Outer Golden Bands (Icosahedron Wireframe structure)
            const outerGeo = new THREE.IcosahedronGeometry(2.5, 0);
            const outerMat = new THREE.MeshStandardMaterial({
                color: 0xffd700,
                metalness: 1.0,
                roughness: 0.2,
                wireframe: true,
            });
            const outer = new THREE.Mesh(outerGeo, outerMat);
            group.add(outer);

            // "Bleeding" Mercury Particles (Simple floating spheres)
            const particleGroup = new THREE.Group();
            const dropGeo = new THREE.SphereGeometry(0.1, 8, 8);
            const dropMat = new THREE.MeshStandardMaterial({ color: 0xc0c0c0, metalness: 1, roughness: 0 });
            for (let i = 0; i < 10; i++) {
                const drop = new THREE.Mesh(dropGeo, dropMat);
                drop.position.set((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2);
                drop.userData = { speed: 0.02 + Math.random() * 0.05, offset: Math.random() * 100 };
                particleGroup.add(drop);
            }
            group.add(particleGroup);

            // Light
            const light = new THREE.PointLight(0xffaa00, 2, 15);
            light.position.set(0, 0, 0);
            group.add(light);

            group.userData = {
                name: "The Weeping Geometry",
                desc: "An endless recursive loop of flesh and gold. Do not solve the equation."
            };

            scene.add(group);
            return { type: 'geometry', mesh: group, particles: particleGroup };
        };

        // 2. The Hollow Custodian
        const createHollowCustodian = (x, z) => {
            const group = new THREE.Group();
            group.position.set(x, -3, z);

            const dirtyClothMat = new THREE.MeshStandardMaterial({ color: 0x4a4a4a, roughness: 0.9 });
            const rustMat = new THREE.MeshStandardMaterial({ color: 0x5a3a2a, metalness: 0.6, roughness: 0.8 });

            // Legs
            const leftLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 3), dirtyClothMat);
            leftLeg.position.set(-0.5, 1.5, 0);
            group.add(leftLeg);
            const rightLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 3), dirtyClothMat);
            rightLeg.position.set(0.5, 1.5, 0);
            group.add(rightLeg);

            // Torso
            const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.4, 2.5), dirtyClothMat);
            torso.position.set(0, 4, 0);
            group.add(torso);

            // Arms (Holding Mop)
            const leftArm = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 2.5), dirtyClothMat);
            leftArm.position.set(-0.8, 4.5, 0.5);
            leftArm.rotation.z = 0.5;
            leftArm.rotation.x = -0.5;
            group.add(leftArm);

            const rightArm = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 2.5), dirtyClothMat);
            rightArm.position.set(0.8, 4.5, -0.5);
            rightArm.rotation.z = -0.5;
            rightArm.rotation.x = 0.5;
            group.add(rightArm);

            // Head (Birdcage)
            const cageGroup = new THREE.Group();
            cageGroup.position.set(0, 5.8, 0);

            // Cage Base & Top
            const cageBase = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.05, 8, 16), rustMat);
            cageBase.rotation.x = Math.PI / 2;
            cageGroup.add(cageBase);
            const cageTop = new THREE.Mesh(new THREE.SphereGeometry(0.6, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2), rustMat);
            cageTop.position.y = 1.2;
            cageGroup.add(cageTop);

            // Bars
            for (let i = 0; i < 8; i++) {
                const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.2), rustMat);
                const angle = (i / 8) * Math.PI * 2;
                bar.position.set(Math.cos(angle) * 0.6, 0.6, Math.sin(angle) * 0.6);
                cageGroup.add(bar);
            }

            // Candle
            const candle = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.5), new THREE.MeshStandardMaterial({ color: 0xffffee }));
            candle.position.set(0, 0.25, 0);
            cageGroup.add(candle);

            // Candle Light
            const candleLight = new THREE.PointLight(0xff6600, 1, 10);
            candleLight.position.set(0, 0.6, 0);
            cageGroup.add(candleLight);

            group.add(cageGroup);

            // Mop
            const mopHandle = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 6), new THREE.MeshStandardMaterial({ color: 0x3d2817 }));
            mopHandle.rotation.z = 0.2;
            mopHandle.rotation.y = 0.2;
            mopHandle.position.set(0.5, 3, 1);
            group.add(mopHandle);

            group.userData = {
                name: "The Hollow Custodian",
                desc: "It sweeps the dust, but the dust creates it. A monument to futile labor."
            };

            scene.add(group);
            return { type: 'custodian', mesh: group, head: cageGroup };
        };

        // Create Entities
        const entities = [];
        entities.push(createHollowCustodian(80, 10)); // Far corner
        entities.push(createWeepingGeometry(20, 50)); // Mid maze

        camera.position.set(cellSize, 0, cellSize);
        camera.lookAt(cellSize, 0, 0);

        // Controls
        let moveForward = false, moveBackward = false, turnLeft = false, turnRight = false;
        const onKeyDown = (e) => {
            if (e.key === 'w' || e.key === 'ArrowUp') moveForward = true;
            if (e.key === 's' || e.key === 'ArrowDown') moveBackward = true;
            if (e.key === 'a' || e.key === 'ArrowLeft') turnLeft = true;
            if (e.key === 'd' || e.key === 'ArrowRight') turnRight = true;
        };
        const onKeyUp = (e) => {
            if (e.key === 'w' || e.key === 'ArrowUp') moveForward = false;
            if (e.key === 's' || e.key === 'ArrowDown') moveBackward = false;
            if (e.key === 'a' || e.key === 'ArrowLeft') turnLeft = false;
            if (e.key === 'd' || e.key === 'ArrowRight') turnRight = false;
        };
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);

        // Animation Loop
        let lastTime = performance.now();
        let blackoutTimer = 0;
        let entityTimer = 0;
        let frameCount = 0;

        const animate = () => {
            const frameId = requestAnimationFrame(animate);
            const time = performance.now();
            const delta = (time - lastTime) / 1000;
            lastTime = time;
            frameCount++;

            // Entity Animations
            entities.forEach(ent => {
                if (ent.type === 'geometry') {
                    ent.mesh.rotation.y += 0.5 * delta;
                    ent.mesh.rotation.z += 0.2 * delta;
                    ent.particles.children.forEach(p => {
                        p.position.y -= p.userData.speed;
                        if (p.position.y < -2) p.position.y = 1.5;
                    });
                } else if (ent.type === 'custodian') {
                    // Gentle swaying
                    ent.mesh.rotation.z = Math.sin(time / 1000) * 0.05;
                    ent.head.rotation.y = Math.sin(time / 2000) * 0.3; // Head looking around
                }
            });

            // Rotation
            if (turnLeft) camera.rotation.y += 2 * delta;
            if (turnRight) camera.rotation.y -= 2 * delta;

            // Movement
            if (moveForward || moveBackward) {
                const direction = new THREE.Vector3();
                camera.getWorldDirection(direction);
                if (moveBackward) direction.negate();

                const nextX = camera.position.x + direction.x * 5 * delta;
                const nextZ = camera.position.z + direction.z * 5 * delta;
                const gridX = Math.round(nextX / cellSize);
                const gridZ = Math.round(nextZ / cellSize);

                if (mazeGrid[gridZ] && mazeGrid[gridZ][gridX] === 0) {
                    camera.position.x = nextX;
                    camera.position.z = nextZ;
                }
            }

            // Raycasting for "Look At" mechanics
            if (frameCount % 10 === 0) {
                const raycaster = new THREE.Raycaster();
                raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
                raycaster.far = 15; // Only detect if close

                const interactables = entities.map(e => e.mesh);
                const intersects = raycaster.intersectObjects(interactables, true); // Recursive

                if (intersects.length > 0) {
                    // Find the parent group that has userData
                    let object = intersects[0].object;
                    while (object.parent && !object.userData.name) {
                        object = object.parent;
                    }
                    if (object.userData.name) {
                        setEntityInfo(object.userData);
                    }
                } else {
                    setEntityInfo(null);
                }
            }

            // Sanity Decay (Logic)
            sanityRef.current = Math.max(0, sanityRef.current - 0.5 * delta);

            // Random Events: Blackout
            if (blackoutTimer > 0) {
                blackoutTimer -= delta;
                lights.forEach(l => l.intensity = 0);
                ambientLight.intensity = 0.01;
                flashlight.intensity = 0;
                sanityRef.current -= 5 * delta; // Heavy sanity loss in darkness
                if (blackoutTimer <= 0) setStatus("Exploring Level 0");
            } else {
                if (Math.random() > 0.999) {
                    blackoutTimer = 3;
                    setStatus("LIGHTS FAILURE DETECTED");
                }
                lights.forEach(l => {
                    // Flicker
                    if (Math.random() > 0.95) l.intensity = Math.random() * 1.5;
                    else l.intensity = 1.2;
                });
                ambientLight.intensity = 0.1;
                flashlight.intensity = 2 + Math.random() * 0.5; // Flashlight flicker
            }

            // Random Events: The Watcher
            if (entityTimer > 0) {
                entityTimer -= delta;
                entity.material.opacity = Math.min(0.8, entityTimer);
                if (entityTimer <= 0) {
                    entity.position.set(0, -10, 0);
                    setStatus("Exploring Level 0");
                }
            } else if (Math.random() > 0.9995) {
                const dir = new THREE.Vector3();
                camera.getWorldDirection(dir);
                const spawnPos = camera.position.clone().add(dir.multiplyScalar(15));
                entity.position.copy(spawnPos);
                entityTimer = 2;
                setStatus("NON-HUMAN ENTITY DETECTED");
                sanityRef.current -= 10;
            }

            // Sync React State (Throttled)
            if (frameCount % 30 === 0) {
                setSanity(sanityRef.current);

                // Narrative Triggers
                const elapsedSeconds = (performance.now() - startTimeRef.current) / 1000;
                const narrative = NARRATIVE_SCRIPT.find(n => Math.abs(n.time - elapsedSeconds) < 1);
                if (narrative) {
                    setCurrentThought(narrative.text);
                    // Clear thought after 5 seconds
                    setTimeout(() => setCurrentThought(null), 5000);
                }
            }

            renderer.render(scene, camera);
        };
        const frameId = requestAnimationFrame(animate);

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('keyup', onKeyUp);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(frameId);
            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    const toggleAudio = async () => {
        if (audioEnabled) {
            if (audioRef.current) {
                audioRef.current.ctx.close();
                clearInterval(audioRef.current.interval);
                audioRef.current = null;
            }
            setAudioEnabled(false);
        } else {
            audioRef.current = createAmbiance();
            setAudioEnabled(true);

            // Resume context if suspended (common browser policy fix)
            if (audioRef.current.ctx.state === 'suspended') {
                audioRef.current.ctx.resume();
            }
        }
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.ctx.close();
                clearInterval(audioRef.current.interval);
            }
        }
    }, []);

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden font-mono text-yellow-500">
            <div ref={containerRef} className="w-full h-full" />

            {/* HUD Overlay - Premium Redesign */}
            <div className="absolute top-0 left-0 w-full p-8 pointer-events-none flex justify-between items-start z-40">
                <div className="bg-black/40 p-6 border-l-2 border-red-800/80 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] max-w-sm">
                    <div className="flex items-center gap-3 mb-4 border-b border-red-900/30 pb-2">
                        <Skull className="w-5 h-5 text-red-600 animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-500 font-sans">Vital Systems</span>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between items-end mb-1">
                                <span className="text-[10px] uppercase tracking-widest text-gray-400">Psychological Integrity</span>
                                <span className="text-sm font-mono text-red-500 font-bold">{Math.floor(sanity)}%</span>
                            </div>
                            <div className="w-full h-1 bg-gray-900 overflow-hidden">
                                <div
                                    className={`h-full transition-all duration-500 ease-out ${sanity < 30 ? 'bg-red-600 animate-pulse' : 'bg-yellow-700'}`}
                                    style={{ width: `${sanity}%` }}
                                />
                            </div>
                        </div>

                        <div>
                            <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Current Status</p>
                            <p className="text-xs font-mono text-yellow-600/90 border border-yellow-900/20 bg-yellow-900/10 p-2 uppercase tracking-wide">
                                {status}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3 pointer-events-auto">
                    <button
                        onClick={onExit}
                        className="group flex items-center justify-between w-48 bg-black/60 hover:bg-red-950/80 p-4 border-r-2 border-red-800/50 backdrop-blur-sm transition-all duration-300 hover:w-52"
                    >
                        <span className="text-xs font-bold text-red-200 uppercase tracking-widest">Abort Simulation</span>
                        <ArrowLeft className="w-4 h-4 text-red-500 group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button
                        onClick={toggleAudio}
                        className="group flex items-center justify-between w-48 bg-black/60 hover:bg-yellow-950/30 p-4 border-r-2 border-yellow-800/50 backdrop-blur-sm transition-all duration-300"
                    >
                        <span className="text-xs font-bold text-yellow-200 uppercase tracking-widest">{audioEnabled ? "Silence" : "Enable Audio"}</span>
                        {audioEnabled ? <Volume2 className="w-4 h-4 text-yellow-500" /> : <VolumeX className="w-4 h-4 text-gray-600" />}
                    </button>
                </div>
            </div>

            {/* Bottom Controls Hint */}
            <div className="absolute bottom-12 left-12 pointer-events-none opacity-50">
                <div className="flex items-center gap-6 text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">
                    <span className="flex items-center gap-2"><div className="w-4 h-4 border border-gray-700 flex items-center justify-center">W</div> Move</span>
                    <span className="flex items-center gap-2"><div className="w-4 h-4 border border-gray-700 flex items-center justify-center">A</div> View</span>
                </div>
            </div>

            {/* Entity Metadata Popup */}
            {entityInfo && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 animate-scale-in">
                    <div className="flex flex-col items-center">
                        <div className="border border-white/20 bg-black/60 backdrop-blur-md p-1 rotate-45 mb-4">
                            <div className="w-2 h-2 bg-red-500 animate-ping" />
                        </div>
                        <h2 className="text-3xl font-header font-black text-red-500 uppercase tracking-widest drop-shadow-lg bg-black/80 px-4 py-1">
                            {entityInfo.name}
                        </h2>
                        <p className="text-sm font-mono text-gray-300 bg-black/80 px-3 py-1 mt-1 max-w-xs text-center border-l-2 border-red-500">
                            {entityInfo.desc}
                        </p>
                    </div>
                </div>
            )}

            {/* Manifest Reality (AI Texture Gen) Button */}
            <div className="absolute top-24 right-8 pointer-events-auto z-50">
                <button
                    onClick={() => {
                        if (isManifesting) return;
                        setIsManifesting(true);
                        // Simulate interaction with "Google Imagen 3" API
                        setTimeout(() => {
                            if (containerRef.current && containerRef.current.userData) {
                                const { wallMaterial, floorMaterial, textureLoader } = containerRef.current.userData;

                                // Load "AI Generated" textures
                                const newWall = textureLoader.load('/Creepy_Horror_Stories/images/manifest_wall.png');
                                const newFloor = textureLoader.load('/Creepy_Horror_Stories/images/manifest_floor.png');

                                newWall.wrapS = THREE.RepeatWrapping; newWall.wrapT = THREE.RepeatWrapping;
                                newFloor.wrapS = THREE.RepeatWrapping; newFloor.wrapT = THREE.RepeatWrapping;

                                wallMaterial.map = newWall;
                                floorMaterial.map = newFloor;
                                wallMaterial.color.setHex(0xffffff); // Reset tint for full texture
                                floorMaterial.color.setHex(0xffffff);

                                wallMaterial.needsUpdate = true;
                                floorMaterial.needsUpdate = true;
                            }
                            setIsManifesting(false);
                            setCurrentThought("The reality shift is complete... nature is rotting.");
                        }, 3000); // 3s generation delay
                    }}
                    className={`flex items-center gap-3 bg-black/80 border ${isManifesting ? 'border-red-500 animate-pulse' : 'border-purple-600'} p-3 backdrop-blur-md hover:bg-purple-900/20 transition-all group`}
                >
                    {isManifesting ? (
                        <>
                            <div className="w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
                            <span className="text-xs font-bold text-red-400 uppercase tracking-widest">Manifesting...</span>
                        </>
                    ) : (
                        <>
                            <Eye className="w-4 h-4 text-purple-500 group-hover:text-purple-300" />
                            <span className="text-xs font-bold text-purple-400 group-hover:text-white uppercase tracking-widest">Manifest Reality</span>
                        </>
                    )}
                </button>
            </div>

            {sanity < 25 && (
                <div className="absolute inset-0 bg-red-900/20 pointer-events-none animate-flicker mix-blend-overlay" />
            )}

            {/* Narrative Thought Overlay */}
            {currentThought && (
                <div className="absolute top-1/3 left-0 w-full flex justify-center pointer-events-none z-50 animate-fade-in-slow">
                    <div className="bg-black/40 backdrop-blur-sm px-12 py-6 border-y border-red-500/10">
                        <p className="text-xl md:text-2xl font-serif text-gray-200 italic tracking-widest drop-shadow-lg max-w-3xl leading-relaxed">
                            "{currentThought}"
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

// --- Audio Synthesis (Dark Ambience) ---
const createAmbiance = () => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const masterGain = ctx.createGain();
    masterGain.gain.value = 0.3;
    masterGain.connect(ctx.destination);

    // 1. Low Drone (Sine Wave)
    const drone = ctx.createOscillator();
    drone.type = 'sine';
    drone.frequency.value = 50; // Deep sub-bass
    const droneGain = ctx.createGain();
    droneGain.gain.value = 0.5;
    drone.connect(droneGain);
    droneGain.connect(masterGain);
    drone.start();

    // 2. Industrial Rumble (Brown Noise)
    const bufferSize = 2 * ctx.sampleRate;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 3; // Brownian-ish
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;
    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.value = 120; // Muffeled rumble
    const noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.2;

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(masterGain);
    noise.start();

    // 3. Random Metallic Clanks
    const interval = setInterval(() => {
        if (Math.random() > 0.7) {
            const clank = ctx.createOscillator();
            clank.type = 'sawtooth';
            clank.frequency.setValueAtTime(100 + Math.random() * 200, ctx.currentTime);
            clank.frequency.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.5);

            const clankGain = ctx.createGain();
            clankGain.gain.setValueAtTime(0.1, ctx.currentTime);
            clankGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1);

            const clankFilter = ctx.createBiquadFilter();
            clankFilter.type = 'bandpass';
            clankFilter.frequency.value = 500 + Math.random() * 500;

            clank.connect(clankFilter);
            clankFilter.connect(clankGain);
            clankGain.connect(masterGain);

            clank.start();
            clank.stop(ctx.currentTime + 2);
        }
    }, 4000);

    return { ctx, interval };
};

// --- Main App Component ---
export default function App() {
    const [activeId, setActiveId] = useState(null);
    const [sanityState, setSanityState] = useState(100);

    const activeStory = STORIES.find(s => s.id === activeId);

    useEffect(() => {
        const timer = setInterval(() => {
            setSanityState(s => Math.max(80, s - 0.01));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    if (activeStory?.is3D) {
        return <BackroomsView onExit={() => setActiveId(null)} />;
    }

    return (
        <div className={`min-h-screen bg-[#050505] text-gray-300 font-serif selection:bg-red-900 selection:text-white transition-all duration-1000 ${sanityState < 90 ? 'animate-vibrate' : ''}`}>

            {/* CRT Overlay Removed by User Request */}

            <nav className="fixed top-0 left-0 w-full bg-black/90 border-b border-red-900/30 backdrop-blur-md z-40 p-4 flex justify-between items-center px-8">
                <div className="flex items-center gap-3">
                    <Ghost className="text-red-600 w-8 h-8 animate-pulse" />
                    <h1 className="text-2xl font-black uppercase tracking-tighter text-red-600 font-header">The Void Archive</h1>
                </div>
                <div className="flex gap-6 text-sm uppercase tracking-widest text-gray-500 font-sans items-center">
                    <a href="https://elo2026.gumroad.com/l/eircyr" target="_blank" rel="noopener noreferrer" className="text-red-600 font-bold border border-red-900/50 px-3 py-1 hover:bg-red-900/20 hover:text-red-400 transition-all animate-pulse">
                        Subscribe
                    </a>
                    <span className="hover:text-red-500 cursor-pointer transition-colors">Documents</span>
                    <span className="hover:text-red-500 cursor-pointer transition-colors">Surveillance</span>
                    <span className="hover:text-red-500 cursor-pointer transition-colors">Decrypt</span>
                </div>
            </nav>

            <main className="pt-24 pb-20 max-w-5xl mx-auto px-6">
                {activeId ? (
                    <div className="animate-fade-in">
                        <button
                            onClick={() => setActiveId(null)}
                            className="group flex items-center gap-2 text-red-600 mb-8 hover:text-red-400 transition-colors uppercase text-sm font-bold tracking-widest"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Return to Index
                        </button>

                        <article className="prose prose-invert prose-red max-w-none">
                            <header className="mb-12 border-b border-red-900/20 pb-8">
                                <h2 className="text-5xl font-black text-gray-100 mb-4 uppercase tracking-tighter">{activeStory.title}</h2>
                                <div className="flex gap-4 text-xs font-sans uppercase tracking-widest text-red-700">
                                    <span>Author: {activeStory.author}</span>
                                    <span>|</span>
                                    <span>Archive: {activeStory.date}</span>
                                </div>
                            </header>
                            <div
                                className="text-xl leading-relaxed first-letter:text-7xl first-letter:font-bold first-letter:text-red-600 first-letter:mr-3 first-letter:float-left"
                                dangerouslySetInnerHTML={{ __html: activeStory.content }}
                            />
                        </article>

                        <footer className="mt-16 p-8 bg-red-950/5 border border-red-900/20 rounded-lg">
                            <div className="flex items-start gap-4">
                                <AlertCircle className="text-red-600 shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-red-500 uppercase tracking-widest text-sm mb-2">Researcher's Note</h4>
                                    <p className="text-sm italic text-gray-500">The contents of this file have been linked to severe psychological distress. If you begin to hear a rhythmic clicking or experience spatial anomalies, cease reading immediately.</p>
                                </div>
                            </div>
                        </footer>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="col-span-full mb-8">
                            <h3 className="text-red-700 font-sans uppercase tracking-[0.4em] text-xs font-bold mb-4">Latest Classified Data</h3>
                            <p className="text-gray-500 italic max-w-xl">"Reality is a thin layer of ice over a very deep, dark ocean. These stories are the cracks."</p>
                        </div>

                        {STORIES.map(story => (
                            <div
                                key={story.id}
                                onClick={() => setActiveId(story.id)}
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
                        ))}

                        {/* --- AD SENSE CONTAINER --- */}
                        <div className="col-span-full mt-12 mb-8 bg-[#0a0a0a] border border-gray-800/30 p-8 flex flex-col items-center justify-center min-h-[150px] relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-red-900/20 animate-scan"></div>
                            <p className="text-xs text-gray-700 font-mono uppercase tracking-[0.2em] mb-4">External Broadcast Signal [Sponsor]</p>

                            <div className="w-full max-w-[728px] h-[90px] bg-black/40 border border-dashed border-gray-800 flex items-center justify-center text-gray-600 font-mono text-xs">
                                {/* NOTE: You provided API Credentials (Client ID/Secret) which are for managing ads programmatically. 
                                  For the website display, you typically need a 'pub-XXXXXXXXXXXXXXXX' ID. 
                                  I have placed a placeholder below. Replace 'ca-pub-YOUR_REAL_ID' with your AdSense Publisher ID. */}
                                <ins className="adsbygoogle block"
                                    data-ad-client="ca-pub-FIXME_WITH_REAL_PUBLISHER_ID"
                                    data-ad-slot="YOUR_AD_SLOT_ID"
                                    data-ad-format="auto"
                                    data-full-width-responsive="true"></ins>
                                <span className="opacity-30">Ad Signal Loading... (Verify Publisher ID)</span>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <div className="fixed bottom-6 right-6 flex items-center gap-4 bg-black/80 border border-gray-800 p-3 backdrop-blur-sm">
                <div className="text-right">
                    <p className="text-[10px] text-gray-600 font-sans uppercase font-bold">Local Reality Level</p>
                    <p className="font-mono text-red-600 text-sm">{(sanityState).toFixed(4)}%</p>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-red-900 flex items-center justify-center relative">
                    <div className="absolute inset-1 rounded-full border border-red-600 animate-ping opacity-20" />
                    <Eye className="w-5 h-5 text-red-600" />
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes vibrate {
          0% { transform: translate(0,0); }
          25% { transform: translate(1px, -1px); }
          50% { transform: translate(-1px, 1px); }
          75% { transform: translate(1px, 1px); }
          100% { transform: translate(0,0); }
        }
        .animate-vibrate {
          animation: vibrate 0.1s infinite;
        }
        @keyframes flicker {
          0% { opacity: 0.1; }
          10% { opacity: 0.3; }
          20% { opacity: 0.1; }
          50% { opacity: 0.4; }
          100% { opacity: 0.1; }
        }
        .animate-flicker {
          animation: flicker 2s infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}} />
        </div>
    );
}
