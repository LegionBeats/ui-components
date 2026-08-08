import { MetalButton } from "./metal-button";

export default function MetalFxDemo() {
  return (
    <div className="flex min-h-64 w-full flex-wrap items-center justify-center gap-6 rounded-xl bg-[#070707] p-12">
      <MetalButton theme="dark" preset="chromatic">
        Upgrade to Pro
      </MetalButton>
      <MetalButton theme="dark" preset="silver">
        Silver
      </MetalButton>
      <MetalButton theme="dark" preset="gold">
        Gold
      </MetalButton>
      <MetalButton
        theme="dark"
        variant="circle"
        preset="chromatic"
        aria-label="Send"
      >
        ↑
      </MetalButton>
    </div>
  );
}