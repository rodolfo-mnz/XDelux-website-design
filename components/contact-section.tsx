"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contato@xdelux.com",
    description: "Resposta em até 2 horas",
  },
  {
    icon: Phone,
    title: "Telefone",
    value: "+55 (11) 9999-9999",
    description: "Seg-Sex, 9h às 18h",
  },
  {
    icon: MapPin,
    title: "Localização",
    value: "São Paulo, SP",
    description: "Atendimento remoto",
  },
  {
    icon: Clock,
    title: "Horário",
    value: "24/7 Online",
    description: "Suporte sempre disponível",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simular envio do formulário
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 text-cyan-600 dark:text-cyan-400 border-cyan-600 dark:border-cyan-400"
          >
            Contato
          </Badge>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6">
            Vamos <span className="gradient-text">Conversar</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Pronto para transformar sua ideia em realidade? Entre em contato conosco e vamos discutir seu próximo
            projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-orbitron font-bold mb-6 text-gray-800 dark:text-white">Entre em Contato</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Nossa equipe está sempre pronta para ajudar. Escolha a forma de contato que preferir e responderemos o
                mais rápido possível.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <Card key={index} className="glass-effect hover:neon-glow transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-orbitron font-bold text-gray-800 dark:text-white mb-1">{info.title}</h4>
                          <p className="text-blue-600 dark:text-cyan-400 font-medium mb-1">{info.value}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <Card className="glass-effect">
              <CardContent className="p-6">
                <h4 className="font-orbitron font-bold text-gray-800 dark:text-white mb-4">
                  Por que escolher a XDelux?
                </h4>
                <ul className="space-y-3">
                  {[
                    "Consultoria gratuita para seu projeto",
                    "Orçamento transparente e sem surpresas",
                    "Equipe especializada e experiente",
                    "Suporte contínuo pós-entrega",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Formulário de Contato */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="text-2xl font-orbitron">Envie sua Mensagem</CardTitle>
              <CardDescription>Preencha o formulário abaixo e entraremos em contato em breve.</CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-orbitron font-bold text-gray-800 dark:text-white mb-2">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">Obrigado pelo contato. Responderemos em breve!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="glass-effect"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="glass-effect"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="glass-effect"
                      placeholder="Nome da sua empresa (opcional)"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="glass-effect"
                      placeholder="Conte-nos sobre seu projeto..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensagem
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
