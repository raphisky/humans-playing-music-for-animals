var videoLinks = [];
var videoIndex = 0;
var isDataLoaded = false;

$.getJSON("https://spreadsheets.google.com/feeds/list/1p67fGqnTUprQ2YU6Oy_yjU53-cYEWB8sAcfyaLp6JRo/od6/public/values?alt=json", function(data) {
  for (var el in data.feed.entry) {
    videoLinks.push(data.feed.entry[el].gsx$link.$t);
    console.log(videoLinks[el]);
  }
  isDataLoaded = true;
  return videoLinks;
});

var nextButton = document.getElementById('nextVideo');
var videoContainer = document.getElementById('videoBox');

function loadVideo(v) {
  if (isDataLoaded) {
    console.log(videoLinks[v]);
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", videoLinks[v]);
    ifrm.style.width = "420px";
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
