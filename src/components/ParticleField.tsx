import { useRef, useMemo, useCallback } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const PARTICLE_COUNT = 400
const MOUSE_RADIUS = 6
const MOUSE_STRENGTH = 1.8

function FloatingDots() {
  const meshRef = useRef<THREE.Points>(null)
  const mouseRef = useRef(new THREE.Vector2(999, 999))
  const mouse3D = useRef(new THREE.Vector3(999, 999, 0))
  const { size, camera } = useThree()

  const onPointerMove = useCallback((e: { clientX: number; clientY: number }) => {
    mouseRef.current.x = (e.clientX / size.width) * 2 - 1
    mouseRef.current.y = -(e.clientY / size.height) * 2 + 1
    const vec = new THREE.Vector3(mouseRef.current.x, mouseRef.current.y, 0.5)
    vec.unproject(camera)
    const dir = vec.sub(camera.position).normalize()
    const distance = -camera.position.z / dir.z
    mouse3D.current = camera.position.clone().add(dir.multiplyScalar(distance))
  }, [size, camera])

  useThree(({ gl }) => {
    gl.domElement.addEventListener('pointermove', onPointerMove)
    return () => gl.domElement.removeEventListener('pointermove', onPointerMove)
  })

  const { positions, velocities, basePositions, sizes } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3)
    const vel = new Float32Array(PARTICLE_COUNT * 3)
    const base = new Float32Array(PARTICLE_COUNT * 3)
    const sz = new Float32Array(PARTICLE_COUNT)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      const x = (Math.random() - 0.5) * 50
      const y = (Math.random() - 0.5) * 35
      const z = (Math.random() - 0.5) * 15
      pos[i3] = x; pos[i3 + 1] = y; pos[i3 + 2] = z
      base[i3] = x; base[i3 + 1] = y; base[i3 + 2] = z
      vel[i3] = (Math.random() - 0.5) * 0.003
      vel[i3 + 1] = (Math.random() - 0.5) * 0.003
      vel[i3 + 2] = (Math.random() - 0.5) * 0.001
      sz[i] = Math.random() * 0.04 + 0.02
    }
    return { positions: pos, velocities: vel, basePositions: base, sizes: sz }
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.getElapsedTime()
    const posArray = meshRef.current.geometry.attributes.position.array as Float32Array
    const sizeArray = meshRef.current.geometry.attributes.size.array as Float32Array
    const mx = mouse3D.current.x
    const my = mouse3D.current.y

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      posArray[i3] += velocities[i3] + Math.sin(time * 0.3 + i * 0.1) * 0.002
      posArray[i3 + 1] += velocities[i3 + 1] + Math.cos(time * 0.2 + i * 0.15) * 0.002
      posArray[i3 + 2] += velocities[i3 + 2]

      posArray[i3] += (basePositions[i3] - posArray[i3]) * 0.0005
      posArray[i3 + 1] += (basePositions[i3 + 1] - posArray[i3 + 1]) * 0.0005
      posArray[i3 + 2] += (basePositions[i3 + 2] - posArray[i3 + 2]) * 0.001

      const dx = posArray[i3] - mx
      const dy = posArray[i3 + 1] - my
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < MOUSE_RADIUS) {
        const force = (1 - dist / MOUSE_RADIUS) * MOUSE_STRENGTH * 0.02
        posArray[i3] += dx * force
        posArray[i3 + 1] += dy * force
        sizeArray[i] = sizes[i] * (1 + (1 - dist / MOUSE_RADIUS) * 3)
      } else {
        sizeArray[i] = sizes[i]
      }
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true
    meshRef.current.geometry.attributes.size.needsUpdate = true
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={PARTICLE_COUNT}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#d4a84b"
        transparent
        opacity={0.15}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

function SceneSetup() {
  const { scene } = useThree()
  scene.background = new THREE.Color('#fafaf8')
  return null
}

export function ParticleField() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 50 }}
        gl={{ antialias: true, alpha: false }}
        style={{ background: '#fafaf8' }}
        dpr={[1, 1.5]}
        onCreated={({ scene }) => { scene.background = new THREE.Color('#fafaf8') }}
      >
        <SceneSetup />
        <FloatingDots />
      </Canvas>
    </div>
  )
}
