import VisualizerButton from "./visualizer-button";

// Silent placeholder wav (data URI) so the demo doesn't require a hosted asset.
const SILENT_WAV =
  "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=";

export default function VisualizerButtonDemo() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <VisualizerButton audioSrc={SILENT_WAV} width={80} height={36} />
    </div>
  );
}