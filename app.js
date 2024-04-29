const op = document.querySelectorAll(".img");
let userScore = 0;
let compScore = 0;

const userScoreR = document.querySelector(".user-score");
const compScoreR = document.querySelector(".comp-score");
const reset = document.querySelector("#btn");

const gencompChoice = () => {
  const optionsforcomp = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return optionsforcomp[randomNumber];
};
const results = document.querySelector("#msg");

const winner = (wn, userChoice, compChoice) => {
  if (wn) {
    userScore++;
    userScoreR.innerText = userScore;
    results.style.backgroundColor = "#337804";
    results.style.color = "white";
    results.innerText = `You Won , Your choice :${userChoice} , Computer Choice ${compChoice}`;
  } else {
    compScore++;
    compScoreR.innerText = compScore;
    results.style.backgroundColor = "red";
    results.style.color = "white";
    results.innerText = `You loose , Your choice :${userChoice} ,Computer Choice ${compChoice}`;
  }
};

const gamest = (userChoice) => {
  console.log("User Choice :- ", userChoice);
  const compChoice = gencompChoice();
  console.log("Computer Choice :- ", compChoice);

  if (userChoice === compChoice) {
    results.style.backgroundColor = "black";
    results.style.color = "white";
    results.innerText = "DRAW";
  } else {
    let wn = true;
    if (userChoice === "rock") {
      wn = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      wn = compChoice === "scissors" ? false : true;
    } else {
      wn = compChoice === "rock" ? false : true;
    }
    winner(wn, userChoice, compChoice);
  }
};

op.forEach((opech) => {
  opech.addEventListener("click", () => {
    const userChoice = opech.getAttribute("id");
    gamest(userChoice);
  });
});

reset.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  userScoreR.innerText = userScore;
  compScoreR.innerText = compScore;
});
