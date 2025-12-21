"use client"

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";


function RotatingShape(){
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state)=> {
        if(meshRef.current){
            meshRef.current.rotation.x += 0.005;
            meshRef.current.rotation.y += 0.005;
        }
    })

    return(
        <Float speed={4} rotationIntensity={1} floatIntensity={2} >
            <mesh ref={meshRef}>
                <torusKnotGeometry args={[1, 0.3, 128, 16]} />
                <MeshDistortMaterial
                    color="#4338ca"
                    speed={2}
                    distort={0.4}
                    roughness={0}
                />
            </mesh>
        </Float>
    );

}


export default function Scene(){
    return(
        <div className="h-[500px] w-full">
            <Canvas camera={{position: [0, 0, 5]}}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <RotatingShape />
                <OrbitControls enableZoom={false} />
            </Canvas>

        </div>
    );
}




