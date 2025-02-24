

const searchLink = document.getElementById('search-link');
const searchContainer = document.getElementById('search-container');
  const searchBtn = document.getElementById('search-btn');
  const searchInput = document.getElementById('search-input');

  searchBtn.addEventListener('click', function() {
    const query = searchInput.value.trim();
    if (query) {
      alert(`Searching for: ${query}`);
     
    } else {
      alert('Please enter a search query!');
    }
  });


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
    },
    {
        question: "What is the correct way to declare a JavaScript variable?",
        options: ["var myVar = 10", "variable myVar = 10", "v myVar = 10", "let myVar: 10"],
        answer: 0
    },

    {
        question:"Which of the following is NOT a JavaScript data type?",
        options: ["String", "Boolean", "Float", "Number"],
        answer: 2
    },

    {
        question:"What does typeof null return in JavaScript?",
        options: ["null", "undefined", "object", "string"],
        answer: 2
    },

    {
        question:"How do you write a function in JavaScript?",
        options: ["def myFunction() {}", "function myFunction() {}", "func myFunction() {}", "fn myFunction() {}"],
        answer: 1
    },

    {
        question:'What will console.log(5 + "5") output?',
        options: ["10", "55", "Error", "undefined"],
        answer: 1
    },

    {
        question:"Which keyword is used to define a constant variable in JavaScript?",
        options: ["var", "let", "const", "final"],
        answer: 2
    },

    {
        question:"How do you check if a variable x is strictly equal to 10?",
        options: ["if (x = 10)", "if (x == 10)", "if (x === 10)", "if (x => 10)"],
        answer: 2
    },
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
        if (score === 0) {
            resultElement.innerText = `Oops! You didnt get any right. Maybe you should study a bit! 😢`;
        } else {

        resultElement.innerText = `You got ${score} out of ${quiz.length}! 🎉`;
        }
        nextButton.style.display = "none";
    }
}

nextButton.addEventListener("click", () => {
    let selectedOption = document.querySelector("input[name='answer']:checked");
    if (selectedOption) {
        let answer = parseInt(selectedOption.value);
        let allOptions = document.querySelectorAll("input[name='answer']");
        if (answer === quiz[currentQuestion].answer) {
            score++;
        }
        
        currentQuestion++;
        loadQuestion();
    } else {
        alert("Select an option!");
    }
});



loadQuestion();



function toggleContent(button) {
    let content = document.getElementById("javaLinks");
    
   if (content.classList.contains("visible")) {
        content.classList.remove("visible");
        button.innerText = "Click here to see the links";
    }
   else {
    content.classList.add("visible");
    button.innerText = "Click here to hide the links";
}
}

