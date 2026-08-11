import { AnimatedGradient } from "./animated-gradient-with-svg";

function GradientCard({
  title,
  value,
  colors,
  speed,
}: {
  title: string;
  value: string;
  colors: string[];
  speed: number;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border p-6 h-40 flex flex-col justify-between">
      <AnimatedGradient colors={colors} speed={speed} blur="medium" />
      <div className="relative z-10">
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-3xl font-semibold tracking-tight">{value}</p>
      </div>
    </div>
  );
}

export default function AnimatedGradientDemo() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 w-full max-w-2xl">
      <GradientCard
        title="Revenue"
        value="$48.2k"
        colors={["#0EA5E9", "#22D3EE", "#6366F1"]}
        speed={4}
      />
      <GradientCard
        title="Active users"
        value="12,904"
        colors={["#F97316", "#EC4899", "#8B5CF6"]}
        speed={6}
      />
    </div>
  );
}