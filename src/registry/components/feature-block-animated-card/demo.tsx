import { AnimatedCard } from "./feature-block-animated-card";
import { Cloud, Database, Lock, Server, Zap } from "lucide-react";

export default function FeatureBlockAnimatedCardDemo() {
  return (
    <div className="dark flex w-full items-center justify-center bg-neutral-950 p-8">
      <AnimatedCard
        title="Ship faster with edge infra"
        description="Deploy globally distributed services in seconds — no config, no cold starts."
        icons={[
          { icon: <Cloud className="h-5 w-5 text-white" />, size: "sm" },
          { icon: <Database className="h-6 w-6 text-white" />, size: "md" },
          { icon: <Zap className="h-8 w-8 text-white" />, size: "lg" },
          { icon: <Server className="h-6 w-6 text-white" />, size: "md" },
          { icon: <Lock className="h-5 w-5 text-white" />, size: "sm" },
        ]}
      />
    </div>
  );
}
