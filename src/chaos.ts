export class Chaos {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  width: number;
  height: number;
  color: string;

  constructor() {
    this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d");
    this.setSize(window.innerWidth, window.innerHeight);
  }

  setSize(width: number, height: number) {
    this.width = this.canvas.width = width;
    this.height = this.canvas.height = height;
  }

  /**
   * Clears the canvas by filling it with the color specified, or erasing all
   * pixels if no color is specified.
   */
  clear(color?: string) {
    if (color) {
      this.context.fillStyle = color;
      this.context.fillRect(0, 0, this.width, this.height);
    } else {
      this.context.clearRect(0, 0, this.width, this.height);
    }
  }

  /**
   * Pops up a bitmap image representation of the canvas in a new window.
   */
  popImage() {
    const win = window.open("", "Canvas Image"),
      src = this.canvas.toDataURL("image/png");

    win.document.write(
      `<img src="${src}" width="${this.width}" height="${this.height}" />`
    );
  }
}
