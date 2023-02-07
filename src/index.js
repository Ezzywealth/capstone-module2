import './style.css';
import fetchFishes from '../modules/fetchFishes.js';

const menuIcon = document.getElementById('menu');
const fishSection = document.getElementById('fish_container');
// base url to fetch all the data from the API

const baseUrl = 'https://www.fishwatch.gov/api/species';

// URL to fetch details about a particular fish from the api

const numOfFishes = 20;

window.addEventListener('load', () => {
  fetchFishes(baseUrl, numOfFishes, fishSection);
});

menuIcon.addEventListener('click', () => {
  menuIcon.textContent = menuIcon.textContent === 'menu' ? 'cancel' : 'menu';
});
