import TextBlurIn from "./text-blur-in";

export default function TextBlurInDemo() {
  return (
    <div className="flex w-full items-center justify-center p-10 text-center">
      <TextBlurIn className="max-w-xl text-3xl font-semibold tracking-tight">
        Words that blur into focus, one at a time.
      </TextBlurIn>
    </div>
  );
}