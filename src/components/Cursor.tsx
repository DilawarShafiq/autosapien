import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsHidden(false)

      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null
      )
    }

    const handleMouseLeave = () => setIsHidden(true)
    const handleMouseEnter = () => setIsHidden(false)

    window.addEventListener('mousemove', handleMouseMove)
    document.body.addEventListener('mouseleave', handleMouseLeave)
    document.body.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
      document.body.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  // Hide on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null
  }

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-white mix-blend-difference pointer-events-none z-[9999]"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: isPointer ? 0.5 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />

      {/* Cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-white/50 mix-blend-difference pointer-events-none z-[9999]"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isPointer ? 1.5 : 1,
          opacity: isHidden ? 0 : 0.5,
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.8 }}
      />

      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-40 h-40 rounded-full pointer-events-none z-[9998]"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
        }}
        animate={{
          x: position.x - 80,
          y: position.y - 80,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      />
    </>
  )
}
