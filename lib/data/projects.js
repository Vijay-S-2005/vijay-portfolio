export const projects = [
  {
    id: "jamboree-tracking",
    title: "QR-Based Pavilion Tracking System",
    category: "Full-Stack · Real-World Deployment",
    year: "2024",
    featured: true,
    cover: "/projects/jamboree/admin-panel.png",
    summary:
      "A real-time crowd tracking system that managed 15,000+ scouts across 14 zones at a national-scale Jamboree, with QR-based access control and live occupancy analytics.",
    tech: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
      "Chart.js",
    ],
    liveUrl: null,
    repoUrl: null,
    problem:
      "Large multi-zone events run blind: organisers cannot see how many people are inside each zone, when capacity is breached, or how flow is shifting across the venue. At a national Jamboree with 15,000+ attendees and 14 separate pavilions, a manual headcount or static turnstile is not viable — overcrowding becomes a real safety risk before anyone can react.",
    approach:
      "I built a Next.js + MongoDB platform where every attendee carried a unique QR code. Volunteers scanned QRs at the entry/exit of each pavilion through a phone-friendly web client; an Express + Node backend validated, deduplicated and persisted each scan in real time. A central admin dashboard streamed zone-by-zone occupancy, with automated rules that flipped a pavilion to ‘closed for entry’ once a configurable threshold was crossed.",
    features: [
      "QR-based check-in / check-out with idempotent server-side validation.",
      "14 independent zone counters with per-pavilion thresholds and live capacity bars.",
      "Auto access-control: zones lock new entries automatically once full and re-open as people leave.",
      "Live analytics dashboard: minute-level occupancy charts, peak-load tracking, zone heat-map.",
      "Role-scoped admin and volunteer accounts with audit-logged actions.",
      "Responsive scanner UI that worked smoothly on the volunteers' personal phones.",
    ],
    challenges:
      "The hardest part was making concurrent scan validation correct under load — hundreds of scanners hitting the same zone document simultaneously meant naive read-update-write would race. I moved to atomic Mongo updates with conditional capacity checks and de-duped duplicate-scan storms within a short rolling window. Network was patchy in some pavilions, so the scanner client had to be tolerant of dropped requests without double-counting.",
    outcome:
      "The system ran live for the full multi-day event, processed 15,000+ unique attendees across 14 pavilions, and gave organisers, for the first time, a single screen of truth for crowd state. Zero overcrowding incidents were reported during the deployment.",
    gallery: [
      {
        src: "/projects/jamboree/admin-panel.png",
        alt: "Admin control panel showing live zone occupancy.",
      },
      {
        src: "/projects/jamboree/occupancy-chart.png",
        alt: "Per-zone live occupancy chart over time.",
      },
      {
        src: "/projects/jamboree/stats.png",
        alt: "Aggregate statistics across all pavilions.",
      },
      {
        src: "/projects/jamboree/exit-check.png",
        alt: "Volunteer exit-scan UI in the field.",
      },
    ],
  },
  {
    id: "accident-detection",
    title: "Intelligent Road Safety System",
    category: "AI Systems · Computer Vision",
    year: "2024",
    featured: true,
    cover: "/projects/accident/detection-live.png",
    summary:
      "A YOLOv8-based accident detection pipeline that watches CCTV / dashcam feeds in real time and fires SMS + email alerts the moment a crash is detected.",
    tech: [
      "Python",
      "YOLOv8",
      "PyTorch",
      "OpenCV",
      "Flask",
      "Twilio API",
      "Roboflow",
    ],
    liveUrl: null,
    repoUrl: null,
    problem:
      "On Indian highways and urban roads, the gap between an accident happening and an emergency responder being notified is often the difference between a recoverable injury and a fatality. Most CCTV footage is reviewed only after the fact. The opportunity is to detect crashes the second they happen, automatically.",
    approach:
      "I trained a YOLOv8 detector on a curated and Roboflow-annotated dataset of crash and near-crash imagery, then wrapped it in a streaming inference service. A Flask web app accepts an uploaded video or a live feed, runs frame-level inference with confidence smoothing across windows to suppress false positives, and as soon as a sustained ‘accident’ signal crosses threshold, fires a Twilio SMS + email containing a snapshot frame and timestamp to a configured emergency contact list.",
    features: [
      "Real-time detection on uploaded video and live camera feeds via OpenCV.",
      "YOLOv8 model fine-tuned on a Roboflow-annotated accident dataset.",
      "Multi-frame confidence smoothing to suppress single-frame false alarms.",
      "Automated Twilio SMS alert + email notification with snapshot evidence.",
      "Web dashboard to review past detections with their captured frames.",
      "Configurable threshold and notification recipients per deployment.",
    ],
    challenges:
      "Detection on real footage is messy — motion blur, occlusion, weather, and weird camera angles produced a lot of false positives early on. Tuning the confidence threshold alone wasn't enough. I added a temporal stability check (an event has to persist over multiple frames before it counts) and rebalanced the dataset to include more borderline near-miss examples. Latency mattered too: I had to keep per-frame inference fast enough that the alert pipeline didn't lag the live stream.",
    outcome:
      "The end-to-end pipeline reliably detected accident events on test footage and dispatched an SMS + email within seconds of a sustained detection — converting raw camera feeds into an actionable safety signal without a human in the loop.",
    gallery: [
      {
        src: "/projects/accident/detection-live.png",
        alt: "Live accident detection running on a video feed.",
      },
      {
        src: "/projects/accident/yolo-live.png",
        alt: "YOLOv8 inference output on a sample frame.",
      },
      {
        src: "/projects/accident/roboflow-annotation.png",
        alt: "Roboflow dataset annotation workflow.",
      },
      {
        src: "/projects/accident/upload-ui.png",
        alt: "Upload UI for running detection on submitted videos.",
      },
      {
        src: "/projects/accident/detection-result.png",
        alt: "Captured detection result frame.",
      },
      {
        src: "/projects/accident/sms-alert.png",
        alt: "Automated SMS alert delivered via Twilio.",
      },
      {
        src: "/projects/accident/alert-email.png",
        alt: "Automated email alert with snapshot evidence.",
      },
    ],
  },
];

export function getProjectById(id) {
  return projects.find((p) => p.id === id) ?? null;
}

export function getNextProject(id) {
  const i = projects.findIndex((p) => p.id === id);
  if (i === -1) return null;
  return projects[(i + 1) % projects.length];
}
