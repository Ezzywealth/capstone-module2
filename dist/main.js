/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/commentCount.js":
/*!*********************************!*\
  !*** ./modules/commentCount.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCount = (section) => {\n  const commentsContainer = document.getElementById('comment-title');\n  const items = Array.from(section.children);\n  commentsContainer.innerText += ` (${items.length})`;\n  return items;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCount);\n\n\n//# sourceURL=webpack://capstone-module2/./modules/commentCount.js?");

/***/ }),

/***/ "./modules/displayComments.js":
/*!************************************!*\
  !*** ./modules/displayComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayComments = (comments, commentsContainer) => {\n  comments?.forEach((item) => {\n    const { creation_date: creationDate, username, comment } = item;\n    const newComments = document.createElement('div');\n    const dateSpan = document.createElement('span');\n    dateSpan.innerText = creationDate;\n    const nameSpan = document.createElement('span');\n    nameSpan.innerText = username;\n    const commentSpan = document.createElement('span');\n    const dividerSpan = document.createElement('span');\n    dividerSpan.innerText = ':';\n    commentSpan.innerText = comment;\n    newComments.className = 'comments-list';\n    newComments.appendChild(dateSpan);\n    newComments.appendChild(nameSpan);\n    newComments.appendChild(dividerSpan);\n    newComments.appendChild(commentSpan);\n    commentsContainer.appendChild(newComments);\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayComments);\n\n\n//# sourceURL=webpack://capstone-module2/./modules/displayComments.js?");

/***/ }),

/***/ "./modules/displayLikes.js":
/*!*********************************!*\
  !*** ./modules/displayLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayLikes = (likes, fish) => {\n  const likesCount = likes.filter((like) => {\n    if (like.item_id === fish['Species Name']) {\n      return like.likes;\n    }\n    return 0;\n  });\n  return likesCount;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayLikes);\n\n\n//# sourceURL=webpack://capstone-module2/./modules/displayLikes.js?");

/***/ }),

/***/ "./modules/displayPopup.js":
/*!*********************************!*\
  !*** ./modules/displayPopup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentCount_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentCount.js */ \"./modules/commentCount.js\");\n/* harmony import */ var _displayComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayComments.js */ \"./modules/displayComments.js\");\n/* harmony import */ var _fetchComment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchComment.js */ \"./modules/fetchComment.js\");\n/* harmony import */ var _fetchFishDetails_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetchFishDetails.js */ \"./modules/fetchFishDetails.js\");\n/* harmony import */ var _generatePopup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generatePopup.js */ \"./modules/generatePopup.js\");\n/* harmony import */ var _handleCommentSubmit_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handleCommentSubmit.js */ \"./modules/handleCommentSubmit.js\");\n\n\n\n\n\n\n\nconst displayPopup = async (fishDetailUrl, fish, name, commentPopup, appId) => {\n  const commentsUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${name}`;\n  const comments = (await (0,_fetchComment_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(commentsUrl)) || [];\n\n  const fishDetails = await (0,_fetchFishDetails_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n    fishDetailUrl,\n    fish['Species Name'],\n  );\n\n  // function to get the image link from the api data\n  const fishArray = fishDetails[0]['Image Gallery'];\n  let imageSrc = '';\n  if (fishDetails[0]['Image Gallery']) {\n    imageSrc = fishArray instanceof Array\n      ? fishDetails[0]['Image Gallery'][0]?.src\n      : fishDetails[0]['Image Gallery'].src;\n  }\n\n  // logic to show the popup fo a particular image\n  commentPopup.classList.add('active');\n  (0,_generatePopup_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(commentPopup, fishDetails, imageSrc);\n\n  // function to close the popup when the close icon is clicked\n  const closePopup = document.querySelector('.close-popup');\n  closePopup.addEventListener('click', () => {\n    commentPopup.classList.remove('active');\n  });\n  // Function to submit a comment\n\n  const commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;\n  const commentsContainer = document.getElementById('comment-list');\n  const usernameInput = document.getElementById('name');\n  const commentInput = document.getElementById('comment');\n  const submitComment = document.getElementById('form');\n  commentsContainer.innerHTML = '';\n\n  // function to display the comments on the dom\n  (0,_displayComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(comments, commentsContainer);\n\n  // function to count and display the number of comments for a fish\n  (0,_commentCount_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(commentsContainer);\n\n  // Submit button click event handler\n  submitComment.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const username = usernameInput.value;\n    const comment = commentInput.value;\n    (0,_handleCommentSubmit_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(name, commentUrl, appId, username, comment);\n  });\n  // end\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayPopup);\n\n\n//# sourceURL=webpack://capstone-module2/./modules/displayPopup.js?");

