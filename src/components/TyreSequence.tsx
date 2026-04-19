"use client";

import { useRef, useEffect, useCallback, useState, forwardRef, useImperativeHandle } from "react";

// =============================================================================
// RUBBER TECH — TyreSequence Component
// Production-ready canvas image sequence renderer
// Supports: autoplay mode, scroll-scrub mode, mobile optimization, HiDPI
//
// IMPORTANT: Drop your PNG/JPEG frame sequence into /public/sequences/tyre/
// Naming convention: frame_0001.png → frame_0120.png (auto-detected)
// =============================================================================

export type SequenceMode = "autoplay" | "scrub";

export interface TyreSequenceProps {
  mode: SequenceMode;
  scrollProgress?: number; // 0–1, used in scrub mode
  width?: number;
  height?: number;
  className?: string;
  fps?: number; // frames per second in autoplay mode (default: 30)
  onLoadProgress?: (progress: number) => void;
  onReady?: () => void;
}

export interface TyreSequenceHandle {
  setMode: (mode: SequenceMode) => void;
  pause: () => void;
  play: () => void;
  setScrubProgress: (progress: number) => void;
}

// Frame naming patterns to try in order
const FRAME_PATTERNS = [
  (i: number) => `/sequences/tyre/frame_${String(i).padStart(4, "0")}.png`,
  (i: number) => `/sequences/tyre/frame_${String(i).padStart(4, "0")}.jpg`,
  (i: number) => `/sequences/tyre/frame_${String(i).padStart(3, "0")}.png`,
  (i: number) => `/sequences/tyre/frame_${String(i).padStart(3, "0")}.jpg`,
  (i: number) => `/sequences/tyre/${String(i).padStart(4, "0")}.png`,
  (i: number) => `/sequences/tyre/${String(i).padStart(4, "0")}.jpg`,
  (i: number) => `/sequences/tyre/${String(i).padStart(3, "0")}.png`,
  (i: number) => `/sequences/tyre/${String(i).padStart(3, "0")}.jpg`,
  (i: number) => `/sequences/tyre/frame_${i}.png`,
  (i: number) => `/sequences/tyre/frame_${i}.jpg`,
  (i: number) => `/sequences/tyre/${i}.png`,
  (i: number) => `/sequences/tyre/${i}.jpg`,
];

// Mobile: load every Nth frame to reduce memory
const MOBILE_FRAME_SKIP = 3;
const MAX_DETECT_FRAMES = 200; // upper bound for auto-detection

async function detectFrameCount(pattern: (i: number) => string): Promise<number> {
  let count = 0;
  for (let i = 1; i <= MAX_DETECT_FRAMES; i++) {
    try {
      const res = await fetch(pattern(i), { method: "HEAD" });
      if (!res.ok) break;
      count = i;
    } catch {
      break;
    }
  }
  return count;
}

async function detectPattern(): Promise<{ pattern: (i: number) => string; count: number } | null> {
  for (const pattern of FRAME_PATTERNS) {
    // Test frame 1 exists
    try {
      const res = await fetch(pattern(1), { method: "HEAD" });
      if (res.ok) {
        const count = await detectFrameCount(pattern);
        if (count > 0) return { pattern, count };
      }
    } catch {
      continue;
    }
  }
  return null;
}

