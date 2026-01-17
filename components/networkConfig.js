// Network configuration for hero animation

export const SHARED_NODES = [];
const colorPalette = ["#67e8f9", "#4ade80", "#c4b5fd"];

// Generate 40 nodes for hero
for (let i = 0; i < 40; i++) {
  const seed = i * 1.618033988749;
  const side = i % 2 === 0 ? 1 : -1;

  SHARED_NODES.push({
    x: side * (3.5 + (Math.sin(seed * 1.1) * 0.5 + 0.5) * 2.5),
    y: (Math.sin(seed * 2.2) * 0.5) * 10,
    z: (Math.sin(seed * 3.3) * 0.5) * 3,
    speedX: (Math.sin(seed * 5.5) * 0.5) * 0.3,
    speedY: (Math.sin(seed * 6.6) * 0.5) * 0.3,
    phase: (Math.sin(seed * 7.7) * 0.5 + 0.5) * Math.PI * 2,
    color: colorPalette[i % 3],
  });
}

export const CONNECTION_DISTANCE_HERO = 3;
