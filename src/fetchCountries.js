const BASE_URL = 'https://restcountries.com/v3.1/name/';

function fetchCountries(country) {
  const url = `${BASE_URL}${country}?fields=name,capital,population,flags,languages`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export { fetchCountries };
//получаем страны с бэкэнда. Отправляем запрос, полчаем промис.
