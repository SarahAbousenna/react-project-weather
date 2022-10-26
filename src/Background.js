import React from "react";

function Background(props) {
  if (props.temp < 25) {
    return <div className="from-cyan-700 to-blue-700"></div>;
  } else {
    return <div className="from-yellow-700 to-orange-700"></div>;
  }
}
export default Background;
