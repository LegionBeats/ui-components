import { InteractiveTimeline } from "./interactive-timeline";

const items = [
  {
    title: "The Idea",
    subtitle: "Chapter One",
    date: "2023",
    description:
      "It started as a sketch on a napkin. Two founders, one whiteboard, and a stubborn belief that the web could feel more alive. Weeks of late nights turned the sketch into a working prototype.",
  },
  {
    title: "First Launch",
    subtitle: "Chapter Two",
    date: "2024",
    description:
      "The first version shipped to a hundred beta users. It was rough, it was buggy — and people loved it anyway. The feedback shaped everything that came next.",
  },
  {
    title: "Growing Up",
    subtitle: "Chapter Three",
    date: "2025",
    description:
      "The team doubled, the roadmap tripled. A complete rebuild introduced the design system, realtime collaboration, and a mobile app that finally felt native.",
  },
  {
    title: "What's Next",
    subtitle: "Chapter Four",
    date: "2026",
    description:
      "Now the focus shifts to the platform: plugins, an open API, and a community of builders creating things we never imagined. The story is just getting started.",
  },
];

export default function InteractiveTimelineDemo() {
  return (
    <div className="min-h-full w-full bg-background py-10">
      <div className="mx-auto mb-8 max-w-xl px-4 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Our Story
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Scroll through the timeline — hover the cards and click to expand.
        </p>
      </div>
      <InteractiveTimeline items={items} />
    </div>
  );
}
