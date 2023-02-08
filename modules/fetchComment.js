const fetchComments = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
    });
    const comments = await response.json();
 
    if(comments.error){
      console.log("No comment for this fish")
      return 
    }
    console.log(comments)
    return comments;
  } catch (error) {
    return error;
  }
};
export default fetchComments;
