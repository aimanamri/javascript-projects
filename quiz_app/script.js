const quizData = [
    {
        question: "What is the speed of sound?",
        a: " 120 km/h",
        b: " 1,200 km/h",
        c: " 400 km/h",
        d: " 700 km/h",
        correct: "b"
    },{
        question: "What is the main component of the sun?",
        a: " Molten iron",
        b: " Rock",
        c: " Liquid lava",
        d: " Gas",
        correct: "d"
    },{
        question: "Where did the powers of Spiderman come from?",
        a: " He was born with them",
        b: " He went through a scientific experiment",
        c: " He was bitten by a radioactive spider",
        d: " He woke up with them after a dream",
        correct: "c"
    },{
        question: "What does the term “SOS” commonly stand for?",
        a: " Save Our Souls",
        b: " Save Our Seal",
        c: " Save Our Ship",
        d: " Save Our Sheep",
        correct: "a"
    },{
        question: "Cu is the chemical symbol for which element?",
        a: " Helium",
        b: " Copper",
        c: " Oxygen",
        d: " Zinc",
        correct: "b"}
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text"); 
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    // console.log(currentQuizData);
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});