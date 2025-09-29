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
        SOLVER KEY IBERIA, S.L. (SOLVERKEY) es responsable del tratamiento. Finalidades principales: atención de solicitudes, contacto comercial, inscripción a jornadas y comunicaciones informativas. Base jurídica: consentimiento del interesado y ejecución de relación precontractual/contractual.
      </p>
      <p>
        Derechos: acceso, rectificación, supresión, oposición, limitación y portabilidad en <a href="mailto:privacidad@solverkey.es">privacidad@solverkey.es</a>. Más información y texto completo en: {""}
        <Link href="https://www.solverkey.es/politica-de-privacidad" target="_blank" rel="noopener noreferrer">Política de privacidad</Link>.
      </p>
    </main>
  );
}


