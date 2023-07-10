const BASE_URL = "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=boolean";
console.log(BASE_URL)

const submit = document.querySelector('button[type="submit"]');
const main = document.querySelector("main");

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("firing click");
  fetch(BASE_URL)
    .then(data => data.json())
    .then(json => showCard(json))
    .catch(err => alert("Something went wrong.", err))
})

const showCard = (json) => {
  let results = json.results;
  let questions = "";

  for (let i = 0; i < results.legnth; i++) {
    questions +=
      `<h2>${results[i].category}</h2>
    <p>${results[i].question}</p>
    <button>${results[i].correct_answer} ${results[i].incorrect_answers}</button>
    <p class="hidden">${results[i].correct_answer}</p>`
  }
  main.innerHTML = questions;
}