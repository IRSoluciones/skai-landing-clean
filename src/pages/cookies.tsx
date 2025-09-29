import Head from "next/head";
import Link from "next/link";
import { Button } from "@components/ui/button";
import { Cookie, Layers, Clock, ArrowLeft } from "lucide-react";

export default function Cookies() {
  return (
    <main className="container prose prose-zinc max-w-3xl py-12">
      <Head>
        <title>Política de cookies – SKAI</title>
        <meta name="robots" content="noindex" />
      </Head>
      <h1 className="mb-2 text-center">Política de Cookies</h1>
      <p className="-mt-2 mb-8 text-center text-gray-600">Información sobre el uso de cookies en este sitio</p>

      <div className="rounded-2xl border bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2 font-semibold"><Cookie className="h-5 w-5" /> ¿Qué son las cookies?</div>
        <p className="mt-2 text-gray-700">Son pequeños archivos que el sitio instala en tu dispositivo para recordar preferencias, analizar el uso y, si lo aceptas, personalizar contenidos.</p>
      </div>
      <div className="mt-8 rounded-2xl border bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2 font-semibold"><Layers className="h-5 w-5" /> Tipos de cookies</div>
        <ul className="mt-2">
          <li><strong>Necesarias</strong>: imprescindibles para la navegación y la seguridad.</li>
          <li><strong>Analíticas</strong>: miden el uso y el rendimiento.</li>
          <li><strong>Marketing</strong>: personalizan anuncios en otros sitios.</li>
          <li><strong>Personalización</strong>: recuerdan tus preferencias.</li>
        </ul>
      </div>
      <div className="mt-8 rounded-2xl border bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2 font-semibold"><Clock className="h-5 w-5" /> Duración</div>
        <ul className="mt-2">
          <li><strong>Sesión</strong>: se eliminan al cerrar el navegador.</li>
          <li><strong>Persistentes</strong>: permanecen hasta su expiración o eliminación manual.</li>
        </ul>
      </div>
      <h2>Gestión y revocación</h2>
      <p>Puedes revocar el consentimiento en cualquier momento desde el botón de preferencias situado en la esquina inferior derecha o configurando tu navegador:</p>
      <ul>
        <li><strong>Chrome</strong>: Configuración → Privacidad y seguridad → Cookies</li>
        <li><strong>Firefox</strong>: Opciones → Privacidad y seguridad → Cookies</li>
        <li><strong>Safari</strong>: Preferencias → Privacidad → Cookies</li>
        <li><strong>Edge</strong>: Configuración → Cookies y permisos del sitio</li>
      </ul>
      <h2>Cookies de terceros</h2>
      <p>Podemos usar servicios de terceros (p. ej., analítica) que instalen sus propias cookies. En cada caso te informaremos y podrás optar por no activarlas.</p>
      <div className="mt-10 flex justify-center">
        <Button asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver al inicio
          </Link>
        </Button>
      </div>
    </main>
  );
}


