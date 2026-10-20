import * as React from "react";

export type MotionPref = "on" | "off" | null;

const MOTION_PREF_KEY = "portfolio:motion-pref";
let motionPref: MotionPref = null;
let motionInitialized = false;
const motionListeners = new Set<() => void>();

function ensureMotionInit() {
  if (motionInitialized || typeof window === "undefined") return;
  try {
    const v = localStorage.getItem(MOTION_PREF_KEY);
    motionPref = v === "on" || v === "off" ? v : null;
  } catch {
    /* storage blocked */
  }
  motionInitialized = true;
}

export function setMotionPreference(pref: MotionPref) {
  motionPref = pref;
  try {
    if (pref) localStorage.setItem(MOTION_PREF_KEY, pref);
    else localStorage.removeItem(MOTION_PREF_KEY);
  } catch {
    /* ignore */
  }
  motionListeners.forEach((l) => l());
}

export function enableMotion() {
  setMotionPreference("on");
}

function subscribeMotion(listener: () => void) {
  motionListeners.add(listener);
  return () => motionListeners.delete(listener);
}

function getMotionSnapshot(): MotionPref {
  ensureMotionInit();
  return motionPref;
}

function getMotionServerSnapshot(): MotionPref {
  return null;
}

export type PerfProfile = {
  reducedMotion: boolean;
  rawReducedMotion: boolean;
  motionEnabled: boolean;
  isMobile: boolean;
  lowEnd: boolean;
  disable3D: boolean;
  disableDecorative: boolean;
  particleCount: number;
  maxDpr: number;
  ready: boolean;
};

function detectSaveData(): boolean {
  if (typeof navigator === "undefined") return false;
  return (
    (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData ?? false
  );
}

export function usePerfProfile(): PerfProfile {
  const [state, setState] = React.useState({
    reducedMotion: false,
    isMobile: false,
    saveData: false,
    ready: false,
  });

  React.useEffect(() => {
    const motionMq = matchMedia("(prefers-reduced-motion: reduce)");
    const mobileMq = matchMedia("(max-width: 768px)");

    const update = () =>
      setState({
        reducedMotion: motionMq.matches,
        isMobile: mobileMq.matches,
        saveData: detectSaveData(),
        ready: true,
      });

    update();
    motionMq.addEventListener("change", update);
    mobileMq.addEventListener("change", update);
    return () => {
      motionMq.removeEventListener("change", update);
      mobileMq.removeEventListener("change", update);
    };
  }, []);

  const { reducedMotion: rawReducedMotion, isMobile, saveData, ready } = state;
  const currentMotionPref = React.useSyncExternalStore(
    subscribeMotion,
    getMotionSnapshot,
    getMotionServerSnapshot
  );

  return React.useMemo<PerfProfile>(() => {
    const reducedMotion =
      !ready || (currentMotionPref === "on" ? false : currentMotionPref === "off" ? true : rawReducedMotion);
    const motionEnabled = currentMotionPref === "on";
    const lowEnd = saveData;
    const disable3D = reducedMotion || saveData;
    const disableDecorative = reducedMotion;
    const particleCount = disableDecorative ? 0 : isMobile ? 30 : 100;
    const maxDpr = isMobile ? 1.5 : 2;
    return {
      reducedMotion,
      rawReducedMotion,
      motionEnabled,
      isMobile,
      lowEnd,
      disable3D,
      disableDecorative,
      particleCount,
      maxDpr,
      ready,
    };
  }, [rawReducedMotion, currentMotionPref, isMobile, saveData, ready]);
}
