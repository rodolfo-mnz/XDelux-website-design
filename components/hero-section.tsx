"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full blur-2xl"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Sparkles className="h-6 w-6 text-cyan-400 animate-pulse" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Inovação em Software
              </span>
              <Sparkles className="h-6 w-6 text-blue-400 animate-pulse" />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold leading-tight">
              <span className="gradient-text">XDelux</span>
              <br />
              <span className="text-gray-800 dark:text-white">Soluções do Futuro</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transformamos ideias em realidade através de software inteligente, automação avançada e inteligência
              artificial de ponta.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToServices}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full neon-glow group"
            >
              Descobrir Soluções
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-blue-600 dark:border-cyan-400 text-blue-600 dark:text-cyan-400 hover:bg-blue-600 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-black px-8 py-3 rounded-full"
            >
              Falar Conosco
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            {[
              { number: "100+", label: "Projetos Entregues" },
              { number: "50+", label: "Clientes Satisfeitos" },
              { number: "24/7", label: "Suporte Técnico" },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-orbitron font-bold gradient-text">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
