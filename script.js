// Initialize the canvas
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Monster properties
const monster = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 50,
  color: "green",
  speed: 2,
  dx: 0,
  dy: 0,
};

// Update monster position
function updateMonster() {
  monster.x += monster.dx;
  monster.y += monster.dy;

  // Check boundaries
  if (monster.x - monster.radius < 0 || monster.x + monster.radius > canvas.width) {
    monster.dx *= -1;
  }

  if (monster.y - monster.radius < 0 || monster.y + monster.radius > canvas.height) {
    monster.dy *= -1;
  }
}

// Draw the monster
function drawMonster() {
  ctx.beginPath();
  ctx.arc(monster.x, monster.y, monster.radius, 0, Math.PI * 2);
  ctx.fillStyle = monster.color;
  ctx.fill();
  ctx.closePath();
}

// Update and draw the monster continuously
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateMonster();
  drawMonster();
  requestAnimationFrame(animate);
}

// Keyboard event listeners to control monster movement
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp") {
    monster.dy = -monster.speed;
  } else if (event.key === "ArrowDown") {
    monster.dy = monster.speed;
  } else if (event.key === "ArrowLeft") {
    monster.dx = -monster.speed;
  } else if (event.key === "ArrowRight") {
    monster.dx = monster.speed;
  }
});

document.addEventListener("keyup", function (event) {
  if (
    event.key === "ArrowUp" ||
    event.key === "ArrowDown" ||
    event.key === "ArrowLeft" ||
    event.key === "ArrowRight"
  ) {
    monster.dx = 0;
    monster.dy = 0;
  }
});

// Start the animation
animate();
