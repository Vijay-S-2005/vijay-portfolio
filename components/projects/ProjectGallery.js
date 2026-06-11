"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "@/components/ui/Lightbox";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ProjectGallery({ images }) {
  const [index, setIndex] = useState(null);

  if (!images || images.length === 0) return null;

  return (
    <section className="mt-16">
      <SectionLabel>Gallery</SectionLabel>

      <div
        className="mt-6 grid gap-4"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        }}
      >
        {images.map((img, i) => (
          <button
            key={`${img.src}-${i}`}
            type="button"
            onClick={() => setIndex(i)}
            className="group relative block aspect-[4/3] w-full overflow-hidden rounded-lg border border-[var(--border)] transition-colors hover:border-[var(--accent)] focus-visible:border-[var(--accent)]"
            aria-label={`Open ${img.alt || "image"} in lightbox`}
          >
            <Image
              src={img.src}
              alt={img.alt || ""}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              loading="lazy"
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10"
            />
          </button>
        ))}
      </div>

      <Lightbox
        images={images}
        index={index}
        onChange={setIndex}
        onClose={() => setIndex(null)}
      />
    </section>
  );
}
