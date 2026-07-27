import { createFileRoute } from "@tanstack/react-router";

import { Backdrop } from "@/components/mio/Backdrop";
import { Reveal, Counter } from "@/components/mio/Reveal";
import { PrimaryCta, GhostCta, Eyebrow, CHECKOUT_URL } from "@/components/mio/Cta";

import dashboardImg from "@/assets/mockup-dashboard.jpg";
import mobileImg from "@/assets/mockup-mobile.jpg";
import receiptImg from "@/assets/mockup-receipt.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MIO — La forma profesional de gestionar tu taller" },
      {
        name: "description",
        content:
          "MIO es el sistema operativo para talleres de confección: cortes, producción, pagos automáticos y recibos en PDF. Ordena tu taller hoy.",
      },
      { property: "og:title", content: "MIO — Gestiona tu taller como un profesional" },
      {
        property: "og:description",
        content:
          "Cortes, empleados, producción y pagos automáticos en un solo sistema. Sin cálculos manuales. Sin errores.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const problemas = [
  { n: "01", t: "Cálculos a mano", d: "Cuadernos, calculadora y horas perdidas cada semana." },
  { n: "02", t: "Errores en los pagos", d: "Una cifra mal anotada y pierdes dinero o confianza." },
  { n: "03", t: "Producción desordenada", d: "Nadie sabe con certeza en qué va cada corte." },
  { n: "04", t: "Información perdida", d: "Notas sueltas, mensajes y datos que desaparecen." },
];

const flujo = [
  { t: "Crear un corte", d: "Registra el modelo, las piezas y las tarifas." },
  { t: "Asignar empleados", d: "Cada persona con su tarea y su tarifa exacta." },
  { t: "Seguir la producción", d: "Avance real, en vivo, sin preguntar a nadie." },
  { t: "Cálculo automático", d: "MIO calcula cuánto se le debe a cada quien." },
  { t: "Generar recibo", d: "PDF profesional listo para imprimir y firmar." },
  { t: "Todo ordenado", d: "Historial completo de tu taller, siempre disponible." },
];

const beneficios = [
  { t: "Menos tiempo calculando", d: "Recupera horas cada semana y dedícalas a producir más." },
  { t: "Paga con confianza", d: "Cada pago respaldado por números exactos y verificables." },
  { t: "Rentabilidad por corte", d: "Sabes con precisión cuánto deja cada corte que sale." },
  { t: "Taller organizado", d: "Un solo lugar para cortes, empleados, avances y pagos." },
  { t: "Cero errores costosos", d: "Elimina el margen de error humano de tu operación." },
  { t: "Imagen profesional", d: "Tus empleados ven un taller serio y bien administrado." },
];

const razones = [
  {
    t: "Hecho solo para talleres de confección",
    d: "No es un ERP genérico adaptado. Cada pantalla nace de la forma real en que opera un taller.",
  },
  {
    t: "Cálculos automáticos",
    d: "Tarifas, piezas, avances y pagos se calculan solos. Tú solo revisas y apruebas.",
  },
  {
    t: "Gestión profesional",
    d: "Historial, respaldos y documentos formales que ordenan tu negocio de raíz.",
  },
];

