"use client";

import { CardSwipe } from "./card-swipe";

const images = [
  "photo-1506744038136-46273834b3fb",
  "photo-1441974231531-c6227db76b6e",
  "photo-1518837695005-2083093ee35b",
  "photo-1470071459604-3b5ec3a7fe05",
  "photo-1465146344425-f00d5f5c8f07",
  "photo-1500375592092-40eb2168fd21",
].map((id) => ({
  src: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=70`,
  alt: "Nature photograph",
}));

export default function CardSwipeDemo() {
  return (
    <div className="flex h-[30rem] w-full items-center justify-center overflow-hidden rounded-xl bg-[#f5f4f3]">
      <CardSwipe images={images} showPagination loop />
    </div>
  );
}
