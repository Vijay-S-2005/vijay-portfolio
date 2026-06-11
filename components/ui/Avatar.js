"use client";

import Image from "next/image";
import { useState } from "react";
import { personal } from "@/lib/data/personal";

function DotGrid() {
  const dots = [];
  const cols = 6;
  const rows = 6;
  const spacing = 14;
  const offset = 6;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={offset + c * spacing}
          cy={offset + r * spacing}
          r="1"
          fill="var(--border)"
        />
      );
    }
  }
  return (
    <svg
      width="92"
      height="92"
      viewBox="0 0 92 92"
      aria-hidden="true"
      className="absolute -right-3 -top-3 opacity-70"
    >
      {dots}
    </svg>
  );
}

function CornerGrid() {
  const dots = [];
  const cols = 5;
  const rows = 5;
  const spacing = 14;
  const offset = 6;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={offset + c * spacing}
          cy={offset + r * spacing}
          r="1"
          fill="var(--border)"
        />
      );
    }
  }
  return (
    <svg
      width="78"
      height="78"
      viewBox="0 0 78 78"
      aria-hidden="true"
      className="absolute -bottom-3 -left-3 opacity-60"
    >
      {dots}
    </svg>
  );
}

export default function Avatar({ size = 280 }) {
  const [errored, setErrored] = useState(false);
  const showImage = personal.avatarSrc && !errored;

  return (
    <div
      className="relative isolate"
      style={{ width: size, height: size }}
    >
      <DotGrid />
      <CornerGrid />

      <div
        className="avatar-ring absolute inset-0 rounded-full"
        style={{
          border: "1px dashed var(--accent-dim)",
        }}
      />
      <div
        className="absolute inset-3 rounded-full"
        style={{
          border: "1px solid var(--border)",
        }}
      />

      <div
        className="absolute inset-4 overflow-hidden rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 25%, rgba(74,158,255,0.10), transparent 55%), var(--surface)",
        }}
      >
        {showImage ? (
          <Image
            src={personal.avatarSrc}
            alt={`${personal.name} portrait`}
            fill
            sizes={`${size}px`}
            priority
            className="object-cover"
            onError={() => setErrored(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span
              className="font-mono"
              style={{
                fontSize: `${Math.round(size * 0.36)}px`,
                color: "var(--accent)",
                letterSpacing: "-0.04em",
                fontWeight: 300,
              }}
            >
              {personal.monogram}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