function Landing() {
  return (
    <div className="relative min-h-screen">
      <Backdrop />

      <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/6 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 sm:px-10">
          <a href="#top" className="min-w-0">
            <span className="font-display text-xl tracking-[0.28em] text-white">MIO</span>
            <span className="text-silver/45 ml-3 hidden text-[10px] tracking-[0.3em] uppercase sm:inline">
              by Exylink
            </span>
          </a>
          <a
            href={CHECKOUT_URL}
            className="shrink-0 rounded-full bg-white px-6 py-2.5 text-xs font-medium tracking-tight text-[#050505] transition-transform duration-500 hover:-translate-y-0.5 sm:text-sm"
          >
            Comenzar Ahora
          </a>
        </div>
      </header>

      <main id="top" className="relative z-10">
        {/* HERO */}
        <section className="px-6 pt-36 pb-20 sm:px-10 sm:pt-48 sm:pb-28">
          <div className="mx-auto max-w-5xl text-center">
            <Reveal>
              <Eyebrow>Sistema operativo para talleres de confección</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="font-display text-balance-tight mt-8 text-[2.6rem] leading-[1.02] tracking-[-0.02em] text-white sm:text-7xl lg:text-[5.2rem]">
                La forma profesional
                <br className="hidden sm:block" /> de gestionar tu taller.
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="text-silver/70 mx-auto mt-8 max-w-xl text-base leading-relaxed sm:text-lg">
                Controla cortes, producción y pagos sin una sola cuenta a mano. MIO ordena tu taller
                y te devuelve el tiempo que hoy pierdes calculando.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-11 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <PrimaryCta size="lg" className="w-full sm:w-auto">
                  Comenzar Ahora
                </PrimaryCta>
                <GhostCta href="#solucion">Ver cómo funciona</GhostCta>
              </div>
            </Reveal>
            <Reveal delay={460}>
              <p className="text-silver/40 mt-6 text-xs tracking-wide">
                Acceso inmediato · Sin instalaciones · Cancela cuando quieras
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} className="mx-auto mt-20 max-w-6xl">
            <div className="animate-float-soft relative">
              <div
                className="absolute -inset-x-10 -top-10 bottom-0 blur-3xl"
                style={{
                  background:
                    "radial-gradient(ellipse at center, oklch(1 0 0 / 8%), transparent 70%)",
                }}
              />
              <div
                className="hairline relative overflow-hidden rounded-2xl"
                style={{ boxShadow: "var(--shadow-lift)" }}
              >
                <img
                  src={dashboardImg}
                  alt="Panel de MIO mostrando cortes, producción y empleados de un taller de confección"
                  width={1600}
                  height={1008}
                  className="w-full"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#050505] to-transparent" />
              </div>
            </div>
          </Reveal>

          <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-y-10 border-y border-white/8 py-10 sm:grid-cols-4">
            {[
              { v: 12, s: " h", l: "ahorradas al mes" },
              { v: 0, s: "", l: "errores de cálculo" },
              { v: 100, s: "%", l: "pagos documentados" },
              { v: 3, s: " min", l: "para cerrar un pago" },
            ].map((k, i) => (
              <Reveal key={k.l} delay={i * 90} className="text-center">
                <div className="font-display text-4xl text-white sm:text-5xl">
                  <Counter to={k.v} suffix={k.s} />
                </div>
                <div className="text-silver/50 mt-2 text-[11px] tracking-[0.18em] uppercase">
                  {k.l}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PROBLEMA */}
        <section className="px-6 py-24 sm:px-10 sm:py-36">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <Eyebrow>El día a día</Eyebrow>
              <h2 className="font-display mt-6 max-w-2xl text-3xl leading-tight tracking-[-0.02em] text-white sm:text-5xl">
                Tu taller produce.
                <br />
                Pero los números te consumen.
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
              {problemas.map((p, i) => (
                <Reveal key={p.n} delay={i * 110}>
                  <div className="group h-full border-t border-white/10 pt-8 transition-colors duration-700 hover:border-white/35 sm:pr-8">
                    <span className="text-silver/35 font-display text-sm tracking-widest">
                      {p.n}
                    </span>
                    <h3 className="mt-4 text-lg font-medium tracking-tight text-white">{p.t}</h3>
                    <p className="text-silver/55 mt-3 text-sm leading-relaxed">{p.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <p className="text-silver/70 mt-16 max-w-xl text-lg leading-relaxed">
                No es falta de trabajo. Es falta de un sistema.
              </p>
            </Reveal>
          </div>
        </section>

        {/* SOLUCION */}
        <section id="solucion" className="px-6 py-24 sm:px-10 sm:py-36">
          <div className="mx-auto max-w-6xl">
            <Reveal className="max-w-2xl">
              <Eyebrow>La solución</Eyebrow>
              <h2 className="font-display mt-6 text-3xl leading-tight tracking-[-0.02em] text-white sm:text-5xl">
                MIO es el sistema operativo de tu taller.
              </h2>
              <p className="text-silver/65 mt-6 text-base leading-relaxed sm:text-lg">
                Un flujo único, de principio a fin, que convierte tu operación diaria en información
                clara y pagos exactos.
              </p>
            </Reveal>

            <ol className="relative mt-16 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
              {flujo.map((f, i) => (
                <Reveal key={f.t} delay={i * 100} as="li">
                  <div className="surface h-full rounded-lg p-7 transition-colors duration-700 hover:border-white/25">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-silver/40 text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="h-px flex-1 bg-white/10" />
                    </div>
                    <h3 className="mt-6 text-lg font-medium tracking-tight text-white">{f.t}</h3>
                    <p className="text-silver/55 mt-2 text-sm leading-relaxed">{f.d}</p>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={150}>
              <div className="mt-12 flex justify-center">
                <PrimaryCta>Comenzar Ahora</PrimaryCta>
              </div>
            </Reveal>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="px-6 py-24 sm:px-10 sm:py-36">
          <div className="mx-auto max-w-6xl">
            <Reveal className="max-w-2xl">
              <Eyebrow>Resultados</Eyebrow>
              <h2 className="font-display mt-6 text-3xl leading-tight tracking-[-0.02em] text-white sm:text-5xl">
                Lo que cambia en tu negocio.
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {beneficios.map((b, i) => (
                <Reveal key={b.t} delay={i * 90}>
                  <div className="border-l border-white/12 pl-6 transition-colors duration-700 hover:border-white/40">
                    <h3 className="text-lg font-medium tracking-tight text-white">{b.t}</h3>
                    <p className="text-silver/55 mt-3 text-sm leading-relaxed">{b.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SHOWCASE */}
        <section className="px-6 py-24 sm:px-10 sm:py-36">
          <div className="mx-auto max-w-6xl">
            <Reveal className="max-w-2xl">
              <Eyebrow>El producto</Eyebrow>
              <h2 className="font-display mt-6 text-3xl leading-tight tracking-[-0.02em] text-white sm:text-5xl">
                Una interfaz limpia. Decisiones claras.
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-8 lg:grid-cols-[1.35fr_1fr]">
              <Reveal>
                <div
                  className="hairline animate-float-soft overflow-hidden rounded-xl"
                  style={{ boxShadow: "var(--shadow-lift)" }}
                >
                  <img
                    src={receiptImg}
                    alt="Recibo de pago en PDF generado por MIO listo para imprimir y firmar"
                    loading="lazy"
                    width={1200}
                    height={912}
                    className="w-full"
                  />
                </div>
              </Reveal>
              <Reveal delay={150}>
                <div
                  className="hairline animate-float-soft flex h-full items-center justify-center overflow-hidden rounded-xl"
                  style={{ boxShadow: "var(--shadow-lift)", animationDelay: "1.4s" }}
                >
                  <img
                    src={mobileImg}
                    alt="MIO en el teléfono mostrando el avance de los cortes en producción"
                    loading="lazy"
                    width={800}
                    height={1200}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* POR QUE MIO */}
        <section className="px-6 py-24 sm:px-10 sm:py-36">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <Eyebrow>Por qué MIO</Eyebrow>
            </Reveal>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {razones.map((r, i) => (
                <Reveal key={r.t} delay={i * 120}>
                  <div className="surface h-full rounded-xl p-9 transition-all duration-700 hover:-translate-y-1 hover:border-white/25">
                    <div className="h-10 w-px bg-gradient-to-b from-white/60 to-transparent" />
                    <h3 className="font-display mt-7 text-2xl leading-snug text-white">{r.t}</h3>
                    <p className="text-silver/55 mt-4 text-sm leading-relaxed">{r.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONFIANZA */}
        <section className="px-6 py-24 sm:px-10 sm:py-36">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <Eyebrow>Transparencia</Eyebrow>
              <h2 className="font-display mt-6 text-3xl leading-tight tracking-[-0.02em] text-white sm:text-5xl">
                Cada pago queda documentado.
              </h2>
              <p className="text-silver/65 mt-6 text-base leading-relaxed sm:text-lg">
                Al cerrar un pago, MIO genera un recibo profesional en PDF listo para imprimir y
                firmar. Tú conservas el respaldo, tu empleado conserva la certeza.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Detalle de piezas, tarifas y total calculado.",
                  "Espacio de firma para el empleado.",
                  "Historial completo por persona y por corte.",
                ].map((t) => (
                  <li key={t} className="text-silver/70 flex gap-4 text-sm">
                    <span className="mt-2 h-px w-6 shrink-0 bg-white/40" />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={150}>
              <div
                className="hairline overflow-hidden rounded-xl"
                style={{ boxShadow: "var(--shadow-lift)" }}
              >
                <img
                  src={receiptImg}
                  alt="Vista del recibo de pago profesional en PDF"
                  loading="lazy"
                  width={1200}
                  height={912}
                  className="w-full"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="relative px-6 py-32 sm:px-10 sm:py-48">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 55% at 50% 50%, oklch(1 0 0 / 9%), transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-4xl text-center">
            <Reveal>
              <h2 className="font-display text-balance-tight text-[2.3rem] leading-[1.05] tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl">
                Empieza hoy a gestionar tu taller como un profesional.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-14 flex justify-center">
                <PrimaryCta size="lg" className="w-full sm:w-auto">
                  Comenzar Ahora
                </PrimaryCta>
              </div>
            </Reveal>
            <Reveal delay={260}>
              <p className="text-silver/40 mt-6 text-xs tracking-wide">
                Acceso inmediato tras el pago
              </p>
            </Reveal>
          </div>
        </section>

        <footer className="border-t border-white/8 px-6 py-10 sm:px-10">
          <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
            <span className="font-display truncate text-sm tracking-[0.28em] text-white">MIO</span>
            <span className="text-silver/40 shrink-0 text-xs">
              © {new Date().getFullYear()} Exylink
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}
