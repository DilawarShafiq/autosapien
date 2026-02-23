import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function SubtleParticles() {
  const meshRef = useRef<THREE.Points>(null)
  const count = 150

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      pos[i3] = (Math.random() - 0.5) * 60
      pos[i3 + 1] = (Math.random() - 0.5) * 60
      pos[i3 + 2] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.y = time * 0.003
    meshRef.current.rotation.x = Math.sin(time * 0.005) * 0.02
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
        size={0.035}
        color="#d4920a"
        transparent
        opacity={0.2}
        sizeAttenuation
      />
    </points>
  )
}

function SceneSetup() {
  const { scene } = useThree()
  scene.background = new THREE.Color('#ffffff')
  return null
}

export function ParticleField() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 50 }}
        gl={{ antialias: true, alpha: false }}
        style={{ background: '#ffffff' }}
        dpr={[1, 1.5]}
        onCreated={({ scene }) => { scene.background = new THREE.Color('#ffffff') }}
      >
        <SceneSetup />
        <SubtleParticles />
      </Canvas>
    </div>
  )
}
