const fetchFishDetails = async (url, name, fish) => {
  const response = await fetch(`${url}/${name}`);
  const fishDetail = await response.json();
  return fishDetail;
};

export default fetchFishDetails;
