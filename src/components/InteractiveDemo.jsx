import { useEffect, useState } from "react";

const points = [64, 130, 196, 262, 328];

export default function InteractiveDemo({ concept }) {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % points.length);
    }, 900);

    return () => window.clearInterval(timer);
  }, [isPlaying]);

  return (
    <div className="demo-card">
      <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "center" }}>
        <div>
          <strong style={{ fontSize: "1rem" }}>{concept}</strong>
          <p style={{ margin: "0.35rem 0 0", color: "var(--muted)" }}>
            A tiny React island that cycles attention focus across token positions.
          </p>
        </div>
        <span className="tag">focus: token {activeIndex + 1}</span>
      </div>

      <svg viewBox="0 0 392 180" role="img" aria-label={`${concept} interactive demo`} style={{ marginTop: "1rem" }}>
        <defs>
          <linearGradient id="attention-line" x1="0%" x2="100%">
            <stop offset="0%" stopColor="#83d2ff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#83d2ff" stopOpacity="0.85" />
          </linearGradient>
        </defs>

        {points.map((x, index) => {
          const isActive = index === activeIndex;
          return (
            <g key={x}>
              <circle
                cx={x}
                cy="138"
                r={isActive ? "18" : "13"}
                fill={isActive ? "#83d2ff" : "rgba(255,255,255,0.13)"}
                stroke="rgba(255,255,255,0.15)"
              />
              <text x={x} y="143" textAnchor="middle" fill={isActive ? "#04131c" : "#d6dbe4"} fontSize="12">
                t{index + 1}
              </text>
              <line x1="196" y1="44" x2={x} y2="120" stroke="url(#attention-line)" strokeWidth={isActive ? "4" : "2"} />
            </g>
          );
        })}

        <circle cx="196" cy="40" r="24" fill="#ffd47e" />
        <text x="196" y="45" textAnchor="middle" fill="#2d1a00" fontSize="12">
          query
        </text>
      </svg>

      <button type="button" onClick={() => setIsPlaying((current) => !current)}>
        {isPlaying ? "Pause animation" : "Resume animation"}
      </button>
    </div>
  );
}
