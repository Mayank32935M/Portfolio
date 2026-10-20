import React, { Suspense, lazy, useEffect } from "react";
import { usePerfProfile } from "@/hooks/use-perf-profile";
import { setSceneStatus, useSceneStatus } from "@/lib/scene-health";

const KeyboardScene = lazy(() => import("./keyboard/keyboard-scene"));

class SceneErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    setSceneStatus("failed");
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function SceneSession({ maxDpr }: { maxDpr: number }) {
  const status = useSceneStatus();

  useEffect(() => {
    let context: WebGLRenderingContext | WebGL2RenderingContext | null = null;
    try {
      const canvas = document.createElement("canvas");
      context = canvas.getContext("webgl2") || canvas.getContext("webgl");
    } catch {
      // Driver or browser policy error
    }
    if (!context) {
      setSceneStatus("failed");
      return () => setSceneStatus("idle");
    }
    context.getExtension("WEBGL_lose_context")?.loseContext();
    setSceneStatus("loading");
    return () => setSceneStatus("idle");
  }, []);

  useEffect(() => {
    if (status !== "loading") return;
    const timeout = window.setTimeout(() => setSceneStatus("failed"), 20_000);
    return () => window.clearTimeout(timeout);
  }, [status]);

  if (status === "idle" || status === "failed") return null;
  return (
    <SceneErrorBoundary>
      <Suspense fallback={null}>
        <KeyboardScene maxDpr={maxDpr} />
      </Suspense>
    </SceneErrorBoundary>
  );
}

export default function AnimatedBackground() {
  const { disable3D, maxDpr, ready } = usePerfProfile();
  if (!ready || disable3D) return null;
  return <SceneSession maxDpr={maxDpr} />;
}
