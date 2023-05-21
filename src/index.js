import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import refs from './refs';
import debounce from 'lodash.debounce';
import Notiflix, { Notify } from 'notiflix';
import { renderList, countryCard } from './rendering';

const DEBOUNCE_DELAY = 300;

refs.inputEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

//Логика:
function onSearch(e) {
  const valueEl = e.target.value; //то, что мы вводим в строку для Инпута
  //очищение списков по умолчанию:
  if (!valueEl) {
    clearResults(refs.countryListEl);
    clearResults(refs.countryInfoEl);
  }
  //достаем информацию , чтобы начать рисовать
  fetchCountries(valueEl)
    .then(response => {
      if (response.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (response.length >= 2 && response.length < 10) {
        clearResults(refs.countryListEl);
        renderList(response);
        clearResults(refs.countryInfoEl);
      } else {
        clearResults(refs.countryInfoEl);
        countryCard(response);
        clearResults(refs.countryListEl);
      }
    })
    .catch(
      error =>
        Notiflix.Notify.failure('Oops, there is no country with that name') //только при ошибке выводить уведомление
    );
}
//функция очищения, расставляем ее выше, чтобы убрать дублирование повторов списка и карточек
function clearResults(value) {
  value.innerHTML = '';
}
