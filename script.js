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
