'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
  Noise,
} from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

function Orb({
  position,
  color,
  scale,
  speed,
}: {
  position: [number, number, number]
  color: string
  scale: number
  speed: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const initialY = position[1]

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        initialY + Math.sin(state.clock.elapsedTime * speed) * 0.3
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.6}
        wireframe
        emissive={color}
        emissiveIntensity={0.3}
      />
    </mesh>
  )
}

function GlowOrb({
  position,
  color,
  scale,
  speed,
}: {
  position: [number, number, number]
  color: string
  scale: number
  speed: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const initialPos = useMemo(() => [...position], [position])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        initialPos[1] + Math.sin(state.clock.elapsedTime * speed + 1) * 0.4
      meshRef.current.position.x =
        initialPos[0] + Math.cos(state.clock.elapsedTime * speed * 0.5) * 0.2
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.4}
        emissive={color}
        emissiveIntensity={0.5}
      />
    </mesh>
  )
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null)
  const particleCount = 100

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5
    }
    return pos
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01
    }
  })

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geo
  }, [positions])

  return (
    <points ref={particlesRef} geometry={geometry}>
      <pointsMaterial
        size={0.03}
        color="#7ECDC8"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

export default function FloatingOrbs() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.5}
          color="#FF6B6B"
        />

        <Orb position={[-3, 1, -2]} color="#FF6B6B" scale={0.8} speed={0.8} />
        <Orb position={[3, -1, -1]} color="#7ECDC8" scale={0.6} speed={1.2} />
        <Orb position={[0, 2, -3]} color="#FFB347" scale={0.5} speed={1} />

        <GlowOrb
          position={[-2, -1.5, 0]}
          color="#5E92C9"
          scale={0.3}
          speed={1.5}
        />
        <GlowOrb
          position={[2.5, 1.5, -1]}
          color="#FF9FFC"
          scale={0.25}
          speed={1.8}
        />
        <GlowOrb
          position={[1, -2, -2]}
          color="#FFD93D"
          scale={0.35}
          speed={1.3}
        />
        <ParticleField />

        {/* Post-processing effects */}
        <EffectComposer>
          <Bloom
            intensity={0.5}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
          <ChromaticAberration
            blendFunction={BlendFunction.NORMAL}
            offset={new THREE.Vector2(0.002, 0.002)}
            radialModulation={true}
            modulationOffset={0.5}
          />
          <Noise blendFunction={BlendFunction.SOFT_LIGHT} opacity={0.15} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
