"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Crown } from "lucide-react"

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: "R$ 2.999",
    period: "/projeto",
    description: "Perfeito para pequenos projetos e startups",
    features: [
      "Desenvolvimento Web Básico",
      "Design Responsivo",
      "Suporte por 30 dias",
      "1 Revisão Gratuita",
      "Documentação Básica",
    ],
    popular: false,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Professional",
    icon: Star,
    price: "R$ 7.999",
    period: "/projeto",
    description: "Ideal para empresas em crescimento",
    features: [
      "Desenvolvimento Completo",
      "Integração com APIs",
      "Banco de Dados Otimizado",
      "Suporte por 90 dias",
      "3 Revisões Gratuitas",
      "Documentação Completa",
      "Treinamento da Equipe",
    ],
    popular: true,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: "Sob Consulta",
    period: "",
    description: "Soluções personalizadas para grandes empresas",
    features: [
      "Arquitetura Personalizada",
      "IA e Machine Learning",
      "Automação Avançada",
      "Suporte 24/7",
      "Revisões Ilimitadas",
      "Consultoria Estratégica",
      "SLA Garantido",
      "Equipe Dedicada",
    ],
    popular: false,
    color: "from-orange-500 to-red-500",
  },
]

export function PricingSection() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null)

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 text-green-600 dark:text-green-400 border-green-600 dark:border-green-400"
          >
            Preços
          </Badge>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6">
            Planos que <span className="gradient-text">Cabem</span> no seu Orçamento
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Escolha o plano ideal para o seu projeto. Todos incluem nossa garantia de qualidade e suporte especializado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer ${
                  plan.popular ? "ring-2 ring-purple-500 dark:ring-purple-400 neon-glow" : "glass-effect"
                } ${hoveredPlan === index ? "neon-glow" : ""}`}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-medium">
                    Mais Popular
                  </div>
                )}

                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-5`} />

                <CardHeader className={`relative ${plan.popular ? "pt-12" : "pt-6"}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${plan.color} flex items-center justify-center`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    {plan.popular && <Badge className="bg-purple-500 text-white">Recomendado</Badge>}
                  </div>

                  <CardTitle className="text-2xl font-orbitron">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">{plan.description}</CardDescription>

                  <div className="mt-4">
                    <div className="flex items-baseline">
                      <span className="text-3xl md:text-4xl font-orbitron font-bold gradient-text">{plan.price}</span>
                      {plan.period && <span className="text-gray-600 dark:text-gray-400 ml-1">{plan.period}</span>}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                    } text-white`}
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    {plan.price === "Sob Consulta" ? "Solicitar Orçamento" : "Começar Agora"}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">Precisa de algo personalizado? Vamos conversar!</p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="border-2 border-blue-600 dark:border-cyan-400 text-blue-600 dark:text-cyan-400 hover:bg-blue-600 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-black"
          >
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  )
}
