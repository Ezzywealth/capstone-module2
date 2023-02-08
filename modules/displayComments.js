const displayComments = (comments, commentsContainer) => {
  comments?.forEach((item) => {
    const { creation_date: creationDate, username, comment } = item;
    const newComments = document.createElement('div');
    const dateSpan = document.createElement('span');
    dateSpan.innerText = creationDate;
    const nameSpan = document.createElement('span');
    nameSpan.innerText = username;
    const commentSpan = document.createElement('span');
    commentSpan.innerText = comment;
    newComments.className = 'comments-list';
    newComments.appendChild(dateSpan);
    newComments.appendChild(nameSpan);
    newComments.appendChild(commentSpan);
    commentsContainer.appendChild(newComments);
  });
};
export default displayComments;
