function updateVersion() {
  let has_next_version = ((player.current_version + 1) in VERSIONS);
  if (!has_next_version) return;
  if (player.points.lt(VERSIONS[player.current_version]["limit"])) return;

  player.current_version += 1;

  player.points = D(0);
  if (player.current_version >= 2) player.points = D(10);

  for (let dimension of player.dimensions) {
    document.getElementById('dimension_' + dimension.layer).remove();
  }
  player.dimensions = [new Dimension(0)];
  player.tickspeed.amt_bought = D(0);

  if (player.current_version < 21) {
    for (let key of Object.keys(player.autobuyers)) {
      document.getElementById('autobuyer_' + player.autobuyers[key].type).remove();
    }
    player.autobuyers = {0: new Automation(0)};
  }
  if (player.current_version >= 6 && !('tickspeed' in player.autobuyers)) player.autobuyers['tickspeed'] = new Automation('tickspeed');
  if (player.current_version >= 16 && !('dimshift' in player.autobuyers)) player.autobuyers['dimshift'] = new Automation('dimshift');
  if (player.current_version >= 21 && !('dimboost' in player.autobuyers)) player.autobuyers['dimboost'] = new Automation('dimboost');
  if (player.current_version >= 22 && !('galaxy' in player.autobuyers)) player.autobuyers['galaxy'] = new Automation('galaxy');

  player.dimension_shifts = 0;
  player.dimension_boosts = 0;
  player.galaxies = 0;

  player.xp = 0;
  player.xp_gained = 0;

  for (let key of Object.keys(player.heroes)) {
    document.getElementById(player.heroes[key].layer + "-" + player.heroes[key].type).remove();
  }
  player.heroes = {'common-dim1': new Hero('common', 'dim1')};
  if (player.current_version >= 15) {
    player.heroes['uncommon-dim1'] = new Hero('uncommon', 'dim1');
  }
  if (player.current_version >= 18) {
    player.heroes['rare-cost'] = new Hero('rare', 'cost');
    player.heroes['rare-sacrifice'] = new Hero('rare', 'sacrifice');
    if (player.current_version >= 19) player.heroes['rare-action'] = new Hero('rare', 'action');
    player.heroes['rare-dim1'] = new Hero('rare', 'dim1');
  }
  if (player.current_version >= 24) {
    player.heroes['legendary-tickspeed'] = new Hero('legendary', 'tickspeed');
    player.heroes['legendary-dims'] = new Hero('legendary', 'dims');
    player.heroes['legendary-softcap'] = new Hero('legendary', 'softcap');
    player.heroes['legendary-xp'] = new Hero('legendary', 'xp');
    player.heroes['legendary-lootboxes'] = new Hero('legendary', 'lootboxes');
  }

  player.total_dimsac = D(0);

  player.time_to_action_refresh = ACTION_REFRESH_TIME;

  player.dimensions_level = 0;
  player.dimensions_xp = 0;
  player.heroes_level = 0;
  player.heroes_xp = 0;

  for (let i = player.actions.length; i < 6; i++) player.actions.push(new Action(i));
  for (let i = 0; i < 6; i++) player.actions[i].generateAction();

  player.action_upgrades = [0, 0, 0, 0];

  player.action_resources = {};
  for (let key of ACTION_RESOURCES) {
    player.action_resources[key] = 0;
  }

  player.free_actions = 1;
  player.free_locks = 0;

  player.infinity_points = D(0);

  for (let key of Object.keys(player.infinity_upgrades)) {
    player.infinity_upgrades[key].bought = false;
  }

  cleanUp();
  loadUp();
}