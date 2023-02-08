const displayLikes = (likes, fish) => {
  const likesCount = likes.filter((like) => {
    if (like.item_id === fish['Species Name']) {
      return like.likes;
    }
    return 0;
  });
  return likesCount;
};
export default displayLikes;
