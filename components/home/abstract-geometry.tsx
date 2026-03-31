'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function WireframeWave() {
  const meshRef = useRef<THREE.Mesh>(null)

  // Create a plane geometry with many segments
  const geometry = useMemo(() => new THREE.PlaneGeometry(60, 40, 40, 30), [])
  const initialPositions = useMemo(() => {
    const positions = geometry.attributes.position.array as Float32Array
    const initial = new Float32Array(positions.length)
    for (let i = 0; i < positions.length; i++) {
      initial[i] = positions[i]
    }
    return initial
  }, [geometry])

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.getElapsedTime()
    const positions = meshRef.current.geometry.attributes.position
      .array as Float32Array

    // Animate the z-coordinate (index i+2) of each vertex
    for (let i = 0; i < positions.length; i += 3) {
      const x = initialPositions[i]
      const y = initialPositions[i + 1]

      // Create a wave effect based on x, y, and time
      const waveX = Math.sin(x * 0.2 + time) * 2
      const waveY = Math.cos(y * 0.2 + time) * 2

      positions[i + 2] = waveX + waveY
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true

    // Slowly rotate the whole mesh
    meshRef.current.rotation.z = time * 0.05
  })

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      rotation={[-Math.PI / 2.5, 0, 0]}
      position={[0, -10, -10]}
    >
      <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.15} />
    </mesh>
  )
}

export default function AbstractGeometry() {
  return (
    <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <WireframeWave />
      </Canvas>
    </div>
  )
}
