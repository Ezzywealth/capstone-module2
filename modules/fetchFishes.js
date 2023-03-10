import generateMarkup from './generateMarkup.js';
import fetchLikes from './fetchLikes.js';

const appId = '';
const footer = document.querySelector('.fixed');
const fetchFishes = async (url, numOfFishes, fishSection) => {
  const likesUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;
  try {
    const response = await fetch(url);
    const fishes = await response.json();
    fishes.forEach((fish, index) => {
      fish.id = `fworld${index}`;
    });
    if (fishes) {
      const fetchedLikes = await fetchLikes(likesUrl);

      generateMarkup(
        fishes
          .slice(0, numOfFishes)
          .filter((fish) => fish['Image Gallery'] !== null)
          .filter((fish) => fish['Species Name'] !== 'Sablefish')
          .filter(
            (fish) => fish['Species Name'] !== 'Hard Clam/Northern Quahog',
          ),
        fishSection,
        fetchedLikes,
      );
      footer.classList.remove('fixed');
    }

    return fishes;
  } catch (error) {
    return error;
  }
};
export default fetchFishes;
