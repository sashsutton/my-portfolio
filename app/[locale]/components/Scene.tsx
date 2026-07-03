"use client"

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

// A small MLP: pink (music) flows in, indigo (science) comes out.
const LAYERS = [5, 8, 8, 3];
const LAYER_GAP = 2.2;
const PULSE_COUNT = 14;

const PINK = new THREE.Color("#ec4899");
const INDIGO = new THREE.Color("#6366f1");
const tempColor = new THREE.Color();

function buildNetwork() {
    const nodes: THREE.Vector3[] = [];
    const xOffset = ((LAYERS.length - 1) * LAYER_GAP) / 2;
    const yGap = 4.2 / Math.max(...LAYERS);

    LAYERS.forEach((count, li) => {
        const x = li * LAYER_GAP - xOffset;
        for (let i = 0; i < count; i++) {
            const y = (i - (count - 1) / 2) * yGap;
            // deterministic jitter so the grid feels organic, not CAD-drawn
            const z = Math.sin(li * 7 + i * 13) * 0.35;
            nodes.push(new THREE.Vector3(x, y, z));
        }
    });

    const edges: [number, number][] = [];
    let start = 0;
    for (let li = 0; li < LAYERS.length - 1; li++) {
        const bStart = start + LAYERS[li];
        for (let a = 0; a < LAYERS[li]; a++) {
            for (let b = 0; b < LAYERS[li + 1]; b++) {
                edges.push([start + a, bStart + b]);
            }
        }
        start += LAYERS[li];
    }
    return { nodes, edges };
}

function mixAt(x: number) {
    const xMax = ((LAYERS.length - 1) * LAYER_GAP) / 2;
    return (x + xMax) / (2 * xMax);
}

function NeuralNetwork() {
    const { nodes, edges } = useMemo(buildNetwork, []);
    const reducedMotion = useMemo(
        () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        []
    );

    const lineGeometry = useMemo(() => {
        const pos = new Float32Array(edges.length * 6);
        const col = new Float32Array(edges.length * 6);
        edges.forEach(([a, b], i) => {
            [nodes[a], nodes[b]].forEach((n, j) => {
                const o = i * 6 + j * 3;
                pos[o] = n.x; pos[o + 1] = n.y; pos[o + 2] = n.z;
                tempColor.copy(PINK).lerp(INDIGO, mixAt(n.x));
                col[o] = tempColor.r; col[o + 1] = tempColor.g; col[o + 2] = tempColor.b;
            });
        });
        const g = new THREE.BufferGeometry();
        g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
        g.setAttribute("color", new THREE.BufferAttribute(col, 3));
        return g;
    }, [nodes, edges]);

    const groupRef = useRef<THREE.Group>(null);
    const nodeRefs = useRef<(THREE.Mesh | null)[]>([]);
    const pulseRefs = useRef<(THREE.Mesh | null)[]>([]);
    const pulses = useRef(
        Array.from({ length: PULSE_COUNT }, (_, i) => ({
            edge: (i * 37) % edges.length,
            t: (i * 0.13) % 1,
            speed: 0.35 + (i % 5) * 0.09
        }))
    );

    useFrame((state, delta) => {
        if (reducedMotion) return;
        const time = state.clock.getElapsedTime();

        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(time * 0.15) * 0.4;
        }

        nodeRefs.current.forEach((m, i) => {
            if (m) m.scale.setScalar(1 + Math.sin(time * 2 + i * 1.7) * 0.16);
        });

        pulses.current.forEach((p, i) => {
            const mesh = pulseRefs.current[i];
            if (!mesh) return;
            p.t += delta * p.speed;
            if (p.t >= 1) {
                p.t = 0;
                p.edge = Math.floor(Math.random() * edges.length);
            }
            const [a, b] = edges[p.edge];
            mesh.position.lerpVectors(nodes[a], nodes[b], p.t);
            (mesh.material as THREE.MeshBasicMaterial).color
                .copy(PINK).lerp(INDIGO, mixAt(mesh.position.x));
            mesh.scale.setScalar(0.5 + Math.sin(p.t * Math.PI) * 0.9);
        });
    });

    return (
        <group ref={groupRef}>
            {nodes.map((n, i) => {
                const c = PINK.clone().lerp(INDIGO, mixAt(n.x));
                return (
                    <mesh key={i} position={n} ref={el => { nodeRefs.current[i] = el; }}>
                        <sphereGeometry args={[0.09, 16, 16]} />
                        <meshStandardMaterial
                            color={c}
                            emissive={c}
                            emissiveIntensity={0.55}
                            roughness={0.3}
                            metalness={0.4}
                        />
                    </mesh>
                );
            })}

            <lineSegments geometry={lineGeometry}>
                <lineBasicMaterial vertexColors transparent opacity={0.22} />
            </lineSegments>

            {!reducedMotion && Array.from({ length: PULSE_COUNT }).map((_, i) => (
                <mesh key={i} ref={el => { pulseRefs.current[i] = el; }}>
                    <sphereGeometry args={[0.05, 8, 8]} />
                    <meshBasicMaterial transparent opacity={0.9} />
                </mesh>
            ))}
        </group>
    );
}

export const Scene = () => {
    return (
        <div className="h-[500px] w-full">
            <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
                <ambientLight intensity={0.6} />
                <pointLight position={[10, 10, 10]} intensity={80} />
                <Float speed={2} rotationIntensity={0.25} floatIntensity={0.8}>
                    <NeuralNetwork />
                </Float>
                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>
    );
}
