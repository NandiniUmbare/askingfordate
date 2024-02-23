document.addEventListener("DOMContentLoaded", function () {
  const noBtn = document.querySelector(".no");
  const yesBtn = document.querySelector(".yes");
  const askDisplay = document.querySelector(".ask");
  const saidYes = document.querySelector(".saidYes");
  const btnArea = document.querySelector(".btn");
  const fixDate = document.querySelector(".fixDate");
  const love = document.querySelector(".selectDate");
  noBtn.addEventListener("mouseover", () => {
    const boxWidth = noBtn.offsetWidth;
    const boxHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - boxWidth;
    const maxY = window.innerHeight - boxHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
  });
  yesBtn.addEventListener("click", () => {
    askDisplay.style.display = "none";
    saidYes.style.display = "block";
    btnArea.style.display = "none";
  });
  fixDate.addEventListener("click", () => {
    saidYes.style.display = "none";
    love.style.display = "block";
  });
});
