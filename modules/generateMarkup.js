import handleLike from './handleLike.js';
import itemsCount from './itemCount.js';
import displayPopup from './displayPopup.js';
import displayLikes from './displayLikes.js';

const appId = 'daS11VuHj0e3k7bb2TZc';

const commentPopup = document.querySelector('.comment-popup-section');
const generateMarkup = (fishes, fishSection, likes) => {
  const fishesContainer = document.querySelector('.fishes_container');
  fishes.forEach((fish) => {
    const name = fish['Species Name'];

    // get likes count for each item
    const like = displayLikes(likes, fish);

    const fishContainer = document.createElement('div');
    fishContainer.className = 'fish_container';

    const fishImg = document.createElement('img');
    const imgContainer = document.createElement('div');
    imgContainer.className = 'img_container';
    fishImg.className = 'fish_img';

    fishImg.alt = name;
    const fishArray = fish['Image Gallery'];
    if (fish['Image Gallery']) {
      fishImg.src = fishArray instanceof Array
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

    // comment and reservationbutton container
    const btnContainer = document.createElement('div');
    btnContainer.className = 'btn_container';

    // creates a button for the comment popup
    const commentBtn = document.createElement('button');
    commentBtn.className = 'comment_btn';
    commentBtn.innerText = 'comment';

    // logic to display the popup when the button is clicked
    commentBtn.addEventListener('click', async () => {
      displayPopup(fish, name, commentPopup, appId);
    });

    // logic for creating the reservation button
    const reserveBtn = document.createElement('button');
    reserveBtn.className = 'reserve_btn';
    reserveBtn.innerText = 'Reservation';

    // logic for appending all the created nodes
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
