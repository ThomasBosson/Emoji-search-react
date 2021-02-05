import { useState } from "react";

const Line = ({ title, symbol }) => {
  const [copy, setCopy] = useState(false);
  return (
    <div
      className="line-results"
      onMouseOver={() => {
        setCopy(true);
      }}
      onMouseLeave={() => {
        setCopy(false);
      }}
      onClick={() => {
        navigator.clipboard.writeText(symbol);
      }}
    >
      <span>
        {symbol} {title}
      </span>
      <div>
        {copy ? (
          <span style={{ fontSize: 15, color: "black", cursor: "pointer" }}>
            Click to copy !
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Line;
