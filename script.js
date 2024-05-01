const jump = () => {
  console.log(character.classList);

  character.classList.add("animate");
  setTimeout(removeJump, 300);
};

const removeJump = () => {
  character.classList.remove("animate");
};

const character = document.getElementById("character");
document.addEventListener("click", jump);

const block = document.getElementById("block");

const gameOver = document.getElementById("game-over");

const checkGameOver = () => {
  const charactedTopValue = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );

  const blockLeftValue = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );

  if (charactedTopValue >= 130 && blockLeftValue < 40 && blockLeftValue > 0) {
    //alert("game over");
    document.getElementById("overlay").style.display = "block";
    block.style.left = "40px";

    block.style.animationPlayState = "paused";

    character.style.animationPlayState = "paused";
    // const gameOverText = document.createTextNode("Game Over");
    // gameOver.appendChild(gameOverText);
  }
};

setInterval(checkGameOver, 10);

const startGame = () => {
  const startBtn = document.getElementById("block");
  startBtn.classList.add("slide-block");
};
