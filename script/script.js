"use strict";

console.log("hi from script.js");

const searchEngineUrl = "https://google.com/search?q=";
const searchElement = document.getElementById("searchInput");
const searchForm = document.getElementById("searchForm");

// search
function search() {
  let url = searchElement.value;

  if (!url) return;

  if (url.startsWith("https://") || url.startsWith("http://")) {
    window.location = url;
  } else {
    window.location = searchEngineUrl + url;
  }
}

// searchbar focus
searchElement.focus();

// document.addEventListener('keydown', (ev) => {
//   if (ev.key === '/') {
//     if (!searchElement.hasFocus()) {
//       ev.preventDefault();
//       searchElement.focus();
//     }
//   }
//  });

// perform search
searchForm.addEventListener('submit', (ev) => {
  ev.preventDefault();
  search();
});
