function galaxyRequirement() {
  return D(30 + 40 * player.galaxies + 40 * Math.max(player.galaxies - extremeScalingGalaxy(), 0) * Math.max(player.galaxies - extremeScalingGalaxy(), 0));
}

function extremeScalingGalaxy() {
  let res = 4;
  return res;
}

function canGalaxy() {
  if (player.current_version < 16) return false;
  if (player.dimension_shifts < maxDimshifts()) return false;
  if (player.dimensions.length <= player.dimension_shifts + 3) return false;
  if (player.dimensions[player.dimension_shifts + 3].amt.lt(galaxyRequirement())) return false;
  return true;
}

function performGalaxy() {
  if (!canGalaxy()) return;

  player.dimension_shifts = 0;
  if (!('keepboosts' in player.infinity_upgrades && player.infinity_upgrades['keepboosts'].bought)) player.dimension_boosts = 0;
  player.galaxies += 1;

  if ('keepshifts' in player.infinity_upgrades && player.infinity_upgrades['keepshifts'].bought) player.dimension_shifts = 6;

  if (!('keepstuff' in player.infinity_upgrades && player.infinity_upgrades['keepstuff'].bought)) {
    player.points = D(0);
    if (player.current_version >= 2) player.points = D(10);

    for (let dimension of player.dimensions) {
      document.getElementById('dimension_' + dimension.layer).remove();
    }
    player.dimensions = [new Dimension(0)];

    player.tickspeed.amt_bought = D(0);

    player.total_dimsac = D(0);
  }
}