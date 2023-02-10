import commentCount from '../commentCount.js';
import displayComments from '../displayComments.js';

const comments = [
  {
    creation_date: '2023-02-08',
    username: 'aubin',
    comment: 'Nice one',
  },
  {
    creation_date: '2023-02-08',
    username: 'John',
    comment: 'Good',
  },
  {
    creation_date: '2023-02-08',
    username: 'Marc',
    comment: 'Great',
  },
];
describe('TodoApp', () => {
  test('Number of comments In the DOM before API fetch', () => {
    document.body.innerHTML = `
   <div class="comment-container">
   <h3 id="comment-title">Comments <span class='items_count'></span></h3>
   <div id="comment-list">

   </div>
  </div`;
    const section = document.getElementById('comment-list');
    expect(commentCount(section)).toHaveLength(0);
  });

  test('Number of comments displayed in the DOM after a successful API call', () => {
    document.body.innerHTML = `
 
    <div class="comment-container">
    <h3 id="comment-title">Comments <span class='items_count'></span></h3>
    <div id="comment-list">

    </div>
   </div>`;
    const section = document.getElementById('comment-list');

    displayComments(comments, section);
    expect(commentCount(section)).toHaveLength(3);
  });
});
