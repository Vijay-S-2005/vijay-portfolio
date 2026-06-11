"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  // Mac/non-Mac never changes within a session.
  return () => {};
}

function getSnapshot() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  const platform = navigator.platform || "";
  return /Mac|iPhone|iPod|iPad/i.test(platform) ||
    /Mac|iPhone|iPod|iPad/i.test(ua);
}

function getServerSnapshot() {
  return false;
}

export function useIsMac() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
