import generatePopUp from './generateModalMarkup.js';

const fetchFishDetails = async (url, name) => {
  const response = await fetch(`${url}/${name}`);
  const fishDetail = await response.json();
  return fishDetail; 
};

export default fetchFishDetails;
