(() => {
console.log('video loaded!');

//Variables
var video = document.querySelector("#myVideo");
var playButton = document.querySelector("#playVideo");
var muteButton = document.querySelector("#muteVideo");
var seekBar = document.querySelector("#seek-bar");
var volumeBar = document.querySelector("#volume-bar");

//functions in the middle
  function pausePlay(){
    let theButton = this.firstElementChild;
    if (video.paused == true) {
    video.play();
    theButton.dataset.icon = "pause-circle";
  } else {
    video.pause();
    theButton.dataset.icon = 'play-circle';
  }
}

  function muteVideo(){
    let theButton = this.firstElementChild;
    if (video.muted == false) {
    video.muted = true;
    theButton.dataset.icon = "volume-down";
  } else {
    video.muted = false;
    theButton.dataset.icon = "volume-up";
  }
  }

  function progressBar(){
    var time = video.duration * (seekBar.value / 100);
    video.currentTime = time;
  }

  function progPlay(){
    var value = (100 / video.duration) * video.currentTime;
    seekBar.value = value;
  }

  function progVol(){
    video.volume = volumeBar.value;
  }

// event handeling at the bottom
    playButton.addEventListener('click', pausePlay);
    muteButton.addEventListener('click', muteVideo);
    seekBar.addEventListener('change', progressBar);
    video.addEventListener('timeupdate', progPlay);
    volumeBar.addEventListener('change', progVol);

})();
