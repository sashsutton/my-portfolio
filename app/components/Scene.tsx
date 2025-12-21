"use client"

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Float, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function RotatingShape() {
    const meshRef = useRef<THREE.Mesh>(null);
    const wireframeRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current && wireframeRef.current) {

            meshRef.current.rotation.y = time * 0.1;
            wireframeRef.current.rotation.y = time * 0.15;

            const scale = 1 + Math.sin(time) * 0.1;
            meshRef.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <group>
                <mesh ref={wireframeRef}>
                    <icosahedronGeometry args={[2, 15]} />
                    <meshBasicMaterial
                        color="#4338ca"
                        wireframe
                        transparent
                        opacity={0.3}
                    />
                </mesh>

                <mesh ref={meshRef}>
                    <octahedronGeometry args={[1, 0]} />
                    <MeshDistortMaterial
                        color="#6366f1"
                        speed={3}
                        distort={0.5}
                        roughness={0.2}
                        metalness={0.8}
                    />
                </mesh>

                <points>
                    <icosahedronGeometry args={[2.2, 20]} />
                    <pointsMaterial color="#818cf8" size={0.02} sizeAttenuation={true} />
                </points>
            </group>
        </Float>
    );
}

export const Scene = () => {
    return(
        <div className="h-[500px] w-full">
            <Canvas camera={{position: [0, 0, 5]}}>
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <RotatingShape />
                <OrbitControls enableZoom={false} />
            </Canvas>

        </div>
    );
}




