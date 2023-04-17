sessionStorage.setItem("calories_lost", 0);

const iframe = document.getElementById("iframe");

iframe.addEventListener("touchstart", handleTouchStart, false);
iframe.addEventListener('touchmove', handleTouchMove, false);
iframe.addEventListener('touchend', handleTouchEnd, false);

var xDown = null;
var yDown = null;
var xDiff = null;
var yDiff = null;
var timeDown = null;
var startEl = null;

/**
     * Fires swiped event if swipe detected on touchend
     * @param {object} e - browser event object
     * @returns {void}
     */
function handleTouchEnd(e) {


   
    var changedTouches = e.changedTouches || e.touches || [];

    var swipeThreshold = 25;

    if (Math.abs(xDiff) > Math.abs(yDiff)) { // most significant
        if (Math.abs(xDiff) > swipeThreshold) {
            if (xDiff > 0) {
                alert('swiped-left');
            }
            else {
                alert('swiped-right');
            }
        }
    }
    else if (Math.abs(yDiff) > swipeThreshold) {
        if (yDiff > 0) {
            alert('swiped-up');
        }
        else {
            alert('swiped-down');
        }
    }

    // reset values
    xDown = null;
    yDown = null;
    timeDown = null;
}

function handleTouchStart(e) {

    timeDown = Date.now();
    xDown = e.touches[0].clientX;
    yDown = e.touches[0].clientY;
    xDiff = 0;
    yDiff = 0;
}


function handleTouchMove(e) {

    if (!xDown || !yDown) return;

    var xUp = e.touches[0].clientX;
    var yUp = e.touches[0].clientY;

    xDiff = xDown - xUp;
    yDiff = yDown - yUp;
}