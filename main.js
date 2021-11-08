let btnRandom = document.querySelector("button");
let result = document.querySelector("h1");

let checkIns = [
  "What’s one thing that brings you energy and joy?",
  "What’s become apparent since we last met?",
  "Given our work so far, what do you feel best about?",
  "What are you noticing in your environment that relates to this project?",
];

function getRandomNumber(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;
  return result;
}

btnRandom.addEventListener("click", () => {
  let index = getRandomNumber(0, checkIns.length - 1);
  result.innerText = checkIns[index];
});
