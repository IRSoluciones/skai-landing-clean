import Head from "next/head";
import Link from "next/link";

export default function PoliticaPrivacidad() {
  return (
    <main className="container prose prose-zinc max-w-3xl py-12">
      <Head>
        <title>Política de Privacidad – SKAI</title>
        <meta name="robots" content="noindex" />
      </Head>
      <h1>Política de privacidad</h1>
      <p>
        SOLVER KEY IBERIA, S.L. (SOLVERKEY) es responsable del tratamiento. Finalidades: gestionar solicitudes de información, registro a eventos, comunicaciones informativas y administración de este sitio. Bases jurídicas: consentimiento, ejecución de medidas precontractuales/contractuales e interés legítimo (mejora de servicios y seguridad).
      </p>
      <h2>Conservación</h2>
      <p>Los datos se conservarán mientras dure la relación, exista obligación legal o el usuario no revoque su consentimiento.</p>
      <h2>Destinatarios</h2>
      <p>
        Podrán existir encargados de tratamiento (proveedores tecnológicos y analítica). No se prevén transferencias internacionales fuera del EEE sin garantías adecuadas.
      </p>
      <p>
        Derechos: acceso, rectificación, supresión, oposición, limitación y portabilidad en <a href="mailto:privacidad@solverkey.es">privacidad@solverkey.es</a>. Más información y texto completo en: {""}
        <Link href="https://www.solverkey.es/politica-de-privacidad" target="_blank" rel="noopener noreferrer">Política de privacidad</Link>.
      </p>
    </main>
  );
}


