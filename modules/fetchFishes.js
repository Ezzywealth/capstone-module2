import generateMarkup from './generateMarkup.js';

const fetchFishes = async (url, numOfFishes, fishSection) => {
  const response = await fetch(url);
  const fishes = await response.json();

  generateMarkup(
    fishes
      .slice(0, numOfFishes)
      .filter((fish) => fish['Image Gallery'] !== null)
      .filter((fish) => fish['Species Name'] !== 'Sablefish'),
    fishSection,
  );
};
export default fetchFishes;
