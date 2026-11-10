import React, { useEffect, useRef, useState } from "react";

const MAX_PULL = 48;

function SlingButton() {
  const [visible, setVisible] = useState(false);
  const [pull, setPull] = useState({ x: 0, y: 0 });
  const pointerStart = useRef(null);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 420);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const handlePointerDown = (event) => {
    if (event.button !== 0) return;
    pointerStart.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!pointerStart.current) return;
    const dx = event.clientX - pointerStart.current.x;
    const dy = Math.max(0, event.clientY - pointerStart.current.y);
    const distance = Math.hypot(dx, dy);
    const scale = distance > MAX_PULL ? MAX_PULL / distance : 1;
    setPull({ x: dx * scale, y: dy * scale });
  };

  const resetPull = () => {
    pointerStart.current = null;
    setPull({ x: 0, y: 0 });
  };

  const returnToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  if (!visible) return null;

  const distance = Math.hypot(pull.x, pull.y);

  return (
    <div
      className={`sling-return${distance > 2 ? " sling-return--pulled" : ""}`}
      style={{
        "--pull-x": `${pull.x}px`,
        "--pull-y": `${pull.y}px`,
        "--pull-scale": 1 - Math.min(0.12, distance * 0.002),
      }}
    >
      <svg className="sling-return__bands" viewBox="0 0 56 56" aria-hidden="true">
        <line x1="23" y1="28" x2={28 + pull.x} y2={28 + pull.y} />
        <line x1="33" y1="28" x2={28 + pull.x} y2={28 + pull.y} />
      </svg>
      <button
        className="sling-return__button"
        type="button"
        aria-label="Voltar ao início"
        title="Voltar ao início"
        onClick={returnToTop}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={resetPull}
        onPointerCancel={resetPull}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 19V5m-6 6 6-6 6 6" />
        </svg>
      </button>
    </div>
  );
}

export default SlingButton;
