import { Chaos } from "./chaos.js";

window.onload = function () {
  let size: number;
  let maxDepth = 0;
  let chaos: Chaos;

  init();

  function init() {
    chaos = new Chaos();

    size = chaos.height * 0.5;

    draw();

    document.body.addEventListener("keyup", function (event) {
      console.log(event.code);
      switch (event.code) {
        case "Space": // space
          maxDepth += 1;
          draw();
          break;

        case "p": // p
          chaos.popImage();
          break;

        default:
          break;
      }
    });
  }

  function draw() {
    chaos.clear();
    chaos.context.save();
    chaos.context.translate(chaos.width * 0.5, chaos.height * 0.6);
    chaos.context.scale(size, size);
    drawTriangle(maxDepth);
    chaos.context.restore();
  }

  function drawTriangle(depth: number) {
    let angle = -Math.PI / 2;
    if (depth === 0) {
      chaos.context.beginPath();

      // move to top point of triangle
      chaos.context.moveTo(Math.cos(angle), Math.sin(angle));
      angle += (Math.PI * 2) / 3;

      // draw line to lower right point
      chaos.context.lineTo(Math.cos(angle), Math.sin(angle));

      // draw line to final point
      angle += (Math.PI * 2) / 3;
      chaos.context.lineTo(Math.cos(angle), Math.sin(angle));

      // fill will close the shape
      chaos.context.fill();
    } else {
      // draw the top triangle
      chaos.context.save();
      chaos.context.translate(Math.cos(angle) * 0.5, Math.sin(angle) * 0.5);
      chaos.context.scale(0.5, 0.5);
      drawTriangle(depth - 1);
      chaos.context.restore();

      // draw the lower right triangle
      angle += (Math.PI * 2) / 3;
      chaos.context.save();
      chaos.context.translate(Math.cos(angle) * 0.5, Math.sin(angle) * 0.5);
      chaos.context.scale(0.5, 0.5);
      drawTriangle(depth - 1);
      chaos.context.restore();

      // draw the lower left triangle
      angle += (Math.PI * 2) / 3;
      chaos.context.save();
      chaos.context.translate(Math.cos(angle) * 0.5, Math.sin(angle) * 0.5);
      chaos.context.scale(0.5, 0.5);
      drawTriangle(depth - 1);
      chaos.context.restore();
    }
  }
};
