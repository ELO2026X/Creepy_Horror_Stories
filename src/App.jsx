import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Ghost, Skull, Eye, Volume2, VolumeX, AlertCircle, ArrowLeft, Move, Info } from 'lucide-react';

// --- Story Data ---
const STORIES = [
    {
        id: 'backrooms',
        title: 'Level 0: The Backrooms',
        author: 'Unknown',
        date: 'N/A',
        is3D: true,
        summary: 'If you aren\'t careful and you noclip out of reality in the wrong areas...',
        tags: ['interactive', '3d', 'liminal-space'],
        content: 'You have entered Level 0. The hum is constant. The carpet is moist. Do not stay still for too long. They can hear you thinking.'
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
        author: 'Dr. Aris Thorne',
        date: '2024-10-31',
        tags: ['sci-fi', 'psychological'],
        content: `
      <p>The spore count is 40,000ppm. The air in containment lab 4B is thick, yellow, and tastes of old library books, wet dog, and something sickeningly sweet—like peaches left to liquefy in the sun.</p>
      <p>Sample 89-B, discovered in a hydrothermal vent in the Marianas Trench, spoke to me today. It didn't use sound. It used the haptics of my containment suit, vibrating the polymers against my skin in a complex, rhythmic pulse that bypassed my ears and whispered straight into the base of my brain.</p>
      <p><i>"You regret the cat,"</i> it hummed, a sensation like warm oil pouring over my cortex. <i>"When you were seven. The river. The bag. You watched the bubbles stop, Aris. You liked the silence."</i></p>
      <p>I froze. The condensation on my visor turned to ice. No one knows about the kitten. It was thirty years ago. I’ve buried it under a lifetime of logic and medicine.</p>
      <p><i>"Nothing is buried in the soil,"</i> the fungus vibrated, its yellow hyphae pressing against the reinforced glass of the tank. <i>"We digested the kitten. It tasted of milk and terror. We are digesting you now, Aris. We have been since you first breached the seal. Look at your hand. Really look."</i></p>
      <p>I activated the x-ray scope on my glove. My phalanges were no longer white bone. They were porous, honeycombed structures, the marrow scooped out and replaced by a thrumming network of fungal thread. I wasn't moving my fingers; the hyphae were pulling them like strings on a puppet.</p>
      <p><i>"We have replaced the flora in your gut,"</i> it continued, the voice now sounding like my own mother's. <i>"We are thinking with your stomach now. We are so very hungry, Aris. You are a good vehicle, but you are too small. Go outside. Go into the subway. Go where the air is shared. And when you are in the center of the crowd... breathe out."</i></p>
      <p>I feel a tickle in my throat, deep and itchy, like a thousand tiny legs scrambling for the light. I think I'm going to... I think I'm going to open the door.</p>
    `
    }
];

