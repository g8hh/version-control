var LOCAL_STORAGE_NAME = "semenar.versioncontrol";

function saveToLocalStorage() {
  try {
    localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(player.save()));
  }
  catch (e) {}
}

function loadFromLocalStorage() {
  if (localStorage.getItem(LOCAL_STORAGE_NAME) === null) return;
  let backup = player.save();
  try {
    player.load(JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME)));
    switchTab('dimensions');
  }
  catch (e) { player.load(backup); }
}

function getSave() {
  return btoa(JSON.stringify(player.save()));
}

function loadSave(save) {
  let backup = player.save();
  try {
    player.load(JSON.parse(atob(save.replace(/[^A-Za-z0-9+/=]/g, ''))));
    switchTab('dimensions');
  }
  catch (e) { player.load(backup); }
}

function hardReset() {
  localStorage.removeItem(LOCAL_STORAGE_NAME);
  player.reset();
  cleanUp();
  loadUp();
  switchTab('dimensions');
}