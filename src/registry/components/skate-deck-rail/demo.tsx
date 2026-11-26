import { SkateDeckRail, type SkateDeck } from "./skate-deck-rail";

// The source ships no photos, so each deck graphic is a small inline SVG.
const PATH = "M3,150 C3,46 53,4 119,4 C185,4 235,46 235,150 L235,850 C235,954 185,996 119,996 C53,996 3,954 3,850 Z";
function deck(a: string, b: string, c: string) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 238 1000'><defs><linearGradient id='g' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='${a}'/><stop offset='0.55' stop-color='${b}'/><stop offset='1' stop-color='${c}'/></linearGradient></defs><path d='${PATH}' fill='url(#g)'/><circle cx='119' cy='500' r='70' fill='white' fill-opacity='0.85'/><path d='M3,620 L235,560 L235,600 L3,660 Z' fill='white' fill-opacity='0.35'/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
const decks: SkateDeck[] = [
  { id: "1", name: 'Sunset Bands 8.25"', series: "Street Line", width: '8.25"', tag: "$64", description: "Medium concave street deck.", details: ["7-ply maple", "14.25\" wheelbase", "Medium concave"], image: deck("#f97316", "#ec4899", "#7c3aed") },
  { id: "2", name: 'Night Shift 8.0"', series: "Park Line", width: '8.0"', tag: "$59", details: ["7-ply maple", "14\" wheelbase"], image: deck("#0f172a", "#1e3a8a", "#0ea5e9") },
  { id: "3", name: 'Low Tide 8.5"', series: "Transition", width: '8.5"', tag: "$68", details: ["8-ply maple", "Steep concave"], image: deck("#14b8a6", "#0891b2", "#1e40af") },
  { id: "4", name: 'Static 8.38"', series: "Street Line", width: '8.38"', tag: "$64", details: ["7-ply maple"], image: deck("#e5e7eb", "#6b7280", "#111827") },
  { id: "5", name: 'Moss 8.75"', series: "Cruiser", width: '8.75"', tag: "$72", details: ["Mellow concave"], image: deck("#84cc16", "#15803d", "#14532d") },
];

export default function SkateDeckRailDemo() {
  return <SkateDeckRail items={decks} eyebrow="New drop" heading="The deck wall" caption="Tap a deck to take it off the rail." className="w-full" />;
}
