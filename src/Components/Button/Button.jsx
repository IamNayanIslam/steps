import React from "react";

export default function Button({ onClick, bgColor, textColor, children }) {
  return (
    <>
      <button
        style={{ backgroundColor: bgColor, color: textColor }}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}
