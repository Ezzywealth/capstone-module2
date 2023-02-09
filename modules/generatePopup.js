const generatePopup = (commentPopup, fish, imageSrc) => {
  commentPopup.innerHTML = `<div class="comment-popup">
      <button class="close-popup">X</button>
      <div class='image_container'>
      <img src="${imageSrc}" alt="">
      </div>

      <div>
        <h2 class='popup_title'>${fish['Species Name']}</h2>
        <div class="details">
          <h3>Calories:${fish.Calories}</h3>
          <h3>Cholesterol:${fish.Cholesterol}</h3>
          <h3>Protein:${fish.Protein}</h3>
          <h3>Serving Weight:${fish['Serving Weight']}</h3>
        </div>
      </div>
     <div class="comment-container">
      <h3 id="comment-title">Comments <span class='items_count'></span></h3>
      <div id="comment-list">

      </div>
     </div>

     <div class="add-comment-block">
      <h3>Add a comment</h3>
      <form action="" id="form">
        <input type="text" id="name" placeholder="Your name">
        <textarea name="" id="comment" cols="30" rows="10" placeholder="Your insights"></textarea>
        <button class"add-comment">Add comment</button>
      </form>

     </div>
    </div>`;
};
export default generatePopup;
