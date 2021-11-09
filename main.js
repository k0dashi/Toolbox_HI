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
    name: "What’s one thing that brings you energy and joy",
    tags: ["fun", "work", "connection"],
  },

  {
    name: "Fun Work & Connection",
    tags: ["fun", "work", "connection"],
  },

  {
    name: "What’s become apparent since we last met?",
    tags: ["work"],
  },

  {
    name: "This is work related",
    tags: ["work"],
  },
  {
    name: "What color represents me and my personality?",
    tags: ["fun"],
  },
  {
    name: "What is your favorite item you’ve bought this year?",
    tags: ["connection"],
  },
  {
    name: "Hello?",
    tags: ["connection"],
  },
  {
    name: "Testing",
    tags: ["connection"],
  },
  {
    name: "What fruit are you????",
    tags: ["connection"],
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

btnRandom.addEventListener("click", () => {
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
});

let work = document.getElementById("work");
work.addEventListener("click", function () {
  if (!workClicked) {
    filters.push("work");
  } else {
    filters = filters.filter((x) => x != "work");
  }
  work = !workClicked;
});

let fun = document.getElementById("fun");
fun.addEventListener("click", function () {
  if (!funClicked) {
    filters.push("fun");
  } else {
    filters = filters.filter((x) => x != "fun");
  }

  funClicked = !funClicked;
});

let connection = document.getElementById("connection");
connection.addEventListener("click", function () {
  if (!connectionClicked) {
    filters.push("connection");
  } else {
    filters = filters.filter((x) => x != "connection");
  }

  connectionClicked = !connectionClicked;
});

// document.getElementById("savebutton").addEventListener("click", (e) => {
//   e.preventDefault();
//   document.querySelector(".modal-content").style.display = "none";
//   document.getElementById("everythingbutmodal").style.opacity = "1";
// });
