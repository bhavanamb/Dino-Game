//to calculate the score when characted jumps and block is passed
let passedBlock = false;

const jump = () => {
  character.classList.add("animate");
  setTimeout(removeJump, 300);
  //need to reset to calc the score when character jumps
  passedBlock = false;
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
  //when the character hits the block
  if (charactedTopValue >= 130 && blockLeftValue < 40 && blockLeftValue > 0) {
    //alert("game over");
    document.getElementById("overlay").style.display = "block";
    block.style.left = "40px";

    block.style.animationPlayState = "paused";

    character.style.animationPlayState = "paused";
  } else {
    if (!passedBlock && blockLeftValue < 40 && blockLeftValue > 0) {
      let currentScore = parseInt(document.getElementById("score").textContent);

      document.getElementById("score").textContent = currentScore + 1;
      passedBlock = true;
    }
  }
};

setInterval(checkGameOver, 10);

const startGame = () => {
  const startBtn = document.getElementById("block");
  startBtn.classList.add("slide-block");
};
