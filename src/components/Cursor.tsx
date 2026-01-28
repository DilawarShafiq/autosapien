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
      {/* Main cursor - small square for industrial feel */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-ember-400 pointer-events-none z-[9999]"
        style={{ transform: 'rotate(45deg)' }}
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isPointer ? 0.5 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />

      {/* Cursor ring - square outline */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-ember-500/50 pointer-events-none z-[9999]"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isPointer ? 1.5 : 1,
          opacity: isHidden ? 0 : 0.5,
          rotate: isPointer ? 45 : 0,
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.8 }}
      />

      {/* Subtle glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 rounded-full pointer-events-none z-[9998]"
        style={{
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.08) 0%, transparent 70%)',
        }}
        animate={{
          x: position.x - 64,
          y: position.y - 64,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      />
    </>
  )
}