/***/ }),

/***/ "./modules/fetchComment.js":
/*!*********************************!*\
  !*** ./modules/fetchComment.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchComments = async (url) => {\n  try {\n    const response = await fetch(url, {\n      method: 'GET',\n    });\n    const comments = await response.json();\n    if (comments.error) {\n      return 0;\n    }\n    return comments;\n  } catch (error) {\n    return error;\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchComments);\n\n\n//# sourceURL=webpack://capstone-module2/./modules/fetchComment.js?");

/***/ }),

/***/ "./modules/fetchFishDetails.js":
/*!*************************************!*\
  !*** ./modules/fetchFishDetails.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchFishDetails = async (url, name) => {\n  const response = await fetch(`${url}/${name}`);\n  const fishDetail = await response.json();\n  return fishDetail;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchFishDetails);\n\n\n//# sourceURL=webpack://capstone-module2/./modules/fetchFishDetails.js?");

/***/ }),

/***/ "./modules/fetchFishes.js":
/*!********************************!*\
  !*** ./modules/fetchFishes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _generateMarkup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateMarkup.js */ \"./modules/generateMarkup.js\");\n/* harmony import */ var _fetchLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchLikes.js */ \"./modules/fetchLikes.js\");\n\n\n\nconst appId = 'daS11VuHj0e3k7bb2TZc';\nconst fetchFishes = async (url, numOfFishes, fishSection) => {\n  const likesUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;\n  try {\n    const response = await fetch(url);\n    const fishes = await response.json();\n\n    if (fishes) {\n      const fetchedLikes = await (0,_fetchLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(likesUrl);\n\n      (0,_generateMarkup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n        fishes\n          .slice(0, numOfFishes)\n          .filter((fish) => fish['Image Gallery'] !== null)\n          .filter((fish) => fish['Species Name'] !== 'Sablefish')\n          .filter(\n            (fish) => fish['Species Name'] !== 'Hard Clam/Northern Quahog',\n          ),\n        fishSection,\n        fetchedLikes,\n      );\n    }\n    return fishes;\n  } catch (error) {\n    return error;\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchFishes);\n\n\n//# sourceURL=webpack://capstone-module2/./modules/fetchFishes.js?");

/***/ }),

/***/ "./modules/fetchLikes.js":
/*!*******************************!*\
  !*** ./modules/fetchLikes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchLikes = async (url) => {\n  try {\n    const response = await fetch(url, {\n      method: 'GET',\n    });\n    const likes = await response.json();\n    return likes;\n  } catch (error) {\n    return error;\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchLikes);\n\n\n//# sourceURL=webpack://capstone-module2/./modules/fetchLikes.js?");

/***/ }),

