import { BeatPackRail, type BeatPack } from "./beat-pack-rail";

const base: Omit<BeatPack, "image">[] = [
  { id: "self-made-artist", name: "Self Made Artist", format: "vinyl", tag: "50 beats", description: "50 of the finest beats for independent artists.", tracks: ["Grind Mode", "Own Lane", "No Label", "Day One"] },
  { id: "tech-n9ne-gold", name: "Tech N9ne Gold Pack", format: "tape", tag: "24 beats", description: "Contest edition beats with gold-pack exclusives.", tracks: ["Strange Music", "Snake Bite", "K.C. Nights", "Gold Rush"] },
  { id: "west-coast-legends", name: "West Coast Legends Deluxe", format: "vinyl", tag: "32 beats", description: "Beats & features package with West Coast icons.", tracks: ["Sunset Blvd", "Lowrider", "Long Beach", "Palm Trees"] },
  { id: "free-beats", name: "Free Beats For Life", format: "vinyl", tag: "FREE", description: "A lifetime pass to new drops, every month.", tracks: ["Welcome Pack", "Monthly Drop", "Vault Pull", "Bonus Cut"] },
  { id: "snoop-contest", name: "Snoop Contest Pack", format: "tape", tag: "18 beats", description: "Contest beats ready for your entry.", tracks: ["Laid Back", "Doggystyle", "Chronic Hour", "G-Funk"] },
  { id: "industry-icons", name: "Industry Icons", format: "tape", tag: "40 beats", description: "Featuring legends from across the game.", tracks: ["Hall of Fame", "Platinum", "Headliner", "Encore"] },
  { id: "x-pack", name: "The X Pack", format: "vinyl", tag: "20 beats", description: "Xzibit-presented beats, USB edition.", tracks: ["X Marks", "Pimp the Beat", "Westside", "Final X"] },
];

export default function Demo({ images = {} }: { images?: Record<string, string> }) {
  const packs = base.map((p) => ({ ...p, image: images[p.id] ?? "", cta: { label: p.tag === "FREE" ? "Get it free" : "Learn more", href: "#" } }));
  return <BeatPackRail packs={packs} title="Legion Beats — The Crate" />;
}
