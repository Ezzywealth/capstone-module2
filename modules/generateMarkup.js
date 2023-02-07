import handleLike from './handleLike.js';
import fetchFishDetails from './fetchFishDetails.js';
import { appId } from '../src/index.js';
import itemsCount from './itemCount.js';

const fishDetailUrl = 'https://www.fishwatch.gov/api/species';
const generateMarkup = (fishes, fishSection, likes) => {
  const fishesContainer = document.createElement('section');
  fishesContainer.className = 'fishes_container';
  fishes.forEach((fish) => {
    const name = fish['Species Name'];
    const like = likes.filter((like) => {
      if (like.item_id === fish['Species Name']) {
        return like.likes;
      }
      return 0;
    });

    const fishContainer = document.createElement('div');
    fishContainer.className = 'fish_container';

    const fishImg = document.createElement('img');
    const imgContainer = document.createElement('div');
    imgContainer.className = 'img_container';
    fishImg.className = 'fish_img';

    fishImg.alt = name;
    const fishArray = fish['Image Gallery'];
    if (fish['Image Gallery']) {
      fishImg.src =
        fishArray instanceof Array
          ? fish['Image Gallery'][0]?.src
          : fish['Image Gallery'].src;
    }

    const nameContainer = document.createElement('div');
    nameContainer.className = 'name_container';
    const fishName = document.createElement('h3');
    fishName.className = 'fish_name';
    fishName.innerText = name;

    const likeContainer = document.createElement('div');
    likeContainer.className = 'like_container';
    const likeIcon = document.createElement('span');
    likeIcon.className = 'material-symbols-outlined';
    likeIcon.innerText = 'favorite';
    let likesCount = like.length < 1 ? 0 : like[0].likes;
    const likeCount = document.createElement('h4');
    likeIcon.addEventListener('click', () => {
      handleLike(name, appId);
      likesCount += 1;
      likeCount.innerText = `${likesCount} likes`;
    });

    likeCount.className = 'like_count';
    likeCount.innerText = `${likesCount} likes`;

    const btnContainer = document.createElement('div');
    btnContainer.className = 'btn_container';
    const commentBtn = document.createElement('button');
    commentBtn.className = 'comment_btn';
    commentBtn.innerText = 'comment';
    commentBtn.addEventListener('click', () => {
      fetchFishDetails(fishDetailUrl, fish['Species Name']);
    });

    const reserveBtn = document.createElement('button');
    reserveBtn.className = 'reserve_btn';
    reserveBtn.innerText = 'Reservation';

    nameContainer.appendChild(fishName);
    nameContainer.appendChild(likeContainer);
    likeContainer.appendChild(likeIcon);
    likeContainer.appendChild(likeCount);
    imgContainer.appendChild(fishImg);
    fishContainer.appendChild(imgContainer);
    fishContainer.appendChild(nameContainer);
    btnContainer.appendChild(commentBtn);
    btnContainer.appendChild(reserveBtn);
    fishContainer.appendChild(btnContainer);

    fishesContainer.appendChild(fishContainer);
  });
  itemsCount(fishesContainer);
  fishSection.appendChild(fishesContainer);
};
export default generateMarkup;
