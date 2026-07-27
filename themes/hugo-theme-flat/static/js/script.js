let player = null;

let audio = null;
let volumeSlider = null;

let audioOffset = 0;

let syncRunning = false;
let lastSyncTime = 0;

let isAudioPlaying = false;


// Web Audio API
let audioContext = null;
let audioSource = null;
let gainNode = null;



// Initialize when page loads
document.addEventListener("DOMContentLoaded", () => {

    audioOffset = Number(window.audioOffset) || 0;

    setupAudio();
    waitForYouTube();

});



// Resync after returning from a background tab
document.addEventListener("visibilitychange", () => {

    if (!document.hidden) {

        setTimeout(() => {

            if (
                player &&
                audio &&
                player.getPlayerState() === YT.PlayerState.PLAYING
            ) {

                hardSync();

            }

        }, 100);

    }

});



// Wait for YouTube iframe API
function waitForYouTube() {

    if (typeof YT === "undefined" || !YT.Player) {

        setTimeout(waitForYouTube, 250);
        return;

    }


    player = new YT.Player("player", {

        height: "720",
        width: "1280",

        videoId: window.videoId,

        playerVars: {
            controls: 1,
            modestbranding: 1,
            rel: 0,
            disablekb: 0,
            playsinline: 1
        },

        events: {
            onReady: playerReady,
            onStateChange: playerStateChanged
        }

    });

}



// Setup MP3 audio element
function setupAudio() {

    audio = document.getElementById("audio");
    volumeSlider = document.getElementById("volume");


    if (!audio || !window.audioFile) {

        const status =
        document.getElementById("audio-status");


        if (status) {

            status.textContent = "No music track found";
            status.style.display = "block";

        }

        return;

    }


    // Required for Web Audio API
    audio.crossOrigin = "anonymous";

    audio.src = window.audioFile;
    audio.load();



    const volumeControl =
    document.getElementById("volume-control");


    if (volumeControl) {

        volumeControl.style.display = "flex";

    }



    if (volumeSlider) {

        volumeSlider.addEventListener("input", () => {

            if (gainNode) {

                gainNode.gain.value =
                Number(volumeSlider.value) / 100;

            }

        });

    }

}



// Create Web Audio gain chain
function setupGain() {

    if (gainNode || !audio) {

        return;

    }


    audioContext = new AudioContext();


    audioSource =
    audioContext.createMediaElementSource(audio);


    gainNode =
    audioContext.createGain();


    gainNode.gain.value =
    Number(volumeSlider?.value || 100) / 100;


    audioSource.connect(gainNode);

    gainNode.connect(
        audioContext.destination
    );

}



// Start background-safe sync loop
function playerReady() {

    if (!syncRunning) {

        syncRunning = true;

        requestAnimationFrame(syncLoop);

    }

}



// Periodic sync check
function syncLoop(timestamp) {

    if (timestamp - lastSyncTime > 2000) {

        syncAudio();

        lastSyncTime = timestamp;

    }


    requestAnimationFrame(syncLoop);

}



// Handle YouTube playback state
function playerStateChanged(event) {

    if (!audio || !audio.src) {

        return;

    }


    switch (event.data) {


        case YT.PlayerState.PLAYING:

            setupGain();


            if (
                audioContext &&
                audioContext.state === "suspended"
            ) {

                audioContext.resume();

            }



            if (!isAudioPlaying) {

                audio.playbackRate = 1;


                audio.play()

                .then(() => {

                    isAudioPlaying = true;

                    hardSync();

                })

                .catch(error => {

                    console.error(
                        "Audio playback failed:",
                        error
                    );

                });

            }

            break;



        case YT.PlayerState.PAUSED:

            audio.pause();

            isAudioPlaying = false;

            break;



        case YT.PlayerState.BUFFERING:

            audio.pause();

            isAudioPlaying = false;

            break;



        case YT.PlayerState.ENDED:

            audio.pause();

            audio.currentTime = 0;

            isAudioPlaying = false;

            break;

    }

}



// Keep MP3 aligned with YouTube
function syncAudio() {

    if (
        !player ||
        !audio ||
        !audio.src ||
        player.getPlayerState() !== YT.PlayerState.PLAYING
    ) {

        return;

    }


    const targetTime =
    Math.max(
        0,
        player.getCurrentTime() + audioOffset
    );


    const difference =
    targetTime - audio.currentTime;


    const absoluteDifference =
    Math.abs(difference);



    // Small drift does not need correction
    if (absoluteDifference < 0.15) {

        return;

    }



    console.log(
        "Audio resync:",
        difference.toFixed(3),
                "seconds"
    );


    audio.currentTime = targetTime;

}



// Immediately align MP3 with YouTube
function hardSync() {

    if (!player || !audio) {

        return;

    }


    const targetTime =
    Math.max(
        0,
        player.getCurrentTime() + audioOffset
    );


    audio.currentTime = targetTime;

    audio.playbackRate = 1;

}
