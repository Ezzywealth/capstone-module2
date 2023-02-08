import generateMarkup from './generateMarkup.js';
import fetchLikes from './fetchLikes.js';

const appId = 'daS11VuHj0e3k7bb2TZc';
const fetchFishes = async (url, numOfFishes, fishSection) => {
  const likesUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;
  try {
    const response = await fetch(url);
    const fishes = await response.json();

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
    }
    return fishes;
  } catch (error) {
    return error;
  }
};
export default fetchFishes;
