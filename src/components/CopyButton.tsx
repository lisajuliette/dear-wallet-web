"use client";

import { useState } from "react";

type CopyButtonProps = {
  text: string;
  label?: string;
  className?: string;
};

export function CopyButton({
  text,
  label = "copy address",
  className = "",
}: CopyButtonProps) {
  const [display, setDisplay] = useState(label);

  function handleClick() {
    const done = () => {
      setDisplay("copied ♡");
      window.setTimeout(() => setDisplay(label), 1600);
    };
    const fallback = () => {
      const code = document.getElementById("email");
      if (!code) return;
      const range = document.createRange();
      range.selectNodeContents(code);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
      setDisplay("selected, press copy");
    };

    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(done, fallback);
    } else {
      fallback();
    }
  }

  return (
    <button
      className={`btn ghost ${className}`.trim()}
      type="button"
      onClick={handleClick}
      style={{ minHeight: 44, padding: "0 18px", fontSize: 15 }}
    >
      {display}
    </button>
  );
}
