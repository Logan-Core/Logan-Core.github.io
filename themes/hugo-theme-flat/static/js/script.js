let player = null;
let audio = null;
let volumeSlider = null;
let audioOffset = 0;
let syncRunning = false;
let lastSyncTime = 0;
let isAudioPlaying = false;
// ========================================================
// Chat Replay
// ========================================================
let chatMessages = [];
let chatContainer = null;
let chatElement = null;
let chatLoaded = false;
let currentChatIndex = 0;
let lastPlayerTime = 0;
let chatHidden = false;
let visibleMessageLimit = 300;
// ========================================================
// Web Audio API
// ========================================================
let audioContext = null;
let audioSource = null;
let gainNode = null;
// ========================================================
// Initialize
// ========================================================
document.addEventListener("DOMContentLoaded", () => {
    audioOffset = Number(window.audioOffset) || 0;
    chatContainer = document.getElementById("chat-container");
    chatElement = document.getElementById("chat");
    setupAudio();
    setupChat();
    waitForYouTube();
});
// ========================================================
// Chat Setup
// ========================================================
async function setupChat() {
    const toggle = document.getElementById("toggle-chat");
    const chatColumn = document.getElementById("chat-column");
    const chatContainer = document.getElementById("chat-container");
    const playerLayout = document.getElementById("player-layout");
    // ====================================================
    // No chat replay available
    // ====================================================
    if (!window.chatFile) {
        chatHidden = true;
        if (chatContainer) {
            chatContainer.style.display = "none";
        }
        if (chatColumn) {
            chatColumn.classList.add("chat-collapsed");
        }
        if (playerLayout) {
            playerLayout.classList.add("chat-hidden");
        }
        if (toggle) {
            toggle.textContent = "No chat replay found";
            toggle.disabled = true;
            toggle.classList.add("chat-disabled");
        }
        return;
    }
    // ====================================================
    // Load chat replay
    // ====================================================
    try {
        const response = await fetch(window.chatFile);
        const json = await response.json();
        chatMessages = json.comments || [];
        chatLoaded = true;
        console.log("Loaded", chatMessages.length, "chat messages.");
    } catch (error) {
        console.error("Unable to load chat log.", error);
    }
    // ====================================================
    // Chat toggle
    // ====================================================
    if (toggle) {
        toggle.addEventListener("click",
                                () => {
                                    chatHidden = !chatHidden;
                                    if (chatHidden) {
                                        chatContainer.style.display = "none";
                                        chatColumn.classList.add("chat-collapsed");
                                        playerLayout.classList.add("chat-hidden");
                                    } else {
                                        chatContainer.style.display = "flex";
                                        chatColumn.classList.remove("chat-collapsed");
                                        playerLayout.classList.remove("chat-hidden");
                                    }
                                    toggle.textContent = chatHidden ? "Show Live Chat Replay" : "Hide Live Chat Replay";
                                });
    }
}
// ========================================================
// Visibility Change
// ========================================================
document.addEventListener("visibilitychange",
                          () => {
                              if (!document.hidden) {
                                  setTimeout(() => {
                                      if (player && audio && player.getPlayerState() === YT.PlayerState.PLAYING) {
                                          hardSync();
                                      }
                                  }, 100);
                              }
                          });