/***/ "./modules/generateMarkup.js":
/*!***********************************!*\
  !*** ./modules/generateMarkup.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _handleLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleLike.js */ \"./modules/handleLike.js\");\n/* harmony import */ var _itemCount_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemCount.js */ \"./modules/itemCount.js\");\n/* harmony import */ var _displayPopup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayPopup.js */ \"./modules/displayPopup.js\");\n/* harmony import */ var _displayLikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayLikes.js */ \"./modules/displayLikes.js\");\n\n\n\n\n\nconst appId = 'daS11VuHj0e3k7bb2TZc';\nconst fishDetailUrl = 'https://www.fishwatch.gov/api/species';\n\nconst commentPopup = document.querySelector('.comment-popup-section');\nconst generateMarkup = (fishes, fishSection, likes) => {\n  const fishesContainer = document.querySelector('.fishes_container');\n  fishes.forEach((fish) => {\n    const name = fish['Species Name'];\n\n    // get likes count for each item\n    const like = (0,_displayLikes_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(likes, fish);\n\n    const fishContainer = document.createElement('div');\n    fishContainer.className = 'fish_container';\n\n    const fishImg = document.createElement('img');\n    const imgContainer = document.createElement('div');\n    imgContainer.className = 'img_container';\n    fishImg.className = 'fish_img';\n\n    fishImg.alt = name;\n    const fishArray = fish['Image Gallery'];\n    if (fish['Image Gallery']) {\n      fishImg.src = fishArray instanceof Array\n        ? fish['Image Gallery'][0]?.src\n        : fish['Image Gallery'].src;\n    }\n\n    const nameContainer = document.createElement('div');\n    nameContainer.className = 'name_container';\n    const fishName = document.createElement('h3');\n    fishName.className = 'fish_name';\n    fishName.innerText = name;\n\n    const likeContainer = document.createElement('div');\n    likeContainer.className = 'like_container';\n    const likeIcon = document.createElement('span');\n    likeIcon.className = 'material-symbols-outlined';\n    likeIcon.innerText = 'favorite';\n    let likesCount = like.length < 1 ? 0 : like[0].likes;\n    const likeCount = document.createElement('h4');\n    likeIcon.addEventListener('click', () => {\n      (0,_handleLike_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name, appId);\n      likesCount += 1;\n      likeCount.innerText = `${likesCount} likes`;\n    });\n\n    likeCount.className = 'like_count';\n    likeCount.innerText = `${likesCount} likes`;\n\n    // comment and reservationbutton container\n    const btnContainer = document.createElement('div');\n    btnContainer.className = 'btn_container';\n\n    // creates a button for the comment popup\n    const commentBtn = document.createElement('button');\n    commentBtn.className = 'comment_btn';\n    commentBtn.innerText = 'comment';\n\n    // logic to display the popup when the button is clicked\n    commentBtn.addEventListener('click', async () => {\n      (0,_displayPopup_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(fishDetailUrl, fish, name, commentPopup, appId);\n    });\n\n    // logic for creating the reservation button\n    const reserveBtn = document.createElement('button');\n    reserveBtn.className = 'reserve_btn';\n    reserveBtn.innerText = 'Reservation';\n\n    // logic for appending all the created nodes\n    nameContainer.appendChild(fishName);\n    nameContainer.appendChild(likeContainer);\n    likeContainer.appendChild(likeIcon);\n    likeContainer.appendChild(likeCount);\n    imgContainer.appendChild(fishImg);\n    fishContainer.appendChild(imgContainer);\n    fishContainer.appendChild(nameContainer);\n    btnContainer.appendChild(commentBtn);\n    btnContainer.appendChild(reserveBtn);\n    fishContainer.appendChild(btnContainer);\n    fishesContainer.appendChild(fishContainer);\n  });\n  (0,_itemCount_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(fishesContainer);\n  fishSection.appendChild(fishesContainer);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateMarkup);\n\n\n//# sourceURL=webpack://capstone-module2/./modules/generateMarkup.js?");

/***/ }),

