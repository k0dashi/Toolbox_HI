// ------ Declaring varibles ------
let btnRandom = document.getElementById("generateButton");
let result = document.getElementById("Check-in-text");
let filterBtn = document.getElementById("filterbutton");

let filters = [];

let connectionClicked = false;
let funClicked = false;
let workClicked = false;
let allClicked = false;

// ------ Check-in questions ------

let activities = [
  {name: "	What color represents you and your personality?	",tags: ["connection"],},
  {name: "	What’s the best piece of advice you’ve ever been given?	", tags: ["connection"],},
  {name: "	When you die, what do you want to be remembered for?", tags: ["connection"],},
  {name: "	What is your favorite item you’ve bought this year?	", tags: ["connection"], },
  {name: "	What would your superpower be and why?	", tags: ["connection"] },
  {name: "	What’s your favorite tradition or holiday?", tags: ["connection"] },
  {name: "	Coffee or tea?	", tags: ["connection"] },
  {name: "	Are you a morning person or a night person?	", tags: ["connection"] },
  {name: "	What’s is one thing we don’t know about you?	", tags: ["connection"],},
  {name: "	What did you have for breakfast this morning?	", tags: ["connection"],},
  {name: "	What’s your favorite place in the world?	", tags: ["connection"],},
  {name: "	How many languagues do you speak?	", tags: ["connection"],},
  {name: " What is the biggest mistake you’ve made at work? ", tags: ["connection"],},
  {name: " What is the last goal you achieved? ", tags: ["connection"],},
  {name: " What are you hilariously bad at? ", tags: ["connection"],},
  {name: " What topic could you give a 20-minute presentation on without any preparation? ", tags: ["connection"],},
  {name: " What are some of your guilty pleasures? ", tags: ["connection"],},
  {name: " What skill or talent would you most like to learn? ", tags: ["connection"],},
  {name: " What do you wish was illegal? ", tags: ["fun"],},
  {name: "  What are some of your favorite games to play? ", tags: ["connection"],},
  {name: "	Does your family have any holiday traditions?	",tags: ["connection"],},
  {name: "	What’s your favorite way to relax?	", tags: ["connection"],},
  {name: "	What kind of pets did you have growing up?	", tags: ["connection"],},
  {name: " What is your most used emoji? ", tags: ["connection"],},
  {name: " What was your favorite game to play as a child? ", tags: ["connection"],},
  {name: " What is your dream job?", tags: ["connection"],},
  {name: " Describe yourself in one word? ", tags: ["connection"],},
  {name: " If you were a potato, what way would you like to be cooked? ", tags: ["fun"],},
  {name: " Who was your childhood famous crush? ", tags: ["fun"],},
  {name: " What’s the weirdest food you’ve ever eaten? ", tags: ["fun"],},
  {name: " Are you a good dancer?", tags: ["fun"],},
  {name: "What is the strangest gift you have ever received?", tags: ["fun"],},
  {name: " What song describes your life right now? ", tags: ["fun"],},
  {name: " If you were a wrestler what would be your entrance theme song?", tags: ["fun"],},
  {name: " If you could bring back any fashion trend what would it be? ",tags: ["fun"],},
  {name: " Who is your favorite Disney hero or heroine? ", tags: ["fun"],},
  {name: "	If you had to teach a class on one thing, what would you teach?	", tags: ["fun"],},
  {name: "	If you had a million dollars, what would you buy first?	", tags: ["fun"],},
  {name: "	If you could switch lives with anyone for a day, who would it be?	", tags: ["fun"],},
  {name: "	What animal represents my mood today?	", tags: ["fun"] },
  {name: "	What is your superhero power pose?	", tags: ["fun"] },
  {name: "	If you had a time machine, would go back in time or into the future?	", tags: ["fun"],},
  {name: "	Teleportation or flying?	", tags: ["fun"] },
  {name: "	What song or album could you listen to on repeat?	", tags: ["fun"] },
  {name: "	What's my biggest learning or insight from yesterday/today?	", tags: ["work"] },
  {name: "	What do I choose to do differently next time?	", tags: ["work"] },
  {name: "	What have you learned about yourself during this project?	", tags: ["work"],},
  {name: "	Would you rather work in a team or independently?	", tags: ["work"] },
  {name: "	Describe how you feel about this project with one word.	", tags: ["work"],},
  {name: "	If you could change anything about this project, what would that be?	", tags: ["work"],},
  {name: "	What are your personal goals work/project wise?	", tags: ["work"] },
  {name: "	What would you like to be better at?", tags: ["work"],},
  {name: "	How do you feel working in this team?	", tags: ["work"], },
  {name: "	Say something nice about each team member	:-) ", tags: ["work"], },
  {name: "	What do I feel proud about?	", tags: ["work"], },
  {namr: " What motivates you? ", tags: ["work"],},
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

// ------- ADDING TAGS --------

let fun = document.getElementById("fun");
fun.addEventListener("click", function () {
  filters = [];
  filters.push("fun");
  console.log("Now FUN is happening");
  funClicked = !funClicked;
});

let connection = document.getElementById("connection");
connection.addEventListener("click", function () {
  filters = [];
  filters.push("connection");
  console.log("Now CONNECTION is happening");
  connectionClicked = !connectionClicked;
});

let work = document.getElementById("work");
work.addEventListener("click", function () {
  filters = [];
  filters.push("work");
  console.log("Now WORK is happening");
  workClicked = !workClicked;
});

let all = document.getElementById("all");
all.addEventListener("click", function () {
  filters = [];
  console.log("Now ALL is happening");
  allClicked = !allClicked;
});

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var savebtn = document.getElementById("savebutton");

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
};

