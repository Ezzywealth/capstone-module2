const displayComments = (comments, commentsContainer) => {
  comments?.forEach((comment) => {
    const newComments = document.createElement('div');
    newComments.className = 'comments-list';
    newComments.innerText = ` ${comment.creation_date} ${comment.username} : ${comment.comment} `;
    commentsContainer.appendChild(newComments);
  });
};
export default displayComments;
