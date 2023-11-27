// Sample array of words for testing
const words = ['Bonjour', 'Manger', 'Fenêtre', 'Voyage', 'Chapeau'];

let currentWordIndex = 0;
let correctAnswers = 0;
let startTime;

document.addEventListener('DOMContentLoaded', () => {
    loadQuiz();
});

function loadQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <h1>French Vocabulary Quiz</h1>
        <div id="timer">Timer: 0s</div>
        <div id="result"></div>
        <input type="text" id="answerInput" placeholder="Type your answer">
        <button onclick="checkAnswer()">Submit</button>
    `;
    startTime = new Date().getTime();
    updateTimer();

    document.getElementById('answerInput').focus();
}

function checkAnswer() {
    const userAnswer = document.getElementById('answerInput').value.toLowerCase();
    const correctAnswer = words[currentWordIndex].toLowerCase();

    if (userAnswer === correctAnswer) {
        correctAnswers++;
        updateResult(correctAnswers);
        currentWordIndex++;

        if (currentWordIndex < words.length) {
            loadQuiz();
        } else {
            quizComplete();
        }
    } else {
        alert('Incorrect! Try again.');
    }
}

function updateResult(count) {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = 'Result: ' + '🟢'.repeat(count);
}

function updateTimer() {
    const timerContainer = document.getElementById('timer');
    const currentTime = Math.floor((new Date().getTime() - startTime) / 1000);
    timerContainer.textContent = 'Timer: ' + currentTime + 's';
}

function quizComplete() {
    alert('Quiz complete! You got ' + correctAnswers + ' correct answers.');
    // You may want to add more logic for handling quiz completion
}
