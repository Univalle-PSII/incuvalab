"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Users, LightbulbIcon, Trophy, Sparkles, Handshake, DollarSign, ArrowRight, ChevronRight } from "lucide-react"

import { Button } from "@/componentsForV0/ui/Button"
import { Input } from "@/componentsForV0/ui/Input"
import { cn } from "@/lib/utils" 
import { Card, CardContent } from "@/componentsForV0/ui/card"
import { Badge } from "@/componentsForV0/ui/badge"
import Navbar from "@/componentsForV0/navbar"
import Footer from "@/componentsForV0/footer"
import CountUp from "@/componentsForV0/count-up"

export default function Home() {
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsVisible(entry.isIntersecting)
          },
          { threshold: 0.1 },
        )
    
        const statsSection = document.getElementById("stats-section")
        if (statsSection) {
          observer.observe(statsSection)
        }
    
        return () => {
          if (statsSection) {
            observer.unobserve(statsSection)
          }
        }
      }, [])
    
      // Programas data
      const programas = [
        {
          id: "mentoring",
          title: "Mentoring",
          description:
            "Conectamos emprendedores con mentores experimentados que brindan orientación personalizada para superar desafíos y potenciar el crecimiento.",
          icon: <Users className="h-6 w-6" />,
          color: "#66b5cb",
          features: [
            "Sesiones personalizadas con expertos",
            "Seguimiento continuo de progreso",
            "Acceso a red de mentores especializados",
            "Feedback estratégico para tu negocio",
          ],
        },
        {
          id: "learning",
          title: "Learning",
          description:
            "Talleres y cursos especializados para desarrollar habilidades empresariales, técnicas y blandas necesarias para el éxito.",
          icon: <LightbulbIcon className="h-6 w-6" />,
          color: "#880043",
          features: [
            "Workshops prácticos con expertos",
            "Certificaciones reconocidas",
            "Contenido actualizado constantemente",
            "Networking con otros participantes",
          ],
        },
        {
          id: "inspiring",
          title: "Inspiring",
          description:
            "Eventos y charlas inspiradoras con emprendedores exitosos que comparten sus experiencias, desafíos y aprendizajes.",
          icon: <Sparkles className="h-6 w-6" />,
          color: "#66b5cb",
          features: [
            "Conferencias con líderes de la industria",
            "Historias de éxito y superación",
            "Oportunidades de networking",
            "Inspiración para tu camino emprendedor",
          ],
        },
        {
          id: "challenger",
          title: "Challenger",
          description:
            "Competencias y desafíos que impulsan la innovación y premian las mejores soluciones a problemas reales.",
          icon: <Trophy className="h-6 w-6" />,
          color: "#8d8d8d",
          features: [
            "Hackathons y competencias de innovación",
            "Premios y reconocimientos",
            "Feedback de jurados expertos",
            "Exposición ante inversionistas",
          ],
        },
        {
          id: "partners",
          title: "Partners",
          description:
            "Alianzas estratégicas con empresas, instituciones académicas y organizaciones que potencian el ecosistema emprendedor.",
          icon: <Handshake className="h-6 w-6" />,
          color: "#880043",
          features: [
            "Colaboraciones con empresas líderes",
            "Acceso a recursos exclusivos",
            "Oportunidades de co-creación",
            "Pruebas de concepto en entornos reales",
          ],
        },
        {
          id: "revenue",
          title: "Revenue",
          description:
            "Apoyo en la captación de inversión, acceso a financiamiento y desarrollo de modelos de negocio sostenibles.",
          icon: <DollarSign className="h-6 w-6" />,
          color: "#8d8d8d",
          features: [
            "Preparación para rondas de inversión",
            "Conexión con inversionistas",
            "Estrategias de monetización",
            "Gestión financiera para startups",
          ],
        },
      ]
    
      const stats = [
        { number: 150, label: "Emprendimientos Apoyados", suffix: "+" },
        { number: 50, label: "Mentores Especializados", suffix: "+" },
        { number: 25, label: "Alianzas Estratégicas", suffix: "+" },
        { number: 10, label: "Años de Experiencia", suffix: "+" },
      ]
    
      const testimonials = [
        {
          quote:
            "IncuvaLab transformó mi idea en un negocio rentable. El apoyo de los mentores fue fundamental para superar los obstáculos iniciales.",
          author: "María Gómez",
          company: "Fundadora de EcoBolivia",
          image: "/placeholder.svg?height=80&width=80&text=MG",
        },
        {
          quote:
            "Los programas de capacitación me dieron las herramientas necesarias para escalar mi startup y atraer inversión internacional.",
          author: "Carlos Mendoza",
          company: "CEO de TechPaz",
          image: "/placeholder.svg?height=80&width=80&text=CM",
        },
        {
          quote:
            "Gracias a la red de contactos de IncuvaLab, pudimos establecer alianzas clave que impulsaron nuestro crecimiento en toda la región.",
          author: "Laura Flores",
          company: "Co-fundadora de AgroInnova",
          image: "/placeholder.svg?height=80&width=80&text=LF",
        },
      ]
    
      const events = [
        {
          title: "Demo Day 2025",
          date: "15 Abril, 2025",
          description: "Presentación de startups finalistas del programa de aceleración ante inversionistas y partners.",
          image: "/placeholder.svg?height=200&width=300&text=Demo Day",
          category: "Evento",
        },
        {
          title: "Lanzamiento del Programa de Aceleración",
          date: "10 Mayo, 2025",
          description: "Nueva convocatoria para startups tecnológicas con enfoque en sostenibilidad.",
          image: "/placeholder.svg?height=200&width=300&text=Lanzamiento",
          category: "Noticia",
        },
        {
          title: "Workshop: Finanzas para Startups",
          date: "22 Mayo, 2025",
          description: "Taller práctico sobre gestión financiera y captación de inversión para emprendedores.",
          image: "/placeholder.svg?height=200&width=300&text=Workshop",
          category: "Taller",
        },
      ]
    
      const partners = [
        { name: "Univalle", logo: "/images/univalle-logo.png" },
        { name: "Partner 1", logo: "/placeholder.svg?height=80&width=160&text=Partner 1" },
        { name: "Partner 2", logo: "/placeholder.svg?height=80&width=160&text=Partner 2" },
        { name: "Partner 3", logo: "/placeholder.svg?height=80&width=160&text=Partner 3" },
        { name: "Partner 4", logo: "/placeholder.svg?height=80&width=160&text=Partner 4" },
      ]
    return (
        <div className="flex min-h-screen flex-col bg-white font-sans">
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-r from-[#880043] to-[#4a8fa3]">
          {/* Wave shape at bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path
                d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                  Transformando <span className="text-[#66b5cb]">Ideas</span> en{" "}
                  <span className="text-[#f8c630]">Impacto</span>
                </h1>
                <p className="font-body text-xl md:text-2xl mb-8 text-white/90 max-w-xl">
                  Potenciamos el ecosistema emprendedor boliviano con programas de innovación, mentoría y
                  financiamiento.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-white text-[#880043] hover:bg-white/90 text-lg px-8 h-14">
                    Postula Ahora
                  </Button>
                </div>
                <div className="mt-12 flex items-center">
                  <p className="text-sm text-white/80 mr-3">Una iniciativa de</p>
                  <img
                    src="/images/univalle-logo.png"
                    alt="Univalle Logo"
                    width={120}
                    height={40}
                    className="h-8 w-auto brightness-0 invert"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#880043] to-[#66b5cb]"></div>
                  <div className="p-1">
                    <div className="relative h-[500px] rounded-2xl overflow-hidden">
                      <img
                        src="/placeholder.svg?height=500&width=600&text=Incuvalab"
                        alt="Incuvalab"
                        className="object-cover w-full h-full"
                        style={{ height: "500px", width: "100%" }}
                      />
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats-section" className="py-20 bg-white relative -mt-16 z-10 rounded-t-3xl shadow-lg">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="font-display text-5xl md:text-6xl font-bold text-[#880043] flex items-center justify-center">
                        <CountUp end={isVisible ? stat.number : 0} duration={2} />
                        <span>{stat.suffix}</span>
                      </div>
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#66b5cb]/30"></div>
                    </div>
                  </div>
                  <p className="font-body text-gray-600 mt-4 text-lg">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-slate-50">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 -translate-x-4 -translate-y-4 border-2 border-[#880043] rounded-3xl"></div>
                <div className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-[#66b5cb] rounded-3xl"></div>
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="/placeholder.svg?height=500&width=600&text=Equipo Incuvalab"
                    alt="Equipo Incuvalab"
                    className="object-cover w-full h-full"
                    style={{ height: "500px", width: "100%" }}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  Incubadora de <span className="text-[#880043]">Innovación</span> y{" "}
                  <span className="text-[#66b5cb]">Emprendimiento</span>
                </h2>
                <p className="font-body text-xl mb-6 text-gray-700 leading-relaxed">
                  En IncuvaLab, somos una incubadora de negocios comprometida con el desarrollo del ecosistema
                  emprendedor en Bolivia. Nuestra misión es potenciar el talento local y transformar ideas innovadoras
                  en empresas sostenibles.
                </p>
                <p className="font-body text-xl mb-8 text-gray-700 leading-relaxed">
                  A través de nuestros diversos programas, ofrecemos mentoría especializada, capacitación, networking y
                  acceso a financiamiento para emprendedores en diferentes etapas de desarrollo.
                </p>
                <a href="/quienes-somos">
                  <Button className="bg-[#880043] hover:bg-[#880043]/90 text-lg px-8 h-12">Conoce Más</Button>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Programas Section */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Impulsando el <span className="text-[#880043]">Ecosistema</span> Emprendedor
              </h2>
              <p className="font-body text-xl text-gray-700">
                Ofrecemos programas especializados para cada etapa del emprendimiento, desde la ideación hasta la
                expansión.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programas.map((programa, index) => (
                <motion.div
                  key={programa.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="h-24 flex items-center px-6" style={{ backgroundColor: programa.color }}>
                      <div className="flex items-center">
                        <div className="bg-white/20 p-3 rounded-lg mr-4">
                          <div className="text-white">{programa.icon}</div>
                        </div>
                        <h3 className="font-display text-2xl font-bold text-white">{programa.title}</h3>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="font-body text-gray-700 mb-6">{programa.description}</p>
                      <div className="space-y-2 mb-6">
                        {programa.features.slice(0, 2).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: programa.color }}></div>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <a
                        href={`/programas/${programa.id}`}
                        className="inline-flex items-center font-medium"
                        style={{ color: programa.color }}
                      >
                        Conocer más
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-16">
              <a href="/programas">
                <Button size="lg" className="bg-[#880043] hover:bg-[#880043]/90 text-lg px-8 h-14">
                  Ver Todos los Programas
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-slate-50 overflow-hidden">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Lo Que Dicen <span className="text-[#880043]">Nuestros</span> Emprendedores
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white shadow-lg border-none overflow-hidden">
                    <CardContent className="p-8 relative">
                      <div className="absolute top-4 right-4 text-6xl text-[#880043]/10 font-serif">"</div>
                      <p className="font-body text-lg text-gray-700 mb-8 relative z-10">{testimonial.quote}</p>
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full overflow-hidden">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.author}
                            width={48}
                            height={48}
                          />
                        </div>
                        <div>
                          <p className="font-display font-bold text-[#880043]">{testimonial.author}</p>
                          <p className="font-body text-sm text-gray-600">{testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* News & Events Section */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="font-display text-4xl font-bold text-gray-900">
                  Noticias y <span className="text-[#880043]">Eventos</span>
                </h2>
              </div>
              <a href="/eventos" className="font-medium text-[#880043] hover:underline flex items-center">
                Ver Todo <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-none shadow-lg overflow-hidden">
                    <div className="relative h-48">
                      <img src={event.image || "/placeholder.svg"} alt={event.title} className="object-cover w-full h-full" style={{ height: "100%", width: "100%" }} />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white text-[#880043] border-none shadow-md">{event.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="font-body text-sm text-[#66b5cb] font-medium mb-2">{event.date}</p>
                      <h3 className="font-display text-xl font-bold mb-2 line-clamp-2">{event.title}</h3>
                      <p className="font-body text-gray-700 mb-4 line-clamp-2">{event.description}</p>
                      <a href="#" className="font-medium text-[#880043] hover:underline flex items-center">
                        Leer más <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#880043] to-[#4a8fa3]"></div>
          <div className="absolute bottom-0 left-0 right-0 transform rotate-180">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path
                d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">¿Tienes una idea innovadora?</h2>
                <p className="font-body text-xl mb-10 text-white/90">
                  Únete a nuestra comunidad de emprendedores y transforma tu idea en una empresa exitosa con el apoyo de
                  IncuvaLab.
                </p>
                <Button size="lg" className="bg-white text-[#880043] hover:bg-white/90 text-lg px-8 h-14">
                  Postula Ahora
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Nuestros <span className="text-[#880043]">Aliados</span> Estratégicos
              </h2>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-40 h-20 relative grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img src={partner.logo || "/placeholder.svg"} alt={partner.name} className="object-contain w-full h-full" style={{ height: "100%", width: "100%" }} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
    </div>
    )
}