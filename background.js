/*
Extension by: 
Liz Lorena Berberena 
@SmugCroc
https://byliz.github.io
*/

function openPage() {
  browser.tabs.create({
    url: "https://developer.mozilla.org"
  });
}

browser.browserAction.onClicked.addListener(openPage);