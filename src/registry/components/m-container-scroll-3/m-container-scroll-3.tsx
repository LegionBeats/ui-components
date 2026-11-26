"use client";

import { PlayIcon } from "lucide-react";
import { useRef } from "react";
import { ContainerScroll } from "./container-scroll";
import { Button } from "@/components/ui/button";
import poster from "@/assets/container-scroll-mountains.jpg.asset.json";

export default function ContainerScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative h-96 w-full overflow-y-auto px-4"
      ref={containerRef}
    >
      <div className="h-48" />
      <ContainerScroll
        containerRef={containerRef}
        header={
          <>
            <p className="text-muted-foreground text-sm">Keynote · 12 min</p>
            <h3 className="font-bold text-3xl text-foreground ">
              Watch the launch
            </h3>
          </>
        }
        rotate={[25, 0]}
      >
        <div className="relative aspect-video">
          <img
            alt="Stage with mountains projected on the screen"
            className="size-full object-cover"
            src={poster.url}
          />
          <Button
            aria-label="Play keynote"
            disabled
            title="Poster preview — no video provided by the source"
            className="absolute inset-0 m-auto flex size-16 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-ring"
            type="button"
          >
            <PlayIcon className="ml-1 size-6" />
          </Button>
        </div>
      </ContainerScroll>
      <div className="h-48" />
    </div>
  );
}
