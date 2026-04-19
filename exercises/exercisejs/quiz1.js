const quizData = [
    {
      question: "A musical note is a symbol representing a specific sound's...",
      options: ["Pitch", "Sound", "Music", "Noise"],
      answer: "Pitch"
    },
    {
      question: "Each note is represented by the letters...",
      options: ["A-Z", "A-G", "A-F", "A-C"],
      answer: "A-G"
    },

  ];
  
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
  
let currentQuestion = 0;
let score = 0;
  
function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
}
  
function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
        score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
        showQuestion();
    } 
    else {
        showResult();
    }
}
  
function showResult() {
    quiz.innerHTML = `
        <h2>Quiz Complete</h2>
        <p>Your score: ${score}/${quizData.length}</p>
    `;
}
  
showQuestion();