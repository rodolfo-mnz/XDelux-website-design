"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Users, Award, Rocket } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Democratizar o acesso à tecnologia avançada, oferecendo soluções inovadoras que impulsionam o crescimento dos nossos clientes.",
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser referência global em soluções tecnológicas inteligentes, transformando ideias em realidade através da inovação contínua.",
  },
  {
    icon: Heart,
    title: "Valores",
    description:
      "Excelência, transparência, inovação e compromisso com o sucesso dos nossos clientes são os pilares que guiam cada projeto.",
  },
]

const stats = [
  { icon: Users, number: "50+", label: "Especialistas" },
  { icon: Award, number: "100+", label: "Projetos" },
  { icon: Rocket, number: "5+", label: "Anos de Experiência" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 text-purple-600 dark:text-purple-400 border-purple-600 dark:border-purple-400"
          >
            Sobre Nós
          </Badge>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6">
            Quem é a <span className="gradient-text">XDelux</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Somos uma startup apaixonada por tecnologia, dedicada a criar soluções que fazem a diferença no mundo
            digital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-gray-800 dark:text-white">
              Inovação é o nosso DNA
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Fundada por uma equipe de desenvolvedores experientes e visionários, a XDelux nasceu da necessidade de
              oferecer soluções tecnológicas verdadeiramente inovadoras e acessíveis.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Combinamos expertise técnica com criatividade para entregar projetos que não apenas atendem às
              necessidades atuais, mas antecipam as demandas futuras dos nossos clientes.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <Icon className="h-8 w-8 mx-auto mb-2 text-blue-600 dark:text-cyan-400" />
                    <div className="text-2xl font-orbitron font-bold gradient-text">{stat.number}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl" />
            <div className="relative bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-white/10">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Sistema Online</span>
                </div>
                <div className="text-2xl font-orbitron font-bold gradient-text">XDelux AI Engine</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">Processando 1.2M+ operações por segundo</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Performance</span>
                    <span>98.7%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full w-[98.7%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card key={index} className="glass-effect hover:neon-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-orbitron font-bold mb-3 text-gray-800 dark:text-white">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
