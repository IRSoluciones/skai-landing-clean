import Head from "next/head";
import Link from "next/link";

export default function Cookies() {
  return (
    <main className="container prose prose-zinc max-w-3xl py-12">
      <Head>
        <title>Política de cookies – SKAI</title>
        <meta name="robots" content="noindex" />
      </Head>
      <h1>Política de Cookies</h1>
      <p>Las cookies son pequeños archivos que el sitio instala en tu dispositivo. Sirven para recordar preferencias, analizar el uso y, en su caso, personalizar contenidos y anuncios.</p>
      <h2>Tipos de cookies</h2>
      <ul>
        <li><strong>Necesarias</strong>: imprescindibles para la navegación y la seguridad.</li>
        <li><strong>Analíticas</strong>: permiten medir el uso y rendimiento del sitio.</li>
        <li><strong>Marketing</strong>: personalizan anuncios en otros sitios.</li>
        <li><strong>Personalización</strong>: recuerdan tus preferencias.</li>
      </ul>
      <h2>Duración</h2>
      <ul>
        <li><strong>Sesión</strong>: se eliminan al cerrar el navegador.</li>
        <li><strong>Persistentes</strong>: permanecen hasta su fecha de expiración o eliminación manual.</li>
      </ul>
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
      <p>
        Referencias: <Link href="https://www.solverkey.es/cookies" target="_blank" rel="noopener noreferrer">solverkey.es/cookies</Link>. Ejemplo de estructura consultado: {""}
        <Link href="https://logro-vtc.vercel.app/politica-cookies" target="_blank" rel="noopener noreferrer">logro-vtc.vercel.app/politica-cookies</Link>.
      </p>
      <p className="text-xs text-gray-500">Última actualización: {new Date().toLocaleDateString()}</p>
    </main>
  );
}


