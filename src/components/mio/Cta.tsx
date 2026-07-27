import type { ReactNode } from "react";

export const CHECKOUT_URL = "/checkout";

export function PrimaryCta({
  children,
  size = "md",
  className = "",
}: {
  children: ReactNode;
  size?: "md" | "lg";
  className?: string;
}) {
  return (
    <a
      href={CHECKOUT_URL}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white font-medium tracking-tight text-[#050505] transition-all duration-500 hover:-translate-y-0.5 ${
        size === "lg" ? "px-10 py-5 text-base sm:px-14 sm:text-lg" : "px-8 py-4 text-sm sm:text-base"
      } ${className}`}
      style={{ boxShadow: "var(--glow-cta)" }}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-y-0 -left-1/3 z-0 w-1/3 bg-black/10 opacity-0 group-hover:animate-sheen group-hover:opacity-100" />
    </a>
  );
}

export function GhostCta({ children, href = "#solucion" }: { children: ReactNode; href?: string }) {
  return (
    <a
      href={href}
      className="text-silver/80 inline-flex items-center gap-2 rounded-full border border-white/12 px-8 py-4 text-sm font-medium tracking-tight transition-all duration-500 hover:border-white/30 hover:text-white sm:text-base"
    >
      {children}
      <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
    </a>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="text-silver/60 block text-[11px] font-medium tracking-[0.32em] uppercase">
      {children}
    </span>
  );
}
