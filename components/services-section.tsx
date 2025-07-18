"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Zap, Brain, ArrowRight, CheckCircle } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Desenvolvimento de Software",
    description: "Soluções personalizadas para qualquer desafio tecnológico",
    features: ["Aplicações Web e Mobile", "Sistemas Empresariais", "APIs e Microserviços", "Arquitetura Escalável"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Database,
    title: "Gerenciamento de Dados",
    description: "Otimização e gestão inteligente de bancos de dados",
    features: ["PostgreSQL & MongoDB", "Data Analytics", "Backup Automatizado", "Performance Tuning"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Automação Inteligente",
    description: "Automatize processos e aumente a produtividade",
    features: [
      "RPA (Robotic Process Automation)",
      "Workflows Personalizados",
      "Integração de Sistemas",
      "Monitoramento 24/7",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description: "IA aplicada para resolver problemas complexos",
    features: ["Machine Learning", "Processamento de Linguagem Natural", "Computer Vision", "Análise Preditiva"],
    color: "from-orange-500 to-red-500",
  },
]

export function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 text-blue-600 dark:text-cyan-400 border-blue-600 dark:border-cyan-400"
          >
            Nossos Serviços
          </Badge>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6">
            <span className="gradient-text">Tecnologia</span> que Transforma
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Oferecemos soluções completas em tecnologia, desde desenvolvimento até implementação de IA avançada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer glass-effect ${
                  hoveredCard === index ? "neon-glow" : ""
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5`} />

                <CardHeader className="relative">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-orbitron">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="relative">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex items-center text-blue-600 dark:text-cyan-400 text-sm font-medium">
                    Saiba mais
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
