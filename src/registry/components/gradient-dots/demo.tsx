import { GradientDots } from "./gradient-dots";

export default function GradientDotsDemo() {
  return (
    <main className="relative flex h-96 w-full items-center justify-center overflow-hidden">
      <GradientDots duration={20} />
      <h1 className="z-10 text-center text-6xl font-extrabold">Gradient Dots</h1>
    </main>
  );
}
