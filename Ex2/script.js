// Задание 2 *дополнительно
// Выберите одну API из списка. Сделайте fetch запрос,
// разместите полученную от API информацию на странице html.

const jokeElement = document.getElementById("joke-card");

function getJokes() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const { setup, punchline } = data;
      jokeElement.textContent = `${setup} ${punchline}`;
    });
}
getJokes();
