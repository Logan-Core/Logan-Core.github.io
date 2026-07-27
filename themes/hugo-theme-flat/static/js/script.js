let player = null;

let audio = null;
let volumeSlider = null;

let audioOffset = 0;
let syncInterval = null;



document.addEventListener("DOMContentLoaded", () => {

    console.log("Script loaded");

    console.log("videoId:", window.videoId);
    console.log("audioFile:", window.audioFile);
    console.log("audioOffset:", window.audioOffset);


    audioOffset = Number(window.audioOffset) || 0;


    // IMPORTANT:
    // Initialize YouTube first so audio cannot break the player
    waitForYouTube();


    // Setup MP3 after
    setupAudio();

});





function waitForYouTube() {

    if (typeof YT === "undefined" || !YT.Player) {

        console.log("Waiting for YouTube API...");

        setTimeout(waitForYouTube, 250);

        return;

    }


    console.log("YouTube API ready");


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





function setupAudio() {

    try {

        audio = document.getElementById("audio");
        volumeSlider = document.getElementById("volume");


        if (!audio) {

            console.log("No audio element found");

            return;

        }


        if (!window.audioFile ||
            window.audioFile.trim() === "") {

            console.log("No audio track");


        const status =
        document.getElementById("audio-status");


        if (status) {

            status.style.display = "block";
            status.textContent =
            "No music track found";

        }


        return;

            }



            console.log(
                "Loading audio:",
                window.audioFile
            );


            audio.src = window.audioFile;
            audio.load();



            // Show volume controls
            const volumeControl =
            document.getElementById("volume-control");


            if (volumeControl) {

                volumeControl.style.display = "flex";

            }



            if (volumeSlider) {

                volumeSlider.addEventListener(
                    "input",
                    () => {

                        audio.volume =
                        Number(volumeSlider.value) / 100;

                    }
                );


                audio.volume =
                Number(volumeSlider.value) / 100;

            }



            audio.addEventListener(
                "canplay",
                () => {

                    console.log(
                        "MP3 ready"
                    );

                }
            );



            audio.addEventListener(
                "error",
                () => {

                    console.error(
                        "Audio error:",
                        audio.error
                    );

                }
            );


    } catch(error) {

        console.error(
            "Audio setup failed:",
            error
        );

    }

}





function playerReady() {

    console.log(
        "YouTube player ready"
    );


    syncInterval =
    setInterval(
        syncAudio,
        500
    );

}





function playerStateChanged(event) {


    console.log(
        "Player state:",
        event.data
    );



    if (!audio || !audio.src) {

        return;

    }



    switch(event.data) {


        case YT.PlayerState.PLAYING:


            console.log(
                "Starting MP3"
            );


            audio.playbackRate = 1;


            audio.play()

            .then(() => {

                console.log(
                    "MP3 playing"
                );


                setTimeout(
                    hardSync,
                    500
                );


            })

            .catch(error => {

                console.error(
                    "MP3 play failed:",
                    error
                );

            });


            break;





        case YT.PlayerState.PAUSED:


            console.log(
                "Pausing MP3"
            );


            audio.pause();

            audio.playbackRate = 1;


            break;





        case YT.PlayerState.BUFFERING:


            console.log(
                "Buffering"
            );


            audio.pause();


            break;





        case YT.PlayerState.ENDED:


            console.log(
                "Video ended"
            );


            audio.pause();

            audio.currentTime = 0;

            audio.playbackRate = 1;


            break;


    }

}





function syncAudio() {


    if (!player ||
        !audio ||
        !audio.src) {

        return;

        }



        if (player.getPlayerState()
            !== YT.PlayerState.PLAYING) {

            return;

            }



            const targetTime =
            Math.max(
                0,
                player.getCurrentTime()
                + audioOffset
            );



            const difference =
            targetTime -
            audio.currentTime;



            const absDifference =
            Math.abs(difference);





            // Large drift correction
            if (absDifference > 2) {

                console.log(
                    "Large drift:",
                    difference
                );


                hardSync();

                return;

            }





            // Small drift correction
            if (absDifference > 0.05) {


                if (difference > 0) {

                    // MP3 behind
                    audio.playbackRate =
                    1.005;


                } else {

                    // MP3 ahead
                    audio.playbackRate =
                    0.995;

                }


            } else {

                audio.playbackRate =
                1.0;

            }

}





function hardSync() {


    if (!audio ||
        !audio.src ||
        !player) {

        return;

        }



        const targetTime =
        Math.max(
            0,
            player.getCurrentTime()
            + audioOffset
        );



        console.log(
            "Hard sync:",
            targetTime
        );



        audio.currentTime =
        targetTime;


        audio.playbackRate =
        1.0;

}
