import { useRef, type ReactNode } from "react";
import "./glow-button.css";

type GlowButtonProps = {
  children?: ReactNode;
  onClick?: () => void;
};

export function GlowButton({
  children = "Explore Platform",
  onClick,
}: GlowButtonProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    wrapper.style.setProperty("--mouse-x", `${x}%`);
    wrapper.style.setProperty("--mouse-y", `${y}%`);
  };

  const handleMouseLeave = () => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    wrapper.style.setProperty("--mouse-x", "50%");
    wrapper.style.setProperty("--mouse-y", "50%");
  };

  return (
    <div ref={wrapperRef} className="glow-button-wrapper">
      <button
        type="button"
        className="glow-btn"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        <div className="glow-overlay" />
        <div className="glow-border" />
        <span className="btn-content">
          {children}
          <svg
            className="arrow-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </button>
    </div>
  );
}

export default GlowButton;