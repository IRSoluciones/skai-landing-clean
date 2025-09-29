import dynamic from "next/dynamic";
const Wavify = dynamic(() => import("react-wavify"), { ssr: false });

export default function WavesBg() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Muchas ondas finas superpuestas para textura viva */}
      <Wavify
        fill="rgba(27, 20, 100, 0.20)"
        paused={false}
        options={{ height: 60, amplitude: 10, speed: 0.12, points: 6 }}
        className="absolute inset-x-0 bottom-0 h-3/4 w-full"
      />
      <Wavify
        fill="rgba(219, 73, 94, 0.22)"
        paused={false}
        options={{ height: 56, amplitude: 11, speed: 0.14, points: 5 }}
        className="absolute inset-x-0 bottom-0 h-3/4 w-full"
      />
      <Wavify
        fill="rgba(27, 20, 100, 0.16)"
        paused={false}
        options={{ height: 52, amplitude: 9, speed: 0.16, points: 5 }}
        className="absolute inset-x-0 bottom-0 h-2/3 w-full"
      />
      <Wavify
        fill="rgba(219, 73, 94, 0.18)"
        paused={false}
        options={{ height: 48, amplitude: 10, speed: 0.18, points: 6 }}
        className="absolute inset-x-0 bottom-0 h-2/3 w-full"
      />
      <Wavify
        fill="rgba(27, 20, 100, 0.14)"
        paused={false}
        options={{ height: 44, amplitude: 8, speed: 0.20, points: 4 }}
        className="absolute inset-x-0 bottom-0 h-2/3 w-full"
      />
      <Wavify
        fill="rgba(219, 73, 94, 0.16)"
        paused={false}
        options={{ height: 40, amplitude: 8, speed: 0.22, points: 5 }}
        className="absolute inset-x-0 bottom-0 h-1/2 w-full"
      />
      <Wavify
        fill="rgba(255, 255, 255, 0.25)"
        paused={false}
        options={{ height: 36, amplitude: 7, speed: 0.26, points: 3 }}
        className="absolute inset-x-0 bottom-0 h-1/2 w-full mix-blend-overlay"
      />
      <Wavify
        fill="rgba(27, 20, 100, 0.12)"
        paused={false}
        options={{ height: 32, amplitude: 6, speed: 0.30, points: 5 }}
        className="absolute inset-x-0 bottom-0 h-1/2 w-full"
      />
    </div>
  );
}


