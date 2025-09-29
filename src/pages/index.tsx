import Head from "next/head";
import { useMemo, useRef, useState } from "react";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { motion } from "framer-motion";
import FadeIn from "@components/visual/FadeIn";
import ParallaxGradient from "@components/visual/ParallaxGradient";
import MotionWaves from "@components/visual/MotionWaves";

const EVENT_PHONE = "+34XXXXXXXXX"; // Sustituye por el número real

export default function Home() {
  const formRef = useRef<HTMLDivElement | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const meta = useMemo(
    () => ({
      title:
        "Soy SKAI – Presentación y demos en vivo 23 de octubre de 2025",
      description:
        "Ven a conocer a SKAI y prueba en directo sus soluciones de IA corporativa.",
    }),
    []
  );

  const onScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSuccess(null);
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const company = String(form.get("company") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Tu nombre es obligatorio";
    if (!company) nextErrors.company = "La empresa es obligatoria";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email = "Email válido requerido";
    if (phone && !/^\+?[0-9\s-]{7,}$/.test(phone))
      nextErrors.phone = "Teléfono no válido";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      // Simular envío
      setTimeout(() => {
        setSuccess(
          "¡Listo! He reservado tu plaza. Te espero el 23 de octubre de 2025."
        );
        (e.currentTarget as HTMLFormElement).reset();
      }, 500);
    }
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero minimalista */}
        <section className="relative overflow-hidden">
          {/* fondo sutil + líneas espectrales a toda la sección */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_0%,rgba(27,20,100,0.05),transparent_60%),radial-gradient(50%_50%_at_100%_0%,rgba(219,73,94,0.06),transparent_55%)]" />
            <ParallaxGradient />
          </div>
          <div className="container pt-28 md:pt-36 pb-4 md:pb-6 relative z-10">
            <div className="grid items-start gap-10 relative z-10 md:grid-cols-12">
              <div className="max-w-3xl md:col-span-7">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl text-primary"
                >
                  Soy <span className="inline-flex translate-y-1 items-center align-baseline"><img src="/assets/skai-coral.svg" alt="SKAI" className="h-[1.1em] w-auto" /></span>. Ven a conocerme.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="mt-6 max-w-2xl text-xl text-gray-600"
                >
                  Soy el sistema de Inteligencia Artificial de <a href="https://solverkey.es" target="_blank" rel="noopener noreferrer" className="underline decoration-primary/30 underline-offset-4 hover:decoration-primary">Solverkey</a> (Circular Universe). Nací para que tu empresa opere mejor y más rápido, automatizando lo repetitivo y ofreciendo respuestas fiables con datos reales, 24/7. El <strong>jueves 23 de octubre de 2025, a las 10:30</strong> te enseñaré en directo cómo ya estoy ayudando a empresas como la tuya en atención al cliente, soporte L1 y operaciones.
                </motion.p>

                <FadeIn className="mt-8" delay={0.2}>
                  <div className="relative w-fit max-w-full overflow-hidden rounded-2xl bg-secondary text-white shadow-lg">
                    <div className="flex flex-col items-start gap-3 p-5 sm:flex-row sm:items-center">
                      <div>
                        <p className="text-lg font-semibold">¿Prefieres hablar conmigo ahora?</p>
                        <p className="text-white/90">Pulsa el botón y te atiendo al instante.</p>
                      </div>
                      <Button asChild className="bg-white text-secondary hover:bg-white/90">
                        <a href={`tel:${EVENT_PHONE}`} aria-label="Llamar ahora a SKAI" className="inline-flex items-center gap-2">
                          Llamar ahora a SKAI
                        </a>
                      </Button>
                    </div>
                  </div>
                </FadeIn>
              </div>
              {/* Formulario en hero */}
              <div className="md:col-span-5">
                <div ref={formRef}>
                  <FadeIn>
                  <Card className="border-gray-200/80 shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-xl">Reserva tu plaza gratuita</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid gap-3 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="name-hero">Nombre</Label>
                            <Input id="name-hero" name="name" placeholder="Tu nombre" />
                            {errors.name && (
                              <p className="text-sm text-red-600">{errors.name}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="company-hero">Empresa</Label>
                            <Input id="company-hero" name="company" placeholder="Tu empresa" />
                            {errors.company && (
                              <p className="text-sm text-red-600">{errors.company}</p>
                            )}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email-hero">Email</Label>
                          <Input id="email-hero" name="email" type="email" placeholder="tu@empresa.com" />
                          {errors.email && (
                            <p className="text-sm text-red-600">{errors.email}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone-hero">Teléfono (opcional)</Label>
                          <Input id="phone-hero" name="phone" type="tel" placeholder="+34 6XX XX XX XX" />
                          {errors.phone && (
                            <p className="text-sm text-red-600">{errors.phone}</p>
                          )}
                        </div>
                        <Button type="submit" className="w-full">
                          Quiero conocerte, SKAI
                        </Button>
                        {success && (
                          <p className="text-center text-sm font-medium text-primary">
                            {success}
                          </p>
                        )}
                      </form>
                    </CardContent>
                  </Card>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* Separador con ondas (Motion) entre hero y contenido */}
        <section aria-hidden className="relative -mt-2 md:-mt-3 h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
          <MotionWaves className="opacity-50" center={0.72} heightPct={1.0} strokeWidth={5.4} speed={0.5} />
        </section>

        {/* Sobre el evento + Itinerario (dos columnas) */}
        <section className="container py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-2">
            <FadeIn>
            <Card className="border-gray-200/70">
              <CardHeader>
                <CardTitle className="text-2xl">Sobre el evento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Hola, soy SKAI. El <strong>jueves 23 de octubre de 2025</strong> quiero presentarte todo lo que sé hacer: asistentes virtuales, automatizaciones, análisis predictivo… soluciones de IA que ya funcionan en entornos corporativos. Podrás hacerme preguntas, probarme en directo y descubrir cómo puedo integrarme en tu empresa.
                </p>
              </CardContent>
            </Card>
            </FadeIn>

            <FadeIn delay={0.1}>
            <Card className="border-gray-200/70">
              <CardContent className="p-6">
                <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                  {[
                    { time: "10:30", text: "Bienvenida" },
                    { time: "11:00", text: "Presentación de SKAI" },
                    { time: "12:30", text: "Demos reales" },
                    { time: "13:30", text: "Almuerzo & Networking" },
                  ].map((item) => (
                    <li
                      key={item.time}
                      className="rounded-lg border bg-white p-5 shadow-sm"
                    >
                      <p className="text-sm font-semibold text-primary">
                        {item.time}
                      </p>
                      <p className="mt-1 text-gray-800">{item.text}</p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
            </FadeIn>
          </div>
        </section>

        {/* Tipos de empresas */}
        <section className="container pt-6 md:pt-6 pb-16 md:pb-24">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight">¿Qué tipo de empresas pueden trabajar con SKAI?</h2>
            <p className="mt-3 max-w-3xl text-gray-600">
              SKAI se integra en tus canales y procesos para automatizar tareas repetitivas y ofrecer respuestas inmediatas 24/7. Estos ejemplos ayudan a ver dónde encaja mejor:
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Atención al cliente con alto volumen",
                bullets: [
                  "Centralitas y contact centers",
                  "Respuestas a preguntas frecuentes",
                  "Enrutado inteligente y recogida de datos",
                ],
              },
              {
                title: "Soporte técnico de nivel 1 (horario ampliado)",
                bullets: [
                  "Resolución de incidencias básicas",
                  "Guías paso a paso para usuarios",
                  "Escalado al equipo humano con contexto",
                ],
              },
              {
                title: "Equipos comerciales y captación de leads",
                bullets: [
                  "Cualificación automática de oportunidades",
                  "Agenda de llamadas y demos",
                  "Seguimiento proactivo por email o WhatsApp",
                ],
              },
              {
                title: "Operaciones y backoffice repetitivos",
                bullets: [
                  "Altas, pedidos y facturas",
                  "Conciliación de datos y recordatorios",
                  "Actualización de CRM y ERP",
                ],
              },
              {
                title: "Logística y servicios de campo",
                bullets: [
                  "Seguimiento de envíos y citas de entrega",
                  "Información de estado en tiempo real",
                  "Gestión de incidencias recurrentes",
                ],
              },
              {
                title: "Personas y RR. HH.",
                bullets: [
                  "Preguntas frecuentes de empleados",
                  "Selección inicial de candidatos",
                  "Onboarding y formación básica",
                ],
              },
            ].map((card, idx) => (
              <FadeIn key={card.title} delay={0.05 * idx}>
                <Card className="h-full border-gray-200/70">
                  <CardHeader>
                    <CardTitle className="text-xl">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1.5">
                      {card.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* CTA final: Llamada + Reserva tu plaza (última sección) */}
        <section id="reserva" className="container pb-24 pt-6">
          <div className="grid items-stretch gap-8 lg:grid-cols-2">
            <FadeIn>
              <Card className="h-full border-gray-200/70">
                <CardHeader>
                  <CardTitle className="text-2xl">Reserva tu plaza gratuita</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name-final">Nombre</Label>
                        <Input id="name-final" name="name" placeholder="Tu nombre" />
                        {errors.name && (
                          <p className="text-sm text-red-600">{errors.name}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company-final">Empresa</Label>
                        <Input id="company-final" name="company" placeholder="Tu empresa" />
                        {errors.company && (
                          <p className="text-sm text-red-600">{errors.company}</p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email-final">Email</Label>
                      <Input id="email-final" name="email" type="email" placeholder="tu@empresa.com" />
                      {errors.email && (
                        <p className="text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone-final">Teléfono (opcional)</Label>
                      <Input id="phone-final" name="phone" type="tel" placeholder="+34 6XX XX XX XX" />
                      {errors.phone && (
                        <p className="text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>
                    <Button type="submit" className="w-full">
                      Quiero conocerte, SKAI
                    </Button>
                    {success && (
                      <p className="text-center text-sm font-medium text-primary">
                        {success}
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.05}>
              <Card className="h-full overflow-hidden border-0 bg-secondary text-white shadow-lg">
                <CardContent className="flex h-full flex-col justify-between p-8">
                  <div>
                    <h3 className="text-2xl font-semibold">Llamada directa</h3>
                    <p className="mt-2 text-white/90">
                      ¿Prefieres hablar conmigo ahora mismo? Pulsa el botón para llamarme y te atiendo al instante.
                    </p>
                  </div>
                  <div className="mt-8">
                    <Button asChild className="w-full bg-white text-secondary hover:bg-white/90">
                      <a href={`tel:${EVENT_PHONE}`}>Llamar ahora a SKAI</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </section>

        {/* Disclaimer fijo estilo "cristal" */}
        <div aria-hidden className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 pointer-events-none">
          <div className="pointer-events-auto rounded-full border border-white/50 bg-white/50 px-3.5 py-2 text-xs text-gray-700 shadow-md backdrop-blur-md supports-[backdrop-filter]:bg-white/40 md:text-sm md:px-4 md:py-2.5">
            Este sitio web ha sido desarrollado junto a <strong>SKAI</strong>.
          </div>
        </div>
      </main>
    </>
  );
}

