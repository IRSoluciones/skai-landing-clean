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

      <h2>Información de la empresa</h2>
      <ul>
        <li><strong>Razón social</strong>: SOLVER KEY IBERIA, S.L. ("SOLVERKEY")</li>
        <li><strong>CIF</strong>: B05469069</li>
        <li><strong>Domicilio social</strong>: Calle Valdegastea nº 2, 26007, Logroño (La Rioja), España</li>
        <li><strong>Teléfono</strong>: 941 540 540</li>
        <li><strong>Email</strong>: <a href="mailto:info@solverkey.es">info@solverkey.es</a></li>
        <li><strong>Registro mercantil</strong>: Registro Mercantil de La Rioja, Tomo 872, Libro 0, Folio 86, Sección 8, Hoja: LO-19381, Inscripción 1</li>
      </ul>

      <h2>Objeto y aceptación</h2>
      <p>
        El presente Aviso Legal regula el acceso y uso del sitio. La navegación implica la aceptación plena de las condiciones aquí expuestas. El usuario se obliga a utilizar el sitio conforme a la ley, la buena fe, el orden público y las presentes condiciones.
      </p>

      <h2>Condiciones de uso del sitio</h2>
      <ul>
        <li>No difundir contenidos ilícitos, violentos, difamatorios, discriminatorios o contrarios a la ley.</li>
        <li>No introducir malware ni realizar acciones que puedan alterar o dañar sistemas propios o de terceros.</li>
        <li>No vulnerar derechos de propiedad intelectual o industrial, ni la confidencialidad de la información.</li>
        <li>No suplantar identidades ni intentar acceder a áreas restringidas sin autorización.</li>
        <li>El establecimiento de hiperenlaces no implica relación con SOLVERKEY ni aprobación de los contenidos enlazados.</li>
      </ul>

      <h2>Propiedad intelectual e industrial</h2>
      <p>
        Todos los contenidos del sitio (textos, imágenes, diseño, código, logotipos, marcas) son titularidad de SOLVERKEY o de terceros licenciantes. No se ceden derechos de explotación más allá de lo estrictamente necesario para la navegación y uso del sitio.
      </p>

      <h2>Exclusión de garantías y responsabilidad</h2>
      <p>
        El sitio se ofrece «tal cual». SOLVERKEY no garantiza la inexistencia de errores, interrupciones o virus, ni la actualización o exactitud de los contenidos, y no será responsable de los daños derivados del uso o imposibilidad de uso del sitio, dentro de los límites legalmente permitidos.
      </p>

      <h2>Servicios y precios</h2>
      <p>
        La información sobre servicios puede variar sin previo aviso. Cualquier contratación se regirá por sus condiciones específicas.
      </p>

      <h2>Legislación aplicable y jurisdicción</h2>
      <p>
        Este Aviso Legal se rige por la legislación española. Para cualquier controversia serán competentes los Juzgados y Tribunales de Logroño (España), salvo normativa imperativa en contrario.
      </p>

      <h2>Modificaciones</h2>
      <p>
        SOLVERKEY se reserva el derecho a modificar, en cualquier momento y sin aviso, la presentación, configuración y contenidos del sitio, así como este Aviso Legal.
      </p>

      <h2>Contacto</h2>
      <p>
        Para cualquier consulta relacionada con este Aviso Legal puede escribir a <a href="mailto:info@solverkey.es">info@solverkey.es</a>.
      </p>

      <p className="text-sm text-gray-500">Referencia: <Link href="http://solverkey.es/aviso-legal" target="_blank" rel="noopener noreferrer">solverkey.es/aviso-legal</Link>. Ejemplo de estructura legal consultado: <Link href="https://logro-vtc.vercel.app/aviso-legal" target="_blank" rel="noopener noreferrer">logro-vtc.vercel.app/aviso-legal</Link>.</p>
      <p className="text-xs text-gray-500">Última actualización: {new Date().toLocaleDateString()}</p>
    </main>
  );
}


