"use client";

import { HoverExpand_001 } from "./hover-expand";

const images = [
  "photo-1500673922987-e212871fec22",
  "photo-1470071459604-3b5ec3a7fe05",
  "photo-1509316975850-ff9c5deb0cd9",
  "photo-1513836279014-a89f7a76ae86",
  "photo-1518495973542-4542c06a5843",
  "photo-1469474968028-56623f02e42e",
  "photo-1447752875215-b2761acb3c5d",
  "photo-1441974231531-c6227db76b6e",
  "photo-1465146344425-f00d5f5c8f07",
].map((id, i) => ({
  src: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=70`,
  alt: "Nature photograph",
  code: `# ${i + 1}`,
}));

export default function HoverExpandDemo() {
  return (
    <div className="flex h-[28rem] w-full items-center justify-center overflow-hidden rounded-xl bg-[#f5f4f3]">
      <HoverExpand_001 images={images} />
    </div>
  );
}
