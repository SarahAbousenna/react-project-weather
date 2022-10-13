import React from "react";
import "./Switch.css";
import cx from "classnames";

const Switch = ({ rounded = false, isToggled, onToggle }) => {
  const sliderCX = cx("slider", { rounded: rounded });

  return (
    <div>
      <label className="switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className={sliderCX} />
      </label>
      <span className="mode">Switch Mode</span>
    </div>
  );
};

export default Switch;
