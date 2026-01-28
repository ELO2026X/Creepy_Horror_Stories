import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Ghost, Skull, Eye, Volume2, VolumeX, AlertCircle, ArrowLeft, Move, Info } from 'lucide-react';

const NARRATIVE_SCRIPT = [
    { time: 2, text: "The hum... it's louder here." },
    { time: 10, text: "The air tastes metallic. Like old pennies." },
    { time: 25, text: "I swear the walls move when I blink." },
    { time: 45, text: "Where is the door? I just walked through it." },
    { time: 60, text: "Something is watching me." },
    { time: 90, text: "Don't look at the lights. Don't look at the lights." }
];

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

    // Mutable Maze Grid
    const mazeGridRef = useRef([
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
    ]);
    const cellSize = 10;
    const wallMeshesRef = useRef([]); // To track wall objects for animation

    useEffect(() => {
        if (!containerRef.current) return;

        const textureLoader = new THREE.TextureLoader();
        console.log("Starting texture load...");

        const baseUrl = import.meta.env.BASE_URL;
        console.log("Loading textures from:", baseUrl);

        const wallTexture = textureLoader.load(
            `${baseUrl}images/wallpaper.png`,
            () => console.log("Wallpaper loaded successfully"),
            undefined,
            (err) => console.error("Error loading wallpaper:", err)
        );
        const carpetTexture = textureLoader.load(
            `${baseUrl}images/carpet.png`,
            () => console.log("Carpet loaded successfully"),
            undefined,
            (err) => console.error("Error loading carpet:", err)
        );
        const custodianTexture = textureLoader.load(`${baseUrl}images/custodian.png`);
        const geometryTexture = textureLoader.load(`${baseUrl}images/geometry.png`);

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
        containerRef.current.userData = { wallMaterial, floorMaterial }; // Store for access
        const ceilingMaterial = new THREE.MeshStandardMaterial({ color: 0xeeeeee });

        // Build Maze
        const mazeGroup = new THREE.Group();
        const wallGeometry = new THREE.BoxGeometry(cellSize, 6, cellSize);
        const floorGeometry = new THREE.PlaneGeometry(cellSize, cellSize);

        // Grid Initialization
        wallMeshesRef.current = [];
        const grid = mazeGridRef.current;

        grid.forEach((row, r) => {
            const rowMeshes = [];
            row.forEach((cell, c) => {
                const x = c * cellSize;
                const z = r * cellSize;

                // Floor and Ceiling (Always exist)
                const floor = new THREE.Mesh(floorGeometry, floorMaterial);
                floor.rotation.x = -Math.PI / 2;
                floor.position.set(x, -3, z);
                mazeGroup.add(floor);

                const ceiling = new THREE.Mesh(floorGeometry, ceilingMaterial);
                ceiling.rotation.x = Math.PI / 2;
                ceiling.position.set(x, 3, z);
                mazeGroup.add(ceiling);

                // Walls (Dynamic)
                // We create a wall mesh for EVERY cell, but position path-walls underground
                const wall = new THREE.Mesh(wallGeometry, wallMaterial);
                const isBorder = r === 0 || r === grid.length - 1 || c === 0 || c === row.length - 1;

                // Initial placement: 0 for wall, -6 for path (underground)
                const targetY = cell === 1 ? 0 : -6;
                wall.position.set(x, targetY, z);

                // Store metadata for animation
                wall.userData = {
                    gridX: c,
                    gridZ: r,
                    isBorder: isBorder,
                    targetY: targetY,
                    currentY: targetY // Current Y position for animation
                };

                mazeGroup.add(wall);
                rowMeshes.push(wall);
            });
            wallMeshesRef.current.push(rowMeshes);
        });
        scene.add(mazeGroup);
        console.log(`Maze built with dynamic walls`);

        // Lights
        grid.forEach((row, r) => {
            row.forEach((cell, c) => {
                if (Math.random() > 0.7) { // Slightly higher chance for lights
                    const pLight = new THREE.PointLight(0xffffcc, 1.5, 25);
                    pLight.position.set(c * cellSize, 1.5, r * cellSize);
                    scene.add(pLight);
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

        // Entity (The Watcher) - This is a placeholder, not an actual entity
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
                desc: "An endless recursive loop of flesh and gold. Do not solve the equation.",
                type: 'geometry'
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

            // Legs (Shorter)
            const leftLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 2.2), dirtyClothMat);
            leftLeg.position.set(-0.5, 1.1, 0);
            group.add(leftLeg);
            const rightLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 2.2), dirtyClothMat);
            rightLeg.position.set(0.5, 1.1, 0);
            group.add(rightLeg);

            // Torso (Lowered)
            const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.4, 2.2), dirtyClothMat);
            torso.position.set(0, 3.2, 0);
            group.add(torso);

            // Arms (Lowered)
            const leftArm = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 2.2), dirtyClothMat);
            leftArm.position.set(-0.8, 3.6, 0.5);
            leftArm.rotation.z = 0.5;
            leftArm.rotation.x = -0.5;
            group.add(leftArm);

            const rightArm = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 2.2), dirtyClothMat);
            rightArm.position.set(0.8, 3.6, -0.5);
            rightArm.rotation.z = -0.5;
            rightArm.rotation.x = 0.5;
            group.add(rightArm);

            // Head (Birdcage - Lowered significanty)
            const cageGroup = new THREE.Group();
            cageGroup.position.set(0, 4.8, 0); // Lowered from 5.8

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

            // Mop (Lowered)
            const mopHandle = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 5), new THREE.MeshStandardMaterial({ color: 0x3d2817 }));
            mopHandle.rotation.z = 0.2;
            mopHandle.rotation.y = 0.2;
            mopHandle.position.set(0.5, 2.5, 1);
            group.add(mopHandle);

            group.userData = {
                name: "The Hollow Custodian",
                desc: "It sweeps the dust, but the dust creates it. A monument to futile labor.",
                type: 'custodian'
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
        let moveForward = false, moveBackward = false, turnLeft = false, turnRight = false, isRunning = false;
        const onKeyDown = (e) => {
            if (e.key === 'w' || e.key === 'ArrowUp') moveForward = true;
            if (e.key === 's' || e.key === 'ArrowDown') moveBackward = true;
            if (e.key === 'a' || e.key === 'ArrowLeft') turnLeft = true;
            if (e.key === 'd' || e.key === 'ArrowRight') turnRight = true;
            if (e.code === 'Space') isRunning = true;
        };
        const onKeyUp = (e) => {
            if (e.key === 'w' || e.key === 'ArrowUp') moveForward = false;
            if (e.key === 's' || e.key === 'ArrowDown') moveBackward = false;
            if (e.key === 'a' || e.key === 'ArrowLeft') turnLeft = false;
            if (e.key === 'd' || e.key === 'ArrowRight') turnRight = false;
            if (e.code === 'Space') isRunning = false;
        };
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);

        // Animation Loop
        let lastTime = performance.now();
        let blackoutTimer = 0;
        let entityTimer = 0;
        let frameCount = 0;
        let shiftTimer = 0;

        const animate = () => {
            const frameId = requestAnimationFrame(animate);
            const time = performance.now();
            const delta = (time - lastTime) / 1000;
            lastTime = time;
            frameCount++;

            // --- Maze Shifting Logic ---
            shiftTimer += delta;
            if (shiftTimer > 2.0) { // Try to shift every 2 seconds
                shiftTimer = 0;
                if (Math.random() > 0.3) { // 70% chance to shift
                    const grid = mazeGridRef.current;
                    const h = grid.length;
                    const w = grid[0].length;

                    // Pick random interior cell (avoiding borders)
                    const r = Math.floor(Math.random() * (h - 2)) + 1;
                    const c = Math.floor(Math.random() * (w - 2)) + 1;

                    // Toggle state in the mutable grid
                    const currentState = grid[r][c];
                    const newState = currentState === 1 ? 0 : 1;
                    grid[r][c] = newState;

                    // Trigger Mesh Animation
                    const wallMesh = wallMeshesRef.current[r][c];
                    wallMesh.userData.targetY = newState === 1 ? 0 : -6; // 0 for wall, -6 for path
                }
            }

            // Animate Walls
            wallMeshesRef.current.forEach(row => {
                row.forEach(wall => {
                    // Only animate non-border walls
                    if (!wall.userData.isBorder && Math.abs(wall.position.y - wall.userData.targetY) > 0.01) {
                        // Lerp towards target Y position
                        wall.position.y += (wall.userData.targetY - wall.position.y) * 2.0 * delta;
                    }
                });
            });

            // --- Janitor AI & Roaming Logic ---
            entities.forEach(ent => {
                if (ent.type === 'custodian') {
                    const userData = ent.mesh.userData; // Shortcut accessor

                    // Initialize State
                    if (!userData.aiState) userData.aiState = 'PATROL';
                    if (!userData.lastSawPlayer) userData.lastSawPlayer = 0;

                    const moveSpeed = userData.aiState === 'CHASE' ? 4.5 * delta : 1.5 * delta; // FAST chase

                    // Gentle swaying (faster if chasing)
                    const swaySpeed = userData.aiState === 'CHASE' ? 10 : 1;
                    ent.mesh.rotation.z = Math.sin(time / (1000 / swaySpeed)) * 0.05;
                    ent.head.rotation.y = Math.sin(time / (2000 / swaySpeed)) * 0.3;

                    // 1. Line of Sight Check
                    if (frameCount % 10 === 0) {
                        const dirToPlayer = new THREE.Vector3().subVectors(camera.position, ent.mesh.position);
                        const dist = dirToPlayer.length();
                        dirToPlayer.normalize();

                        const raycaster = new THREE.Raycaster(ent.mesh.position, dirToPlayer, 0, 25);
                        const intercepts = raycaster.intersectObjects(mazeGroup.children);

                        let canSee = false;
                        if (dist < 25) {
                            if (intercepts.length === 0 || intercepts[0].distance > dist) {
                                canSee = true;
                            }
                        }

                        if (canSee) {
                            userData.aiState = 'CHASE';
                            userData.lastSawPlayer = time;
                        } else {
                            if (time - userData.lastSawPlayer > 5000) {
                                userData.aiState = 'PATROL';
                            }
                        }
                    }

                    // 2. Movement Logic
                    if (!userData.targetPos) {
                        const currentGridX = Math.round(ent.mesh.position.x / cellSize);
                        const currentGridZ = Math.round(ent.mesh.position.z / cellSize);

                        // Valid Neighbors (Check mutable grid)
                        const neighbors = [];
                        const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
                        dirs.forEach(([dx, dz]) => {
                            const nx = currentGridX + dx;
                            const nz = currentGridZ + dz;
                            if (mazeGridRef.current[nz] && mazeGridRef.current[nz][nx] === 0) {
                                neighbors.push({ x: nx * cellSize, z: nz * cellSize });
                            }
                        });

                        if (neighbors.length > 0) {
                            if (userData.aiState === 'CHASE') {
                                // Greedy Best-First Search
                                let bestParams = { node: null, dist: Infinity };
                                neighbors.forEach(n => {
                                    const d = Math.sqrt(Math.pow(n.x - camera.position.x, 2) + Math.pow(n.z - camera.position.z, 2));
                                    if (d < bestParams.dist) {
                                        bestParams = { node: n, dist: d };
                                    }
                                });
                                userData.targetPos = bestParams.node || neighbors[0];
                            } else {
                                // Random Patrol
                                userData.targetPos = neighbors[Math.floor(Math.random() * neighbors.length)];
                            }
                        } else {
                            userData.targetPos = { x: ent.mesh.position.x, z: ent.mesh.position.z };
                        }
                    } else {
                        // Move to Target
                        const target = userData.targetPos;
                        const dx = target.x - ent.mesh.position.x;
                        const dz = target.z - ent.mesh.position.z;
                        const distToTarget = Math.sqrt(dx * dx + dz * dz);

                        if (distToTarget < 0.2) {
                            ent.mesh.position.x = target.x;
                            ent.mesh.position.z = target.z;
                            userData.targetPos = null;
                        } else {
                            ent.mesh.position.x += (dx / distToTarget) * moveSpeed;
                            ent.mesh.position.z += (dz / distToTarget) * moveSpeed;
                            ent.mesh.lookAt(target.x, ent.mesh.position.y, target.z);
                        }
                    }

                    // 3. Proximity Effects
                    const distToPlayer = ent.mesh.position.distanceTo(camera.position);
                    if (distToPlayer < 8) {
                        const intensity = (8 - distToPlayer) / 8;
                        sanityRef.current -= intensity * 2.0 * delta;
                        camera.position.y += (Math.random() - 0.5) * intensity * 0.2;

                        if (userData.aiState === 'CHASE') {
                            setEntityInfo({ name: "THE CUSTODIAN", desc: "IT SEES YOU.", type: 'enemy' });
                        }
                    }
                } else if (ent.type === 'geometry') {
                    ent.mesh.rotation.y += 0.5 * delta;
                    ent.mesh.rotation.z += 0.2 * delta;
                    ent.particles.children.forEach(p => {
                        p.position.y -= p.userData.speed;
                        if (p.position.y < -2) p.position.y = 1.5;
                    });
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

                const speed = isRunning ? 8.0 : 3.0; // Run vs Walk
                const nextX = camera.position.x + direction.x * speed * delta;
                const nextZ = camera.position.z + direction.z * speed * delta;

                // Collision with Dynamic Grid
                const gridX = Math.round(nextX / cellSize);
                const gridZ = Math.round(nextZ / cellSize);

                // Check boundary and wall state (0 = path)
                // Use mazeGridRef.current for collision detection
                if (mazeGridRef.current[gridZ] && mazeGridRef.current[gridZ][gridX] === 0) {
                    camera.position.x = nextX;
                    camera.position.z = nextZ;
                } else {
                    // Collision: Implement basic sliding
                    const currGridX = Math.round(camera.position.x / cellSize);
                    const currGridZ = Math.round(camera.position.z / cellSize);

                    // Try moving only in X direction
                    if (mazeGridRef.current[currGridZ] && mazeGridRef.current[currGridZ][gridX] === 0) {
                        camera.position.x = nextX;
                    }
                    // Try moving only in Z direction
                    if (mazeGridRef.current[gridZ] && mazeGridRef.current[gridZ][currGridX] === 0) {
                        camera.position.z = nextZ;
                    }
                }
            }

            // Raycasting for "Look At" mechanics
            if (frameCount % 10 === 0) {
                const raycaster = new THREE.Raycaster();
                raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
                raycaster.far = 15; // Only detect if close
                const intersects = raycaster.intersectObjects(scene.children, true);

                let foundEntity = false;
                for (let i = 0; i < intersects.length; i++) {
                    // Traverse up to find the group with userData
                    let obj = intersects[i].object;
                    while (obj.parent && obj.parent.type !== 'Scene') {
                        if (obj.userData && obj.userData.name) {
                            setEntityInfo(obj.userData);
                            foundEntity = true;
                            break;
                        }
                        obj = obj.parent;
                    }
                    if (foundEntity) break;
                }
                if (!foundEntity) setEntityInfo(null);
            }


            renderer.render(scene, camera);

            // Game Logic
            const elapsedTime = (time - startTimeRef.current) / 1000;
            const currentScriptLine = NARRATIVE_SCRIPT.find(l => Math.abs(l.time - elapsedTime) < 0.5);
            if (currentScriptLine) {
                setCurrentThought(currentScriptLine.text);
                setTimeout(() => setCurrentThought(null), 4000);
            }

            // Sanity Drain
            sanityRef.current -= 0.01 * delta;
            setSanity(Math.max(0, sanityRef.current));

            if (sanityRef.current < 20) {
                camera.position.y = Math.sin(time / 100) * 0.2; // Shaking
                blackoutTimer += delta;
                if (blackoutTimer > 2) {
                    // Flash 'Wake Up'
                    blackoutTimer = 0;
                }
            }
        };

        const animationId = requestAnimationFrame(animate);

        // Cleanup
        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('keyup', onKeyUp);
            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    // Audio Logic
    useEffect(() => {
        if (!audioEnabled || audioRef.current) return;
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.setValueAtTime(60, ctx.currentTime); // 60Hz hum
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        osc.start();
        audioRef.current = { ctx, osc, gain };

        const interval = setInterval(() => {
            if (Math.random() > 0.95) {
                // Random flicker
                osc.frequency.setValueAtTime(58 + Math.random() * 4, ctx.currentTime);
                setTimeout(() => osc.frequency.setValueAtTime(60, ctx.currentTime), 100);
            }
        }, 4000);

        return () => {
            clearInterval(interval);
            if (audioRef.current) {
                audioRef.current.osc.stop();
                audioRef.current.ctx.close();
                audioRef.current = null;
            }
        };
    }, [audioEnabled]);


    // AI Manifest Reality Handler (Updated for "Damp/Mold" look)
    const handleManifestReality = async () => {
        setIsManifesting(true);
        setStatus("MANIFESTING REALITY PROTOCOL INITIATED...");

        setTimeout(() => {
            if (containerRef.current && containerRef.current.userData) {
                const { wallMaterial, floorMaterial } = containerRef.current.userData;

                // Instead of red, we go for "Rotting/Damp"
                // Increase roughness to look like wet plaster or mold
                wallMaterial.roughness = 0.1; // Wet look
                wallMaterial.metalness = 0.6; // Slightly metallic/slick
                wallMaterial.color.setHex(0x888866); // Sickly Greenish-Beige

                floorMaterial.roughness = 0.05; // Very wet floor
                floorMaterial.color.setHex(0x222211); // Dark swampy color

                // Add fog density for atmosphere
                // Note: We'd need to access scene.fog to change it, assuming it's accessible or we stored it.
                // For now, these material changes give a "slick" horror look.

                setStatus("REALITY SHIFTED: DECAY PARAMETER 99%");
            }
            setIsManifesting(false);
        }, 2000);
    };

    return (
        <div ref={containerRef} className="fixed inset-0 w-full h-full bg-black z-50 overflow-hidden cursor-none">
            {/* HUD Overlay */}
            <div className="absolute top-8 left-8 z-50 pointer-events-none select-none mix-blend-difference">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-red-600 animate-pulse">
                        <Skull className="w-6 h-6" />
                        <h2 className="text-xl font-black tracking-widest uppercase font-header">Vital Systems</h2>
                    </div>
                    <div className="h-2 w-48 bg-gray-900 border border-red-900/50 mt-1">
                        <div
                            className="h-full bg-red-600 transition-all duration-100 ease-linear"
                            style={{ width: `${sanity}%` }}
                        />
                    </div>
                    <p className="text-[10px] text-red-400 font-mono uppercase tracking-widest mt-1">
                        Psychological Integrity: {sanity.toFixed(1)}%
                    </p>

                    <div className="mt-8 border-l-2 border-orange-500/50 pl-4">
                        <p className="text-[10px] text-orange-400 font-mono uppercase mb-1">Current Status</p>
                        <p className="text-orange-500 font-bold bg-orange-900/10 px-2 py-1 inline-block animate-flicker">
                            {status}
                        </p>
                    </div>
                </div>
            </div>

            {/* Narrative Thought Overlay */}
            {currentThought && (
                <div className="absolute bottom-32 left-0 w-full text-center z-50 pointer-events-none">
                    <p className="text-xl text-gray-200 font-serif italic tracking-wide animate-fade-in px-4 drop-shadow-lg max-w-2xl mx-auto bg-black/50 p-4 rounded-lg border border-gray-800">
                        "{currentThought}"
                    </p>
                </div>
            )}

            {/* Entity Info Popup */}
            {entityInfo && (
                <div className="absolute top-1/2 left-1/2 transform translate-x-12 -translate-y-12 z-50 pointer-events-none animate-scale-in origin-bottom-left">
                    <div className="bg-black/90 border border-red-500 p-4 w-64 text-left shadow-[0_0_30px_rgba(255,0,0,0.2)]">
                        <div className="flex items-center gap-2 mb-2 border-b border-red-900/50 pb-2">
                            <AlertCircle className="w-4 h-4 text-red-500" />
                            <h3 className="text-red-500 font-bold uppercase text-xs tracking-widest">{entityInfo.type === 'geometry' ? 'Cognitohazard' : 'Entity'} Detected</h3>
                        </div>
                        <h4 className="text-white font-bold text-sm mb-1">{entityInfo.name}</h4>
                        <p className="text-gray-400 text-xs font-mono leading-relaxed">{entityInfo.desc}</p>
                    </div>
                    <div className="w-full h-[1px] bg-red-500 absolute top-4 -left-12 rotate-[-15deg]"></div>
                </div>
            )}

            {/* Controls Info */}
            <div className="absolute bottom-8 left-8 text-[10px] font-mono text-gray-500 flex gap-4 pointer-events-none select-none">
                <span className="flex items-center gap-1"><Move className="w-3 h-3" /> WASD + MOUSE to Move</span>
                <span className="flex items-center gap-1"><Info className="w-3 h-3" /> Look at Objects to Scan</span>
            </div>

            {/* Action Buttons */}
            <div className="absolute top-8 right-8 z-50 flex flex-col gap-4 pointer-events-auto">
                <button
                    onClick={onExit}
                    className="group flex items-center gap-2 bg-red-950/80 hover:bg-red-900 text-red-200 border border-red-800 px-4 py-2 uppercase text-xs font-bold tracking-widest transition-all"
                >
                    Abort Simulation
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                </button>

                <button
                    onClick={handleManifestReality}
                    disabled={isManifesting}
                    className={`group flex items-center gap-2 bg-indigo-950/80 hover:bg-indigo-900 text-indigo-200 border border-indigo-500/50 px-4 py-2 uppercase text-xs font-bold tracking-widest transition-all ${isManifesting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    <Eye className={`w-4 h-4 ${isManifesting ? 'animate-spin' : ''}`} />
                    {isManifesting ? 'Rewriting Local Reality...' : 'Manifest Reality'}
                </button>

                <button
                    onClick={() => setAudioEnabled(!audioEnabled)}
                    className="self-end bg-black/50 p-2 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 transition-all"
                >
                    {audioEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                </button>
            </div>

            {/* Center Reticle */}
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white/50 rounded-full pointer-events-none mix-blend-exclusion" />

            {/* CRT Scanline Overlay */}
            <div className="absolute inset-0 bg-transparent pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjUiLz48L3N2Zz4=')] opacity-[0.1] mix-blend-overlay animate-flicker z-40"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none z-40"></div>
        </div>
    );
};

export default BackroomsView;
