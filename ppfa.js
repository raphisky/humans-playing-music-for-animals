var videoLinks = [];
var videoIndex = 0;
var isDataLoaded = false;

$.getJSON("https://spreadsheets.google.com/feeds/list/1p67fGqnTUprQ2YU6Oy_yjU53-cYEWB8sAcfyaLp6JRo/od6/public/values?alt=json", function(data) {
  for (var el in data.feed.entry) {
    videoLinks.push(data.feed.entry[el].gsx$link.$t);
  }
  isDataLoaded = true;
  getWindowWidth();
  return videoLinks;
});

var iframeWidth;
function getWindowWidth() {
  if ($(window).width() > 980) {
    iframeWidth = $(window).width() / 3 + "px";
  }
  else if ($(window).width() < 980) {
    iframeWidth = $(window).width() + "px";
  }
}

var nextButton = document.getElementById('nextVideo');
var videoContainer = document.getElementById('videoBox');

function loadVideo() {
  if (isDataLoaded) {
    var randomVideoIndex = Math.floor(Math.random()*videoLinks.length);
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", videoLinks[randomVideoIndex]);
    ifrm.style.width = iframeWidth;
    ifrm.style.height = "315px";
    videoContainer.appendChild(ifrm);
    videoIndex += 1;
    return videoIndex;
  }
  else {
    console.log("content not loaded");
  }
}

nextButton.onclick = function() {
  loadVideo(videoIndex);
}
