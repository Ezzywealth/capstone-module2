import './style.css';
import fetchFishes from '../modules/fetchFishes.js';
import itemsCount from '../modules/itemCount.js';

const menuIcon = document.getElementById('menu');
const fishSection = document.getElementById('fish_container');
export const appId = 'daS11VuHj0e3k7bb2TZc';

// base url to fetch all the data from the API
const baseUrl = 'https://www.fishwatch.gov/api/species';

const numOfFishes = 20;

window.addEventListener('load', () => {
  fetchFishes(baseUrl, numOfFishes, fishSection);
});

menuIcon.addEventListener('click', () => {
  menuIcon.textContent = menuIcon.textContent === 'menu' ? 'cancel' : 'menu';
});

// const createId = async (url) => {
//   const resp = await fetch(url, {
//     method: 'POST',
//   });
//   const data = await resp.text();
//   console.log(data);
// };
// createId(
//   'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps'
// );
