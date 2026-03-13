import { useEffect, useState } from "react";

/**
 * InteractiveDemo — generic animated concept visualizer.
 *
 * Props:
 *   concept      {string}   Title shown in the card header
 *   subtitle     {string}   Optional subtitle / description line
 *   items        {string[]} Labels for the nodes (default: t1…t5)
 *   centerLabel  {string}   Label for the center query node (default: "query")
 *   interval     {number}   Animation interval in ms (default: 900)
 */
export default function InteractiveDemo({
  concept,
  subtitle = "An animated visualization cycling focus across positions.",
  items,
  centerLabel = "query",
  interval = 900,
}) {
  const labels = items && items.length > 0 ? items : ["t1", "t2", "t3", "t4", "t5"];
  const count = labels.length;

  // Distribute nodes evenly across a fixed SVG width
  const svgW = 392;
  const nodeY = 138;
  const centerY = 40;
  const margin = 48;
  const step = (svgW - margin * 2) / (count - 1 || 1);
  const points = labels.map((_, i) => margin + i * step);

  const [activeIndex, setActiveIndex] = useState(Math.floor(count / 2));
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % count);
    }, interval);
    return () => window.clearInterval(timer);
  }, [isPlaying, count, interval]);

  const centerX = svgW / 2;

  return (
    <div className="demo-card">
      <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "center" }}>
        <div>
          <strong style={{ fontSize: "1rem" }}>{concept}</strong>
          <p style={{ margin: "0.35rem 0 0", color: "var(--muted)" }}>{subtitle}</p>
        </div>
        <span className="tag">focus: {labels[activeIndex]}</span>
      </div>

      <svg viewBox={`0 0 ${svgW} 180`} role="img" aria-label={`${concept} interactive demo`} style={{ marginTop: "1rem" }}>
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
                cy={nodeY}
                r={isActive ? "18" : "13"}
                fill={isActive ? "#83d2ff" : "rgba(255,255,255,0.13)"}
                stroke="rgba(255,255,255,0.15)"
              />
              <text x={x} y={nodeY + 5} textAnchor="middle" fill={isActive ? "#04131c" : "#d6dbe4"} fontSize="11">
                {labels[index]}
              </text>
              <line
                x1={centerX}
                y1={centerY + 24}
                x2={x}
                y2={nodeY - 18}
                stroke="url(#attention-line)"
                strokeWidth={isActive ? "4" : "2"}
              />
            </g>
          );
        })}

        <circle cx={centerX} cy={centerY} r="24" fill="#ffd47e" />
        <text x={centerX} y={centerY + 5} textAnchor="middle" fill="#2d1a00" fontSize="11">
          {centerLabel}
        </text>
      </svg>

      <button type="button" onClick={() => setIsPlaying((current) => !current)}>
        {isPlaying ? "Pause animation" : "Resume animation"}
      </button>
    </div>
  );
}
