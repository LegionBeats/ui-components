import { Typewriter } from "./typewriter";

export default function TypewriterDemo() {
  return (
    <div className="flex min-h-40 items-center justify-center p-8 text-center">
      <p className="text-2xl font-semibold tracking-tight">
        Build{" "}
        <Typewriter
          as="span"
          className="text-primary"
          text={["beautiful UI", "fast prototypes", "shipped products"]}
          speed={60}
          deleteSpeed={35}
          waitTime={1600}
        />
      </p>
    </div>
  );
}