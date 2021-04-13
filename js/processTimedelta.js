function processTimedelta(delta) {
  // Dimensions
  for (let i = player.dimensions.length - 1; i >= 0; i--) player.dimensions[i].processTimedelta(delta);

  // Autobuyers
  for (let key of Object.keys(player.autobuyers)) player.autobuyers[key].processTimedelta(delta);

  // XP
  processXP();

  // Heroes
  for (let key of Object.keys(player.heroes)) player.heroes[key].updateHero();

  // Actions
  player.time_to_action_refresh -= delta;
  if (player.time_to_action_refresh < 0) {
    player.time_to_action_refresh = ACTION_REFRESH_TIME;
    for (let action of player.actions) if (!action.is_locked) action.generateAction();
  }
  for (let action of player.actions) action.processTimedelta(delta);
  processActionXP();

  // Dimsac-auto
  if ('autosac' in player.infinity_upgrades && player.infinity_upgrades['autosac'].bought) dimsac();

  // Win
  if (!player.won && player.current_version == 24 && player.points.gt("ee16")) {
    player.won = true;
    let time_spent = "";
    let cur_time = player.time_since_start;

    let years = Math.floor(cur_time / (365.25 * 24 * 60 * 60 * 1000));
    cur_time -= years * (365.25 * 24 * 60 * 60 * 1000);
    if (years > 0) time_spent += years + "y ";

    let months = Math.floor(cur_time / (30 * 24 * 60 * 60 * 1000));
    cur_time -= months * (30 * 24 * 60 * 60 * 1000);
    if (months > 0) time_spent += months + "m ";

    let days = Math.floor(cur_time / (24 * 60 * 60 * 1000));
    cur_time -= days * (24 * 60 * 60 * 1000);
    if (days > 0) time_spent += days + "d ";

    let hours = Math.floor(cur_time / (60 * 60 * 1000));
    cur_time -= hours * (60 * 60 * 1000);
    if (hours < 10) time_spent += "0";
    time_spent += hours + ":";

    let minutes = Math.floor(cur_time / (60 * 1000));
    cur_time -= minutes * (60 * 1000);
    if (minutes < 10) time_spent += "0";
    time_spent += minutes + ":";

    let seconds = Math.floor(cur_time / (1000));
    cur_time -= seconds * (1000);
    if (seconds < 10) time_spent += "0";
    time_spent += seconds;
    document.getElementsByClassName('normal-time-spent')[0].textContent = time_spent;

    time_spent = ".";
    cur_time = Math.floor(cur_time);
    if (cur_time < 100) time_spent += "0";
    if (cur_time < 10) time_spent += "0";
    time_spent += cur_time;
    document.getElementsByClassName('speedrun-time-spent')[0].textContent = time_spent;

    openWindow('win');
  }
}