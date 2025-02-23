

const quiz = [
    
    {
        question: "What is the correct way to declare a variable in JavaScript?",
        options: ["var x = 10;", "let x = 10;", "const x = 10;", "All of the above"],
        answer: 3
    },
    {
        question: "Which method adds an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: 0
    },
    {
        question: "What is the result of '5' + 3 in JavaScript?",
        options: ["8", "53", "Error", "undefined"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");

function loadQuestion() {
    if (currentQuestion < quiz.length) {
        questionElement.innerText = quiz[currentQuestion].question;
        optionsElement.innerHTML = "";
        quiz[currentQuestion].options.forEach((option, index) => {
            let li = document.createElement("li");
            li.innerHTML = `<input type="radio" name="answer" value="${index}"> ${option}`;
            optionsElement.appendChild(li);
        });
    } else {
        resultElement.innerText = `You scored ${score} out of ${quiz.length}! 🎉`;
        nextButton.style.display = "none";
    }
}

nextButton.addEventListener("click", () => {
    let selectedOption = document.querySelector("input[name='answer']:checked");
    if (selectedOption) {
        let answer = parseInt(selectedOption.value);
        if (answer === quiz[currentQuestion].answer) {
            score++;
        }
        currentQuestion++;
        loadQuestion();
    } else {
        alert("Selecione uma opção!");
    }
});

loadQuestion();



function toggleContent(button) {
    let content = document.getElementById("javaLinks");
    
   if (content.classList.contains("visible")) {
        content.classList.remove("visible");
        button.innerText = "Clica aqui para ver os links";
    }
   else {
    content.classList.add("visible");
    button.innerText = "Clica para fechar os links";
}
}
