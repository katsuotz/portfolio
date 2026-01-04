'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useMemo, useState, useEffect } from 'react'
import * as THREE from 'three'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

function Orb({
  position,
  color,
  scale,
  speed,
  isMobile,
}: {
  position: [number, number, number]
  color: string
  scale: number
  speed: number
  isMobile: boolean
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
      <icosahedronGeometry args={[1, isMobile ? 0 : 1]} />
      <meshBasicMaterial color={color} transparent opacity={0.6} wireframe />
    </mesh>
  )
}

function GlowOrb({
  position,
  color,
  scale,
  speed,
  isMobile,
}: {
  position: [number, number, number]
  color: string
  scale: number
  speed: number
  isMobile: boolean
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
      <sphereGeometry args={[1, isMobile ? 8 : 32, isMobile ? 8 : 32]} />
      <meshBasicMaterial color={color} transparent opacity={0.4} />
    </mesh>
  )
}

function ParticleField({ isMobile }: { isMobile: boolean }) {
  const particlesRef = useRef<THREE.Points>(null)
  const particleCount = isMobile ? 20 : 75

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

function Scene({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      <Orb
        position={[-3, 1, -2]}
        color="#FF6B6B"
        scale={0.8}
        speed={0.8}
        isMobile={isMobile}
      />
      <Orb
        position={[3, -1, -1]}
        color="#7ECDC8"
        scale={0.6}
        speed={1.2}
        isMobile={isMobile}
      />
      {!isMobile && (
        <Orb
          position={[0, 2, -3]}
          color="#FFB347"
          scale={0.5}
          speed={1}
          isMobile={isMobile}
        />
      )}

      <GlowOrb
        position={[-2, -1.5, 0]}
        color="#5E92C9"
        scale={0.3}
        speed={1.5}
        isMobile={isMobile}
      />
      <GlowOrb
        position={[2.5, 1.5, -1]}
        color="#FF9FFC"
        scale={0.25}
        speed={1.8}
        isMobile={isMobile}
      />
      {!isMobile && (
        <GlowOrb
          position={[1, -2, -2]}
          color="#FFD93D"
          scale={0.35}
          speed={1.3}
          isMobile={isMobile}
        />
      )}
      <ParticleField isMobile={isMobile} />

      {!isMobile && (
        <EffectComposer>
          <Bloom
            intensity={0.5}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
        </EffectComposer>
      )}
    </>
  )
}

export default function FloatingOrbs() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{
          alpha: true,
          antialias: !isMobile,
          powerPreference: 'high-performance',
        }}
        dpr={isMobile ? 0.75 : [1, 2]}
      >
        <Scene isMobile={isMobile} />
      </Canvas>
    </div>
  )
}
