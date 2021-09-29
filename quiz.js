const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.getElementById("submit-answer-btn");
const output = document.querySelector(".output-container");

const correctAnswers = [
  "90°",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle",
  "100°",
  "30°",
  "a + b + c",
  "no",
  "45°",
];

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let index = 0;
  let score = 0;
  const formResult = new FormData(quizForm);
  for (let value of formResult.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index++;
  }
  output.innerText = `Your score 🏆 is ${score}`;
});
