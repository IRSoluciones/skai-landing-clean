import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@components/ui/button";

// Permite reabrir preferencias desde Footer u otros elementos
if (typeof window !== "undefined") {
  window.addEventListener("open-cookie-preferences", () => {
    const event = new CustomEvent("__openCookiePrefs");
    window.dispatchEvent(event);
  });
}

type ConsentPrefs = {
  version: number;
  necessary: true; // siempre activo
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
  decidedAt: string;
};

const STORAGE_KEY = "cookie-consent-v1";

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const [prefs, setPrefs] = useState<ConsentPrefs | null>(null);
  const [temp, setTemp] = useState({ analytics: false, marketing: false, personalization: false });

  // Cargar preferencias
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as ConsentPrefs;
        setPrefs(parsed);
        setShowBar(false);
      } else {
        setShowBar(true);
      }
    } catch {
      setShowBar(true);
    }
  }, []);

  // Escucha evento para reabrir desde el footer
  useEffect(() => {
    function onOpen() {
      setOpen(true);
    }
    if (typeof window !== "undefined") {
      window.addEventListener("__openCookiePrefs", onOpen);
      return () => window.removeEventListener("__openCookiePrefs", onOpen);
    }
  }, []);

  // Inicializar toggles cuando se abre el modal
  useEffect(() => {
    if (open) {
      setTemp({
        analytics: prefs?.analytics ?? false,
        marketing: prefs?.marketing ?? false,
        personalization: prefs?.personalization ?? false,
      });
    }
  }, [open, prefs]);

  const hasDecision = useMemo(() => Boolean(prefs), [prefs]);

  function savePrefs(next: Omit<ConsentPrefs, "decidedAt">) {
    const payload: ConsentPrefs = {
      ...next,
      decidedAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    setPrefs(payload);
    setShowBar(false);
    setOpen(false);
  }

  function acceptAll() {
    savePrefs({ version: 1, necessary: true, analytics: true, marketing: true, personalization: true });
  }

  function rejectAll() {
    savePrefs({ version: 1, necessary: true, analytics: false, marketing: false, personalization: false });
  }

  function saveFromTemp() {
    savePrefs({ version: 1, necessary: true, analytics: temp.analytics, marketing: temp.marketing, personalization: temp.personalization });
  }

  const canReopen = hasDecision && !showBar && !open;
  if (!showBar && !open && !canReopen) return null;

  return (
    <>
      {/* Barra inferior */}
      {showBar && (
        <div className="fixed inset-x-0 bottom-0 z-[60] flex justify-center px-4 pb-4">
          <div className="w-full max-w-4xl rounded-2xl border border-gray-200 bg-white shadow-lg">
            <div className="flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-gray-700">
                Usamos cookies para mejorar tu experiencia y analizar el uso del sitio. Puedes aceptar todas, rechazarlas o configurar tus preferencias. Más info en nuestra {""}
                <Link href="/cookies" className="underline decoration-primary/30 underline-offset-4">Política de cookies</Link>.
              </p>
              <div className="flex items-center gap-2">
                <Button variant="outline" onClick={() => setOpen(true)} className="whitespace-nowrap">Configurar</Button>
                <Button variant="secondary" onClick={rejectAll} className="whitespace-nowrap">Rechazar</Button>
                <Button onClick={acceptAll} className="whitespace-nowrap">Aceptar todas</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de preferencias */}
      {open && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-white shadow-2xl">
            <div className="border-b p-4">
              <h2 className="text-lg font-semibold">Preferencias de cookies</h2>
            </div>
            <div className="space-y-4 p-4">
              <div className="rounded-lg border p-3">
                <label className="flex items-start gap-3">
                  <input type="checkbox" checked readOnly className="mt-1" />
                  <span>
                    <span className="font-medium">Necesarias</span> (siempre activas)
                    <p className="text-sm text-gray-600">Imprescindibles para el funcionamiento básico del sitio.</p>
                  </span>
                </label>
              </div>
              <div className="rounded-lg border p-3">
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" checked={temp.analytics} onChange={(e) => setTemp((s) => ({ ...s, analytics: e.target.checked }))} />
                  <span>
                    <span className="font-medium">Analíticas</span>
                    <p className="text-sm text-gray-600">Nos ayudan a comprender el uso del sitio.</p>
                  </span>
                </label>
              </div>
              <div className="rounded-lg border p-3">
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" checked={temp.marketing} onChange={(e) => setTemp((s) => ({ ...s, marketing: e.target.checked }))} />
                  <span>
                    <span className="font-medium">Marketing</span>
                    <p className="text-sm text-gray-600">Personalización de anuncios en otros sitios.</p>
                  </span>
                </label>
              </div>
              <div className="rounded-lg border p-3">
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" checked={temp.personalization} onChange={(e) => setTemp((s) => ({ ...s, personalization: e.target.checked }))} />
                  <span>
                    <span className="font-medium">Personalización</span>
                    <p className="text-sm text-gray-600">Recuerda tus preferencias y mejora tu experiencia.</p>
                  </span>
                </label>
              </div>
              <p className="text-sm text-gray-600">Consulta la <Link href="/politica-de-privacidad" className="underline">Política de privacidad</Link> y la <Link href="/cookies" className="underline">Política de cookies</Link>.</p>
            </div>
            <div className="flex items-center justify-end gap-2 border-t p-4">
              <Button variant="outline" onClick={() => setOpen(false)}>Cancelar</Button>
              <Button variant="secondary" onClick={rejectAll}>Rechazar todas</Button>
              <Button onClick={saveFromTemp}>Guardar preferencias</Button>
            </div>
          </div>
        </div>
      )}

      {/* Botón persistente para reabrir preferencias */}
      {canReopen && (
        <button
          type="button"
          aria-label="Preferencias de cookies"
          onClick={() => setOpen(true)}
          className="fixed bottom-4 right-4 z-[55] inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-4 py-2 text-sm shadow-md backdrop-blur supports-[backdrop-filter]:bg-white/70 hover:bg-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M6.34 17.66l-1.41 1.41"/><path d="M19.07 4.93l-1.41 1.41"/>
            <circle cx="12" cy="12" r="5"/>
          </svg>
          Preferencias
        </button>
      )}
    </>
  );
}


