const fetchComments = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
    });
    const comments = await response.json();
    if (comments.error) {
      return 0;
    }
    return comments;
  } catch (error) {
    return error;
  }
};
export default fetchComments;
