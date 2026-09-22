import { useId } from "react";
import "./lever-switch.css";

type LeverSwitchProps = {
  defaultChecked?: boolean;
  label?: string;
};

export function LeverSwitch({
  defaultChecked = false,
  label = "Toggle lever",
}: LeverSwitchProps) {
  const id = useId();

  return (
    <div className="lever-switch">
      <input
        id={id}
        className="lever-switch__input"
        type="checkbox"
        defaultChecked={defaultChecked}
        aria-label={label}
      />
      <div className="lever-switch__handle-wrapper" aria-hidden="true">
        <div className="lever-switch__handle">
          <div className="lever-switch__knob" />
          <div className="lever-switch__bar-wrapper">
            <div className="lever-switch__bar" />
          </div>
        </div>
      </div>
      <div className="lever-switch__base" aria-hidden="true">
        <div className="lever-switch__base-inside" />
      </div>
    </div>
  );
}

export default LeverSwitch;