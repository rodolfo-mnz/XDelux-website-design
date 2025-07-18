"use client"

import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { PricingSection } from "@/components/pricing-section"
import { FloatingElements } from "@/components/floating-elements"
import { EasterEggs } from "@/components/easter-eggs"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <FloatingElements />
      <EasterEggs />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PricingSection />
      <ContactSection />
    </main>
  )
}
