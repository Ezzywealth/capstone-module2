/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// base url to fetch all the data from the API\nconst baseUrl = 'https://www.fishwatch.gov/api/species';\n\n// URL to fetch details about a particular fish from the api\nconst fishDetailUrl = 'https://www.fishwatch.gov/api/species/name_of_fish';\n\nconst generateMarkup = (fishes) => {\n  console.log(fishes);\n};\n\nconst fetchFishes = async (url) => {\n  const response = await fetch(url);\n  const fishes = await response.json();\n  generateMarkup(fishes);\n};\n\nwindow.addEventListener('load', () => {\n  fetchFishes(baseUrl);\n});\n\n\n//# sourceURL=webpack://capstone-module2/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;