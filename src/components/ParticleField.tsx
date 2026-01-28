import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles() {
  const meshRef = useRef<THREE.Points>(null)
  const count = 800

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 40
      positions[i3 + 1] = (Math.random() - 0.5) * 40
      positions[i3 + 2] = (Math.random() - 0.5) * 40
    }

    return { positions }
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return

    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.y = time * 0.015
    meshRef.current.rotation.x = Math.sin(time * 0.01) * 0.05
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
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#f59e0b"
        transparent
        opacity={0.3}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function GridLines() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    const time = state.clock.getElapsedTime()
    groupRef.current.rotation.y = time * 0.01
  })

  return (
    <group ref={groupRef} position={[0, 0, -15]}>
      {/* Subtle grid plane */}
      <mesh rotation={[-Math.PI / 6, 0, 0]}>
        <planeGeometry args={[40, 40, 20, 20]} />
        <meshBasicMaterial
          color="#1a1a1a"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
    </group>
  )
}

function GeometricShapes() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    const time = state.clock.getElapsedTime()

    groupRef.current.children.forEach((child, i) => {
      child.rotation.x = time * 0.1 + i
      child.rotation.y = time * 0.15 + i
      child.position.y = Math.sin(time * 0.5 + i * 2) * 0.5
    })
  })

  return (
    <group ref={groupRef}>
      {/* Floating geometric wireframe shapes */}
      <mesh position={[-8, 2, -10]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshBasicMaterial color="#f59e0b" wireframe transparent opacity={0.2} />
      </mesh>
      <mesh position={[8, -2, -12]}>
        <octahedronGeometry args={[1]} />
        <meshBasicMaterial color="#f59e0b" wireframe transparent opacity={0.15} />
      </mesh>
      <mesh position={[0, 4, -8]}>
        <tetrahedronGeometry args={[0.8]} />
        <meshBasicMaterial color="#00d4ff" wireframe transparent opacity={0.1} />
      </mesh>
    </group>
  )
}

export function ParticleField() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: '#0a0a0a' }}
        dpr={[1, 1.5]}
      >
        <Particles />
        <GridLines />
        <GeometricShapes />
      </Canvas>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-carbon-900 via-transparent to-carbon-900 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-carbon-900/50 via-transparent to-carbon-900/50 pointer-events-none" />
    </div>
  )
}
