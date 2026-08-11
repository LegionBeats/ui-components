import { CountingNumber } from "./counting-number";

export default function CountingNumberDemo() {
  return (
    <div className="flex min-h-40 flex-wrap items-center justify-center gap-10 p-8 text-center">
      <div>
        <CountingNumber target={128500} className="text-4xl font-bold tracking-tight" />
        <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
          Downloads
        </p>
      </div>
      <div>
        <span className="text-4xl font-bold tracking-tight">
          <CountingNumber target={99} transition={{ duration: 2, ease: "easeOut", type: "tween" }} />%
        </span>
        <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
          Uptime
        </p>
      </div>
    </div>
  );
}