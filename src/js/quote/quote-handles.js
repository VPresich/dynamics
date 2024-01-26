import { BASE_URL } from '../api/api-constants';
import DbApi from '../api/db-api';

const quoteOfTheDay = document.querySelector('.js-quote');

quote();

function displayQuote({ author, quote }) {
  quoteOfTheDay.innerHTML = `
    <p class="quote-text">${quote}</p>
    <h3 class="quote-author">${author}</h3>
  `;
}

