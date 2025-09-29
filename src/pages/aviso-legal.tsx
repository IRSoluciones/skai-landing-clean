import Head from "next/head";
import Link from "next/link";

export default function AvisoLegal() {
  return (
    <main className="container prose prose-zinc max-w-3xl py-12">
      <Head>
        <title>Aviso Legal – SKAI</title>
        <meta name="robots" content="noindex" />
      </Head>
      <h1>Aviso Legal</h1>
      <p>
        Este sitio es operado por SOLVER KEY IBERIA, S.L. ("SOLVERKEY"). CIF: B05469069. Domicilio: Calle
        Valdegastea nº 2, 26007, Logroño (La Rioja). Contacto: 941 540 540, <a href="mailto:info@solverkey.es">info@solverkey.es</a>.
      </p>
      <p>
        La navegación implica la aceptación de este aviso legal. El usuario se compromete a hacer un uso adecuado del sitio y a no realizar actividades
        ilícitas o contrarias al orden público, conforme a lo establecido por la legislación española.
      </p>
      <h2>Condiciones de acceso y uso</h2>
      <p>
        El acceso es libre y gratuito. El usuario se compromete a no difundir contenidos ilícitos; no introducir malware; no vulnerar derechos de terceros; ni intentar acceder a áreas restringidas. El establecimiento de hiperenlaces no implica relación alguna con SOLVERKEY.
      </p>
      <h2>Propiedad intelectual</h2>
      <p>
        Los contenidos de este sitio (textos, imágenes, diseño y código) pertenecen a SOLVERKEY o a sus licenciantes. No se ceden derechos de explotación más allá de lo
        estrictamente necesario para el uso del sitio.
      </p>
      <h2>Exclusión de garantías</h2>
      <p>
        El contenido es informativo y puede no estar actualizado. SOLVERKEY no se responsabiliza de daños derivados del acceso o uso del sitio ni de los contenidos enlazados. La legislación aplicable es la española; jurisdicción, Juzgados y Tribunales de Logroño (España).
      </p>
      <p>
        Para más detalle, consulta el texto completo de referencia: {""}
        <Link href="http://solverkey.es/aviso-legal" target="_blank" rel="noopener noreferrer">Aviso legal en solverkey.es</Link>.
      </p>
    </main>
  );
}


