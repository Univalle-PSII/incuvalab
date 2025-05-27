import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

import { Button } from "@/componentsForV0/ui/button"
import { Input } from "@/componentsForV0/ui/input"
import { Textarea } from "@/componentsForV0/ui/textarea"
import { Label } from "@/componentsForV0/ui/label"
import { RadioGroup, RadioGroupItem } from "@/componentsForV0/ui/radio-group"
import { Card, CardContent } from "@/componentsForV0/ui/card"
import Navbar from "@/componentsForV0/navbar"
import Footer from "@/componentsForV0/footer"

export default function ContactoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#880043] to-[#4a8fa3]"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/3 translate-y-1/3"></div>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-16 bg-white"
            style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
          ></div>
          <div className="container max-w-7xl mx-auto px-4 relative z-10 py-24">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Contacto</h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Estamos aquí para responder tus preguntas y ayudarte a formar parte de nuestra comunidad de
                emprendedores.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <h2 className="text-3xl font-bold mb-8 text-[#880043]">Información de Contacto</h2>

                <Card className="border-none shadow-lg mb-8">
                  <CardContent className="p-8">
                    <div className="space-y-8">
                      <div className="flex items-start">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                          style={{ backgroundColor: "#66b5cb" }}
                        >
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">Ubicación</h3>
                          <p className="text-gray-700">
                            Campus Universitario Univalle
                            <br />
                            Tiquipaya
                            <br />
                            Cochabamba, Bolivia
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                          style={{ backgroundColor: "#880043" }}
                        >
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">Correo Electrónico</h3>
                          <p className="text-gray-700">
                            <a href="mailto:mbuitragos@univalle.edu" className="hover:text-[#880043]">
                              mbuitragos@univalle.edu
                            </a>
                            <br />
                            {/*<a href="mailto:programas@incuvalab.com" className="hover:text-[#880043]">
                              programas@incuvalab.com
                            </a>*/}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                          style={{ backgroundColor: "#8d8d8d" }}
                        >
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">Teléfono</h3>
                          <p className="text-gray-700">
                            Tel. 4318800 Int.1120
                            <br />
                            {/*+591 71234567 (WhatsApp)*/}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                          style={{ backgroundColor: "#66b5cb" }}
                        >
                          <Clock className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">Horario de Atención</h3>
                          <p className="text-gray-700">
                            Lunes a Viernes: 8:00 AM - 5:00 PM     
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h3 className="text-xl font-bold mb-4 text-[#880043]">Síguenos en Redes Sociales</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-[#880043]/10 hover:bg-[#880043] text-[#880043] hover:text-white transition-colors"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-[#66b5cb]/10 hover:bg-[#66b5cb] text-[#66b5cb] hover:text-white transition-colors"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-[#8d8d8d]/10 hover:bg-[#8d8d8d] text-[#8d8d8d] hover:text-white transition-colors"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-[#880043]/10 hover:bg-[#880043] text-[#880043] hover:text-white transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-8 text-[#880043]">Envíanos un Mensaje</h2>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="nombre" className="text-base">
                            Nombre
                          </Label>
                          <Input id="nombre" placeholder="Tu nombre" className="h-12" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="apellido" className="text-base">
                            Apellido
                          </Label>
                          <Input id="apellido" placeholder="Tu apellido" className="h-12" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-base">
                          Correo Electrónico
                        </Label>
                        <Input id="email" type="email" placeholder="tu@email.com" className="h-12" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="telefono" className="text-base">
                          Teléfono
                        </Label>
                        <Input id="telefono" placeholder="+591 XXXX" className="h-12" />
                      </div>

                      <div className="space-y-3">
                        <Label className="text-base">Motivo de Contacto</Label>
                        <RadioGroup defaultValue="informacion" className="grid grid-cols-2 gap-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="informacion" id="informacion" />
                            <Label htmlFor="informacion">Información General</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="programas" id="programas" />
                            <Label htmlFor="programas">Programas</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="alianzas" id="alianzas" />
                            <Label htmlFor="alianzas">Alianzas</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="otro" id="otro" />
                            <Label htmlFor="otro">Otro</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="mensaje" className="text-base">
                          Mensaje
                        </Label>
                        <Textarea id="mensaje" placeholder="Escribe tu mensaje aquí..." rows={5} />
                      </div>

                      <Button type="submit" className="w-full bg-[#880043] text-white hover:bg-[#880043]/90 h-12 text-base">
                        <Send className="mr-2 h-5 w-5" />
                        Enviar Mensaje
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#880043]">Nuestra Ubicación</h2>
              <p className="text-lg text-gray-700">
                Estamos ubicados en el Campus Universitario de Univalle, Tiquipaya, Cochabamba, Bolivia.
              </p>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <img
                src="/images/campusAmplio.png"
                alt="Mapa de Ubicación"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}