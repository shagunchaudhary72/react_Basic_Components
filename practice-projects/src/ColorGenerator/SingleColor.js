import React, { useEffect, useState } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [clicked, setClicked] = useState(false);

  const hexValue = `#${hexColor}`;
  const background = rgb.join(",");
  const hex = rgbToHex(...rgb);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setClicked(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [clicked]);

  const clickHandler = () => {
    setClicked(true);
    navigator.clipboard.writeText(hexValue);
  };

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${background})` }}
      onClick={clickHandler}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {clicked && <p className="alert">Copied to Clipboard</p>}
    </article>
  );
};

export default SingleColor;
