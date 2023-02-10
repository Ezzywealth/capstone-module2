const itemsCount = (section) => {
  const fishTitle = document.querySelector('.fish_count');
  const items = Array.from(section.children);
  fishTitle.innerText = `(${items.length})`;
  return items;
};
export default itemsCount;
