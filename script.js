let c = 20;
const s = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(s);
}

function draw() {
  background(255); // Очистка предыдущего кадра

  c += 2e-4;
  let mx = mouseX * 1e-3;
  let my = mouseY * 1e-3;

  // Определите границы видимой области
  let xStart = Math.max(0, Math.floor(-width / s));
  let xEnd = Math.min(width / s, Math.ceil(width / s));
  let yStart = Math.max(0, Math.floor(-height / s));
  let yEnd = Math.min(height / s, Math.ceil(height / s));

  for (let i = xStart; i < xEnd; i++) {
    for (let j = yStart; j < yEnd; j++) {
      drawCharacter(i, j, mx, my);
    }
  }
}

function drawCharacter(i, j, mx, my) {
  // Рассчитайте позицию символа
  let x = i * s;
  let y = j * s;

  // Проверьте, находится ли символ в пределах видимой области
  if (x + s < 0 || x > width || y + s < 0 || y > height) {
    return;
  }

  let charCode = int(noise(i * .002 - mx, j * .002 - my, c) * 7000) + 7000;
  text(String.fromCharCode(charCode), x, y);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
