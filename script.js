// Array for questions and answers
let questions = [
  {
    question: "Was bedeutet HTML in ausgeschriebener form?",
    answers: ["Hallo", "Was", "geht", "ab"],
    right_answer: [3],
  },

  {
    question: "Was bedeutet HTML in ausgeschriebener form?",
    answers: ["1", "2", "3", "4"],
  },

  {
    question: "Was bedeutet HTML?",
    answers: ["1", "2", "3", "4"],
  },

  {
    question: "Was bedeutet HTML in ausgeschriebener form?",
    answers: ["1", "2", "3", "4"],
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
  let question = questions[curentQuestion];

  document.getElementById("questiontext").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answers"][0];
  document.getElementById("answer_2").innerHTML = question["answers"][1];
  document.getElementById("answer_3").innerHTML = question["answers"][2];
  document.getElementById("answer_4").innerHTML = question["answers"][3];

}
