const NEWSTICKER_SPEED = 0.08;

var current_pos_newsticker = -1000;
var last_ts_newsticker = Date.now();

function chooseNewsticker() {
  return choose(NEWSTICKERS);
}

function updateNewsticker() {
  let current_ts = Date.now();
  let delta = current_ts - last_ts_newsticker;
  last_ts_newsticker = current_ts;

  current_pos_newsticker -= NEWSTICKER_SPEED * delta;

  let newsticker = document.getElementsByClassName("newsticker")[0].getElementsByClassName("news")[0];

  if (current_pos_newsticker <= -newsticker.offsetWidth) {
    current_pos_newsticker = document.body.offsetWidth + 100;
    newsticker.textContent = chooseNewsticker();
  }
  newsticker.style.left = current_pos_newsticker + "px";

  requestAnimationFrame(updateNewsticker);
}