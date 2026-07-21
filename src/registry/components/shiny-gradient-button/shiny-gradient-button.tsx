import { ArrowRight } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./shiny-gradient-button.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  showArrow?: boolean;
  children?: ReactNode;
};

export function ShinyGradientButton({
  showArrow = true,
  children = "Submit Your Track",
  className = "",
  ...rest
}: Props) {
  return (
    <button
      type="button"
      {...rest}
      className={`shiny-gradient-btn group relative isolate overflow-hidden rounded-full border-2 border-transparent px-10 py-4 transition-all hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 ${className}`}
    >
      <div className="shiny-gradient-btn__dots pointer-events-none absolute inset-0 z-0 opacity-10" />
      <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap font-bold text-white">
        {children}
        {showArrow && (
          <ArrowRight className="h-[1.1em] w-[1.1em] transition-transform group-hover:translate-x-1" />
        )}
      </span>
    </button>
  );
}