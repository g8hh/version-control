function getActionXPNeedToLevel(lvl) {
  return Math.round((Math.pow(1.5, lvl) - 1) * 20);
}

function getActionXPNeed(lvl) {
  return getActionXPNeedToLevel(lvl + 1) - getActionXPNeedToLevel(lvl);
}

function processActionXP() {
  while (player.dimensions_xp >= getActionXPNeed(player.dimensions_level)) {
    player.dimensions_xp -= getActionXPNeed(player.dimensions_level);
    player.dimensions_level += 1;
  }
  while (player.heroes_xp >= getActionXPNeed(player.heroes_level)) {
    player.heroes_xp -= getActionXPNeed(player.heroes_level);
    player.heroes_level += 1;
  }
}

//

const ACTION_UPGRADE_LIMITS = [5, 6, 4, ACTION_RESOURCES.length - 3];

function getTotalActions() {
  return 1 + player.action_upgrades[0];
}

function getTotalLocks() {
  return player.action_upgrades[1];
}

function getTotalResources() {
  return 3 + player.action_upgrades[3];
}

function actionResourceCost(id) {
  if (id == 0) return 2 * (player.action_upgrades[id] + 1);
  if (id == 1) return 3 * (player.action_upgrades[id] + 1);
  if (id == 2) return 10 * (player.action_upgrades[id] + 1);
  if (id == 3) return 1 + (player.action_upgrades[id] + 1);
}

function actionResourceCostType(id) {
  if (id == 0) return ACTION_RESOURCES[2 * player.action_upgrades[id] + 1];
  if (id == 1) return ACTION_RESOURCES[2 * player.action_upgrades[id] + 2];
  if (id == 2) return ACTION_RESOURCES[3 * player.action_upgrades[id] + 2];
  if (id == 3) return ACTION_RESOURCES[player.action_upgrades[id] + 2];
}

function actionCanBuy(id) {
  if (player.current_version < 20 && id == 1) return false;
  if (player.action_upgrades[id] == ACTION_UPGRADE_LIMITS[id]) return false;
  if (player.action_resources[actionResourceCostType(id)] < actionResourceCost(id)) return false;
  return true;
}

function actionBuy(id) {
  if (!actionCanBuy(id)) return;
  player.action_resources[actionResourceCostType(id)] -= actionResourceCost(id);
  player.action_upgrades[id] += 1;

  if (id == 0) player.free_actions += 1;
  if (id == 1) player.free_locks += 1;
}