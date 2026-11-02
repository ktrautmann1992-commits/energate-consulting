import { useEffect, useRef, useState } from "react";
import { COUNT_UP_DURATION, formatCounter, parseCounter } from "@/lib/count-up";

export function CountUp({
  value,
  animate = true,
  onStart,
}: {
  value: string;
  animate?: boolean;
  onStart?: () => void;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(() => (animate ? formatCounter(value, 0) : value));

  useEffect(() => {
    const element = ref.current;
    if (!element || !animate || !parseCounter(value)) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let started = false;
    let observer: IntersectionObserver | undefined;
    const finish = () => {
      cancelAnimationFrame(frame);
      setDisplay(value);
    };
    const start = () => {
      if (started) return;
      started = true;
      observer?.disconnect();
      onStart?.();
      if (motion.matches) {
        finish();
        return;
      }
      let startTime: number | undefined;
      const tick = (time: number) => {
        startTime ??= time;
        const progress = Math.min((time - startTime) / COUNT_UP_DURATION, 1);
        setDisplay(formatCounter(value, progress));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };
    const motionChanged = () => {
      if (motion.matches) {
        observer?.disconnect();
        finish();
      }
    };
    motion.addEventListener("change", motionChanged);
    if (motion.matches || !("IntersectionObserver" in window)) start();
    else {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) start();
        },
        { threshold: 0.25 },
      );
      observer.observe(element);
    }
    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      motion.removeEventListener("change", motionChanged);
    };
  }, [value, animate, onStart]);

  return (
    <span ref={ref} className="counter" aria-label={value}>
      <span className="counter-final" aria-hidden="true">
        {value}
      </span>
      <span className="counter-animated" aria-hidden="true">
        {display}
      </span>
    </span>
  );
}
