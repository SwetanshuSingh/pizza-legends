export class OverWorld {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D | null;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
  }

  init() {
    const context = this.ctx;

    if (!context) return;

    const image = new Image();
    image.src = "/images/maps/DemoLower.png";

    image.onload = () => {
      context.drawImage(image, 0, 0);
    };

    const x = 5;
    const y = 6;

    const shadowImage = new Image();
    shadowImage.src = "/images/characters/shadow.png";

    shadowImage.onload = () => {
      context.drawImage(
        shadowImage,
        0,
        0,
        32,
        32,
        x * 16 - 8,
        y * 16 - 18,
        32,
        32
      );
    };

    const heroImage = new Image();
    heroImage.src = "/images/characters/people/hero.png";

    heroImage.onload = () => {
      context.drawImage(
        heroImage,
        0,
        0,
        32,
        32,
        x * 16 - 8,
        y * 16 - 18,
        32,
        32
      );
    };
  }
}
