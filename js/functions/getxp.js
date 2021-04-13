function displayXPGain() {
  return sumXPGain(player.xp_gained + 1) - sumXPGain(player.xp_gained);
}

function sumXPGain(ooms) {
  if (player.current_version < 17) return Math.max(0, ooms);
  else {
    if (ooms < 0) return 0;
    let xp_per_level = Math.floor(Math.sqrt(ooms));
    if ((xp_per_level + 1) * (xp_per_level + 1) <= ooms) xp_per_level += 1;
    let base_res = (xp_per_level) * (xp_per_level + 1) * (2 * xp_per_level + 1) / 3 - xp_per_level * (xp_per_level + 1) / 2 + (ooms - xp_per_level * xp_per_level) * (xp_per_level + 1);
    if ("legendary-xp" in player.heroes) base_res *= player.heroes['legendary-xp'].getEffect();
    return Math.min(1e100, Math.round(base_res));
  }
}

function nextXPReq() {
  return D(10).pow(player.xp_gained).mul(100);
}

function processXP() {
  let ooms = Math.floor(player.points.max(1).log10().toNumber()) - 1;
  if (ooms > player.xp_gained) {
    player.xp += sumXPGain(ooms) - sumXPGain(player.xp_gained);
    player.xp_gained = ooms;
  }
}

var loading_status = -1;
var last_ts_loading = Date.now();

function getXP() {
  if (player.current_version < 15) {
    document.getElementsByClassName('ad-window')[0].getElementsByClassName('desc')[0].style.display = "none";
    document.getElementsByClassName('ad-window')[0].getElementsByClassName('reward')[0].style.display = "none";
    document.getElementsByClassName('loading')[0].style.display = "";
    document.getElementsByClassName('ad-exit-btn')[0].style.display = "none";
    openWindow('ad');
    loading_status = 0;
    last_ts_loading = Date.now();
    updateLoading();
  }
  else {
    player.xp += 1;
  }
}

function updateLoading() {
  let current_ts = Date.now();
  let delta = current_ts - last_ts_loading;
  last_ts_loading = current_ts;

  loading_status += delta;
  console.log(loading_status);

  let cycle_length = 1200;
  let phase = (loading_status % cycle_length) / cycle_length;
  let start = phase * phase;
  let end = 1 - (1 - phase) * (1 - phase);

  document.getElementsByClassName('loading')[0].style.background = "conic-gradient(var(--secondary-color) " + start * 360 +  "deg, var(--primary-color) " + start * 360 + "deg " + end * 360 + "deg, var(--secondary-color) " + end * 360 + "deg)";
  

  if (loading_status >= 8000) {
    player.xp += 5;
    document.getElementsByClassName('ad-window')[0].getElementsByClassName('desc')[0].style.display = "";
    document.getElementsByClassName('ad-window')[0].getElementsByClassName('reward')[0].style.display = "";
    document.getElementsByClassName('loading')[0].style.display = "none";
    document.getElementsByClassName('ad-exit-btn')[0].style.display = "";
  }
  else requestAnimationFrame(updateLoading);
}