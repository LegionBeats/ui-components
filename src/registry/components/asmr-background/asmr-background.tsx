import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type AsmrBackgroundProps = {
  children?: ReactNode;
  className?: string;
  particleCount?: number;
};

export function AsmrBackground({
  children,
  className,
  particleCount = 1000,
}: AsmrBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement;
    if (!canvas || !container) return;

    const context = canvas.getContext("2d");
    if (!context) return;
    const ctx = context;

    let width = 0;
    let height = 0;
    let frame = 0;
    let particles: Particle[] = [];
    const pointer = { x: -1000, y: -1000 };
    const magneticRadius = 280;
    const vortexStrength = 0.07;
    const pullStrength = 0.12;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    class Particle {
      x = 0;
      y = 0;
      vx = 0;
      vy = 0;
      size = 0;
      alpha = 0;
      color = "";
      rotation = 0;
      rotationSpeed = 0;
      frictionGlow = 0;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.5;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        this.color = Math.random() > 0.7 ? "240, 245, 255" : "80, 80, 85";
        this.alpha = Math.random() * 0.4 + 0.1;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.05;
      }

      update() {
        const dx = pointer.x - this.x;
        const dy = pointer.y - this.y;
        const distance = Math.max(Math.hypot(dx, dy), 0.01);

        if (distance < magneticRadius) {
          const force = (magneticRadius - distance) / magneticRadius;
          this.vx += (dx / distance) * force * pullStrength;
          this.vy += (dy / distance) * force * pullStrength;
          this.vx += (dy / distance) * force * vortexStrength * 10;
          this.vy -= (dx / distance) * force * vortexStrength * 10;
          this.frictionGlow = force * 0.7;
        } else {
          this.frictionGlow *= 0.92;
        }

        this.x += this.vx;
        this.y += this.vy;
        this.vx = this.vx * 0.95 + (Math.random() - 0.5) * 0.04;
        this.vy = this.vy * 0.95 + (Math.random() - 0.5) * 0.04;
        this.rotation +=
          this.rotationSpeed + (Math.abs(this.vx) + Math.abs(this.vy)) * 0.05;

        if (this.x < -20) this.x = width + 20;
        if (this.x > width + 20) this.x = -20;
        if (this.y < -20) this.y = height + 20;
        if (this.y > height + 20) this.y = -20;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = `rgba(${this.color}, ${Math.min(this.alpha + this.frictionGlow, 0.9)})`;

        if (this.frictionGlow > 0.3) {
          ctx.shadowBlur = 8 * this.frictionGlow;
          ctx.shadowColor = `rgba(180, 220, 255, ${this.frictionGlow})`;
        }

        ctx.beginPath();
        ctx.moveTo(0, -this.size * 2.5);
        ctx.lineTo(this.size, 0);
        ctx.lineTo(0, this.size * 2.5);
        ctx.lineTo(-this.size, 0);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    }

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * pixelRatio));
      canvas.height = Math.max(1, Math.round(height * pixelRatio));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      particles = Array.from({ length: particleCount }, () => new Particle());
    };

    const draw = () => {
      ctx.fillStyle = "rgba(10, 10, 12, 0.18)";
      ctx.fillRect(0, 0, width, height);
      particles.forEach((particle) => {
        if (!reduceMotion) particle.update();
        particle.draw();
      });
      if (!reduceMotion) frame = requestAnimationFrame(draw);
    };

    const updatePointer = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };
    const clearPointer = () => {
      pointer.x = -1000;
      pointer.y = -1000;
    };

    const observer = new ResizeObserver(resize);
    observer.observe(container);
    container.addEventListener("pointermove", updatePointer);
    container.addEventListener("pointerleave", clearPointer);
    resize();
    draw();

    return () => {
      observer.disconnect();
      container.removeEventListener("pointermove", updatePointer);
      container.removeEventListener("pointerleave", clearPointer);
      cancelAnimationFrame(frame);
    };
  }, [particleCount]);

  return (
    <div
      className={cn(
        "relative isolate h-full w-full overflow-hidden bg-neutral-950",
        className,
      )}
    >
      <canvas ref={canvasRef} className="absolute inset-0 block" />
      {children ? <div className="relative z-10 h-full">{children}</div> : null}
    </div>
  );
}

export default AsmrBackground;