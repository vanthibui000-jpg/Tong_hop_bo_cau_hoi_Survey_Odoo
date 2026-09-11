const questions = [
    {
        question: "When adding a product to an Expense report, what type of tax configuration is not compatible?",
        answers: [
            "Included in Price",
            "Excluded from Price",
            "Both are compatible"
        ],
        correct: 0
    },
    {
        question: "How would you set up a mechanism where the amount of time off an employee gets depends on his/her number of days worked?",
        answers: [
            "You create a new Time Off type with the allocation mode set to 'Fixed by'",
            "You create a new Allocation and set the Allocation Type to 'Accrual Allocation'",
            "You create a new Time Off type that does not permit Extra Day Requests"
        ],
        correct: 1
    },
    {
        question: "If you wanted to set a color for 'Sick Time Off' (as displayed in the dashboard view of the Time Off module), where would you go to do this?",
        answers: [
            "From Configuration > Time Off Types",
            "From the Calendar view of your leaves",
            "This is not something you can configure"
        ],
        correct: 0
    },
    {
        question: "Which application is mainly used to manage employees' Check In and Check Out in Odoo?",
        answers: [
            "Attendances",
            "Recruitment",
            "Expenses",
            "Appraisals"
        ],
        correct: 0
    },
    {
        question: "What does BoM stand for in Odoo Manufacturing?",
        answers: [
            "Bank of Materials",
            "Bill of Materials",
            "Balance of Manufacturing",
            "Batch of Materials"
        ],
        correct: 1
    }
];

let currentQuestion = 0;
let userAnswers = new Array(questions.length).fill(null);
let submitted = false;

const quizContainer = document.getElementById("quiz-container");
const questionNumber = document.getElementById("question-number");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const submitButton = document.getElementById("submit-btn");
const resultBox = document.getElementById("result-box");

function renderQuestion() {
    const q = questions[currentQuestion];
    quizContainer.innerHTML = "";

    const questionBox = document.createElement("div");
    questionBox.className = "question-box";

    const questionText = document.createElement("div");
    questionText.className = "question-text";
    questionText.innerText = q.question;
    questionBox.appendChild(questionText);

    q.answers.forEach((answer, index) => {
        const answerDiv = document.createElement("div");
        answerDiv.className = "answer";

        if (userAnswers[currentQuestion] === index) {
            answerDiv.classList.add("selected");
        }

        if (submitted) {
            if (index === q.correct) {
                answerDiv.classList.add("correct");
            }
            if (userAnswers[currentQuestion] === index && index !== q.correct) {
                answerDiv.classList.add("wrong");
            }
        }

        const letter = String.fromCharCode(65 + index);

        const text = document.createElement("div");
        text.className = "answer-text";
        text.innerText = letter + ". " + answer;

        const radio = document.createElement("div");
        radio.className = "radio-circle";

        answerDiv.appendChild(text);
        answerDiv.appendChild(radio);

        if (!submitted) {
            answerDiv.onclick = () => selectAnswer(index);
        }

        questionBox.appendChild(answerDiv);
    });

    quizContainer.appendChild(questionBox);

    questionNumber.innerText =
        "Câu " + (currentQuestion + 1) + " / " + questions.length;

    prevButton.disabled = currentQuestion === 0;
    nextButton.disabled = currentQuestion === questions.length - 1;
}

function selectAnswer(index) {
    userAnswers[currentQuestion] = index;
    renderQuestion();
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    }
}

function submitQuiz() {
    const unanswered = userAnswers.filter(answer => answer === null).length;

    if (unanswered > 0) {
        const ok = confirm(
            "Bạn còn " + unanswered +
            " câu chưa trả lời.\n\nBạn vẫn muốn nộp bài?"
        );
        if (!ok) return;
    }

    submitted = true;
    let score = 0;

    questions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            score++;
        }
    });

    const percentage = Math.round(score / questions.length * 100);

    resultBox.style.display = "block";
    resultBox.innerHTML =
        "Kết quả: " + score + " / " + questions.length +
        "<br><br>Điểm: " + percentage + "%";

    currentQuestion = 0;
    submitButton.innerText = "Đã nộp bài";
    submitButton.disabled = true;
    renderQuestion();

    window.scrollTo({ top: 0, behavior: "smooth" });
}

renderQuestion();
