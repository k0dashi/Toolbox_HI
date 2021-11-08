var button = document.getElementById("generate");
var result = document.querySelector("h2");

//------- Buttons -------

// ------ check-in questions ------
var checkIns = [
  "What’s one thing that brings you energy and joy?",
  "What’s become apparent since we last met?",
  "Given our work so far, what do you feel best about?",
  "What are you noticing in your environment that relates to this project?",
  "What color represents me and my personality?",
  "What’s the best piece of advice you’ve ever been given?",
  "What is your favorite item you’ve bought this year?",
];

//  ----- function to randomize and generate questions -----
function generate_question() {
  random_index = Math.floor(Math.random() * checkIns.length);

  selected_check_in = checkIns[random_index];

  document.getElementById("text").value = selected_check_in;
  document.getElementById("MyText").innerHTML = selected_check_in;
}
