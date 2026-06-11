"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { personal } from "@/lib/data/personal";
import Avatar from "@/components/ui/Avatar";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowRightIcon, DownloadIcon, GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-3.5rem)] w-full items-center overflow-hidden"
    >
      <div className="hero-glow" aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[3fr_2fr] lg:gap-16 lg:py-0">
        <div className="order-2 flex flex-col gap-7 lg:order-1">
          <motion.p
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="show"
            className="hero-eyebrow font-mono text-[0.8rem] uppercase text-[var(--accent)]"
          >
            {personal.eyebrow}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
            className="hero-name text-[var(--text)]"
          >
            {personal.name}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
            className="max-w-xl text-lg leading-snug text-[var(--text)]/85 sm:text-xl"
          >
            {personal.tagline}
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="show"
            className="max-w-xl text-[0.95rem] leading-[1.75] text-[var(--muted)]"
          >
            Final-year B.Tech student at {personal.college}. I build backend
            systems, real-time dashboards, and AI-powered applications — things
            that handle real load from real people.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="show"
            className="flex flex-wrap items-center gap-3"
          >
            <MagneticButton
              href="#projects"
              variant="solid"
              ariaLabel="View projects"
            >
              View Projects
              <ArrowRightIcon />
            </MagneticButton>
            <MagneticButton
              href="/resume"
              variant="ghost"
              ariaLabel="View resume"
            >
              <DownloadIcon />
              View Resume
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={5}
            initial="hidden"
            animate="show"
            className="flex items-center gap-5 pt-2 text-[var(--muted)]"
          >
            <Link
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-[var(--accent)]"
            >
              <GitHubIcon />
            </Link>
            <Link
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-[var(--accent)]"
            >
              <LinkedInIcon />
            </Link>
            <span className="font-mono text-[0.7rem] tracking-wide">
              · {personal.location}
            </span>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="show"
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <Avatar size={280} />
        </motion.div>
      </div>
    </section>
  );
}
