let btnRandom = document.getElementById("generateButton");
let result = document.getElementById("Energizer-title");
let body = document.getElementById("body-text");

let energizers = [
  {
    titel: "Two truths and a lie ",
    body: "This activity’s good for established teams, because it can help them learn something new about each other, but it’s also great for new teams to get to know each other. <p>It’s very simple. Everybody needs to think of two truths and a lie about them. For example, “I was on a TV quiz show; I used to compete in triathlons; I have 12 cats.” Then everyone else gets to vote on which statement is the lie. <p>You could offer a spot prize for the most creative lies or the best liar.",
  },
  {
    titel: "	Collaborative portraits	",
    body: "Everyone needs a piece of paper and a pen or pencil for this activity. They should write their name on the bottom of their paper. <p>Now everyone needs to wander around the room until you tell them to stop. This is their signal to pair up with the closest person to them. They swap papers and draw each other’s eyes. <p>When they’re done, they need to give their papers back and stand walking around again. This time when you say stop, they need to draw their new partner’s nose. <p>Keep going until you’ve covered each feature, hair and even accessories. Then everyone gets to show off their personal piece of art.",
  },

  {
    titel: "	Counting	",
    body: "It sounds so simple. All you have to do is count up to three as a team. But once you get going, this energiser is surprisingly tricky. <p>Divide participants into small group of up to six and have them sit or stand in small circles. Now all they have to do is count together, taking turns to count to three. <p>After a few rounds of this, swap the number one for a clap, so instead of saying the word, you physically clap your hands together. After a few rounds of this, clap instead of saying one and then click your fingers instead of saying two. Finally, when you’ve done this for a while, clap for one, click your fingers for two and then stamp your foot for three. <p>When someone gets an action wrong, they’re out. Keep playing until you have one last person standing.",
  },

  {
    titel: "	Human Rock, Paper, Scissors	",
    body: "Before you begin the game, decide on a pose that will represent choosing rock, paper or scissors. For example, lie on the floor for paper; bend your knees and hold your arms in front of you as if you’re holding a barrel for rock; clap your hands above your head for scissors.<p> Once you’ve agreed your poses, divide everyone into two teams and give them 5 minutes to agree their strategies. Paper beats rock, which beats scissors, which beats paper. You’ll be playing five rounds – highest score wins.<p> When you’re ready, the facilitator will count down to the signal to go: Paper, Rock, Scissors! On the word scissors, everyone needs to make their pose.<p> You can adapt this game to a number of different themes, maybe relating to your business. For example, if you run a wedding venue, you could play Best Man, Mother of the Bride, Chief Bridesmaid instead of Rock, Paper, Scissors.",
  },

  {
    titel: "What's in the Bag? ",
    body: "This is a fun icebreaker or energizer where participants are asked “What's in the bag?” It's a simple way to engage people and have fun getting to know each other, it gets participants to step into the space together. Each team gets points for any items that are called out that they have with them. <p>Group size 10-40. <br>5-30 mins. <br>Pen and paper.<h4> Step 1:</h4> <span class='boldtext'>  Pre-Task </span> <p> <span class='boldtext'>The facilitator creates a list of 10 things people could have in their bag: </span> <br> The list should have about <span class='boldtext'> 7 ordinary things  </span> like: <ul> <li> a black phone (or a silver phone, rosegold, etc.)</li> <li>an environmental water bottle </li> <li> a hair tie </li> <li> a pen </li> <li>a lip balm </li> <li>a computer with at least 1 sticker on it </li> <li> someone else's business card a train ticket, etc. </li>  </ul> The facilitator should add <span class='boldtext'> 3 obscure things </span> like: <ul> <li>a decorative stone </li> <li> a skeleton key </li> <li>  a Rubik's cube </li> <li> a candle </li> <li> a yellow sharpie, etc… </li> </ul> <h4> Step 2: </h4>   Divide the participants into teams of 3-6 people and ask them to grab their bags/backpacks/etc... Give them a paper and pen to keep track of their earned points. <h4> Step 3: </h4> The Facilitator calls out random items one at a time. If you have the item get it out of your bag and stand up. <ul> <li>For each item that the group has the team gets one point. </li><li>For any obscure item, the team gets 3 points. </li><li>Only 1 of each item per person is counted and the team with the most points wins.</li><li> You can count things people have on them, ie: in their pocket.</li><li> Feel free to customize items</li> </ul> <h4> Step 4: </h4> Whoever has the most points wins! </p>",
  },

  {
    titel: "Mazunga!",
    body: "This fast and loud energizer is highly effective for boosting a group’s energy in a very short amount of time. The group stands in the circle and a loud yell of the sound “Maaaah…” is sent around the circle. It gets louder and louder as it travels around the circle until it gets all the way around and ends with a thundering, collective “ZUNGA!”<br> 10-40 people. <br> 5-30 mins. <h4> Step 1: </h4> The group stands in a circle. <h4> Step 2: </h4> One person starts of by stretching his arms straight out into the centre of the circle, bending the knees a bit and shouting a sustained <span class='boldtext'>“Maaaaaaaahh....!”</span> He continues the sound as the person next to him copies this, and the next person copies this etc. Everyone keeps on shouting <span class='boldtext'>“Maaaaaaaahh...!’</span> until the circle is complete and back at the person who started. This person then raises his hands in the air and finishes the shout with an extra strong <span class='boldtext'>“aaZUNGA!”.</span> This final sound and motion should be done simultaneously by the whole group, creating the feeling that the floor rumbles. Often groups cannot synchronize the ending in the first go around so it can be good to try it several times.",
  },

  {
    titel: " What are you doing?",
    body: "This is a simple drama game in which participants take turns asking each other “What are you doing?” and acting out the various responses. Though simple, it engages the imagination and gently challenges participants out of their comfort zone by having them mime a range of different actions. <p> 10-40 people. <br> 5-30 mins. <h4> Step 1: </h4> The group stands in a circle. <h4> Step 2: </h4> One person enters the circle and begins miming an action (e.g. brushing hair or frying an egg). They continue until a another member of the group enters the circle and asks: “What are you doing?” The first person responds by describing any action other that the one she is doing. For example, if she is pretending to brush hair, she might say something like “I’m playing hockey.” The second person must then begin to mime playing hockey. <p>Continue until most or all members have had a chance in the middle. Encourage participants to be creative with the actions.",
  },

  {
    titel: " Dance, Dance, Dance",
    body: "In this short and physically active energizer, participants dance playfully in small teams. Periodically, the music changes and members take turns leading the dance. The aim is to generate fun energy and playfulness in a group, often as a counter-balance to more “serious” group work. <p>10-40 people. <br>5-30 mins. <h4> Step 1: </h4> Organize the group into teams of 3-5 people. <h4> Step 2: </h4> Explain that when the music starts one person in each group starts dancing and the others follow the leaders. When the song changes, another member in each group becomes the new dance leader. Encourage them to be big and crazy with their dance moves and to move around in the space. <p>Change the song every 30 seconds or so. Play enough songs that each member in every group is the leader at least one time. End by fading out the music and initiating a big cheer. <p><span class='boldtext'>Facilitator notes</span> <br>Make sure to choose familiar, highly danceable songs that will energize people right away. Even better if each song is a different genre to mix up the dancing styles. Be mindful that some people may not feel comfortable dancing. Encourage all to participate, but do not put pressure on any who may choose to opt out.",
  },

  {
    titel: "The Viking",
    body: "In this group game, players stand in a circle and perform a series of loud physical moves, passing from one person to the next. When a player hesitates or makes a mistake, he or she is eliminated and the game continues. The game generates laughter and playfulness in the group. <p> 10-40 people.<br> 5-30 mins. <h4> Step 1: </h4> Stand in a circle. One person starts of by shouting 'MJOLNER!!' while making an angry face, a downwards “O” with both arms and bends the knees. The rest of the group follows by copying the movement and the shout. <h4> Step 2: </h4> The MJOLNER-initiator starts air-punching the person to his/her left or right making a loud “HUH” sound. The receiver copies this in the same direction. The receiver’s neighbor can do the same or choose to throw a spell across the middle of the circle to any other group member. This happens by raising the hands above the head and throwing an imaginary item to that person while shouting <span class='boldtext'>“ TUNGUR KNIVUR!’.</span> <p>The receiver across the circle may either continue with a <span class='boldtext'>“HUH”</span> or “ <span class='boldtext'>TUNGUR KNIVUR!’</span> or, he/she may reject the spell, by raising his hands in the air and making a roof shape while shouting <span class='boldtext'>“PAKKA PER!”</span> <p> Any time a receiver hesitates or uses the wrong words, he or she is out of the game. After a person is kicked out, anyone can start the game again with a new cry of “MJOLNER!” The last person standing is the winner of the game.",
  },

  {
    titel: "The Shouting Game",
    body: "This simple group game is played in a circle. Participants repeatedly choose one other person to look at, hoping that person won’t be looking back at them. Whenever eye contact is made between two participants, both must shout wildly and lunge backward. They are then eliminated. The game generates laughter and boosts energy in a group. <p>10-40 people. <br>5-30 mins. <h4> Step 1: </h4> The group stands shoulder to shoulder in a circle. Everyone must be able to see the eyes of everyone else. <p>Explain that you will be giving two sets of instructions repeatedly, 'heads down' and 'heads up.' When you say 'heads down,' everyone looks at their feet. <h4> Step 2: </h4> When you say 'heads up,' everyone looks up and instantly looks <i>straight at the head of one other person in the circle</i>.<p> There are two possible consequences: when a person looks up at someone who is looking at someone else, nothing happens; when a person looks up at someone who is looking right back at them, they must both point in a very exaggerated manner at the each other and let out a loud SCREAM OR YELL. <p>Those two are then 'out' and stand outside of the circle to observe. Once the 'screamers' have left the circle, the circle closes in and repeat the process until there are only two people left. The final two have to do it one more time, even though the outcome is a foregone conclusion.",
  },

  {
    titel: "Shake Down",
    body: "In this short and very physical energizer, the group shakes out their bodies one limb at a time. Starting with eight shakes of the right arm, then eight shakes of the left, eight shakes of the right leg, then eight shakes of the left. It continues with a round of four shakes of each limb, then two, then one, ending in a big cheer. A good energizer when time is limited and the main aim is to get people moving. <br>10-40 people. <br>5-30 mins. <h4> Step 1: </h4> The group stands in a circle. Everyone should have an arm’s length of space on either side of them. Facilitator notes This energizer is short and efficient. For it to be effective, the person leading it needs to role model a high level of energy. <h4> Step 2: </h4> The group performs the “shake down” all together, counting loudly together as they go. First, 8 shakes of the right arm, 8 shakes of the left arm, 8 shakes of the right leg, and 8 shakes of the left leg. Each time, counting “1 - 2 - 3 - 4 - 5 - 6 - 7 - 8!”<p> Next, 4 shakes of each limb. Then 2 shakes of each. Then 1 shake of each. The shake down ends with a loud cheer and a big ninja kick in the air.",
  },

  {
    titel: "Sync Claps",
    body: "This circle exercise is simple, but challenging and very effective for generating focus and alignment in a group. Participants stand in a circle and send a clap around the circle. Each clap involves two members of the group clapping their hands at the same time. The group tries to move the clap around the circle faster and faster with as much synchronization as possible. The exercise gets even more challenging when the “double clap” is introduced and the clap can change direction. <br>10-40 people. <br>5-30 mins. <h4> Step 1: </h4> The group stands in a circle.<br><span class='boldtext'>Facilitator notes</span> <br>Step 3 is very challenging for unfocused, stressed or very new groups. If the group struggles to pass the clap in step 3, consider using the opportunity to debrief by asking the group: “why was it such a challenge to pass the clap when the task became more complex? What would you need as a group to master it?” <h4> Step 2: </h4>  One person starts (person A). They turn to the person next to them (person B) and the two clap at the same time, while making eye contact, as synced as possible. Person B then turns to person C and they clap at the same time. The clap continues like this around the circle. The group should try to pass the clap more and more quickly with as many perfectly synchronized claps as possible. <h4> Step 3: </h4>  When the group has mastered the above, introduce the double clap. When a pair claps twice, the direction of the clap reverses. This presents a challenge, as pairs must non-verbally agree whether to clap once or twice. The group must be highly focused and attentive to each other for the clap to continue smoothly around the circle in this step.",
  },

  {
    titel: "Hello Kitty",
    body: "A simple and short group game all about trying to make each other crack a smile. Participants take turns being 'kitties' and 'puppies'. The puppies try to make the kitties crack a smile or laugh. The last kitty standing is the winner! An original from the The Northern Quarter Agency. <br>2-40 people.<br> 5-30 mins <br> Tools: masking tape. <h4> Step 1: </h4> Set up by drawing a line in the middle of the room with masking tape. Split the group in two and have them stand on opposite sides of the line. One side are the kittens. The other side are the puppies. <h4> Step 2: </h4>  Kittens cannot smile or laugh. Puppies must say hello to the kittens in any way possible and try to make any of them smile or laugh. Puppies may not cross the line on the floor, everything else is allowed. <h4> Step 3: </h4> When a kitten smiles or laughs, it automatically becomes a puppy and must cross to the other side of the line. Continue until only one kitten is left standing as the winner! <br><span class='boldtext'> Facilitator notes</span> <br>To extend the game: Switch kittens into puppies and do it again; OR make the winning kittens into a team, see which one lasts longer.",
  },

  {
    titel: "Human Machine",
    body: "This fast and physical group activity gets participants moving and working together in a way that generates energy and promotes collaboration. One at a time, members of the group become parts of the “machine”, each one making a distinct physical motion and a sound, until the whole group is working together in motion, as one human machine. <p>10-40 people.<br> 5-30 min <h4> Step 1: </h4> Stand in a large circle. Explain to the group that their task is to build a human machine. Each individual will become one moving-part of the machine. <h4> Step 2: </h4>  One person enters the circle and begins making a repeating sound and a physical movement (eg. a “whoop whoop whoop” sound while flapping one arm.) After 5 seconds, another person enters the circle and connects to the first person, also making a sound and a movement.<p> Continue building the machine until everyone is connected, everyone making their movements and sounds throughout. If the group is smaller than 20, you can also deconstruct the machine one person at a time.",
  },

  {
    titel: "Love Your Neighbour?",
    body: "In this fun and active group game, participants sit in a circle, with one person in the middle. The person in the middle asks different questions that force people to quickly get up and race to find another seat. One person is always left in the middle without a seat. The game is fast-paced and highly physical and quickly generates laughter. An effective game to promote group development or simply to boost energy.<p> 10-40 people <br>5-30 mins <h4> Step 2: </h4> That person can reply with YES or NO. If she replies YES, then that means that the two people sitting to her left and right must to switch seats. The goal of the person in the middle is always to obtain a seat. When the two switch, he tries to quickly sit in one of their chairs. One person always ends up without a seat. <p>If she replies NO, she must extend her answer with “But I love people…” and add any characteristic that will apply to members of the group. For example “No, but I love people with long hair” or “No, but I love people who speak French.” Then everyone with that characteristic must get up and find a new seat. <p>Someone is always left in the middle and the process repeats. <p>The twist: Every time an empty seat appears to one’s left, they must quickly sit on it. This results in a chain reaction, where the whole group jumps from one chair to the next, making it more difficult to find a free seat to occupy. <h4> Step 3: </h4> End the exercise before it reaches it’s peak, when the group is still laughing and having fun. Generally about 7 - 10 rounds.",
  },

  {
    titel: "DANCE DANCE DANCE",
    body: "It is time to DANCE! Go ahead and show off your best moves! <br>  <iframe width='560' height='315' src='https://www.youtube.com/embed/tgbNymZ7vqY' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
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

ew.onclick = function () {
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