const TyreSequence = forwardRef<TyreSequenceHandle, TyreSequenceProps>(
  (
    {
      mode: initialMode,
      scrollProgress = 0,
      width = 800,
      height = 800,
      className = "",
      fps = 30,
      onLoadProgress,
      onReady,
    },
    ref
  ) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const framesRef = useRef<HTMLImageElement[]>([]);
    const currentFrameRef = useRef(0);
    const rafRef = useRef<number>(0);
    const modeRef = useRef<SequenceMode>(initialMode);
    const isPlayingRef = useRef(false);
    const lastFrameTimeRef = useRef(0);
    const totalFramesRef = useRef(0);

    const [loadProgress, setLoadProgress] = useState(0);
    const [isReady, setIsReady] = useState(false);
    const [hasSequence, setHasSequence] = useState(true); // optimistic
    const [currentMode, setCurrentMode] = useState<SequenceMode>(initialMode);

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const frameSkip = isMobile ? MOBILE_FRAME_SKIP : 1;
    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;

    // Draw frame onto canvas
    const drawFrame = useCallback((frameIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const frames = framesRef.current;
      if (!frames.length) return;

      const clampedIndex = Math.max(0, Math.min(frameIndex, frames.length - 1));
      const img = frames[clampedIndex];
      if (!img || !img.complete || !img.naturalWidth) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Center-fit image in canvas
      const scale = Math.min(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
      const drawW = img.naturalWidth * scale;
      const drawH = img.naturalHeight * scale;
      const drawX = (canvas.width - drawW) / 2;
      const drawY = (canvas.height - drawH) / 2;
      ctx.drawImage(img, drawX, drawY, drawW, drawH);
    }, []);

    // Animation loop for autoplay mode
    const animate = useCallback(
      (timestamp: number) => {
        if (modeRef.current !== "autoplay" || !isPlayingRef.current) return;
        const interval = 1000 / fps;
        if (timestamp - lastFrameTimeRef.current >= interval) {
          currentFrameRef.current = (currentFrameRef.current + 1) % framesRef.current.length;
          drawFrame(currentFrameRef.current);
          lastFrameTimeRef.current = timestamp;
        }
        rafRef.current = requestAnimationFrame(animate);
      },
      [fps, drawFrame]
    );

    // Load all frames
    useEffect(() => {
      let cancelled = false;

      async function loadFrames() {
        const detected = await detectPattern();

        if (!detected || detected.count === 0) {
          setHasSequence(false);
          // Draw a placeholder tyre silhouette on canvas
          const canvas = canvasRef.current;
          if (canvas) {
            const ctx = canvas.getContext("2d");
            if (ctx) {
              ctx.fillStyle = "rgba(0,0,0,0.05)";
              ctx.beginPath();
              ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width * 0.42, 0, Math.PI * 2);
              ctx.fill();
              ctx.strokeStyle = "rgba(0,0,0,0.2)";
              ctx.lineWidth = canvas.width * 0.08;
              ctx.stroke();
              // Inner circle
              ctx.clearRect(
                canvas.width / 2 - canvas.width * 0.22,
                canvas.height / 2 - canvas.height * 0.22,
                canvas.width * 0.44,
                canvas.height * 0.44
              );
              ctx.fillStyle = "rgba(0,0,0,0.7)";
              ctx.beginPath();
              ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width * 0.22, 0, Math.PI * 2);
              ctx.fill();
            }
          }
          onReady?.();
          setIsReady(true);
          return;
        }

        const { pattern, count } = detected;
        totalFramesRef.current = count;

        // Build list of frame indices to load (skip on mobile)
        const indicesToLoad: number[] = [];
        for (let i = 1; i <= count; i += frameSkip) {
          indicesToLoad.push(i);
        }
        // Always include last frame
        if (indicesToLoad[indicesToLoad.length - 1] !== count) {
          indicesToLoad.push(count);
        }

        const loaded: HTMLImageElement[] = new Array(indicesToLoad.length);
        let loadedCount = 0;

        await Promise.all(
          indicesToLoad.map((frameNum, idx) =>
            new Promise<void>((resolve) => {
              if (cancelled) { resolve(); return; }
              const img = new Image();
              img.onload = () => {
                if (!cancelled) {
                  loaded[idx] = img;
                  loadedCount++;
                  const prog = Math.round((loadedCount / indicesToLoad.length) * 100);
                  setLoadProgress(prog);
                  onLoadProgress?.(prog);
                  // Draw first frame as soon as it loads
                  if (idx === 0) drawFrame(0);
                }
                resolve();
              };
              img.onerror = () => resolve();
              img.src = pattern(frameNum);
            })
          )
        );

        if (cancelled) return;

        framesRef.current = loaded.filter(Boolean);

        if (framesRef.current.length > 0) {
          drawFrame(0);
          setIsReady(true);
          onReady?.();

          // Start autoplay if in that mode
          if (modeRef.current === "autoplay") {
            isPlayingRef.current = true;
            rafRef.current = requestAnimationFrame(animate);
          }
        }
      }

      loadFrames();
      return () => {
        cancelled = true;
        cancelAnimationFrame(rafRef.current);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Handle mode changes
    useEffect(() => {
      modeRef.current = currentMode;
      if (currentMode === "autoplay" && isReady && framesRef.current.length > 0) {
        isPlayingRef.current = true;
        cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(animate);
      } else if (currentMode === "scrub") {
        isPlayingRef.current = false;
        cancelAnimationFrame(rafRef.current);
      }
    }, [currentMode, isReady, animate]);

    // Handle scroll-scrub
    useEffect(() => {
      if (currentMode !== "scrub" || !isReady || framesRef.current.length === 0) return;
      const totalFrames = framesRef.current.length;
      const targetFrame = Math.round(scrollProgress * (totalFrames - 1));
      if (targetFrame !== currentFrameRef.current) {
        currentFrameRef.current = targetFrame;
        drawFrame(targetFrame);
      }
    }, [scrollProgress, currentMode, isReady, drawFrame]);

    // Expose handle to parent
    useImperativeHandle(ref, () => ({
      setMode: (mode: SequenceMode) => {
        setCurrentMode(mode);
      },
      pause: () => {
        isPlayingRef.current = false;
        cancelAnimationFrame(rafRef.current);
      },
      play: () => {
        if (modeRef.current === "autoplay" && framesRef.current.length > 0) {
          isPlayingRef.current = true;
          rafRef.current = requestAnimationFrame(animate);
        }
      },
      setScrubProgress: (progress: number) => {
        if (!isReady || framesRef.current.length === 0) return;
        const totalFrames = framesRef.current.length;
        const targetFrame = Math.round(progress * (totalFrames - 1));
        if (targetFrame !== currentFrameRef.current) {
          currentFrameRef.current = targetFrame;
          drawFrame(targetFrame);
        }
      }
    }));

    // Cleanup
    useEffect(() => {
      return () => {
        cancelAnimationFrame(rafRef.current);
      };
    }, []);

    // Loading progress (0–80% threshold before showing canvas)
    const showCanvas = loadProgress >= 80 || isReady;

    return (
      <div className={`relative ${className}`} style={{ width, height: "auto", aspectRatio: `${width}/${height}` }}>
        {/* Loading bar */}
        {!isReady && hasSequence && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <div className="w-4/5 max-w-xs">
              <div className="flex justify-between text-xs text-black/50 mb-2 font-mono">
                <span>Loading Tyre</span>
                <span>{loadProgress}%</span>
              </div>
              <div className="h-1 bg-black/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-black rounded-full transition-all duration-300"
                  style={{ width: `${loadProgress}%` }}
                />
              </div>
            </div>
            {/* Spinning placeholder ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="rounded-full border-4 border-black/5 border-t-black/40 animate-spin"
                style={{ width: width * 0.6, height: width * 0.6 }}
              />
            </div>
          </div>
        )}

        {/* Canvas element */}
        <canvas
          ref={canvasRef}
          width={width * dpr}
          height={height * dpr}
          className="w-full h-full"
          style={{
            display: "block",
            background: "#ffffff",
            opacity: showCanvas ? 1 : 0,
            transition: "opacity 0.4s ease",
            imageRendering: "auto",
          }}
          aria-label="Rotating Nankang tyre animation"
          role="img"
        />
      </div>
    );
  }
);

TyreSequence.displayName = "TyreSequence";
export default TyreSequence;

// FILE COMPLETE ✓
