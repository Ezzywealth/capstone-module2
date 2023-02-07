import './style.css';
// base url to fetch all the data from the API
const baseUrl = 'https://www.fishwatch.gov/api/species';

// URL to fetch details about a particular fish from the api
const fishDetailUrl = 'https://www.fishwatch.gov/api/species/name_of_fish';
const numOfFishes = 20;

const generateMarkup = (fishes) => {
  console.log(fishes);

  const fishesContainer = document.createElement('section');
  fishesContainer.className = 'fishes_container';

  fishes.forEach((fish) => {
    const fishContainer = document.createElement('div');
    fishContainer.className = 'fish_container';

    const fishImg = document.createElement('img');
    const imgContainer = document.createElement('div');
    imgContainer.className = 'img_container';
    fishImg.className = 'fish_img';
    // fishImg.width = '300px';
    // fishImg.height = '300px';
    const fishArray = fish['Image Gallery'];
    if (fish['Image Gallery']) {
      fishImg.src =
        fishArray instanceof Array
          ? fish['Image Gallery'][0]?.src
          : fish['Image Gallery'].src;
    }

    const fishName = document.createElement('h3');
    fishName.className = 'fish_name';
    fishName.innerText = fish['Species Name'];

    const likeIcon = document.createElement('span');
    likeIcon.className = 'material-symbols-outlined';
    likeIcon.innerText = 'favorite';

    const likeCount = document.createElement('h4');
    likeCount.className = 'like_count';

    const commentBtn = document.createElement('button');
    commentBtn.className = 'comment_btn';
    commentBtn.innerText = 'comment';

    const reserveBtn = document.createElement('button');
    reserveBtn.className = 'reserve_btn';
    reserveBtn.innerText = 'Reservation';

    imgContainer.appendChild(fishImg);
    fishContainer.appendChild(imgContainer);
    fishContainer.appendChild(fishName);
    fishContainer.appendChild(commentBtn);
    fishContainer.appendChild(reserveBtn);
    fishContainer.appendChild(likeCount);
    fishContainer.appendChild(likeIcon);

    fishesContainer.appendChild(fishContainer);
  });
  document.body.appendChild(fishesContainer);
};

const fetchFishes = async (url) => {
  const response = await fetch(url);
  const fishes = await response.json();
  generateMarkup(
    fishes
      .slice(0, numOfFishes)
      .filter((fish) => fish['Image Gallery'] !== null)
  );
};

window.addEventListener('load', () => {
  fetchFishes(baseUrl);
});
