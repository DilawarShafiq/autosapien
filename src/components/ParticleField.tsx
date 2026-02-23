import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function DriftingParticles() {
  const meshRef = useRef<THREE.Points>(null)
  const count = 400

  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const vel = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      pos[i3] = (Math.random() - 0.5) * 60
      pos[i3 + 1] = (Math.random() - 0.5) * 60
      pos[i3 + 2] = (Math.random() - 0.5) * 30
      vel[i3] = (Math.random() - 0.5) * 0.005
      vel[i3 + 1] = (Math.random() - 0.5) * 0.005
      vel[i3 + 2] = (Math.random() - 0.5) * 0.002
    }

    return { positions: pos, velocities: vel }
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.getElapsedTime()
    const posArray = meshRef.current.geometry.attributes.position.array as Float32Array

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      posArray[i3] += velocities[i3] + Math.sin(time * 0.15 + i * 0.3) * 0.001
      posArray[i3 + 1] += velocities[i3 + 1] + Math.cos(time * 0.12 + i * 0.3) * 0.001
      posArray[i3 + 2] += velocities[i3 + 2]

      if (posArray[i3] > 30) posArray[i3] = -30
      if (posArray[i3] < -30) posArray[i3] = 30
      if (posArray[i3 + 1] > 30) posArray[i3 + 1] = -30
      if (posArray[i3 + 1] < -30) posArray[i3 + 1] = 30
      if (posArray[i3 + 2] > 15) posArray[i3 + 2] = -15
      if (posArray[i3 + 2] < -15) posArray[i3 + 2] = 15
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true
    meshRef.current.rotation.y = time * 0.005
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#f0a030"
        transparent
        opacity={0.35}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function WireframeStructure() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    const time = state.clock.getElapsedTime()

    groupRef.current.children.forEach((child, i) => {
      child.rotation.x = time * 0.04 + i * 2
      child.rotation.y = time * 0.06 + i * 2
      child.position.y = Math.sin(time * 0.25 + i * 3) * 0.6
    })
  })

  return (
    <group ref={groupRef}>
      <mesh position={[-9, 2, -14]}>
        <icosahedronGeometry args={[2, 1]} />
        <meshBasicMaterial color="#f0a030" wireframe transparent opacity={0.035} />
      </mesh>
      <mesh position={[11, -3, -16]}>
        <octahedronGeometry args={[1.8, 0]} />
        <meshBasicMaterial color="#f0a030" wireframe transparent opacity={0.025} />
      </mesh>
    </group>
  )
}

function GridPlane() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    const time = state.clock.getElapsedTime()
    groupRef.current.position.y = Math.sin(time * 0.1) * 0.3 - 5
  })

  return (
    <group ref={groupRef} rotation={[-Math.PI / 5, 0, 0]} position={[0, -5, -18]}>
      <mesh>
        <planeGeometry args={[80, 80, 40, 40]} />
        <meshBasicMaterial
          color="#f0a030"
          wireframe
          transparent
          opacity={0.015}
        />
      </mesh>
    </group>
  )
}

function SceneSetup() {
  const { scene } = useThree()
  scene.background = new THREE.Color('#0a0a10')
  scene.fog = new THREE.FogExp2('#0a0a10', 0.015)
  return null
}

export function ParticleField() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 50 }}
        gl={{ antialias: true, alpha: false }}
        style={{ background: '#0a0a10' }}
        dpr={[1, 1.5]}
        onCreated={({ scene }) => { scene.background = new THREE.Color('#0a0a10') }}
      >
        <SceneSetup />
        <DriftingParticles />
        <WireframeStructure />
        <GridPlane />
      </Canvas>
    </div>
  )
}
