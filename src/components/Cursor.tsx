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

  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null
  }

  return (
    <>
      {/* Core - small diamond */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 pointer-events-none z-[9999]"
        style={{
          transform: 'rotate(45deg)',
          background: '#f0a030',
        }}
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          scale: isPointer ? 0.5 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 w-7 h-7 pointer-events-none z-[9999]"
        style={{
          border: '1px solid rgba(240, 160, 48, 0.3)',
        }}
        animate={{
          x: position.x - 14,
          y: position.y - 14,
          scale: isPointer ? 1.4 : 1,
          opacity: isHidden ? 0 : 0.5,
          rotate: isPointer ? 45 : 0,
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.8 }}
      />

      {/* Glow */}
      <motion.div
        className="fixed top-0 left-0 w-28 h-28 rounded-full pointer-events-none z-[9998]"
        style={{
          background: 'radial-gradient(circle, rgba(240, 160, 48, 0.04) 0%, transparent 70%)',
        }}
        animate={{
          x: position.x - 56,
          y: position.y - 56,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      />
    </>
  )
}
