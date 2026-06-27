"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "motion/react";

const codeLines = [
  { indent: 0, text: 'export default function App() {', color: "keyword" },
  { indent: 1, text: 'const data = await fetchAPI()', color: "variable" },
  { indent: 1, text: 'const tested = validate(data)', color: "variable" },
  { indent: 1, text: 'return <Dashboard data={tested} />', color: "jsx" },
  { indent: 0, text: '}', color: "keyword" },
];

const colorMap: Record<string, string> = {
  keyword: "text-accent",
  variable: "text-foreground",
  jsx: "text-accent-dim",
};

export function TypewriterCode() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!isInView || done) return;
    if (currentLine >= codeLines.length) {
      setDone(true);
      return;
    }

    const line = "  ".repeat(codeLines[currentLine].indent) + codeLines[currentLine].text;

    if (currentChar < line.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          updated[currentLine] = line.slice(0, currentChar + 1);
          return updated;
        });
        setCurrentChar((c) => c + 1);
      }, 30 + Math.random() * 30);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
        setDisplayedLines((prev) => [...prev, ""]);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isInView, currentLine, currentChar, done]);

  return (
    <div ref={ref} className="mt-6 overflow-hidden rounded-lg border border-border bg-background">
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
        </div>
        <span className="ml-2 font-mono text-[10px] text-muted-soft">page.tsx</span>
      </div>
      <div className="p-4 font-mono text-xs leading-6 sm:text-sm sm:leading-7">
        {displayedLines.map((line, i) => (
          <div key={i} className={colorMap[codeLines[i]?.color] || "text-muted"}>
            <span className="mr-4 select-none text-muted-soft/50">
              {String(i + 1).padStart(2, " ")}
            </span>
            {line}
            {i === currentLine && !done && (
              <span className="cursor-blink ml-px inline-block h-4 w-[2px] translate-y-[2px] bg-accent" />
            )}
          </div>
        ))}
        {done && (
          <div className="mt-2 text-green-500/70">
            <span className="mr-4 select-none text-muted-soft/50">{" >"}</span>
            ✓ Built &amp; tested successfully
          </div>
        )}
      </div>
    </div>
  );
}
