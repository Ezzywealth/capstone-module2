const displayComments = (comments, commentsContainer) => {
  comments?.forEach((item) => {
    const { creation_date: creationDate, username, comment } = item;
    const newComments = document.createElement('div');
    newComments.className = 'newComment';
    newComments.innerText = `${creationDate} ${username} : ${comment}`;
    commentsContainer.appendChild(newComments);
  });
};
export default displayComments;