/***/ "./modules/generatePopup.js":
/*!**********************************!*\
  !*** ./modules/generatePopup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst generatePopup = (commentPopup, fishDetails, imageSrc) => {\n  commentPopup.innerHTML = `<div class=\"comment-popup\">\n      <button class=\"close-popup\">X</button>\n      <div class='image_container'>\n      <img src=\"${imageSrc}\" alt=\"\">\n      </div>\n\n      <div>\n        <h2 class='popup_title'>${fishDetails[0]['Species Name']}</h2>\n        <div class=\"details\">\n          <h3>Calories:${fishDetails[0].Calories}</h3>\n          <h3>Cholesterol:${fishDetails[0].Cholesterol}</h3>\n          <h3>Protein:${fishDetails[0].Protein}</h3>\n          <h3>Serving Weight:${fishDetails[0]['Serving Weight']}</h3>\n        </div>\n      </div>\n     <div class=\"comment-container\">\n      <h3 id=\"comment-title\">Comments </h3>\n      <div id=\"comment-list\">\n\n      </div>\n     </div>\n\n     <div class=\"add-comment-block\">\n      <h3>Add a comment</h3>\n      <form action=\"\" id=\"form\">\n        <input type=\"text\" id=\"name\" placeholder=\"Your name\">\n        <textarea name=\"\" id=\"comment\" cols=\"30\" rows=\"10\" placeholder=\"Your insights\"></textarea>\n        <button class\"add-comment\">Add comment</button>\n      </form>\n\n     </div>\n    </div>`;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generatePopup);\n\n\n//# sourceURL=webpack://capstone-module2/./modules/generatePopup.js?");

/***/ }),

/***/ "./modules/handleCommentSubmit.js":
/*!****************************************!*\
  !*** ./modules/handleCommentSubmit.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst submitComments = async (name, commentUrl, username, comment) => {\n  try {\n    const data = { item_id: name, username, comment };\n    const options = {\n      method: 'POST',\n      body: JSON.stringify(data),\n      headers: { 'Content-Type': 'application/json' },\n    };\n    const response = await fetch(commentUrl, options);\n    const result = await response.text();\n    return result;\n  } catch (error) {\n    return error;\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (submitComments);\n\n\n//# sourceURL=webpack://capstone-module2/./modules/handleCommentSubmit.js?");

/***/ }),

/***/ "./modules/handleLike.js":
/*!*******************************!*\
  !*** ./modules/handleLike.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst handleLike = async (name, appId) => {\n  const likesUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;\n\n  const item = {\n    item_id: name,\n  };\n\n  try {\n    const response = await fetch(likesUrl, {\n      method: 'POST',\n      body: JSON.stringify(item),\n      headers: {\n        'content-type': 'application/json',\n      },\n    });\n    const likes = await response.text();\n    return likes;\n  } catch (error) {\n    return error;\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleLike);\n\n\n//# sourceURL=webpack://capstone-module2/./modules/handleLike.js?");

/***/ }),

