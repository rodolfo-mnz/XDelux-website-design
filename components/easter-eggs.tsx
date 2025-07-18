"use client"

import { useState, useEffect } from "react"
import { Sparkles, Heart, Star, Zap } from "lucide-react"

export function EasterEggs() {
  const [konamiCode, setKonamiCode] = useState<string[]>([])
  const [showSecret, setShowSecret] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([])

  const konamiSequence = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "KeyB",
    "KeyA",
  ]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newCode = [...konamiCode, e.code].slice(-10)
      setKonamiCode(newCode)

      if (newCode.join(",") === konamiSequence.join(",")) {
        setShowSecret(true)
        setTimeout(() => setShowSecret(false), 5000)
        setKonamiCode([])
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [konamiCode])

  const handleLogoClick = () => {
    setClickCount((prev) => prev + 1)
    if (clickCount >= 9) {
      // Easter egg: explosão de partículas
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }))
      setParticles(newParticles)
      setTimeout(() => setParticles([]), 3000)
      setClickCount(0)
    }
  }

  return (
    <>
      {/* Konami Code Easter Egg */}
      {showSecret && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="text-center space-y-4 animate-pulse">
            <div className="text-6xl font-orbitron font-bold gradient-text">🎉 EASTER EGG! 🎉</div>
            <div className="text-2xl text-white">Você descobriu o código secreto da XDelux!</div>
            <div className="text-lg text-gray-300">Parabéns, desenvolvedor curioso! 🚀</div>
          </div>
        </div>
      )}

      {/* Click Counter Easter Egg */}
      <div
        className="fixed top-4 left-4 z-40 cursor-pointer"
        onClick={handleLogoClick}
        title="Clique 10 vezes para uma surpresa!"
      >
        <div className="opacity-0 hover:opacity-100 transition-opacity">
          <Zap className="h-6 w-6 text-cyan-400" />
        </div>
      </div>

      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-40 animate-ping"
          style={{
            left: particle.x,
            top: particle.y,
            animationDuration: "2s",
          }}
        >
          {Math.random() > 0.5 ? (
            <Star className="h-6 w-6 text-yellow-400" />
          ) : (
            <Sparkles className="h-6 w-6 text-blue-400" />
          )}
        </div>
      ))}

      {/* Hidden Message in Footer */}
      <div className="fixed bottom-0 left-0 opacity-0 hover:opacity-100 transition-opacity p-2 text-xs text-gray-500">
        Desenvolvido com amor pela equipe XDelux
      </div>

      {/* Secret Hover Area */}
      <div
        className="fixed bottom-4 right-4 w-8 h-8 opacity-0 hover:opacity-100 transition-opacity cursor-pointer group"
        title="Área secreta!"
      >
        <Heart className="h-8 w-8 text-red-500 group-hover:animate-bounce" />
        <div className="absolute -top-12 -left-20 bg-black/80 text-white text-xs p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          Feito com amor! 💖
        </div>
      </div>
    </>
  )
}
