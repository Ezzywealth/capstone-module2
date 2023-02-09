import commentCount from './commentCount.js';
import displayComments from './displayComments.js';
import fetchComments from './fetchComment.js';
import generatePopup from './generatePopup.js';
import submitComments from './handleCommentSubmit.js';
import updateCommentCount from './updateCommentCount.js';

const displayPopup = async (fish, name, commentPopup, appId) => {
  const commentsUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${name}`;
  const comments = (await fetchComments(commentsUrl)) || [];

  // function to get the image link from the api data
  const fishArray = fish['Image Gallery'];
  let imageSrc = '';
  if (fish['Image Gallery']) {
    imageSrc = fishArray instanceof Array
        ? fish['Image Gallery'][0]?.src
        : fish['Image Gallery'].src;
  }

  // logic to show the popup fo a particular image
  commentPopup.classList.add('active');
  generatePopup(commentPopup, fish, imageSrc);

  // function to close the popup when the close icon is clicked
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    commentPopup.classList.remove('active');
  });
  // Function to submit a comment

  const commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;
  const commentsContainer = document.getElementById('comment-list');
  const usernameInput = document.getElementById('name');
  const commentInput = document.getElementById('comment');
  const submitComment = document.getElementById('form');
  commentsContainer.innerHTML = '';

  // function to display the comments on the dom
  displayComments(comments, commentsContainer);

  // function to count and display the number of comments for a fish
  commentCount(commentsContainer);

  // Submit button click event handler
  submitComment.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const comment = commentInput.value;
    const result = await submitComments(name, commentUrl, username, comment);

    // fetch and display the updated comment in the dom if the comment submit was successful
    if (result === 'Created') {
      const newComments = await fetchComments(commentsUrl);
      commentsContainer.innerHTML = '';
      displayComments(newComments, commentsContainer);
      updateCommentCount(newComments.length);
      submitComment.reset();
    }
  });
  // end
};
export default displayPopup;
