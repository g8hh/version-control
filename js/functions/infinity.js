function getIPGain() {
  return player.points.max(1).pow(1/6000).div(10).floor();
}

function inverseIPGain(x) {
  return D(x).mul(10).pow(6000);
}

function canInfinity() {
  return getIPGain().gt(0);
}

function performInfinity() {
  if (!canInfinity()) return;
  player.infinity_points = player.infinity_points.add(getIPGain());

  player.points = D(0);
  if (player.current_version >= 2) player.points = D(10);

  for (let dimension of player.dimensions) {
    document.getElementById('dimension_' + dimension.layer).remove();
  }
  player.dimensions = [new Dimension(0)];
  player.tickspeed.amt_bought = D(0);

  player.dimension_shifts = 0;
  player.dimension_boosts = 0;
  player.galaxies = 0;

  if ('keepshifts' in player.infinity_upgrades && player.infinity_upgrades['keepshifts'].bought) player.dimension_shifts = 6;

  player.xp_gained = 0;

  if (player.current_version < 23) {
    player.xp = 0;

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
  }

  player.total_dimsac = D(0);
}