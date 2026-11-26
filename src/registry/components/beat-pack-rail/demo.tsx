import { BeatPackRail, type BeatPack } from "./beat-pack-rail";

const base: Omit<BeatPack, "image">[] = [
  { id: "self-made-artist", name: "Self Made Artist", format: "vinyl", tag: "$29", description: "50 of the finest beats for independent artists.", tracks: ["Grind Mode", "Own Lane", "No Label", "Day One"] },
  { id: "tech-n9ne-gold", name: "Tech N9ne Gold Pack", format: "tape", tag: "$49", description: "Contest edition beats with gold-pack exclusives.", tracks: ["Strange Music", "Snake Bite", "K.C. Nights", "Gold Rush"] },
  { id: "west-coast-legends", name: "West Coast Legends Deluxe", format: "box", tag: "$79", description: "Beats & features package with West Coast icons.", tracks: ["Sunset Blvd", "Lowrider", "Long Beach", "Palm Trees"] },
  { id: "free-beats", name: "Free Beats For Life", format: "vinyl", tag: "FREE", description: "A lifetime pass to new drops, every month.", tracks: ["Welcome Pack", "Monthly Drop", "Vault Pull", "Bonus Cut"] },
  { id: "snoop-contest", name: "Snoop Contest Pack", format: "tape", tag: "$39", description: "Contest beats ready for your entry.", tracks: ["Laid Back", "Doggystyle", "Chronic Hour", "G-Funk"] },
  { id: "industry-icons", name: "Industry Icons", format: "box", tag: "$99", description: "Featuring legends from across the game.", tracks: ["Hall of Fame", "Platinum", "Headliner", "Encore"] },
  { id: "x-pack", name: "The X Pack", format: "box", tag: "$59", description: "Xzibit-presented beats, USB edition.", tracks: ["X Marks", "Pimp the Beat", "Westside", "Final X"] },
];

export default function Demo({ images = {} }: { images?: Record<string, string> }) {
  const packs = base.map((p) => ({ ...p, image: images[p.id] ?? "" }));
  return <BeatPackRail packs={packs} title="Legion Beats — The Crate" />;
}