// ========================================================
// Wait for YouTube API
// ========================================================
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
// ========================================================
// Audio Setup
// ========================================================
function setupAudio() {
    audio = document.getElementById("audio");
    volumeSlider = document.getElementById("volume");
    if (!audio || !window.audioFile) {
        const status = document.getElementById("audio-status");
        if (status) {
            status.textContent = "No music track found";
            status.style.display = "block";
        }
        return;
    }
    audio.crossOrigin = "anonymous";
    audio.src = window.audioFile;
    audio.load();
    const volumeControl = document.getElementById("volume-control");
    if (volumeControl) {
        volumeControl.style.display = "flex";
    }
    if (volumeSlider) {
        volumeSlider.addEventListener("input",
                                      () => {
                                          if (gainNode) {
                                              gainNode.gain.value = Number(volumeSlider.value) / 100;
                                          }
                                      });
    }
}
// ========================================================
// Gain Node
// ========================================================
function setupGain() {
    if (gainNode || !audio) {
        return;
    }
    audioContext = new AudioContext();
    audioSource = audioContext.createMediaElementSource(audio);
    gainNode = audioContext.createGain();
    gainNode.gain.value = Number(volumeSlider?.value || 100) / 100;
    audioSource.connect(gainNode);
    gainNode.connect(audioContext.destination);
}
// ========================================================
// Player Ready
// ========================================================
function playerReady() {
    if (!syncRunning) {
        syncRunning = true;
        requestAnimationFrame(syncLoop);
    }
}
// ========================================================
// Chat State
// ========================================================
let chatLastSyncTime = 0;
let chatSyncInterval = 100;
let chatAutoScroll = true;
let chatScrollHandlerAttached = false;
// ========================================================
// Background-Safe Sync Loop
// ========================================================
function syncLoop(timestamp) {
    // ----------------------------------------------------
    // Audio synchronization
    // ----------------------------------------------------
    if (timestamp - lastSyncTime > 2000) {
        syncAudio();
        lastSyncTime = timestamp;
    }
    // ----------------------------------------------------
    // Chat synchronization
    // ----------------------------------------------------
    if (timestamp - chatLastSyncTime > chatSyncInterval) {
        updateChat();
        chatLastSyncTime = timestamp;
    }
    requestAnimationFrame(syncLoop);
}
// ========================================================
// Update Chat
// ========================================================
function updateChat(forceRebuild = false) {
    if (!player || !chatLoaded || !chatElement) {
        return;
    }
    // Attach chat scroll behavior once
    if (chatContainer && !chatScrollHandlerAttached) {
        setupChatScrollBehavior();
        chatScrollHandlerAttached = true;
    }
    const currentVideoTime = Number(player.getCurrentTime()) || 0;
    const chatOffset = Number(window.chatOffset) || 0;
    // Chat timestamps are relative to
    // the original stream recording.
    //
    // Example:
    //
    // Video time: 100 seconds
    // Chat offset: -5 seconds
    //
    // Chat time: 95 seconds
    const currentChatTime = Math.max(0, currentVideoTime + chatOffset);
    // ----------------------------------------------------
    // No chat messages
    // ----------------------------------------------------
    if (chatMessages.length === 0) {
        clearChat();
        currentChatIndex = 0;
        lastPlayerTime = currentVideoTime;
        return;
    }
    // ----------------------------------------------------
    // Detect seeking
    // ----------------------------------------------------
    const timeDifference = currentVideoTime - lastPlayerTime;
    const wasSeeked = forceRebuild || Math.abs(timeDifference) > 1.5;
    // ----------------------------------------------------
    // Rebuild after seeking
    // ----------------------------------------------------
    if (wasSeeked) {
        rebuildChat(currentChatTime);
    } else {
        // Normal playback.
        //
        // Add any messages that have
        // appeared since the previous update.
        appendChatMessagesThrough(currentChatTime);
    }
    lastPlayerTime = currentVideoTime;
}
// ========================================================
// Find First Message After Timestamp
// ========================================================
//
// Binary search.
//
// Returns the index of the first chat message
// whose timestamp is greater than currentTime.
//
// Example:
//
// Messages:
//
//  10
//  20
//  30
//  40
//
// Time = 25
//
// Returns index 2.
//
// That means messages 0 and 1 have already happened.
//
// ========================================================
function findChatIndexAfterTime(currentTime) {
    let low = 0;
    let high = chatMessages.length;
    while (low < high) {
        const middle = Math.floor(
            (low + high) / 2);
        const message = chatMessages[middle];
        const messageTime = Number(message.content_offset_seconds) || 0;
        if (messageTime <= currentTime) {
            low = middle + 1;
        } else {
            high = middle;
        }
    }
    return low;
}
// ========================================================
// Rebuild Chat
// ========================================================
//
// Used after:
//
// - Seeking backward
// - Seeking forward
// - Initial loading at a non-zero time
// - Large playback jumps
//
// The chat is rebuilt using the last
// visibleMessageLimit messages that occurred
// before the current playback position.
//
// ========================================================
function rebuildChat(currentChatTime) {
    const messageIndex = findChatIndexAfterTime(currentChatTime);
    currentChatIndex = messageIndex;
    const firstVisibleIndex = Math.max(0, messageIndex - visibleMessageLimit);
    const visibleMessages = chatMessages.slice(firstVisibleIndex, messageIndex);
    renderChatMessages(visibleMessages);
    // A seek should return the chat
    // to the newest visible messages.
    chatAutoScroll = true;
    scrollChatToBottom();
}
// ========================================================
// Append Chat Messages
// ========================================================
//
// Used during normal playback.
//
// Only new messages are processed.
//
// This prevents us from repeatedly filtering
// the entire chat log on every update.
//
// ========================================================
function appendChatMessagesThrough(currentChatTime) {
    if (currentChatIndex >= chatMessages.length) {
        return;
    }
    let addedMessages = false;
    while (currentChatIndex < chatMessages.length) {
        const message = chatMessages[currentChatIndex];
        const messageTime = Number(message.content_offset_seconds) || 0;
        // Stop when the next message
        // hasn't happened yet.
        if (messageTime > currentChatTime) {
            break;
        }
        appendChatMessage(message);
        currentChatIndex++;
        addedMessages = true;
    }
    // Keep only the newest messages.
    trimChatMessages();
    // Automatically follow the newest message
    // if the user hasn't manually scrolled away.
    if (addedMessages && chatAutoScroll) {
        scrollChatToBottom();
    }
}
// ========================================================
// Trim Chat
// ========================================================
//
// Keeps the chat DOM small even when
// a VOD has thousands of messages.
//
// ========================================================
function trimChatMessages() {
    if (!chatElement) {
        return;
    }
    while (chatElement.children.length > visibleMessageLimit) {
        chatElement.removeChild(chatElement.firstElementChild);
    }
}
// ========================================================
// Clear Chat
// ========================================================
function clearChat() {
    if (!chatElement) {
        return;
    }
    chatElement.replaceChildren();
}
// ========================================================
// Chat Scroll Behavior
// ========================================================
//
// If the user manually scrolls upward,
// stop automatically following new messages.
//
// Once they scroll back to the bottom,
// automatic scrolling resumes.
//
// ========================================================
function setupChatScrollBehavior() {
    if (!chatContainer) {
        return;
    }
    chatContainer.addEventListener("scroll",
                                   () => {
                                       const distanceFromBottom = chatContainer.scrollHeight - chatContainer.scrollTop - chatContainer.clientHeight;
                                       // 40px tolerance allows for
                                       // small rounding differences.
                                       chatAutoScroll = distanceFromBottom <= 40;
                                   });
}
// ========================================================
// Scroll Chat To Bottom
// ========================================================
function scrollChatToBottom() {
    if (!chatContainer) {
        return;
    }
    chatContainer.scrollTop = chatContainer.scrollHeight;
}
// ========================================================
// Render Complete Chat
// ========================================================
//
// Rebuilds the visible chat DOM.
//
// This is primarily used when:
//
// - Seeking
// - Loading at a non-zero timestamp
// - Jumping backward
// - Jumping forward
//
// ========================================================
// ========================================================
// Append Single Chat Message
// ========================================================
//
// Adds one new message to the end of the chat.
//
// Used during normal playback.
//
// ========================================================
function appendChatMessage(message) {
    if (!chatElement || !message) {
        return;
    }
    const chatMessage = createChatMessageElement(message);
    if (!chatMessage) {
        return;
    }
    chatElement.appendChild(chatMessage);
}

