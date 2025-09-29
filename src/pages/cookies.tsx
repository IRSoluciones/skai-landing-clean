import Head from "next/head";
import Link from "next/link";

export default function Cookies() {
  return (
    <main className="container prose prose-zinc max-w-3xl py-12">
      <Head>
        <title>Política de cookies – SKAI</title>
        <meta name="robots" content="noindex" />
      </Head>
      <h1>Política de cookies</h1>
      <p>
        Utilizamos cookies necesarias para el funcionamiento del sitio y, previo consentimiento, cookies analíticas, de marketing y personalización. Puedes cambiar tus preferencias en cualquier momento desde el botón de «Preferencias» o en la configuración de tu navegador.
      </p>
      <h2>Tipos de cookies</h2>
      <ul>
        <li><strong>Necesarias</strong>: imprescindibles para la navegación y la seguridad.</li>
        <li><strong>Analíticas</strong>: permiten medir el uso y rendimiento del sitio.</li>
        <li><strong>Marketing</strong>: personalizan anuncios en otros sitios.</li>
        <li><strong>Personalización</strong>: recuerdan tus preferencias.</li>
      </ul>
      <h2>Gestión y revocación</h2>
      <p>Puedes revocar el consentimiento en cualquier momento desde el botón de preferencias situado en la esquina inferior derecha.</p>
      <p>
        Referencia completa: {""}
        <Link href="https://www.solverkey.es/cookies" target="_blank" rel="noopener noreferrer">Política de cookies</Link>.
      </p>
    </main>
  );
}


