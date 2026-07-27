const particles = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 7.3 + 4) % 98}%`,
  delay: `${(i * 2.7) % 26}s`,
  duration: `${34 + ((i * 5) % 22)}s`,
  size: i % 4 === 0 ? 2 : 1,
}));

export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "#050505" }} />

      {/* soft moving light */}
      <div
        className="animate-drift absolute -top-1/3 left-1/2 h-[110vh] w-[110vh] -translate-x-1/2 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, oklch(1 0 0 / 7%) 0%, oklch(1 0 0 / 2%) 42%, transparent 70%)",
        }}
      />
      <div
        className="animate-drift-slow absolute top-1/2 -left-1/4 h-[90vh] w-[90vh] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, oklch(1 0 0 / 4%) 0%, transparent 68%)",
        }}
      />

      {/* grid */}
      <div className="bg-grid absolute inset-0" />

      {/* particles */}
      <div className="absolute inset-0">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute bottom-[-10vh] rounded-full bg-white/40"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animation: `rise-particle ${p.duration} linear ${p.delay} infinite`,
            }}
          />
        ))}
      </div>

      {/* vignette + noise */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% 40%, transparent 40%, #050505 100%)",
        }}
      />
      <div className="bg-noise absolute inset-0" />
    </div>
  );
}
