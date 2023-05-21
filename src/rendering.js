import refs from './refs';
//в мою функцию приходит страна с массивом свойств. Нам нужно название
//Функция для списка +вставка в ul:
function renderList(country) {
  const listItem = country
    .map(
      (
        { flags, name } //рисуем разметку
      ) =>
        `<li class="list-item"> <img src="${flags.svg}" alt="Flag of the Country" width="50"> <h2 class="class-heading-1">${name.official}</h2></li>  `
    )
    .join(' ');

  //вставляем li в разметку ul
  refs.countryListEl.insertAdjacentHTML('beforeend', listItem);
}
//Функция для карточки +вставка в div:
function countryCard([country]) {
  const { flags, name, capital, population, languages } = country;
  const severalLangs = Object.values(languages).join(', ');
  const cardMarkup = `<div class="card-container-1"><img src="${flags.svg}" alt="Flag of the Country" width="100"><h2 class="class-heading">${name.official}</h2></div>
  <div class="card-container-2">
  <div class="super-class">Capital: <div class="class1">${capital}</div></div>
  <div class="super-class">Population: <div class="class1">${population}</div></div>
  <div class="super-class">Languages: <div class="class1">${severalLangs}</div></div>
  </div>`;
  //вставляем в div
  refs.countryInfoEl.insertAdjacentHTML('beforeend', cardMarkup);
}

export { renderList, countryCard };
