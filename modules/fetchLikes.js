const fetchLikes = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
    });
    const likes = await response.json();
    return likes;
  } catch (error) {
    console.log(error);
  }
};
export default fetchLikes;
