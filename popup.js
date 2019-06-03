/*
Extension by: 
Liz Lorena Berberena 
@SmugCroc
https://byliz.github.io
*/

document.addEventListener("click", function(e) {
  if (!e.target.classList.contains("page-choice")) {
    return;
  }

  var chosenPage = "https://" + e.target.textContent;
  browser.tabs.create({
    url: chosenPage
  });

});