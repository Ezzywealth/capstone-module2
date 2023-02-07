import './style.css';
import fetchFishes from '../modules/fetchFishes.js';

const menuIcon = document.getElementById('menu');
const closeIcon = document.getElementById('close');
const fishSection = document.getElementById('fish_container');

// base url to fetch all the data from the API
const baseUrl = 'https://www.fishwatch.gov/api/species';

const numOfFishes = 20;

window.addEventListener('load', () => {
  fetchFishes(baseUrl, numOfFishes, fishSection);
});

menuIcon.addEventListener('click', () => {
  const navbar = document.querySelector('nav');
  navbar.style.display = 'flex';
});

closeIcon.addEventListener('click', () => {
  const navbar = document.querySelector('nav');
  navbar.style.display = 'none';
});
