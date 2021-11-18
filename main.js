// ------ Declaring varibles ------
let btnRandom = document.getElementById("generateButton");
let result = document.getElementById("Check-in-text");
let filterBtn = document.getElementById("filterbutton");

let filters = [];

let connectionClicked = false;
let funClicked = false;
let workClicked = false;

// ------ Check-in questions ------

let activities = [
  {
    name: "	What color represents me and my personality?	",
    tags: ["connection"],
  },
  {
    name: "	What’s the best piece of advice you’ve ever been given?	",
    tags: ["connection"],
  },
  {
    name: "	When you die, what do you want to be remembered for?	",
    tags: ["connection"],
  },
  {
    name: "	What is your favorite item you’ve bought this year?	",
    tags: ["connection"],
  },
  {
    name: "	If you had to delete all but 3 apps from your smartphone, which ones would you keep?	",
    tags: ["connection"],
  },
  { name: "	What would your superpower be and why?	", tags: ["connection"] },
  { name: "	What’s your favorite tradition or holiday?", tags: ["connection"] },
  { name: "	Coffee or tea?	", tags: ["connection"] },
  { name: "	Are you a morning person or a night person?	", tags: ["connection"] },
  {
    name: "	What’s is one thing we don’t know about you?	",
    tags: ["connection"],
  },
  {
    name: "	What did you have for breakfast this morning?	",
    tags: ["connection"],
  },
  {
    name: "	What’s your favorite place of all the places you’ve travelled?	",
    tags: ["connection"],
  },
  { name: "	How many languagues do you speak?	", tags: ["connection"] },
  {
    name: "	Does your family have any holiday traditions?	",
    tags: ["connection"],
  },
  {
    name: "	If I visited your hometown, what local spots would you suggest I see?	",
    tags: ["connection"],
  },
  { name: "	What’s your favorite way to relax?	", tags: ["connection"] },
  { name: "	What kind of pets did you have growing up?	", tags: ["connection"] },
  {
    name: "	If you could have someone follow you around all the time, like a personal assistant, what would you have them do?	",
    tags: ["fun"],
  },
  {
    name: "	If you could be guaranteed one thing in life (besides money), what would it be?	",
    tags: ["fun"],
  },
  {
    name: "	If you had to teach a class on one thing, what would you teach?	",
    tags: ["fun"],
  },
  {
    name: "	If you could be immortal, what age would you choose to stop aging at and why?	",
    tags: ["fun"],
  },
  {
    name: "	If you had a million dollars, what would you buy first?	",
    tags: ["fun"],
  },
  {
    name: "	Would you rather eat a candy cane that tastes like turkey, or a turkey that tastes like candy cane?	",
    tags: ["fun"],
  },
  {
    name: "	If you could switch lives with anyone for a day, who would it be?	",
    tags: ["fun"],
  },
  {
    name: "	If you could choose any name besides your name, what would you choose?	",
    tags: ["fun"],
  },
  { name: "	While on a date, what’s your biggest pet peeve?	", tags: ["fun"] },
  { name: "	What animal represents my mood today?	", tags: ["fun"] },
  { name: "	What is my superhero power pose?	", tags: ["fun"] },
  {
    name: "	If you had a time machine, would go back in time or into the future?	",
    tags: ["fun"],
  },
  { name: "	Teleportation or flying?	", tags: ["fun"] },
  { name: "	What song or album could you listen to on repeat?	", tags: ["fun"] },
  {
    name: "	You can have an unlimited supply of one thing for the rest of your life, what is it?	",
    tags: ["fun"],
  },

  { name: "	What's my biggest learning or insight from today?	", tags: ["work"] },
  { name: "	What do I choose to do differently next time?	", tags: ["work"] },
  {
    name: "	What has been my highest high and lowest low from this project/workshop/session?	",
    tags: ["work"],
  },
  {
    name: "	What have you learned about yourself during this project that you didn't know before?	",
    tags: ["work"],
  },
  { name: "	Would you rather work in a team or independently?	", tags: ["work"] },
  {
    name: "	Describe how you feel about this project with one word.	",
    tags: ["work"],
  },
  {
    name: "	If you could change anything about this project, what would that be?	",
    tags: ["work"],
  },
  { name: "	What are your personal goals work/project wise?	", tags: ["work"] },
  {
    name: "	What would you like to be better at when working alone or in team?	",
    tags: ["work"],
  },
  { name: "	How do I feel working in this team?	", tags: ["work"] },

  { name: "	Say something nice about each team member	", tags: ["work"] },
  {
    name: "	What do I feel proud about accomplishing during this project?	",
    tags: ["work"],
  },
];

const connectionQuestion = activities.filter((x) =>
  x.tags.includes("connection")
);
const funQuestion = activities.filter((x) => x.tags.includes("fun"));
const workQuestion = activities.filter((x) => x.tags.includes("work"));

function getRandomNumber(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;

  return result;
}

function generateQuestion() {
  let availableActivities = activities;

  console.log(availableActivities);
  console.log(filters);

  filters.forEach((filter) => {
    availableActivities = availableActivities.filter((x) =>
      x.tags.includes(filter)
    );
  });

  if (availableActivities.length > 0) {
    let index = getRandomNumber(0, availableActivities.length - 1);
    console.log("hello", result);
    result.innerText = availableActivities[index].name;

    console.log("ACTIVITY", availableActivities[index].name);
  }
}

// let fun = document.getElementById("fun");
// fun.addEventListener("click", function () {
//   if (!funClicked) {
//     filters.push("fun");
//   } else {
//     filters = filters.filter((x) => x != "fun");
//   }

//   funClicked = !funClicked;
// });

// let connection = document.getElementById("connection");
// connection.addEventListener("click", function () {
//   if (!connectionClicked) {
//     filters.push("connection");
//   } else {
//     filters = filters.filter((x) => x != "connection");
//   }
//   connectionClicked = !connectionClicked;
// });

// let work = document.getElementById("work");
// work.addEventListener("click", function () {
//   if (!workClicked) {
//     filters.push("work");
//   } else {
//     filters = filters.filter((x) => x != "work");
//   }
//   workClicked = !workClicked;
// });

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var savebtn = document.getElementById("savebutton")


btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

savebtn.onclick = function () {
  modal.style.display = "none";
}