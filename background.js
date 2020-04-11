/*
Extension by: 
Liz Lorena Berberena 
@cozymaus on Twitter
https://cozymaus.github.io
*/

function openPage() {
  browser.tabs.create({
    url: "https://developer.mozilla.org"
  });
}

browser.browserAction.onClicked.addListener(openPage);
