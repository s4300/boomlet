// -------- Boomlet --------
// Add a little "boom" to any
//    page on the internet.
//
// I may add some more features
//      soon. Who knows?
//
if (typeof flashbang !== undefined) {
    let fbSound = new Audio("https://github.com/s4300/boomlet/raw/main/assets/metalpipe.wav");
    let flashbang = document.createElement("div");
    document.body.appendChild(flashbang);
    flashbang.id = "flashbang_overlay";
    flashbang.style = "position: fixed; display: block; width: 100%; height: 100%; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(255,255,255,1); z-index: 2; cursor: pointer;";
    flashbang.style.opacity = 1;
    try {
        fbSound.play();
    } finally {};
    let flashbangInterval = setInterval(() => {
        if (Number(flashbang.style.opacity) > 0) {
            flashbang.style.opacity = Number(flashbang.style.opacity - 0.1)
        } else {
            clearInterval(flashbangInterval);
            flashbang.remove();
            flashbang = undefined;
        };
    }, 120);
}
