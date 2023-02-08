const submitComments = async (name, commentUrl, username, comment) => {
  try {
    const data = { item_id: name, username, comment };
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(commentUrl, options);
    const result = await response.text();
    return result;
  } catch (error) {
    return error;
  }
};
export default submitComments;
