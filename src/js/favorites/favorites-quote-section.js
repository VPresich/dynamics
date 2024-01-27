import axios from 'axios';

const favoritesQuoteDayTitle = document.querySelector(
  '.favorites-quote-day-title'
);

const instance = axios.create({
  baseURL: 'https://energyflow.b.goit.study/api',
});

const favoritesQuote = instance
  .get('/quote ')
  .then(resault => {
    favoritesQuoteDayTitle.insertAdjacentHTML(
      'beforeend',
      ` <p class="favorites-quote-day-text">
                ${resault.data.quote}
                </p>
                    <p class="favorites-quote-day-text-autor">${resault.data.author}</p>`
    );
  })
  .catch(error => console.log(error));
