const playerWrapper = document.querySelector(".player-wrapper");
const btnClose = document.querySelector(".btn-close");
const playButtonBg = document.querySelector(".play-button-bg");
let youtubeLoaded = false;
document.querySelector(".play-button-bg").addEventListener("click", function() {
	if (youtubeLoaded) {
		playerWrapper.style.display = "flex";
		player.playVideo();
		playButtonBg.classList.toggle("clicked");
		return;
	}
	loadYT();

	playButtonBg.classList.toggle("clicked");
	playerWrapper.style.display = "flex";
	playerWrapper.style.backgroundColor = "#000";
	btnClose.style.color = "#969696";
});

btnClose.addEventListener("click", function() {
	playButtonBg.classList.toggle("clicked");
	playerWrapper.style.display = "none";
	stopVideo();
});

function loadYT() {
	// 2. This code loads the IFrame Player API code asynchronously.
	var tag = document.createElement("script");

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName("script")[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	youtubeLoaded = true;
}
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
	player = new YT.Player("player", {
		height: "25em",
		width: "10em",
		videoId: "7yHAPL6TPCo",
		events: {
			onReady: onPlayerReady,
			onStateChange: onPlayerStateChange
		}
	});
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
	event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

function onPlayerStateChange(event) {
	return event;
}

function stopVideo() {
	player.stopVideo();
}