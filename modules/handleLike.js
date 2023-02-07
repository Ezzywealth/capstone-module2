const handleLike = async (name, appId) => {
  const likesUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;

  const item = {
    item_id: name,
  };

  try {
    const response = await fetch(likesUrl, {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'content-type': 'application/json',
      },
    });
    const likes = await response.text();
    return likes;
  } catch (error) {
    return error;
  }
};
export default handleLike;
