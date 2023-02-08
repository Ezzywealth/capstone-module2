const generatePopup = (commentPopup, fishDetails, imageSrc) => {
  commentPopup.innerHTML = `<div class="comment-popup">
      <button class="close-popup">X</button>
      <img src="${imageSrc}" alt="">

      <div>
        <h2>${fishDetails[0]['Species Name']}</h2>
        <div class="details">
          <h3>Calories:${fishDetails[0].Calories}</h3>
          <h3>Cholesterol:${fishDetails[0].Cholesterol}</h3>
          <h3>Protein:${fishDetails[0].Protein}</h3>
          <h3>Serving Weight:${fishDetails[0]['Serving Weight']}</h3>
        </div>
      </div>
     <div class="comment-container">
      <h3 id="comment-title">Comments </h3>
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
