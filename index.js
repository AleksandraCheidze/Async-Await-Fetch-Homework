// Задание 1
// По аналогии с классным заданием:
// Создайте новый репозиторий на гитхаб, разместите в нем файл ИМЯ_ФАЙЛА.json на ваш выбор
// (например, можно про страну или автомобиль и т.д.). Опубликуйте на git pages. Получите ссылку,
// куда кидать fetch.
// После этого создайте страницу с подключенным js файлом. Получите информацию из вашего json при
// помощи fetch, отразите ее на странице.

const cardElement = document.getElementById("germany-card");

async function loadCard() {
  const response = await fetch(
    "https://aleksandracheidze.github.io/fake-api/germany.json"
  );
  const obj = await response.json();
  const { name, capital, currency, founding, symbol } = obj;
  cardElement.textContent = `${name} ${capital} ${currency} ${founding} ${symbol} `;
}

loadCard();
