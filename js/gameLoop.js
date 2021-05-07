let LAST_LOCAL_SAVE = -1;
let LOCAL_SAVE_RATE = 1000;

function gameLoop() {
  let current_time = Date.now();

  if (LAST_LOCAL_SAVE < current_time - LOCAL_SAVE_RATE) {
    if (LAST_LOCAL_SAVE == -1) loadFromLocalStorage();
    else saveToLocalStorage();
    LAST_LOCAL_SAVE = current_time;
  }

  let delta = Math.max(current_time - player.last_ts, 0);
  player.time_since_start += delta;
  player.last_ts = current_time;

  processTimedelta(delta);
  screenUpdate(delta);

  setTimeout(gameLoop, 50);
}