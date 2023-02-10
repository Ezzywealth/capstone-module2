const commentCount = (section) => {
  const itemsCount = document.querySelector('.items_count');
  const items = Array.from(section.children);
  itemsCount.innerText += ` (${items.length})`;
  return items;
};
export default commentCount;
