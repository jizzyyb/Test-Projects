// Array for questions and answers
let questions = [
  {
    question: "Wer hat HTML erfunden?",
    answers: [
      "Robbie Williams",
      "Lady Gaga",
      "Tim Berners-Lee",
      "Justin Bieber",
    ],
    right_answer: [3],
  },

  {
    question: "Was bedeutet HTML in ausgeschriebener form?",
    answers: ["1", "2", "3", "4"],
    right_answer: [4],
  },

  {
    question: "Was bedeutet HTML?",
    answers: ["a", "s", "d", "f"],
    right_answer: [1],
  },

  {
    question: "Was bedeutet HTML in ausgeschriebener form?",
    answers: ["111", "222", "333", "444"],
    right_answer: [2],
  },
];

let curentQuestion = 0;

function init() {
  // Initialisierung der Funktion
  document.getElementById("all-questions").innerHTML = questions.length;

  showQuestion();
}

function showQuestion() {
  // Funktion zum Anzeigen der Fragen

  if (curentQuestion >= questions.length) {
  } else {
    let question = questions[curentQuestion];
    document.getElementById("nmbr-change").innerHTML = curentQuestion + 1;
    document.getElementById("questiontext").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answers"][0];
    document.getElementById("answer_2").innerHTML = question["answers"][1];
    document.getElementById("answer_3").innerHTML = question["answers"][2];
    document.getElementById("answer_4").innerHTML = question["answers"][3];
  }
}

function answer(selection) {
  let question = questions[curentQuestion];
  console.log("Selected Answer is", selection);
  let selectedQuestionNumber = selection.slice(-1);
  console.log("Selected Question Number is", selectedQuestionNumber);
  console.log("Current question is", question["right_answer"]);

  let rightAnswer = `answer_${question["right_answer"]}`;

  if (selectedQuestionNumber == question["right_answer"]) {
    console.log("Richtige Antwort!");
    document.getElementById(selection).classList.add("bg-success");
  } else {
    console.log("Falsch!");
    document.getElementById(selection).classList.add("bg-danger");
    document.getElementById(rightAnswer).classList.add("bg-success");
  }
  document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
  curentQuestion++; // von 0 auf 1
  document.getElementById("next-btn").disabled = true; // Next Page button sperren bis eine Antwort gefunden richtig/falsch
  resetAnswers();
  showQuestion();
}

function resetAnswers() {
  // reset all answers after clicking on the next question
  document.getElementById("answer_1").classList.remove("bg-danger");
  document.getElementById("answer_1").classList.remove("bg-success");
  document.getElementById("answer_2").classList.remove("bg-danger");
  document.getElementById("answer_2").classList.remove("bg-success");
  document.getElementById("answer_3").classList.remove("bg-danger");
  document.getElementById("answer_3").classList.remove("bg-success");
  document.getElementById("answer_4").classList.remove("bg-danger");
  document.getElementById("answer_4").classList.remove("bg-success");
}
