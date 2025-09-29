import Head from "next/head";
import Link from "next/link";

export default function PoliticaPrivacidad() {
  return (
    <main className="container prose prose-zinc max-w-3xl py-12">
      <Head>
        <title>Política de Privacidad – SKAI</title>
        <meta name="robots" content="noindex" />
      </Head>
      <h1>Política de Privacidad</h1>
      <p>En SOLVERKEY nos tomamos muy en serio la protección de tus datos personales. Cumplimos con el Reglamento (UE) 2016/679 (RGPD) y la LOPDGDD.</p>

      <h2>Responsable del tratamiento</h2>
      <ul>
        <li><strong>Entidad</strong>: SOLVER KEY IBERIA, S.L. (SOLVERKEY)</li>
        <li><strong>CIF</strong>: B05469069</li>
        <li><strong>Domicilio</strong>: Calle Valdegastea nº 2, 26007, Logroño (La Rioja)</li>
        <li><strong>Correo</strong>: <a href="mailto:privacidad@solverkey.es">privacidad@solverkey.es</a></li>
      </ul>

      <h2>Datos que tratamos</h2>
      <ul>
        <li>Identificación y contacto: nombre, email, teléfono y empresa.</li>
        <li>Datos de interacción web: IP, navegador, páginas vistas, cookies (según preferencias).</li>
        <li>Datos de registro a eventos y formularios: fecha, intereses y comentarios.</li>
      </ul>

      <h2>Finalidades</h2>
      <ul>
        <li>Atender solicitudes y gestionar inscripciones a eventos.</li>
        <li>Comunicaciones informativas y comerciales relacionadas con nuestros servicios (si lo aceptas).</li>
        <li>Mejorar la seguridad y usabilidad del sitio.</li>
      </ul>

      <h2>Bases jurídicas</h2>
      <ul>
        <li>Consentimiento del interesado (formularios, cookies no necesarias).</li>
        <li>Ejecución de medidas precontractuales/contractuales (gestión de solicitudes).</li>
        <li>Interés legítimo (mejoras, prevención del fraude y seguridad).</li>
      </ul>

      <h2>Conservación</h2>
      <p>Mientras dure la relación, exista obligación legal o hasta que revoques tu consentimiento.</p>

      <h2>Destinatarios</h2>
      <p>Proveedores tecnológicos necesarios para la prestación del servicio (alojamiento, analítica, comunicaciones). No realizamos transferencias internacionales fuera del EEE sin garantías adecuadas.</p>

      <h2>Derechos</h2>
      <ul>
        <li>Acceso, rectificación, supresión, oposición, limitación y portabilidad.</li>
        <li>Retirar el consentimiento en cualquier momento.</li>
        <li>Reclamación ante la AEPD: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">aepd.es</a>.</li>
      </ul>
      <p>Para ejercer tus derechos: <a href="mailto:privacidad@solverkey.es">privacidad@solverkey.es</a>.</p>

      <p className="text-sm text-gray-500">Referencias: <Link href="https://www.solverkey.es/politica-de-privacidad" target="_blank" rel="noopener noreferrer">solverkey.es/politica-de-privacidad</Link>. Ejemplo de estructura consultado: <Link href="https://logro-vtc.vercel.app/politica-privacidad" target="_blank" rel="noopener noreferrer">logro-vtc.vercel.app/politica-privacidad</Link>.</p>
      <p className="text-xs text-gray-500">Última actualización: {new Date().toLocaleDateString()}</p>
    </main>
  );
}


