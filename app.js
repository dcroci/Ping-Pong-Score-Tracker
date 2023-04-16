// select elements on the page
const p1Btn = document.querySelector("#p1Btn");
const p2Btn = document.querySelector("#p2Btn");
const reset = document.querySelector("#reset");
const playerWins = document.querySelector("#playerWins");
const h1 = document.querySelector("h1");
const playingTo = document.querySelectorAll("option");
const select = document.querySelector("select");

//global total variables
let p1Total = 0;
let p2Total = 0;

const getRounds = () => {
  for (let round of playingTo) {
    if ((round = select.value)) {
      return round;
    }
  }
};

//player 1 button
p1Btn.addEventListener("click", () => {
  p1Total += 1;
  h1.innerText = `${p1Total} to ${p2Total}`;
  if (p1Total >= getRounds()) {
    playerWins.innerText = "P1 Wins";
    p1Btn.classList.add("disabled");
    p1Btn.setAttribute('disabled', 'disabled');
    p2Btn.setAttribute('disabled', 'disabled');
  }
});
//player 2 button
  p2Btn.addEventListener("click", () => {
    p2Total += 1;
    h1.innerText = `${p1Total} to ${p2Total}`;
    if (p2Total >= getRounds()) {
      playerWins.innerText = "P2 Wins";
      p2Btn.classList.add("disabled");
      p2Btn.setAttribute('disabled', 'disabled')
      p1Btn.setAttribute('disabled', 'disabled');
    }
  });
//reset button
reset.addEventListener("click", () => {
  p1Total = 0;
  p2Total = 0;
  h1.innerText = `${p1Total} to ${p2Total}`;
  p1Btn.classList.remove("disabled");
  p2Btn.classList.remove("disabled");
  playerWins.innerText = "";
  p1Btn.removeAttribute('disabled');
  p2Btn.removeAttribute('disabled');
});
