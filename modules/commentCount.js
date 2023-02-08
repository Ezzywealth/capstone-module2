const commentCount = (section) => {
  const commentsContainer = document.getElementById('comment-title');

  const items = Array.from(section.children);
  commentsContainer.innerText += ` (${items.length})`;
  return items;
};
export default commentCount;
