import Head from "next/head";
import Link from "next/link";
import { Button } from "@components/ui/button";
import { Shield, UserRound, FileCheck, Timer, Share2, ArrowLeft } from "lucide-react";

export default function PoliticaPrivacidad() {
  return (
    <main className="container prose prose-zinc max-w-3xl py-12">
      <Head>
        <title>Política de Privacidad – SKAI</title>
        <meta name="robots" content="noindex" />
      </Head>
      <h1 className="mb-2 text-center">Política de Privacidad</h1>
      <p className="-mt-2 mb-8 text-center text-gray-600">Protección de datos personales y privacidad en SKAI</p>

      <div className="rounded-2xl border bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2 font-semibold"><Shield className="h-5 w-5" /> Compromiso con la privacidad</div>
        <p className="mt-2 text-gray-700">Nos tomamos muy en serio la protección de tu información. Esta política explica cómo recogemos, usamos y protegemos tus datos. Cumplimos con RGPD (UE) y LOPDGDD.</p>
      </div>

      <div className="mt-8 rounded-2xl border bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2 font-semibold"><UserRound className="h-5 w-5" /> Responsable del tratamiento</div>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold">Entidad</p>
            <p>SOLVER KEY IBERIA, S.L. (SOLVERKEY)</p>
          </div>
          <div>
            <p className="text-sm font-semibold">CIF</p>
            <p>B05469069</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Domicilio</p>
            <p>C/ Valdegastea nº 2, 26007, Logroño (La Rioja)</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Contacto</p>
            <p><a href="mailto:privacidad@solverkey.es">privacidad@solverkey.es</a></p>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2 font-semibold"><FileCheck className="h-5 w-5" /> Datos que tratamos</div>
        <ul className="mt-2">
          <li>Identificación y contacto: nombre, email, teléfono y empresa.</li>
          <li>Interacción web: IP, navegador, páginas vistas y cookies (según preferencias).</li>
          <li>Registro a eventos: fecha, preferencias e intereses.</li>
        </ul>
      </div>

      <div className="mt-8 rounded-2xl border bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2 font-semibold"><FileCheck className="h-5 w-5" /> Finalidad del tratamiento</div>
        <p className="mt-2 text-gray-700">La landing recopila los datos del formulario con el fin exclusivo de gestionar las invitaciones al evento y comunicaciones relacionadas. No se usarán para finalidades incompatibles.</p>
      </div>

      <div className="mt-8 rounded-2xl border bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2 font-semibold"><FileCheck className="h-5 w-5" /> Bases jurídicas</div>
        <ul className="mt-2">
          <li>Consentimiento (formularios y cookies no necesarias).</li>
          <li>Ejecución de medidas precontractuales/contractuales.</li>
          <li>Interés legítimo (mejora del servicio y seguridad).</li>
        </ul>
      </div>

      <div className="mt-8 rounded-2xl border bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2 font-semibold"><Timer className="h-5 w-5" /> Plazos de conservación</div>
        <p className="mt-2 text-gray-700">Conservaremos los datos mientras gestionamos el evento, exista obligación legal o hasta que revoques tu consentimiento.</p>
      </div>

      <div className="mt-8 rounded-2xl border bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2 font-semibold"><Share2 className="h-5 w-5" /> Destinatarios</div>
        <p className="mt-2 text-gray-700">Proveedores tecnológicos (alojamiento, analítica, comunicaciones) como encargados de tratamiento. No realizamos transferencias internacionales fuera del EEE sin garantías adecuadas.</p>
      </div>

      <div className="mt-8 rounded-2xl border bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2 font-semibold"><Shield className="h-5 w-5" /> Tus derechos</div>
        <ul className="mt-2">
          <li>Acceso, rectificación, supresión, oposición, limitación y portabilidad.</li>
          <li>Retirar el consentimiento cuando quieras.</li>
          <li>Reclamar ante la AEPD: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">aepd.es</a>.</li>
        </ul>
        <p className="mt-2">Para ejercerlos, escribe a <a href="mailto:privacidad@solverkey.es">privacidad@solverkey.es</a>.</p>
      </div>

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


