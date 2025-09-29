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
        Utilizamos cookies necesarias para el funcionamiento del sitio y, previo consentimiento, cookies analíticas, de marketing y personalización.
        Puedes cambiar tus preferencias en cualquier momento desde el banner de cookies o ajustando tu navegador.
      </p>
      <p>
        Referencia completa: {""}
        <Link href="https://www.solverkey.es/cookies" target="_blank" rel="noopener noreferrer">Política de cookies</Link>.
      </p>
    </main>
  );
}