/***/ "./modules/itemCount.js":
/*!******************************!*\
  !*** ./modules/itemCount.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst itemsCount = (section) => {\n  const fishTitle = document.querySelector('.fish_count');\n  const items = Array.from(section.children);\n  fishTitle.innerText = `(${items.length})`;\n  return items;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemsCount);\n\n\n//# sourceURL=webpack://capstone-module2/./modules/itemCount.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body,\\r\\nhtml {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  background-color: lightblue;\\r\\n  font-family: 'Sanchez', serif;\\r\\n  width: 100vw;\\r\\n}\\r\\n\\r\\n.main_header {\\r\\n  text-align: center;\\r\\n  font-size: 2rem;\\r\\n  color: #32516b;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n#fish_container {\\r\\n  margin-top: 100px;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: flex;\\r\\n  gap: 0.5rem;\\r\\n  margin-top: 10rem;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.fish_count {\\r\\n  margin: 0;\\r\\n  font-size: 2rem;\\r\\n  color: #32516b;\\r\\n}\\r\\n\\r\\n.fishes_container {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(1, 1fr);\\r\\n  padding: 1rem;\\r\\n  row-gap: 1.5rem;\\r\\n  column-gap: 3rem;\\r\\n  margin-bottom: 2rem;\\r\\n}\\r\\n\\r\\n.fish_container {\\r\\n  padding: 1rem;\\r\\n  background: #0093d0;\\r\\n  border-radius: 10px;\\r\\n  margin-left: 1rem;\\r\\n}\\r\\n\\r\\n.name_container {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: flex-start;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.fish_name {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.like_count {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.material-symbols-outlined {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.like_container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.img_container {\\r\\n  width: 100%;\\r\\n  height: 300px;\\r\\n}\\r\\n\\r\\nimg {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\nimg:hover {\\r\\n  transition: all 3000s ease-in-out;\\r\\n  scale: 1.15;\\r\\n}\\r\\n\\r\\n.btn_container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  padding: 10px;\\r\\n  border-radius: 10px;\\r\\n  font-size: 1.2rem;\\r\\n  border: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  position: fixed;\\r\\n  background: #0093d0;\\r\\n  top: 0;\\r\\n  right: 0;\\r\\n  left: 0;\\r\\n  padding: 20px;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  box-sizing: border-box;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.toolbar {\\r\\n  position: relative;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  box-sizing: border-box;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.logo-block {\\r\\n  width: 70px;\\r\\n  height: 70px;\\r\\n  background: white;\\r\\n  border-radius: 100%;\\r\\n}\\r\\n\\r\\n.nav {\\r\\n  display: none;\\r\\n  background-color: #091e27;\\r\\n  flex-direction: column;\\r\\n  position: fixed;\\r\\n  left: -100%;\\r\\n  top: 0;\\r\\n  bottom: 0;\\r\\n  height: 100%;\\r\\n  padding: 20px;\\r\\n  gap: 2rem;\\r\\n  animation: slide-in 2s forwards;\\r\\n}\\r\\n\\r\\n.navbar {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n@keyframes slide-in {\\r\\n  0% {\\r\\n    left: -110%;\\r\\n    right: 110%;\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    left: 0;\\r\\n    right: 0;\\r\\n  }\\r\\n}\\r\\n\\r\\n.nav a,\\r\\n.toolbar a {\\r\\n  text-decoration: none;\\r\\n  color: white;\\r\\n  font-size: 1.3rem;\\r\\n}\\r\\n\\r\\n#menu {\\r\\n  display: flex;\\r\\n  font-size: 3rem;\\r\\n  color: #32516b;\\r\\n}\\r\\n\\r\\n#close {\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n  font-size: 3rem;\\r\\n  color: #32516b;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  background: #53738f;\\r\\n  padding: 1rem;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.sign-up {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 5px;\\r\\n  align-items: center;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.about-us {\\r\\n  display: flex;\\r\\n  list-style: none;\\r\\n  gap: 15px;\\r\\n}\\r\\n\\r\\n.input {\\r\\n  background: unset;\\r\\n  border: 1px solid white;\\r\\n  border-radius: 5px;\\r\\n  height: 30px;\\r\\n  width: 10rem;\\r\\n}\\r\\n\\r\\n.about-us a {\\r\\n  color: white;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.social-media {\\r\\n  display: flex;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\n.scocial-block {\\r\\n  width: 30px;\\r\\n  height: 30px;\\r\\n  background: white;\\r\\n  border-radius: 100%;\\r\\n}\\r\\n\\r\\n.comment-popup-section {\\r\\n  width: 80%;\\r\\n  backdrop-filter: blur(5px);\\r\\n  overflow-y: scroll;\\r\\n  padding: 50px;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  bottom: 0;\\r\\n  right: 0;\\r\\n  position: fixed;\\r\\n  margin: auto;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.active {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.newComment {\\r\\n  display: flex;\\r\\n  gap: 0.5rem;\\r\\n}\\r\\n\\r\\n.comment-popup {\\r\\n  background: #add8e6;\\r\\n  width: 100%;\\r\\n  margin: auto;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n  padding: 10px;\\r\\n  border: 2px solid #0093d0;\\r\\n  color: #314c61;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.image_container {\\r\\n  width: 500px;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.image_container img {\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.popup_title {\\r\\n  margin: 0;\\r\\n  margin-bottom: 1rem;\\r\\n  color: #091e27;\\r\\n}\\r\\n\\r\\n.close-popup {\\r\\n  background: unset;\\r\\n  align-self: flex-end;\\r\\n  font-size: 20px;\\r\\n  font-weight: bolder;\\r\\n}\\r\\n\\r\\n.details {\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.details h3 {\\r\\n  margin: 0;\\r\\n  color: #303e4b;\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n#form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 10px;\\r\\n  margin-top: 1rem;\\r\\n}\\r\\n\\r\\ninput,\\r\\ntextarea {\\r\\n  padding: 10px;\\r\\n  border-radius: 5px;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\ninput:focus,\\r\\ntextarea:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.add-comment-block {\\r\\n  margin-top: 1rem;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 700px) {\\r\\n  .fishes_container {\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(2, minmax(0, 1fr));\\r\\n    row-gap: 3rem;\\r\\n    column-gap: 1rem;\\r\\n    padding: 1rem;\\r\\n  }\\r\\n\\r\\n  #fish_container {\\r\\n    margin-top: 100px;\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  footer {\\r\\n    background: #53738f;\\r\\n    padding: 20px;\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  .navbar {\\r\\n    display: flex;\\r\\n    gap: 1rem;\\r\\n    list-style: none;\\r\\n    text-decoration: none;\\r\\n    justify-content: center;\\r\\n    font-size: 1rem;\\r\\n  }\\r\\n\\r\\n  #menu {\\r\\n    display: none;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 1100px) {\\r\\n  .fishes_container {\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(3, minmax(0, 1fr));\\r\\n    row-gap: 3rem;\\r\\n    column-gap: 2rem;\\r\\n    padding: 3rem 5rem;\\r\\n    gap: 2rem;\\r\\n  }\\r\\n\\r\\n  .comment-popup-section {\\r\\n    width: 100%;\\r\\n    backdrop-filter: blur(5px);\\r\\n    overflow: auto;\\r\\n    padding: 50px;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    bottom: 0;\\r\\n    position: fixed;\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  #comment-list {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 0.5rem;\\r\\n    align-items: flex-start;\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  .comments-list {\\r\\n    display: flex;\\r\\n    gap: 0.5rem;\\r\\n  }\\r\\n\\r\\n  .active {\\r\\n    display: block;\\r\\n  }\\r\\n\\r\\n  .comment-popup {\\r\\n    background: #add8e6;\\r\\n    width: 50%;\\r\\n    margin: auto;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    text-align: center;\\r\\n    padding: 20px;\\r\\n    padding-top: 0;\\r\\n  }\\r\\n\\r\\n  .close-popup {\\r\\n    background: unset;\\r\\n    align-self: flex-end;\\r\\n    font-size: 20px;\\r\\n    font-weight: bolder;\\r\\n  }\\r\\n\\r\\n  .details {\\r\\n    display: grid;\\r\\n    grid-template-columns: auto auto;\\r\\n    row-gap: 25px;\\r\\n    column-gap: 40px;\\r\\n    margin-bottom: 1rem;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-module2/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://capstone-module2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone-module2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone-module2/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone-module2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone-module2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone-module2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone-module2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone-module2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone-module2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_fetchFishes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/fetchFishes.js */ \"./modules/fetchFishes.js\");\n\n\n\nconst menuIcon = document.getElementById('menu');\nconst closeIcon = document.getElementById('close');\nconst fishSection = document.getElementById('fish_container');\n\n// base url to fetch all the data from the API\nconst baseUrl = 'https://www.fishwatch.gov/api/species';\n\nconst numOfFishes = 20;\n\nwindow.addEventListener('load', () => {\n  (0,_modules_fetchFishes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(baseUrl, numOfFishes, fishSection);\n});\n\nmenuIcon.addEventListener('click', () => {\n  const navbar = document.querySelector('nav');\n  navbar.style.display = 'flex';\n});\n\ncloseIcon.addEventListener('click', () => {\n  const navbar = document.querySelector('nav');\n  navbar.style.display = 'none';\n});\n\n\n//# sourceURL=webpack://capstone-module2/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;