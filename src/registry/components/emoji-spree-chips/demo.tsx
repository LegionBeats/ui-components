import { EmojiSpreeChips } from "./emoji-spree-chips";

const INTERESTS = [
  { id: "music", label: "Music", emoji: "🎧" },
  { id: "travel", label: "Travel", emoji: "✈️" },
  { id: "food", label: "Food", emoji: "🍜" },
  { id: "gaming", label: "Gaming", emoji: "🎮" },
  { id: "art", label: "Art", emoji: "🎨" },
  { id: "fitness", label: "Fitness", emoji: "🏋️" },
  { id: "coffee", label: "Coffee", emoji: "☕" },
  { id: "movies", label: "Movies", emoji: "🎬" },
  { id: "coding", label: "Coding", emoji: "💻" },
];

export default function EmojiSpreeChipsDemo() {
  return (
    <div className="flex w-full justify-center">
      <EmojiSpreeChips interests={INTERESTS} />
    </div>
  );
}
