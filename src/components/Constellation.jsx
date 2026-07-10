import React, { useMemo } from "react";

// A static SVG constellation with hex-ish nodes, echoing the AgriData
// hexagon-nodes logo. Deterministic layout so it doesn't shift on rerender.
// Rendered at very low opacity; purely decorative (aria-hidden).
export default function Constellation({
  width = 1440,
  height = 900,
  nodeCount = 42,
  className = ""
}) {
  const { nodes, edges } = useMemo(() => {
    // Poisson-disk-lite: seeded pseudo-random grid with jitter.
    const rng = mulberry32(1337);
    const cols = 12;
    const rows = Math.ceil(nodeCount / cols);
    const cellW = width / cols;
    const cellH = height / rows;
    const pts = [];
    for (let r = 0; r < rows; r += 1) {
      for (let c = 0; c < cols; c += 1) {
        if (pts.length >= nodeCount) break;
        const jitterX = (rng() - 0.5) * cellW * 0.7;
        const jitterY = (rng() - 0.5) * cellH * 0.7;
        pts.push({
          x: c * cellW + cellW / 2 + jitterX,
          y: r * cellH + cellH / 2 + jitterY
        });
      }
    }
    // Connect each node to its 1–2 nearest neighbors within a threshold.
    const maxDist = Math.hypot(cellW, cellH) * 1.15;
    const edges = [];
    for (let i = 0; i < pts.length; i += 1) {
      const dists = pts
        .map((p, j) => ({ j, d: j === i ? Infinity : Math.hypot(p.x - pts[i].x, p.y - pts[i].y) }))
        .filter((n) => n.d < maxDist)
        .sort((a, b) => a.d - b.d)
        .slice(0, 2);
      dists.forEach(({ j }) => {
        if (j > i) edges.push([i, j]);
      });
    }
    return { nodes: pts, edges };
  }, [width, height, nodeCount]);

  return (
    <svg
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="currentColor" strokeWidth="0.6" fill="none">
        {edges.map(([a, b], i) => (
          <line
            key={`e${i}`}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
          />
        ))}
      </g>
      <g fill="currentColor">
        {nodes.map((p, i) => (
          <circle key={`n${i}`} cx={p.x} cy={p.y} r="2" />
        ))}
      </g>
    </svg>
  );
}

// Small deterministic PRNG so layout is stable across renders.
function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t = (t + 0x6d2b79f5) >>> 0;
    let x = t;
    x = Math.imul(x ^ (x >>> 15), x | 1);
    x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}
