import { useEffect, useRef } from "react";
import { OverWorld } from "../lib/overworld";

const GameCanvas = () => {
  const canvasRef = useRef<null | HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const overworld = new OverWorld(canvas);

    overworld.init();
  }, []);

  return (
    <main
      style={{ transform: "scale(3) translateY(50%)" }}
      className="game-container relative w-[352px] h-[198px] outline outline-1 outline-white mx-auto"
    >
      <canvas
        style={{ imageRendering: "pixelated" }}
        className="game-canvas"
        width="352"
        height="198"
        ref={canvasRef}
      ></canvas>
    </main>
  );
};

export default GameCanvas;
