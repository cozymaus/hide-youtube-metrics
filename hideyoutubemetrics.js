/*
Extension by: 
Liz Lorena Berberena 
https://lizlorena.com
*/
var style = document.createElement('style');

style.innerHTML = 

/*desktop*/
'.view-count, ' +
'yt-formatted-string#text.style-scope.ytd-toggle-button-renderer, ' + 
'span.deemphasize.style-scope.yt-formatted-string, ' + 
'span.style-scope.ytd-video-meta-block, ' +
'yt-formatted-string#subscriber-count, ' +
'span.style-scope.ytd-grid-video-renderer, ' +
'span#vote-count-middle, ' + 
'paper-button.align-by-text, ' +
'yt-formatted-string#vote-info, ' +
'div#right-column.style-scope.ytd-channel-about-metadata-renderer, ' + 
'span#thumbnail-attribution, ' + 
'h2#count.style-scope.ytd-comments-header-renderer, ' +
'span#more-text.style-scope.ytd-comment-replies-renderer, ' +
'span.ytp-videowall-still-info-author, ' +
'span#subscribers.style-scope.ytd-channel-renderer, ' +
'span.about-stat:nth-child(1), ' +
'span.about-stat:nth-child(2), ' +
'span.yt-subscription-button-subscriber-count-branded-horizontal, ' +
'a.secondary-header-action span.nav-text, ' +
'ul.yt-lockup-meta-info li:nth-child(1), ' +
'div#notification-count, ' +
'#owner-sub-count.ytd-video-owner-renderer, ' +
'#owner-sub-count, ' +
'.short-view-count.style-scope.yt-view-count-renderer ' +

/*mobile
'div.subhead span.text-info.small-text:nth-child(2), ' +
'div.subscribe-button-count.secondary-text, ' +
'div.compact-media-item-stats.small-text:nth-child(1), ' +
'div span.secondary-text, ' +
'div.button-renderer-text span, ' +
'ytm-slim-owner-renderer div.subhead, ' +
'div.subhead div.compact-media-item-stats.small-text:nth-child(2), ' +
'h2.comment-section-header-text, ' +
'span.comment-vote-count.text-info span, ' +
'div.compact-media-item-byline.small-text, ' +
'ytm-channel-about-metadata-renderer.item div p:nth-child(1), ' +
'ytm-channel-about-metadata-renderer.item div p:nth-child(3), ' +
'span.comment-count, ' +
'.short-view-count.style-scope.yt-view-count-renderer ' +*/
'{' + 
'visibility: hidden;' + 
'display: none;' +
'}';

var ref = document.querySelector('script');

ref.parentNode.insertBefore(style, ref);
