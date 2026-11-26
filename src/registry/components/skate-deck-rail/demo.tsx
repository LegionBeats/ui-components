import { SkateDeckRail, type SkateDeck } from "./skate-deck-rail";

const decks: SkateDeck[] = [
  {
    id: "sunset-bands",
    name: 'Sunset Bands 8.25"',
    series: "Horizon",
    width: '8.25"',
    tag: "$68",
    description: "Orange-to-indigo horizon bands with a small white sun riding high on the nose.",
    details: ['8.25" × 31.9"', '14.25" wheelbase', "7-ply maple", "Medium concave"],
    image: "https://cdn.21st.dev/assets/mirror/7f/7f518c4d5952583600930c47944c6137d2f03c63d22430fd5ef2877ef524c435.webp",
  },
  {
    id: "checker-fade",
    name: 'Checker Fade 8.0"',
    series: "Grid",
    width: '8.0"',
    tag: "$62",
    description: "Black-and-white checks that shrink and fade out toward the tail.",
    details: ['8.0" × 31.5"', '14" wheelbase', "7-ply maple", "Mellow concave"],
    image: "https://cdn.21st.dev/assets/mirror/3e/3ec6f6c0917723a5b14f0a51c8df70b61fdc45cd16e690a83c7e4852e3394ef8.webp",
  },
  {
    id: "koi",
    name: 'Koi Pair 8.5"',
    series: "Still Water",
    width: '8.5"',
    tag: "$79",
    description: "Two koi, orange and white, swimming an S-curve through deep navy water.",
    details: ['8.5" × 32.1"', '14.38" wheelbase', "7-ply maple", "Medium concave"],
    image: "https://cdn.21st.dev/assets/mirror/4d/4da161bb017429f4badf13681171f08542821bf03411cbaf863685a08d8811c4.webp",
  },
  {
    id: "marble-ink",
    name: 'Marble Ink 8.38"',
    series: "Ink Lab",
    width: '8.38"',
    tag: "$74",
    description: "Teal and gold ink swirls, marbled from nose to tail.",
    details: ['8.38" × 32"', '14.25" wheelbase', "7-ply maple", "Steep concave"],
    image: "https://cdn.21st.dev/assets/mirror/6a/6a173e7be217db37d3c7c59c530020f075a3efd540d7ce07e54bdb7a7e08f18d.webp",
  },
  {
    id: "cat-eyes",
    name: 'Cat Eyes 8.0"',
    series: "After Dark",
    width: '8.0"',
    tag: "$64",
    description: "A pair of yellow cat eyes glowing out of a jet-black deck.",
    details: ['8.0" × 31.5"', '14" wheelbase', "7-ply maple", "Medium concave"],
    image: "https://cdn.21st.dev/assets/mirror/02/0202600c57df636bbde83892886683852084986b925f4fdc9f7aae89c2d9be5a.webp",
  },
  {
    id: "topo-lines",
    name: 'Topo Lines 8.25"',
    series: "Contour",
    width: '8.25"',
    tag: "$66",
    description: "Fine brown contour lines on cream, like a trail map to the next spot.",
    details: ['8.25" × 31.9"', '14.25" wheelbase', "7-ply maple", "Mellow concave"],
    image: "https://cdn.21st.dev/assets/mirror/63/6319ee8514000eb5c0040f9cbb7e04dbcc685e8a29ec341baafa7f387fe7329f.webp",
  },
  {
    id: "flame-tail",
    name: 'Flame Tail 8.5"',
    series: "Raw",
    width: '8.5"',
    tag: "$72",
    description: "Natural maple veneer with red flames licking up from the tail.",
    details: ['8.5" × 32.1"', '14.38" wheelbase', "7-ply maple", "Steep concave"],
    image: "https://cdn.21st.dev/assets/mirror/5b/5bc21abe7b0d74beee04f22e9d0beab9775cc5e05dc30cd3e64085a90222f5a2.webp",
  },
  {
    id: "halftone-wave",
    name: 'Halftone Wave 8.38"',
    series: "Halftone",
    width: '8.38"',
    tag: "$70",
    description: "A breaking wave printed in blue halftone dots on white.",
    details: ['8.38" × 32"', '14.25" wheelbase', "7-ply maple", "Medium concave"],
    image: "https://cdn.21st.dev/assets/mirror/1f/1fb9742d3886168954b81277d70db0449770a2ef6f0368633a2020b9c0b432a6.webp",
  },
];

export default function SkateDeckRailDemo({ photos }: { photos?: string[] }) {
  const items = decks.map((deck, index) => ({ ...deck, image: photos?.[index] ?? deck.image }));
  return <SkateDeckRail items={items} eyebrow="New drop" heading="The deck wall" caption="Tap a deck to take it off the rail." className="w-full" />;
}
