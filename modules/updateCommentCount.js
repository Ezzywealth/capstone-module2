const updateCommentCount = (count) => {
  const itemsCount = document.querySelector('.items_count');
  itemsCount.innerText = `(${count})`;
};
export default updateCommentCount;
