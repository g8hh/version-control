function screenUpdate(delta) {
  // Dimensions
  for (let dimension of player.dimensions) dimension.screenUpdate();

  // Autobuyers
  for (let key of Object.keys(player.autobuyers)) player.autobuyers[key].screenUpdate();

  // Tickspeed
  player.tickspeed.screenUpdate();

  // Dimshifts
  if (player.current_version < 7 || player.dimension_shifts >= maxDimshifts()) {
    document.getElementsByClassName("dim-shift")[0].style.display = "none";
  }
  else {
    document.getElementsByClassName("dim-shift")[0].style.display = "";
    document.getElementsByClassName("dim-shift")[0].disabled = !canDimshift();
    document.getElementsByClassName("dim-shift-req")[0].textContent = formatNumber(dimshiftRequirement(), true, true);
    document.getElementsByClassName("dim-shift-level")[0].textContent = formatNumber(player.dimension_shifts + 4, true, true);
  }

  // Dimboosts
  if (player.current_version < 9 || player.dimension_shifts < maxDimshifts()) {
    document.getElementsByClassName("dim-boost")[0].style.display = "none";
  }
  else {
    document.getElementsByClassName("dim-boost")[0].style.display = "";
    document.getElementsByClassName("dim-boost")[0].disabled = !canDimboost();
    document.getElementsByClassName("dim-boost-req")[0].textContent = formatNumber(dimboostRequirement(), true, true);
    document.getElementsByClassName("dim-boost-level")[0].textContent = formatNumber(player.dimension_shifts + 4, true, true);
  }

  // Galaxies
  if (player.current_version < 16) {
    document.getElementsByClassName("galaxy")[0].style.display = "none";
  }
  else {
    document.getElementsByClassName("galaxy")[0].style.display = "";
    document.getElementsByClassName("galaxy")[0].disabled = !canGalaxy();
    document.getElementsByClassName("galaxy-req")[0].textContent = formatNumber(galaxyRequirement(), true, true);
    document.getElementsByClassName("galaxy-level")[0].textContent = formatNumber(maxDimshifts() + 4, true, true);
  }

  // Heroes
  document.getElementsByClassName("tab-heroes")[0].getElementsByClassName("title")[0].getElementsByClassName("xp")[0].textContent = formatNumber(player.xp, true, true);
  document.getElementsByClassName("xp-gained")[0].textContent = formatNumber(displayXPGain(), true, true);
  document.getElementsByClassName("xp-req")[0].textContent = formatNumber(nextXPReq(), true, true);

  let all_heroes = {};
  let has_heroes = {};
  for (let type of TYPE_NAMES) {
    all_heroes[type] = 0;
    has_heroes[type] = 0;
  }
  for (let key of Object.keys(player.heroes)) {
    all_heroes[player.heroes[key].layer] += 1;
    if (player.heroes[key].level >= 1) has_heroes[player.heroes[key].layer] += 1;
  }
  for (let type of TYPE_NAMES) {
    document.getElementsByClassName("section-" + type)[0].getElementsByClassName("amount")[0].textContent = formatNumber(has_heroes[type]);
    document.getElementsByClassName("section-" + type)[0].getElementsByClassName("total")[0].textContent = formatNumber(all_heroes[type]);
  }

  // Hero update
  for (let key of Object.keys(player.heroes)) player.heroes[key].screenUpdate();

  // Higher rarities
  for (let type of TYPE_NAMES) {
    if (UNLOCK_CONDITION[type]()) {
      for (let element of document.getElementsByClassName("lootboxes")[0].getElementsByClassName("heroes-" + type)) element.style.display = "";
      document.getElementsByClassName("heroes")[0].getElementsByClassName("section-" + type)[0].style.display = "";
    }
    else {
      for (let element of document.getElementsByClassName("lootboxes")[0].getElementsByClassName("heroes-" + type)) element.style.display = "none";
      document.getElementsByClassName("heroes")[0].getElementsByClassName("section-" + type)[0].style.display = "none";
    }
  }

  // Lootboxes
  for (let key of Object.keys(player.lootboxes)) player.lootboxes[key].screenUpdate();

  // Lootbox/toolbox
  if (player.current_version >= 18) for (let element of document.getElementsByClassName("lootbox-class")) element.textContent = "Toolbox";
  else for (let element of document.getElementsByClassName("lootbox-class")) element.textContent = "Lootbox";

  // Dimsac
  document.getElementsByClassName("dimsac")[0].disabled = !canDimsac();
  document.getElementsByClassName("dimsac")[0].getElementsByClassName("result")[0].textContent = formatNumber(getDimsacProfit(), true);

  // "Get XP" button
  if (player.current_version < 15) document.getElementsByClassName("get-xp-button")[0].getElementsByClassName("get-xp")[0].textContent = "Watch an ad to get 5 XP";
  else document.getElementsByClassName("get-xp-button")[0].getElementsByClassName("get-xp")[0].textContent = "Get 1 XP";

  // Actions
  let fill_perc = player.time_to_action_refresh / ACTION_REFRESH_TIME;
  document.getElementsByClassName('actions-container')[0].getElementsByClassName('refreshing')[0].getElementsByClassName('remaining')[0].textContent = Math.round(player.time_to_action_refresh / 1000);
  document.getElementsByClassName('actions-container')[0].getElementsByClassName('refreshing')[0].getElementsByClassName('spinner-outer')[0].style.background = "conic-gradient(var(--primary-color) " + fill_perc * 360 + "deg, var(--secondary-color) " + fill_perc * 360 + "deg)";

  if (player.current_version >= 20) {
    for (let element of document.getElementsByClassName('actions')[0].getElementsByClassName('lock')) element.style.display = "";
  }
  else {
    for (let element of document.getElementsByClassName('actions')[0].getElementsByClassName('lock')) element.style.display = "none";
  }

  // Resources
  for (let i = 0; i < ACTION_RESOURCES.length; i++) {
    document.getElementById('action_item_' + ACTION_RESOURCES[i]).getElementsByClassName('amount')[0].textContent = formatNumber(player.action_resources[ACTION_RESOURCES[i]], false, true);
    if (i < getTotalResources()) document.getElementById('action_item_' + ACTION_RESOURCES[i]).style.visibility = "";
    else document.getElementById('action_item_' + ACTION_RESOURCES[i]).style.visibility = "hidden";
  }

  // Actions and locks
  document.getElementsByClassName("res-actions")[0].getElementsByClassName("free")[0].textContent = player.free_actions;
  document.getElementsByClassName("res-actions")[0].getElementsByClassName("total")[0].textContent = getTotalActions();
  document.getElementsByClassName("res-locks")[0].getElementsByClassName("free")[0].textContent = player.free_locks;
  document.getElementsByClassName("res-locks")[0].getElementsByClassName("total")[0].textContent = getTotalLocks();

  for (let action of player.actions) action.screenUpdate();

  // Action upgrades

  for (let i = 0; i < 4; i++) {
    let element = document.getElementById('action_upgrade_' + i);
    if (player.action_upgrades[i] == ACTION_UPGRADE_LIMITS[i]) element.style.visibility = "hidden";
    else {
      element.style.visibility = "";
      element.disabled = !actionCanBuy(i);
      element.getElementsByClassName('cost')[0].textContent = "Cost: " + actionResourceCost(i) + " " + actionResourceCostType(i);
      if (i == 3) element.getElementsByClassName('next-unlock')[0].textContent = ACTION_RESOURCES[getTotalResources()];
    }
  }

  // XP bars
  document.getElementsByClassName('bar-dimensions')[0].getElementsByClassName('level')[0].textContent = formatNumber(player.dimensions_level, false, true);
  document.getElementsByClassName('bar-dimensions')[0].getElementsByClassName('xp')[0].textContent = formatNumber(player.dimensions_xp, false, true);
  document.getElementsByClassName('bar-dimensions')[0].getElementsByClassName('xp-req')[0].textContent = formatNumber(getActionXPNeed(player.dimensions_level), false, true);
  document.getElementsByClassName('bar-dimensions')[0].getElementsByClassName('progress')[0].style.setProperty('--percentage', (player.dimensions_xp * 100 / getActionXPNeed(player.dimensions_level)) + "%");

  document.getElementsByClassName('bar-heroes')[0].getElementsByClassName('level')[0].textContent = formatNumber(player.heroes_level, false, true);
  document.getElementsByClassName('bar-heroes')[0].getElementsByClassName('xp')[0].textContent = formatNumber(player.heroes_xp, false, true);
  document.getElementsByClassName('bar-heroes')[0].getElementsByClassName('xp-req')[0].textContent = formatNumber(getActionXPNeed(player.heroes_level), false, true);
  document.getElementsByClassName('bar-heroes')[0].getElementsByClassName('progress')[0].style.setProperty('--percentage', (player.heroes_xp * 100 / getActionXPNeed(player.heroes_level)) + "%");

  // Infinity
  for (let element of document.getElementsByClassName("infinity-points")) element.textContent = formatNumber(player.infinity_points, true, true);

  document.getElementsByClassName('infinity-btn')[0].getElementsByClassName('reset-gain')[0].textContent = formatNumber(getIPGain(), true, true);
  for (let element of document.getElementsByClassName('infinity-btn')[0].getElementsByClassName('reset-need')) element.textContent = formatNumber(inverseIPGain(getIPGain().add(1)));

  document.getElementsByClassName('infinity-btn')[0].disabled = !(canInfinity());
  if (canInfinity()) {
    document.getElementsByClassName('infinity-btn')[0].getElementsByClassName('cannot-infinity')[0].style.display = "none";
    document.getElementsByClassName('infinity-btn')[0].getElementsByClassName('can-infinity')[0].style.display = "";
  }
  else {
    document.getElementsByClassName('infinity-btn')[0].getElementsByClassName('cannot-infinity')[0].style.display = "";
    document.getElementsByClassName('infinity-btn')[0].getElementsByClassName('can-infinity')[0].style.display = "none";
  }

  // Infinity Upgrades
  for (let key of Object.keys(player.infinity_upgrades)) player.infinity_upgrades[key].screenUpdate();

  // This points
  for (let element of document.getElementsByClassName("points")) element.textContent = formatNumber(player.points, true, true);
  for (let element of document.getElementsByClassName("points-capitalized")) element.textContent = VERSIONS[player.current_version]["points_capitalized"];

  // Next versions
  let has_next_version = ((player.current_version + 1) in VERSIONS);
  if (has_next_version) {
    document.getElementsByClassName("update")[0].style.display = "";
    document.getElementsByClassName("version-update")[0].disabled = player.points.lt(VERSIONS[player.current_version]["limit"]);
    document.getElementsByClassName("changelog")[0].getElementsByClassName("changes")[0].textContent = VERSIONS[player.current_version + 1]["changelog"];
    for (let element of document.getElementsByClassName("limit")) element.textContent = formatNumber(VERSIONS[player.current_version]["limit"], false, true);
    for (let element of document.getElementsByClassName("next-version")) element.textContent = VERSIONS[player.current_version + 1]["name"];
    for (let element of document.getElementsByClassName("next-version-name-full")) element.textContent = VERSIONS[player.current_version + 1]["name_full"];
    for (let element of document.getElementsByClassName("next-version-date")) element.textContent = VERSIONS[player.current_version + 1]["date"];
    for (let element of document.getElementsByClassName("next-version-points-capitalized")) element.textContent = VERSIONS[player.current_version + 1]["points_capitalized"];
  }
  else document.getElementsByClassName("update")[0].style.display = "none";

  // Unlocked elements
  if (player.current_version >= 1) document.getElementsByClassName("credits")[0].style.display = "";
  else document.getElementsByClassName("credits")[0].style.display = "none";
  if (player.current_version >= 4 && player.current_version <= 23) document.getElementsByClassName("version-control")[0].style.display = "";
  else document.getElementsByClassName("version-control")[0].style.display = "none";
  if (player.current_version >= 13 && player.settings['newsticker']) document.getElementsByClassName("newsticker")[0].style.display = "";
  else document.getElementsByClassName("newsticker")[0].style.display = "none";
  if (player.current_version <= 2) document.getElementsByClassName("get-a-point")[0].style.display = "";
  else document.getElementsByClassName("get-a-point")[0].style.display = "none";
  if (player.current_version >= 3) document.getElementsByClassName("tickspeed")[0].style.display = "";
  else document.getElementsByClassName("tickspeed")[0].style.display = "none";
  if (player.current_version >= 4) document.getElementsByClassName("tickspeed")[0].getElementsByClassName("buy-max")[0].style.display = "";
  else document.getElementsByClassName("tickspeed")[0].getElementsByClassName("buy-max")[0].style.display = "none";
  if (player.current_version >= 5) document.getElementsByClassName("btn-automation")[0].style.display = "";
  else document.getElementsByClassName("btn-automation")[0].style.display = "none";
  if (player.current_version >= 6) document.getElementsByClassName("buy-max-dim")[0].style.display = "";
  else document.getElementsByClassName("buy-max-dim")[0].style.display = "none";
  if (player.current_version >= 12) document.getElementsByClassName("btn-heroes")[0].style.display = "";
  else document.getElementsByClassName("btn-heroes")[0].style.display = "none";
  if (player.current_version >= 13) document.getElementsByClassName("dimsac")[0].style.display = "";
  else document.getElementsByClassName("dimsac")[0].style.display = "none";
  if (player.current_version >= 14) document.getElementsByClassName("get-xp-button")[0].style.display = "";
  else document.getElementsByClassName("get-xp-button")[0].style.display = "none";
  if (player.current_version >= 19) document.getElementsByClassName("btn-actions")[0].style.display = "";
  else document.getElementsByClassName("btn-actions")[0].style.display = "none";
  if (player.current_version >= 20) document.getElementsByClassName("res-locks")[0].style.display = "";
  else document.getElementsByClassName("res-locks")[0].style.display = "none";
  if (player.current_version >= 20) document.getElementById("action_upgrade_1").style.display = "";
  else document.getElementById("action_upgrade_1").style.display = "none";
  if (player.current_version >= 22) document.getElementsByClassName("btn-infinity")[0].style.display = "";
  else document.getElementsByClassName("btn-infinity")[0].style.display = "none";

  // unlocked settings
  if (player.current_version >= 12) document.getElementsByClassName("tab-settings")[0].getElementsByClassName("notation")[0].style.display = "";
  else document.getElementsByClassName("tab-settings")[0].getElementsByClassName("notation")[0].style.display = "none";
  if (player.current_version >= 13) document.getElementsByClassName("tab-settings")[0].getElementsByClassName("newstickers")[0].style.display = "";
  else document.getElementsByClassName("tab-settings")[0].getElementsByClassName("newstickers")[0].style.display = "none";
  if (player.current_version >= 17) document.getElementsByClassName("tab-settings")[0].getElementsByClassName("lootbox-opening")[0].style.display = "";
  else document.getElementsByClassName("tab-settings")[0].getElementsByClassName("lootbox-opening")[0].style.display = "none";
}