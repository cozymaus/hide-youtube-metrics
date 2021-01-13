/*
Extension by: 
Liz Lorena Berberena 
https://lizlorena.com
*/

function openPage() {
  browser.tabs.create({
    url: "https://developer.mozilla.org"
  });
}

browser.browserAction.onClicked.addListener(openPage);
