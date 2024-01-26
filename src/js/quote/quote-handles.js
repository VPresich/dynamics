import { BASE_URL } from '../api/api-constants';
import DbApi from '../api/db-api';

const quoteOfTheDay = document.querySelector('.js-quote');
const QUOTE_KEY = 'quote';
const DATE_KEY = 'date';

const api = new DbApi(BASE_URL);

quote();


async function quote() {
  try {
    const { quote, author } = await getOrFetchQuote();
    displayQuote({ quote, author });
  } catch (error) {
    console.error('Error fetching or displaying quote:', error);
  }
}

async function getOrFetchQuote() {
  const storedDate = localStorage.getItem(DATE_KEY);
  const storedQuote = localStorage.getItem(QUOTE_KEY);
  const currentDate = new Date();
  const currentDateString = currentDate.toISOString().split('T')[0];

  if (storedDate === currentDateString && storedQuote) {
    const parsedQuote = JSON.parse(storedQuote);
    if (parsedQuote.quote && parsedQuote.author) {
        return parsedQuote;
    }
}

  const newQuote = await fetchQuoteFromBackend();
  localStorage.setItem(DATE_KEY, currentDateString);
  localStorage.setItem(QUOTE_KEY, JSON.stringify(newQuote));
  return newQuote;
}

async function fetchQuoteFromBackend() {
  const { quote, author } = await api.objectGetRequest('quote');
  return { quote, author };
}

function displayQuote({ quote, author }) {

  quoteOfTheDay.innerHTML = `
    <p class="quote-text">${quote}</p>
    <h3 class="quote-author">${author}</h3>
  `;
}