function renderChatMessages(messages) {
    if (!chatElement) {
        return;
    }
    const fragment = document.createDocumentFragment();
    for (const message of messages) {
        const chatMessage = createChatMessageElement(message);
        if (chatMessage) {
            fragment.appendChild(chatMessage);
        }
    }
    chatElement.replaceChildren(fragment);
}
// ========================================================
// Create Chat Message Element
// ========================================================
//
// Twitch-style layout:
//
// [timestamp] username: message
//
// The timestamp is clickable and seeks the
// YouTube player to the time the message was sent.
//
// ========================================================
function createChatMessageElement(message) {
    if (!message) {
        return null;
    }
    const messageElement = document.createElement("div");
    messageElement.className = "chat-message";
    // ====================================================
    // Calculate Video Timestamp
    // ====================================================
    const chatMessageTime = Number(message.content_offset_seconds) || 0;
    const chatOffset = Number(window.chatOffset) || 0;
    // The chat offset is applied like this:
    //
    // chatTime =
    // videoTime + chatOffset
    //
    // Therefore:
    //
    // videoTime =
    // chatTime - chatOffset
    const videoTime = Math.max(0, chatMessageTime - chatOffset);
    // ====================================================
    // Timestamp Button
    // ====================================================
    const timestampButton = document.createElement("button");
    timestampButton.className = "chat-timestamp";
    timestampButton.type = "button";
    timestampButton.textContent = formatChatTimestamp(videoTime);
    timestampButton.title = "Seek to " + formatChatTimestamp(videoTime);
    timestampButton.setAttribute("aria-label", "Seek video to " + formatChatTimestamp(videoTime));
    timestampButton.addEventListener("click",
                                     () => {
                                         if (!player) {
                                             return;
                                         }
                                         player.seekTo(videoTime, true);
                                         // Rebuild the chat immediately.
                                         //
                                         // This prevents the UI from temporarily
                                         // showing messages from the old position.
                                         setTimeout(
                                             () => {
                                                 updateChat(true);
                                             }, 100);
                                     });
    // ====================================================
    // Username
    // ====================================================
    const username = document.createElement("span");
    username.className = "chat-username";
    const displayName = message.commenter && message.commenter.display_name ? message.commenter.display_name : "Unknown";
    username.textContent = displayName;
    // ====================================================
    // Username Color
    // ====================================================
    const usernameColor = message.message && message.message.user_color ? message.message.user_color : "";
    if (/^#[0-9A-Fa-f]{6}$/.test(usernameColor)) {
        username.style.color = usernameColor;
    }
    // ====================================================
    // Separator
    // ====================================================
    const separator = document.createElement("span");
    separator.className = "chat-separator";
    separator.textContent = ": ";
    // ====================================================
    // Message Body
    // ====================================================
    const body = document.createElement("span");
    body.className = "chat-body";
    renderChatMessageBody(body, message);
    // ====================================================
    // Assemble Row
    // ====================================================
    messageElement.appendChild(timestampButton);
    messageElement.appendChild(username);
    messageElement.appendChild(separator);
    messageElement.appendChild(body);
    return messageElement;
}
// ========================================================
// Format Chat Timestamp
// ========================================================
//
// Examples:
//
// 25       -> 00:25
// 90       -> 01:30
// 3661     -> 1:01:01
//
// ========================================================
function formatChatTimestamp(seconds) {
    seconds = Math.max(0, Math.floor(Number(seconds) || 0));
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(
        (seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    if (hours > 0) {
        return (hours + ":" + String(minutes).padStart(2, "0") + ":" + String(remainingSeconds).padStart(2, "0"));
    }
    return (String(minutes).padStart(2, "0") + ":" + String(remainingSeconds).padStart(2, "0"));
}
// ========================================================
// Render Chat Message Body
// ========================================================
//
// Uses `message.fragments` when available.
//
// Normal text is rendered as text nodes.
//
// Emote fragments are rendered as Twitch CDN
// image elements.
//
// If the emote image fails to load,
// the original emote text is displayed instead.
//
// ========================================================
function renderChatMessageBody(container, message) {
    const messageData = message.message;
    if (!messageData) {
        return;
    }
    const fragments = Array.isArray(messageData.fragments) ? messageData.fragments : null;
    // ----------------------------------------------------
    // No fragment data
    // ----------------------------------------------------
    if (!fragments || fragments.length === 0) {
        container.textContent = messageData.body || "";
        return;
    }
    // ----------------------------------------------------
    // Render fragments
    // ----------------------------------------------------
    for (const fragment of fragments) {
        if (fragment.emoticon && fragment.emoticon.emoticon_id) {
            const emote = document.createElement("img");
            emote.className = "chat-emote";
            const emoteID = fragment.emoticon.emoticon_id;
            const emoteText = fragment.text || "";
            emote.src = "https://static-cdn.jtvnw.net/emoticons/v2/" + encodeURIComponent(emoteID) + "/default/dark/1.0";
            emote.alt = emoteText;
            emote.title = emoteText;
            emote.loading = "lazy";
            // If Twitch's CDN doesn't
            // recognize the emote ID,
            // show the original text instead.
            emote.addEventListener("error",
                                   () => {
                                       const fallback = document.createTextNode(emoteText);
                                       emote.replaceWith(fallback);
                                   }, {
                                       once: true
                                   });
            container.appendChild(emote);
        } else {
            const text = document.createTextNode(fragment.text || "");
            container.appendChild(text);
        }
    }
}
// ========================================================
// Handle YouTube Playback State
// ========================================================
function playerStateChanged(event) {
    // Chat synchronization does not depend
    // on the MP3 being available.
    //
    // The main sync loop continues to update
    // the chat regardless.
    if (!audio || !audio.src) {
        return;
    }
    switch (event.data) {
        // ------------------------------------------------
        // Playing
        // ------------------------------------------------
        case YT.PlayerState.PLAYING:
            setupGain();
            if (audioContext && audioContext.state === "suspended") {
                audioContext.resume();
            }
            if (!isAudioPlaying) {
                audio.playbackRate = 1;
                audio.play().then(() => {
                    isAudioPlaying = true;
                    hardSync();
                }).catch(error => {
                    console.error("Audio playback failed:", error);
                });
            }
            break;
            // ------------------------------------------------
            // Paused
            // ------------------------------------------------
        case YT.PlayerState.PAUSED:
            audio.pause();
            isAudioPlaying = false;
            break;
            // ------------------------------------------------
            // Buffering
            // ------------------------------------------------
        case YT.PlayerState.BUFFERING:
            audio.pause();
            isAudioPlaying = false;
            break;
            // ------------------------------------------------
            // Ended
            // ------------------------------------------------
        case YT.PlayerState.ENDED:
            audio.pause();
            audio.currentTime = 0;
            isAudioPlaying = false;
            break;
    }
}
// ========================================================
// Keep MP3 Aligned With YouTube
// ========================================================
function syncAudio() {
    if (!player || !audio || !audio.src || player.getPlayerState() !== YT.PlayerState.PLAYING) {
        return;
    }
    const targetTime = Math.max(0, player.getCurrentTime() + audioOffset);
    const difference = targetTime - audio.currentTime;
    const absoluteDifference = Math.abs(difference);
    // ----------------------------------------------------
    // Small drift does not need correction
    // ----------------------------------------------------
    if (absoluteDifference < 0.15) {
        return;
    }
    console.log("Audio resync:", difference.toFixed(3), "seconds");
    audio.currentTime = targetTime;
}
// ========================================================
// Immediately Align MP3 With YouTube
// ========================================================
function hardSync() {
    if (!player || !audio) {
        return;
    }
    const targetTime = Math.max(0, player.getCurrentTime() + audioOffset);
    audio.currentTime = targetTime;
    audio.playbackRate = 1;
}
