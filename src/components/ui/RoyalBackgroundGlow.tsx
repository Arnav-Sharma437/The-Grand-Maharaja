"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export interface RoyalBackgroundGlowProps {
  className?: string;
  particleCount?: number;
  interactive?: boolean;
  showMandala?: boolean;
  mandalaPosition?: "left" | "right" | "center";
  variant?: "hero" | "section" | "warm" | "minimal";
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  alpha: number;
  baseAlpha: number;
  twinkleSpeed: number;
  phase: number;
  colorType: number; // 0 = gold, 1 = champagne, 2 = warm amber
}

export function RoyalBackgroundGlow({
  className = "",
  particleCount = 36,
  interactive = true,
  showMandala = true,
  mandalaPosition = "right",
  variant = "section",
}: RoyalBackgroundGlowProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isVisibleRef = useRef<boolean>(true);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -999,
    y: -999,
    active: false,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : false;

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Handle canvas dimensions with Retina / HiDPI support
    const handleResize = () => {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Pause animation when section is offscreen for maximum battery & CPU performance
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    // Color palettes tuned specifically for Light & Dark modes
    const getColors = (dark: boolean) => {
      if (dark) {
        return [
          "rgba(245, 225, 160, ", // Champagne Gold
          "rgba(212, 175, 55, ",  // Imperial Royal Gold
          "rgba(230, 190, 95, ",  // Warm Palace Amber
        ];
      }
      return [
        "rgba(175, 132, 42, ",  // Deep Rich Royal Gold
        "rgba(195, 150, 50, ",  // Metallic Gold
        "rgba(155, 115, 30, ",  // Warm Antique Bronze
      ];
    };

    // Initialize particles
    const particles: Particle[] = [];
    const count = Math.max(15, Math.min(particleCount, 50));

    for (let i = 0; i < count; i++) {
      const baseAlpha = isDark ? 0.25 + Math.random() * 0.45 : 0.18 + Math.random() * 0.35;
      particles.push({
        x: Math.random() * (width || 800),
        y: Math.random() * (height || 600),
        size: 1.2 + Math.random() * 2.2,
        speedY: 0.15 + Math.random() * 0.45,
        speedX: (Math.random() - 0.5) * 0.25,
        alpha: baseAlpha,
        baseAlpha,
        twinkleSpeed: 0.015 + Math.random() * 0.03,
        phase: Math.random() * Math.PI * 2,
        colorType: Math.floor(Math.random() * 3),
      });
    }

    // Interactive mouse listeners
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const parent = container.parentElement;
    if (parent && interactive) {
      parent.addEventListener("mousemove", handleMouseMove, { passive: true });
      parent.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    }

    let time = 0;

    // Render loop
    const render = () => {
      if (isVisibleRef.current) {
        time += 0.02;
        ctx.clearRect(0, 0, width, height);

        const colors = getColors(isDark);
        const mouse = mouseRef.current;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Upward drift with gentle sinusoidal sway
          p.y -= p.speedY;
          p.x += Math.sin(time + p.phase) * 0.35 + p.speedX;

          // Subtle alpha pulsation (twinkling star dust)
          p.alpha = Math.max(
            0.05,
            p.baseAlpha + Math.sin(time * p.twinkleSpeed * 50 + p.phase) * 0.25
          );

          // Interactive mouse gentle repulsion
          if (mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 110;

            if (dist < maxDist && dist > 0) {
              const force = (1 - dist / maxDist) * 1.8;
              p.x += (dx / dist) * force;
              p.y += (dy / dist) * force;
            }
          }

          // Boundary wrap
          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;

          // Draw particle
          ctx.save();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

          const colorPrefix = colors[p.colorType];
          ctx.fillStyle = `${colorPrefix}${p.alpha})`;

          if (isDark) {
            ctx.shadowBlur = p.size * 3;
            ctx.shadowColor = "rgba(212, 175, 55, 0.7)";
          } else {
            ctx.shadowBlur = p.size * 1.8;
            ctx.shadowColor = "rgba(155, 123, 52, 0.35)";
          }

          ctx.fill();
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      if (parent && interactive) {
        parent.removeEventListener("mousemove", handleMouseMove);
        parent.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isDark, particleCount, interactive]);

  // Position class for royal mandala
  const mandalaPosClass =
    mandalaPosition === "left"
      ? "-left-28 top-1/2 -translate-y-1/2"
      : mandalaPosition === "center"
      ? "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      : "-right-28 top-1/2 -translate-y-1/2";

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* 1. Ambient Radial Breathing Light Orbs (GPU Hardware Accelerated) */}
      <div
        className={`absolute -top-32 -left-32 w-96 h-96 sm:w-[500px] sm:h-[500px] rounded-full blur-[90px] sm:blur-[120px] transition-opacity duration-700 animate-ambient-pulse ${
          isDark
            ? "bg-[#D4AF37]/10"
            : "bg-[#9B7B34]/6"
        }`}
      />

      <div
        className={`absolute -bottom-28 -right-28 w-80 h-80 sm:w-[480px] sm:h-[480px] rounded-full blur-[80px] sm:blur-[110px] transition-opacity duration-700 animate-ambient-pulse-delayed ${
          isDark
            ? "bg-[#8C6E2E]/12"
            : "bg-[#D4AF37]/8"
        }`}
      />

      {variant === "hero" && (
        <div
          className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[110px] sm:blur-[140px] pointer-events-none transition-opacity duration-700 ${
            isDark ? "bg-[#B8860B]/8" : "bg-[#F3E5AB]/40"
          }`}
        />
      )}

      {/* 2. Delicate Sacred Royal Indian Mandala Motif (Slow Ambient Spin) */}
      {showMandala && (
        <div
          className={`absolute ${mandalaPosClass} w-[420px] sm:w-[540px] lg:w-[680px] h-[420px] sm:h-[540px] lg:h-[680px] opacity-[0.035] dark:opacity-[0.055] transition-opacity duration-500 animate-slow-spin`}
        >
          <svg
            viewBox="0 0 600 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full stroke-current text-[#9B7B34] dark:text-[#D4AF37]"
            strokeWidth="1.2"
          >
            {/* Concentric Sacred Royal Circles */}
            <circle cx="300" cy="300" r="280" strokeDasharray="4 6" />
            <circle cx="300" cy="300" r="240" />
            <circle cx="300" cy="300" r="200" strokeDasharray="3 5" />
            <circle cx="300" cy="300" r="160" />
            <circle cx="300" cy="300" r="110" strokeDasharray="2 4" />
            <circle cx="300" cy="300" r="60" />

            {/* 16-Point Royal Radial Symmetry Lines */}
            {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map(
              (deg, idx) => (
                <line
                  key={idx}
                  x1="300"
                  y1="60"
                  x2="300"
                  y2="540"
                  transform={`rotate(${deg} 300 300)`}
                  strokeOpacity="0.5"
                />
              )
            )}

            {/* Diamond Star Arch Lattice */}
            <polygon
              points="300,100 440,240 500,300 440,360 300,500 160,360 100,300 160,240"
              strokeDasharray="6 6"
            />
            <polygon
              points="300,140 410,250 460,300 410,350 300,460 190,350 140,300 190,250"
              strokeOpacity="0.7"
            />
          </svg>
        </div>
      )}

      {/* 3. HTML5 Canvas: Floating Royal Gold Stardust & Embers */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
