"use client"

import { useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { Float, Sphere, Box, Torus } from "@react-three/drei"

function FloatingShape({
  position,
  color,
  shape,
}: { position: [number, number, number]; color: string; shape: "sphere" | "box" | "torus" }) {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        {shape === "sphere" && <Sphere args={[0.5, 32, 32]} />}
        {shape === "box" && <Box args={[0.8, 0.8, 0.8]} />}
        {shape === "torus" && <Torus args={[0.6, 0.2, 16, 100]} />}
        <meshStandardMaterial color={color} transparent opacity={0.6} />
      </mesh>
    </Float>
  )
}

export function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        <FloatingShape position={[-3, 2, -2]} color="#3b82f6" shape="sphere" />
        <FloatingShape position={[3, -1, -1]} color="#8b5cf6" shape="box" />
        <FloatingShape position={[0, 3, -3]} color="#06b6d4" shape="torus" />
        <FloatingShape position={[-2, -2, -2]} color="#10b981" shape="sphere" />
        <FloatingShape position={[2, 1, -1]} color="#f59e0b" shape="box" />

        {/* Elemento que segue o mouse */}
        <Float speed={2} rotationIntensity={2} floatIntensity={1}>
          <mesh position={[mousePosition.x * 2, mousePosition.y * 2, 0]}>
            <Sphere args={[0.3, 16, 16]} />
            <meshStandardMaterial color="#ec4899" transparent opacity={0.4} />
          </mesh>
        </Float>
      </Canvas>
    </div>
  )
}
