import Link from "next/link";

export default function Footer() {
  function openCookies() {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("open-cookie-preferences"));
    }
  }

  return (
    <footer className="mt-16 border-t bg-white/70 py-8 text-sm text-gray-600">
      <div className="container flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} Solverkey. Todos los derechos reservados.</p>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link href="/aviso-legal" className="hover:text-gray-900 underline-offset-4 hover:underline">Aviso legal</Link>
          <Link href="/politica-de-privacidad" className="hover:text-gray-900 underline-offset-4 hover:underline">Política de privacidad</Link>
          <Link href="/cookies" className="hover:text-gray-900 underline-offset-4 hover:underline">Política de cookies</Link>
          <button onClick={openCookies} className="hover:text-gray-900 underline-offset-4 hover:underline">Preferencias de cookies</button>
        </nav>
      </div>
    </footer>
  );
}


