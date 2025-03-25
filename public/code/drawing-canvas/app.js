(function () {
  let color = "#f00";

  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");

  let x1, x2, y1, y2;

  // Get coordinates from mouse or touch event
  function getCoords(e) {
    if (e.touches && e.touches.length > 0) {
      return {
        x: e.touches[0].clientX - canvas.getBoundingClientRect().left,
        y: e.touches[0].clientY - canvas.getBoundingClientRect().top,
      };
    } else {
      return {
        x: e.offsetX,
        y: e.offsetY,
      };
    }
  }

  function startDrawing(e) {
    const coords = getCoords(e);
    x2 = coords.x;
    y2 = coords.y;

    if (e.type.startsWith("touch")) {
      canvas.addEventListener("touchmove", drag, { passive: false });
      canvas.addEventListener("touchend", stopDrag);
    } else {
      canvas.onmousemove = drag;
      canvas.onmouseup = stopDrag;
    }
  }

  function drag(e) {
    e.preventDefault();

    x1 = x2;
    y1 = y2;

    const coords = getCoords(e);
    x2 = coords.x;
    y2 = coords.y;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
  }

  function stopDrag() {
    canvas.onmousemove = null;
    canvas.onmouseup = null;

    canvas.removeEventListener("touchmove", drag);
    canvas.removeEventListener("touchend", stopDrag);
  }

  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("touchstart", startDrawing, { passive: false });

  document.addEventListener("click", function (e) {
    let el = e.target;
    if (el.className.includes("color")) {
      color = el.getAttribute("data-color");
    }
  });
})();
