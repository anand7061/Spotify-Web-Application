  
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause-btn')
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentTime = document.getElementById('current-time');
const duration = document.getElementById('duration');
const seekBarElement = document.getElementById('seek-bar');
//   const statusElement = document.getElementById('status');




//     playPauseBtn.addEventListener('click', () => {
//     if (audio.paused) {
//       audio.play();
//       playPauseBtn.innerHTML = 'Pause';
//     } else {
//       audio.pause();
//       playPauseBtn.innerHTML = 'Play';
//     }
//   });

// music player added and added a functionality of music player and created a play button previous button and next button
const songs = [
{ title: "Song 1", file: "songs/black-box-aventador-lp-700-4-12577.mp3" },
{ title: "Song 2", file: "songs/dancing-in-the-stars-219514.mp3" },
{ title: "Song 3", file: "songs/Don't Fret - Quincas Moreira.mp3" },
{ title: "Song 4", file: "songs/I Wonder Whose Kissing Her Now - Freedom Trail Studio.mp3" },
{ title: "Song 5", file: "songs/July - John Patitucci.mp3" },
{ title: "Song 6", file: "songs/kaise-bhula-dun-ashir-184935.mp3" },
{ title: "Song 7", file: "songs/love-song-152731.mp3" },
{ title: "Song 8", file: "songs/melody-bgm-tamil-love-indian-186668.mp3" },
{ title: "Song 9", file: "songs/river-flows-in-you-romantic-piano-215745.mp3" },
{ title: "Song 10", file: "songs/teri-ye-adaa-romantic-song-206526.mp3" },
{ title: "Song 11", file: "songs/When Irish Eyes Are Smiling - Freedom Trail Studio.mp3" },
{ title: "Song 12", file: "songs/July - John Patitucci.mp3" },
{ title: "Song 13", file: "songs/When Irish Eyes Are Smiling - Freedom Trail Studio.mp3" },
{ title: "Song 14", file: "/songs/melody-bgm-tamil-love-indian-186668.mp3" }
];

let currentSongIndex = 0;

audio.src = songs[currentSongIndex].file;
playPauseBtn.addEventListener('click', () => {
if (audio.paused) {
  audio.play();
  playPauseBtn.innerHTML = 'Pause';
} else {
  audio.pause();
  playPauseBtn.innerHTML = 'Play';
}
});

prevBtn.addEventListener('click', () => {
currentSongIndex--;
if (currentSongIndex < 0) {
  currentSongIndex = songs.length - 1;
}
audio.src = songs[currentSongIndex].file;
audio.play();
});

nextBtn.addEventListener('click', () => {
currentSongIndex++;
if (currentSongIndex >= songs.length) {
  currentSongIndex = 0;
}
audio.src = songs[currentSongIndex].file;
audio.play();
});



audio.onloadedmetadata = () => {
const audioDuration = audio.duration;
const minutes = Math.floor(audioDuration / 60);
const seconds = Math.floor(audioDuration % 60);
duration.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

audio.ontimeupdate = () => {
const currentTimeValue = audio.currentTime;
const minutes = Math.floor(currentTimeValue / 60);
const seconds = Math.floor(currentTimeValue % 60);
currentTime.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

// for playing functionality in music library i have added a bottun play- pause button in each song and created

audio.addEventListener('ended', () => {
currentSongIndex++;
if (currentSongIndex >= songs.length) {
  currentSongIndex = 0;
}
audio.src = songs[currentSongIndex].file;
audio.play();
});


const playPauseButtons = document.querySelectorAll('.play-pause');

playPauseButtons.forEach((button) => {
button.addEventListener('click', () => {
const songId = button.dataset.song;
const audioElement = document.getElementById(songId);
if (audioElement.paused) {
  audioElement.play();
  button.innerHTML = '<img style="width: 20px; height: 20px;  filter:invert(1); padding: 6px; cursor: pointer;"   src="spotify image/play.png" alt="Play">';
} else {
  audioElement.pause();
  button.innerHTML = '<img style="width: 20px; height: 20px;  filter:invert(1); padding: 6px; cursor: pointer;"  src="spotify image/pause.png" alt="Pause">';
}
});
});

let currentlyPlaying = null;

const playButton = document.getElementById('play-button');

playButton.addEventListener('click', () => {
const selectedSong = document.getElementById('song-selection').value;
if (currentlyPlaying) {
// Stop the currently playing song
currentlyPlaying.pause();
}
// Play the new song
const newSong = document.getElementById(selectedSong);
newSong.play();
currentlyPlaying = newSong;
});
