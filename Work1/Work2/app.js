var video = document.querySelector('.video1');
var progress1 = document.querySelector('.progress-bar');
var btn = document.getElementById('play-pause');
var cvideo = document.querySelector('.c-video');
var volume = document.querySelector('.volume');
var currentTimeElement = document.querySelector('.current');
var durationTimeElement = document.querySelector('.duration');
let progress = document.querySelector('.progress-bar-div');
let progressBar = document.querySelector('.progress-bar');
let mute = document.querySelector('.mute');
const fullScreen = document.querySelector('.fullscreen'); 
const fastForward = document.querySelector('.fast-forward');

function togglePlayPause()
{
    if(video.paused)
    {
        btn.className = "pause";
        video.play();
    }
    else
    {
        btn.className = "play";
        video.pause();
    }
}

btn.onclick = function(){
    togglePlayPause();
}

//Progress bar
video.addEventListener('timeupdate' ,function(){
    var progressPos = video.currentTime / video.duration;
    progress1.style.width = progressPos * 100 + "%";
    if(video.ended)
    {
        btn.className = 'play';
    }
})

//volume
volume.addEventListener('mousemove', (e)=>{
    video.volume = e.target.value;
})

//current time and duration
const currentTime1 = () =>{
    let currentMinutes = Math.floor(video.currentTime/60);
    let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60);
    let durationMinute = Math.floor(video.duration/60);
    let durationSeconds = Math.floor(video.duration-durationMinute*60);
    currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds<10?'0'+currentSeconds : currentSeconds}`;
    durationTimeElement.innerHTML = `${durationMinute}:${durationSeconds}`;
}

video.addEventListener('timeupdate', currentTime1);

progress.addEventListener('click', (e)=>{
    const progressTime = (e.offsetX/progress.offsetWidth) * video.duration;
    video.currentTime = progressTime;    
})

//mute button
mute.addEventListener('click', ()=>{
    video.muted = !video.muted;
    mute.classList.toggle('muted');
})

//fullScreen button
fullScreen.addEventListener('click', ()=>{
    video.requestFullscreen();
})