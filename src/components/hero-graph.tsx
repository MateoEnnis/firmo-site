"use client";

import { motion } from "motion/react";

const nodes = [
  { id: "trigger", x: 50, y: 80, label: "Trigger" },
  { id: "n8n", x: 200, y: 40, label: "n8n" },
  { id: "api", x: 200, y: 120, label: "API" },
  { id: "ai", x: 350, y: 30, label: "AI" },
  { id: "test", x: 350, y: 100, label: "Test" },
  { id: "deploy", x: 500, y: 70, label: "Deploy" },
];

const edges: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
  [2, 4],
  [3, 5],
  [4, 5],
];

export function HeroGraph() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative mx-auto mt-16 w-full max-w-xl"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-0 -m-8 rounded-3xl bg-accent/5 blur-[60px]" />
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          viewBox="0 0 550 160"
          className="w-full"
          fill="none"
        >
          {edges.map(([from, to], i) => {
            const a = nodes[from];
            const b = nodes[to];
            const pathId = `edge-${i}`;
            return (
              <g key={pathId}>
                <line
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke="#292524"
                  strokeWidth={1}
                  strokeDasharray="4 4"
                />
                <line
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke="#f59e0b"
                  strokeWidth={1}
                  strokeDasharray="4 4"
                  opacity={0.3}
                />
                <path
                  id={pathId}
                  d={`M${a.x},${a.y} L${b.x},${b.y}`}
                  fill="none"
                />
                <circle r="3" fill="#f59e0b" opacity="0.9">
                  <animateMotion
                    dur={`${2.5 + i * 0.4}s`}
                    repeatCount="indefinite"
                    keyPoints="0;1"
                    keyTimes="0;1"
                  >
                    <mpath href={`#${pathId}`} />
                  </animateMotion>
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.1;0.9;1"
                    dur={`${2.5 + i * 0.4}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                <circle r="3" fill="#f59e0b" opacity="0">
                  <animateMotion
                    dur={`${2.5 + i * 0.4}s`}
                    repeatCount="indefinite"
                    keyPoints="0;1"
                    keyTimes="0;1"
                  >
                    <mpath href={`#${pathId}`} />
                  </animateMotion>
                  <animate
                    attributeName="opacity"
                    values="0;0.4;0.4;0"
                    keyTimes="0;0.1;0.9;1"
                    dur={`${2.5 + i * 0.4}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="r"
                    values="3;8;3"
                    dur={`${2.5 + i * 0.4}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}

          {nodes.map((node, i) => (
            <g key={node.id}>
              <circle
                cx={node.x}
                cy={node.y}
                r="20"
                fill="#1c1917"
                stroke="#292524"
                strokeWidth={1}
              />
              <circle
                cx={node.x}
                cy={node.y}
                r="20"
                fill="none"
                stroke="#f59e0b"
                strokeWidth={1}
                opacity={0.15}
              />
              <circle
                cx={node.x}
                cy={node.y}
                r="4"
                fill="#f59e0b"
                opacity={0.6}
              >
                <animate
                  attributeName="opacity"
                  values="0.3;0.8;0.3"
                  dur={`${2 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
              <text
                x={node.x}
                y={node.y + 32}
                textAnchor="middle"
                fill="#a8a29e"
                fontSize="10"
                fontFamily="var(--font-geist-mono), monospace"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </motion.div>
    </motion.div>
  );
}
