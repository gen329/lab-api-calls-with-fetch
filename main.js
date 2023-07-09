const BASE_URL = "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=boolean";


const button = document.querySelector("button");
//const results = document.querySelector("results");
const card = document.querySelector(".card");


button.addEventListener("click", (e) => {
    e.preventDefault();
    //const newQuestion = results;
    fetch(`${BASE_URL}`)
    .then(data => data.json())
    .then(json => {
      showCard(json)
    })
    .catch(err => showError(err))
});

const showCard = (json) => {
  card.innerHTML = `
  <article class="card">
  <h2>${json.results.category}</h2>
  <p>${json.results.question}</p>
  <button>${json.results.correct_answer} ${json.results.incorrect_answers}</button>
  <p class="hidden">${json.results.correct_answer}</p>
</article>
  `
}