let btnRandom = document.getElementById("generateButton");
let result = document.getElementById("Energizer-title");
let body = document.getElementById("body-text");

let energizers = [
  {
    titel: "Two truths and a lie ",
    body: "This activity’s good for established teams, because it can help them learn something new about each other, but it’s also great for new teams to get to know each other. It’s very simple. Everybody needs to think of two truths and a lie about them. For example, “I was on a TV quiz show; I used to compete in triathlons; I have 12 cats.” Then everyone else gets to vote on which statement is the lie. You could offer a spot prize for the most creative lies or the best liar.",
  },
  {
    titel: "	Collaborative portraits	",
    body: "Everyone needs a piece of paper and a pen or pencil for this activity. They should write their name on the bottom of their paper. Now everyone needs to wander around the room until you tell them to stop. This is their signal to pair up with the closest person to them. They swap papers and draw each other’s eyes. When they’re done, they need to give their papers back and stand walking around again. This time when you say stop, they need to draw their new partner’s nose. Keep going until you’ve covered each feature, hair and even accessories. Then everyone gets to show off their personal piece of art.",
  },

  {
    titel: "	Counting	",
    body: "It sounds so simple. All you have to do is count up to three as a team. But once you get going, this energiser is surprisingly tricky. Divide participants into small group of up to six and have them sit or stand in small circles. Now all they have to do is count together, taking turns to count to three. After a few rounds of this, swap the number one for a clap, so instead of saying the word, you physically clap your hands together. After a few rounds of this, clap instead of saying one and then click your fingers instead of saying two. Finally, when you’ve done this for a while, clap for one, click your fingers for two and then stamp your foot for three. When someone gets an action wrong, they’re out. Keep playing until you have one last person standing.",
  },

  {
    titel: "	Human Rock, Paper, Scissors	",
    body: "Before you begin the game, decide on a pose that will represent choosing rock, paper or scissors. For example, lie on the floor for paper; bend your knees and hold your arms in front of you as if you’re holding a barrel for rock; clap your hands above your head for scissors. Once you’ve agreed your poses, divide everyone into two teams and give them 5 minutes to agree their strategies. Paper beats rock, which beats scissors, which beats paper. You’ll be playing five rounds – highest score wins. When you’re ready, the facilitator will count down to the signal to go: Paper, Rock, Scissors! On the word scissors, everyone needs to make their pose. You can adapt this game to a number of different themes, maybe relating to your business. For example, if you run a wedding venue, you could play Best Man, Mother of the Bride, Chief Bridesmaid instead of Rock, Paper, Scissors.",
  },

  {
    titel: "What's in the Bag? ",
    body: "<p> This is a fun icebreaker or energizer where participants are asked “What's in the bag?” It's a simple way to engage people and have fun getting to know each other, it gets participants to step into the space together. Each team gets points for any items that are called out that they have with them. Group size 10-40.5-30 mins. Pen and paper.<h4> Step 1:</h4>  Pre-Task <b> The facilitator creates a list of 10 things people could have in their bag: </b> The list should have about <b> 7 ordinary things  </b> like: <ul> <li> a black phone (or a silver phone, rosegold, etc.)</li> <li>an environmental water bottle </li> <li> a hair tie </li> <li> a pen </li> <li>a lip balm </li> <li>a computer with at least 1 sticker on it </li> <li> someone else's business card a train ticket, etc. </li>  </ul> The facilitator should add <b> 3 obscure things </b> like: <ul> <li>a decorative stone </li> <li> a skeleton key </li> <li>  a Rubik's cube </li> <li> a candle </li> <li> a yellow sharpie, etc… </li> </ul> <h4> Step 2: </h4>   Divide the participants into teams of 3-6 people and ask them to grab their bags/backpacks/etc... Give them a paper and pen to keep track of their earned points. <h4> Step 3: </h4> The Facilitator calls out random items one at a time. If you have the item get it out of your bag and stand up. <ul> For each item that the group has the team gets one point. For any obscure item, the team gets 3 points. Only 1 of each item per person is counted and the team with the most points wins. You can count things people have on them, ie: in their pocket. Feel free to customize items </ul> <h4> Step 4: </h4> Whoever has the most points wins! </p>",
  },
];

function getRandomNumber(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;

  return result;
}

function generateEnergizer() {
  let index = getRandomNumber(0, energizers.length - 1);
  console.log("index", index);
  console.log("hello", result);
  console.log(energizers[index].titel);

  result.innerText = energizers[index].titel;
  body.innerHTML = energizers[index].body;

  console.log("ACTIVITY", energizers[index].titel);
}

New.onclick = function () {
  let newArray = [];
  let randomText = [];
  randomText = text[Math.floor(Math.random() * text.length)];
  console.log("this", typeof text);
  const energizer = document.getElementById("engergizer");
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const step = document.getElementById("stage");
  const stepDescription = document.getElementById("step_description");
  const step2 = document.getElementById("stage2");
  const stepDescription2 = document.getElementById("step_description2");
  text.forEach((data) => {
    newArray.push(data);
    console.log(newArray);
  });

  for (let i = 0; i < newArray.length; i++) {
    console.log(newArray[i].Title);
    title.innerHTML = newArray[i].Title;
    description.innerHTML = newArray[i].Description;
    newArray[i].Steps.forEach((element) => {
      console.log(element.step2);
      step1.innerHTML = element.step1;
      console.log(step1.innerHTML);
      stepDescription.innerHTML = element.description;
      step2.innerHTML = element.step2;
      console.log(element.step2);
      stepDescription2.innerHTML = element.description2;
    });
  }
  //energizer.innerHTML = randomText.Title;
};
