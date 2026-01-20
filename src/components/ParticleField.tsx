import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles() {
  const meshRef = useRef<THREE.Points>(null)
  const count = 2000

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 50
      positions[i3 + 1] = (Math.random() - 0.5) * 50
      positions[i3 + 2] = (Math.random() - 0.5) * 50

      // Color gradient from neural to plasma to cyber
      const t = Math.random()
      if (t < 0.33) {
        colors[i3] = 0.39 // neural
        colors[i3 + 1] = 0.4
        colors[i3 + 2] = 0.95
      } else if (t < 0.66) {
        colors[i3] = 0.85 // plasma
        colors[i3 + 1] = 0.27
        colors[i3 + 2] = 0.94
      } else {
        colors[i3] = 0.02 // cyber
        colors[i3 + 1] = 0.71
        colors[i3 + 2] = 0.83
      }
    }

    return { positions, colors }
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return

    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.y = time * 0.02
    meshRef.current.rotation.x = Math.sin(time * 0.01) * 0.1

    // Animate particles
    const positions = meshRef.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3 + 1] += Math.sin(time + positions[i3]) * 0.001
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function FloatingOrbs() {
  const orbsRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!orbsRef.current) return
    const time = state.clock.getElapsedTime()

    orbsRef.current.children.forEach((orb, i) => {
      orb.position.y = Math.sin(time * 0.5 + i * 2) * 2
      orb.position.x = Math.cos(time * 0.3 + i) * 3
    })
  })

  return (
    <group ref={orbsRef}>
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[i * 4 - 8, 0, -10]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? '#6366f1' : '#d946ef'}
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}
    </group>
  )
}

export function ParticleField() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <Particles />
        <FloatingOrbs />
      </Canvas>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-neural-950/30 via-transparent to-plasma-950/30 pointer-events-none" />
    </div>
  )
}
