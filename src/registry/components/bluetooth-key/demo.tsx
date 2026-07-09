import { BluetoothKey } from "./bluetooth-key";

export default function BluetoothKeyDemo() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black p-6">
      <div style={{ transform: "scale(0.35)", transformOrigin: "center" }}>
        <BluetoothKey />
      </div>
    </div>
  );
}