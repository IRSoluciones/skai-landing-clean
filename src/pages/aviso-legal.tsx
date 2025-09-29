import Head from "next/head";
import Link from "next/link";
import { Button } from "@components/ui/button";
import { Shield, FileText, Scale, ArrowLeft } from "lucide-react";

export default function AvisoLegal() {
  return (
    <main className="container prose prose-zinc max-w-3xl py-12">
      <Head>
        <title>Aviso Legal – SKAI</title>
        <meta name="robots" content="noindex" />
      </Head>
      <h1 className="mb-2 text-center">Aviso Legal</h1>
      <p className="-mt-2 mb-8 text-center text-gray-600">Información legal y términos de uso</p>

      <h2>Información de la empresa</h2>
      <ul>
        <li><strong>Razón social</strong>: SOLVER KEY IBERIA, S.L. ("SOLVERKEY")</li>
        <li><strong>CIF</strong>: B05469069</li>
        <li><strong>Domicilio social</strong>: Calle Valdegastea nº 2, 26007, Logroño (La Rioja), España</li>
        <li><strong>Teléfono</strong>: 941 540 540</li>
        <li><strong>Email</strong>: <a href="mailto:info@solverkey.es">info@solverkey.es</a></li>
        <li><strong>Registro mercantil</strong>: Registro Mercantil de La Rioja, Tomo 872, Libro 0, Folio 86, Sección 8, Hoja: LO-19381, Inscripción 1</li>
      </ul>

      <div className="rounded-2xl border bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2 font-semibold"><Shield className="h-5 w-5" /> Compromiso y aceptación</div>
        <p className="mt-2 text-gray-700">El acceso y uso de este sitio implican la aceptación plena de las condiciones de este Aviso Legal. Te comprometes a un uso conforme a la ley, la buena fe, el orden público y estas condiciones.</p>
      </div>

      <h2 className="mt-8">Condiciones de uso del sitio</h2>
      <ul>
        <li>No difundir contenidos ilícitos, violentos, difamatorios, discriminatorios o contrarios a la ley.</li>
        <li>No introducir malware ni realizar acciones que puedan alterar o dañar sistemas propios o de terceros.</li>
        <li>No vulnerar derechos de propiedad intelectual o industrial, ni la confidencialidad de la información.</li>
        <li>No suplantar identidades ni intentar acceder a áreas restringidas sin autorización.</li>
        <li>El establecimiento de hiperenlaces no implica relación con SOLVERKEY ni aprobación de los contenidos enlazados.</li>
      </ul>

      <h2 className="mt-8">Propiedad intelectual e industrial</h2>
      <p>
        Todos los contenidos del sitio (textos, imágenes, diseño, código, logotipos, marcas) son titularidad de SOLVERKEY o de terceros licenciantes. No se ceden derechos de explotación más allá de lo estrictamente necesario para la navegación y uso del sitio.
      </p>

      <h2 className="mt-8">Exclusión de garantías y responsabilidad</h2>
      <p>
        El sitio se ofrece «tal cual». SOLVERKEY no garantiza la inexistencia de errores, interrupciones o virus, ni la actualización o exactitud de los contenidos, y no será responsable de los daños derivados del uso o imposibilidad de uso del sitio, dentro de los límites legalmente permitidos.
      </p>

      <h2 className="mt-8">Servicios y precios</h2>
      <p>
        La información sobre servicios puede variar sin previo aviso. Cualquier contratación se regirá por sus condiciones específicas.
      </p>

      <h2 className="mt-8">Legislación aplicable y jurisdicción</h2>
      <p>
        Este Aviso Legal se rige por la legislación española. Para cualquier controversia serán competentes los Juzgados y Tribunales de Logroño (España), salvo normativa imperativa en contrario.
      </p>

      <h2 className="mt-8">Modificaciones</h2>
      <p>
        SOLVERKEY se reserva el derecho a modificar, en cualquier momento y sin aviso, la presentación, configuración y contenidos del sitio, así como este Aviso Legal.
      </p>

      <h2>Contacto</h2>
      <p>
        Para cualquier consulta relacionada con este Aviso Legal puede escribir a <a href="mailto:info@solverkey.es">info@solverkey.es</a>.
      </p>

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


