import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { usePerfProfile } from "@/hooks/use-perf-profile";

const PAN_SPEED = 120;
const MIN_SCROLL_OVERFLOW = 0.2;
const FALLBACK_BG = "linear-gradient(135deg, #1e293b, #0f172a)";

const ScrollingPreview = ({
  src,
  alt,
  bg,
  isHovered = false,
}: {
  src: string;
  alt: string;
  bg?: string;
  isHovered?: boolean;
}) => {
  const { reducedMotion: reduceMotion } = usePerfProfile();
  const viewportRef = useRef<HTMLDivElement>(null);
  const [scrollPx, setScrollPx] = useState(0);
  const [bgReady, setBgReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const img = new window.Image();
    const compute = () => {
      const vp = viewportRef.current;
      if (cancelled || !vp || !img.naturalWidth) return;
      const ratio = img.naturalHeight / img.naturalWidth;
      const displayedHeight = vp.clientWidth * ratio;
      const overflow = displayedHeight - vp.clientHeight;
      setScrollPx(overflow > vp.clientHeight * MIN_SCROLL_OVERFLOW ? overflow : 0);
    };
    img.onload = compute;
    img.src = src;
    if (img.complete) compute();
    window.addEventListener("resize", compute);
    return () => {
      cancelled = true;
      window.removeEventListener("resize", compute);
    };
  }, [src]);

  useEffect(() => {
    if (!bg) {
      setBgReady(false);
      return;
    }
    let cancelled = false;
    const img = new window.Image();
    img.onload = () => !cancelled && setBgReady(true);
    img.onerror = () => !cancelled && setBgReady(false);
    img.src = bg;
    return () => {
      cancelled = true;
    };
  }, [bg]);

  const scrolls = scrollPx > 0;
  const animate = !reduceMotion && scrolls;
  const pan = scrollPx / PAN_SPEED;

  return (
    <div
      className="pointer-events-none absolute inset-0"
      role="img"
      aria-label={alt}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#0f172a",
          backgroundImage: bgReady && bg ? `url("${bg}")` : FALLBACK_BG,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        ref={viewportRef}
        className="sp-shot"
        style={{
          position: "absolute",
          left: 20,
          right: 20,
          top: 18,
          bottom: 0,
          overflow: "hidden",
          borderRadius: 8,
          boxShadow:
            "0 24px 50px -12px rgba(0,0,0,0.55), 0 8px 18px -8px rgba(0,0,0,0.45)",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url("${src}")`,
            backgroundSize: scrolls ? "100% auto" : "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: scrolls ? "50% 0%" : "center",
          }}
          animate={
            animate
              ? {
                  backgroundPosition: isHovered ? "50% 100%" : "50% 0%",
                }
              : { backgroundPosition: scrolls ? "50% 0%" : "center" }
          }
          transition={
            animate
              ? {
                  duration: isHovered
                    ? pan
                    : Math.min(Math.max(pan * 0.35, 0.4), 0.75),
                  ease: isHovered ? "linear" : [0.25, 1, 0.5, 1],
                }
              : { duration: 0 }
          }
        />
      </div>
    </div>
  );
};

export default ScrollingPreview;