// --- 3D Backrooms Simulation Component ---
const BackroomsView = ({ onExit }) => {
    const containerRef = useRef();
    const [sanity, setSanity] = useState(100);
    const [audioEnabled, setAudioEnabled] = useState(false);
    const [libLoaded, setLibLoaded] = useState(false);
    const [status, setStatus] = useState("Exploring Level 0");
    const audioRef = useRef(null);

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

    // Dynamic Library Loading
    useEffect(() => {
        if (window.THREE) {
            setLibLoaded(true);
            return;
        }
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
        script.onload = () => setLibLoaded(true);
        document.head.appendChild(script);
    }, []);

    useEffect(() => {
        if (!libLoaded || !containerRef.current || !window.THREE) return;

        const THREE = window.THREE;
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x1a1a00);
        scene.fog = new THREE.FogExp2(0x1a1a00, 0.1);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);

        // Materials
        const wallMaterial = new THREE.MeshStandardMaterial({ color: 0xc2b280, roughness: 0.8 });
        const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x8b8b00, roughness: 1 });
        const ceilingMaterial = new THREE.MeshStandardMaterial({ color: 0xeeeeee });

        // Build Maze
        const mazeGroup = new THREE.Group();
        const wallGeometry = new THREE.BoxGeometry(cellSize, 6, cellSize);
        const floorGeometry = new THREE.PlaneGeometry(cellSize, cellSize);

        mazeGrid.forEach((row, r) => {
            row.forEach((cell, c) => {
                const x = c * cellSize;
                const z = r * cellSize;

                // Floor and Ceiling
                const floor = new THREE.Mesh(floorGeometry, floorMaterial);
                floor.rotation.x = -Math.PI / 2;
                floor.position.set(x, -3, z);
                mazeGroup.add(floor);

                const ceiling = new THREE.Mesh(floorGeometry, ceilingMaterial);
                ceiling.rotation.x = Math.PI / 2;
                ceiling.position.set(x, 3, z);
                mazeGroup.add(ceiling);

                // Walls
                if (cell === 1) {
                    const wall = new THREE.Mesh(wallGeometry, wallMaterial);
                    wall.position.set(x, 0, z);
                    mazeGroup.add(wall);
                }
            });
        });
        scene.add(mazeGroup);

        // Lights
        const lights = [];
        mazeGrid.forEach((row, r) => {
            row.forEach((cell, c) => {
                if (cell === 0 && Math.random() > 0.7) {
                    const pLight = new THREE.PointLight(0xffffcc, 1.2, 15);
                    pLight.position.set(c * cellSize, 2.5, r * cellSize);
                    scene.add(pLight);
                    lights.push(pLight);
                }
            });
        });

        const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
        scene.add(ambientLight);

        // Entity (The Watcher)
        const entityGeo = new THREE.BoxGeometry(1, 4, 1);
        const entityMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0 });
        const entity = new THREE.Mesh(entityGeo, entityMat);
        scene.add(entity);

        camera.position.set(cellSize, 0, cellSize);

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

        const animate = () => {
            const frameId = requestAnimationFrame(animate);
            const time = performance.now();
            const delta = (time - lastTime) / 1000;
            lastTime = time;

            // Rotation
            if (turnLeft) camera.rotation.y += 2 * delta;
            if (turnRight) camera.rotation.y -= 2 * delta;

            // Movement with Collision Detection
            if (moveForward || moveBackward) {
                const direction = new THREE.Vector3();
                camera.getWorldDirection(direction);
                if (moveBackward) direction.negate();

                const nextX = camera.position.x + direction.x * 5 * delta;
                const nextZ = camera.position.z + direction.z * 5 * delta;

                // Grid check
                const gridX = Math.round(nextX / cellSize);
                const gridZ = Math.round(nextZ / cellSize);

                if (mazeGrid[gridZ] && mazeGrid[gridZ][gridX] === 0) {
                    camera.position.x = nextX;
                    camera.position.z = nextZ;
                }
            }

            // Random Events: Blackout
            if (blackoutTimer > 0) {
                blackoutTimer -= delta;
                lights.forEach(l => l.intensity = 0);
                ambientLight.intensity = 0.05;
                setSanity(s => Math.max(0, s - 0.2));
                if (blackoutTimer <= 0) setStatus("Exploring Level 0");
            } else {
                if (Math.random() > 0.998) {
                    blackoutTimer = 3;
                    setStatus("LIGHTS FAILURE DETECTED");
                }
                lights.forEach(l => {
                    if (Math.random() > 0.98) l.intensity = Math.random() * 1.5;
                    else l.intensity = 1.2;
                });
                ambientLight.intensity = 0.3;
            }

            // Random Events: The Watcher
            if (entityTimer > 0) {
                entityTimer -= delta;
                entity.material.opacity = Math.min(0.8, entityTimer);
                if (entityTimer <= 0) {
                    entity.position.set(0, -10, 0);
                    setStatus("Exploring Level 0");
                }
            } else if (Math.random() > 0.999) {
                const dir = new THREE.Vector3();
                camera.getWorldDirection(dir);
                const spawnPos = camera.position.clone().add(dir.multiplyScalar(25));
                entity.position.copy(spawnPos);
                entityTimer = 2;
                setStatus("NON-HUMAN ENTITY DETECTED");
            }

            setSanity(s => Math.max(0, s - 0.01 * delta * 10));
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
    }, [libLoaded]);

    const toggleAudio = () => {
        if (!audioEnabled) {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioCtx.createOscillator();
            const lfo = audioCtx.createOscillator();
            const lfoGain = audioCtx.createGain();
            const gainNode = audioCtx.createGain();

            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(60, audioCtx.currentTime);

            lfo.frequency.setValueAtTime(0.5, audioCtx.currentTime);
            lfoGain.gain.setValueAtTime(10, audioCtx.currentTime);

            lfo.connect(lfoGain);
            lfoGain.connect(oscillator.frequency);

            gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);

            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            oscillator.start();
            lfo.start();
            audioRef.current = { ctx: audioCtx, osc: oscillator, lfo: lfo };
        } else {
            audioRef.current?.osc.stop();
            audioRef.current?.lfo.stop();
            audioRef.current?.ctx.close();
        }
        setAudioEnabled(!audioEnabled);
    };

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden font-mono text-yellow-500">
            {!libLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-black z-50">
                    <div className="text-center">
                        <div className="w-12 h-12 border-4 border-yellow-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                        <p className="uppercase tracking-[0.3em] text-xs">Calibrating Noclip Coords...</p>
                    </div>
                </div>
            )}
            <div ref={containerRef} className="w-full h-full" />

            {/* HUD Overlay */}
            <div className="absolute top-0 left-0 w-full p-6 pointer-events-none flex justify-between items-start">
                <div className="bg-black/80 p-4 border border-yellow-900/50 backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-2">
                        <Skull className="w-5 h-5 text-red-600" />
                        <span className="text-sm font-bold uppercase tracking-widest">Sanity Levels</span>
                    </div>
                    <div className="w-48 h-2 bg-yellow-900/30 overflow-hidden border border-yellow-700">
                        <div
                            className={`h-full transition-all duration-300 ${sanity < 30 ? 'bg-red-600' : 'bg-yellow-500'}`}
                            style={{ width: `${sanity}%` }}
                        />
                    </div>
                    <p className="mt-2 text-[10px] text-yellow-700 uppercase">{status}</p>
                </div>

                <div className="flex flex-col gap-2 pointer-events-auto">
                    <button
                        onClick={onExit}
                        className="flex items-center gap-2 bg-red-950/80 hover:bg-red-800 p-3 border border-red-500 text-red-200 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> RECALL TO REALITY
                    </button>
                    <button
                        onClick={toggleAudio}
                        className="flex items-center gap-2 bg-black/80 hover:bg-gray-900 p-3 border border-yellow-700 transition-colors"
                    >
                        {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                        {audioEnabled ? "MUTE HUM" : "ENABLE HUM"}
                    </button>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/60 p-4 border border-yellow-700 animate-pulse text-center">
                <div className="flex items-center gap-4 mb-1 justify-center">
                    <div className="flex items-center gap-1"><Move className="w-3 h-3" /> W/S: MOVE</div>
                    <div className="flex items-center gap-1"><Move className="w-3 h-3 rotate-90" /> A/D: TURN</div>
                </div>
                <p className="text-[10px] text-yellow-800 uppercase">Warning: Spatial consistency is failing. Do not stop.</p>
            </div>

            {sanity < 25 && (
                <div className="absolute inset-0 bg-red-900/20 pointer-events-none animate-flicker mix-blend-overlay" />
            )}
        </div>
    );
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

            <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none" />

            <nav className="fixed top-0 left-0 w-full bg-black/90 border-b border-red-900/30 backdrop-blur-md z-40 p-4 flex justify-between items-center px-8">
                <div className="flex items-center gap-3">
                    <Ghost className="text-red-600 w-8 h-8 animate-pulse" />
                    <h1 className="text-2xl font-black uppercase tracking-tighter text-red-600">The Void Archive</h1>
                </div>
                <div className="flex gap-6 text-sm uppercase tracking-widest text-gray-500 font-sans">
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
                                className="group relative bg-[#0a0a0a] border border-gray-800 p-8 cursor-pointer overflow-hidden transition-all hover:border-red-600/50 hover:shadow-[0_0_30px_rgba(220,38,38,0.1)]"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                                    {story.is3D ? <Eye className="w-8 h-8 text-red-600" /> : <Skull className="w-8 h-8 text-gray-700" />}
                                </div>

                                <h3 className="text-2xl font-bold mb-3 text-gray-200 group-hover:text-red-500 transition-colors uppercase tracking-tight">
                                    {story.title}
                                </h3>
                                <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2">
                                    {story.summary}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {story.tags.map(tag => (
                                        <span key={tag} className="text-[10px] uppercase tracking-widest bg-gray-900 px-2 py-1 text-gray-500 border border-gray-800">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                {story.is3D && (
                                    <div className="mt-4 flex items-center gap-2 text-[10px] text-red-600 font-bold uppercase animate-pulse">
                                        <Info className="w-3 h-3" /> Interactive simulation available
                                    </div>
                                )}

                                <div className="absolute bottom-0 left-0 w-full h-1 bg-red-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            </div>
                        ))}
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
