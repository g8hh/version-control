function dimboostRequirement() {
  return D(20 + 20 * player.dimension_boosts + 20 * Math.max(0, player.dimension_boosts - extremeScalingDimboost()) * Math.max(0, player.dimension_boosts - extremeScalingDimboost()));
}

function extremeScalingDimboost() {
  let res = 64;
  if ('prog1' in player.infinity_upgrades && player.infinity_upgrades['prog1'].bought) res += 10;
  return res;
}

function canDimboost() {
  if (player.current_version < 9) return false;
  if (player.dimension_shifts < maxDimshifts()) return false;
  if (player.dimensions.length <= player.dimension_shifts + 3) return false;
  if (player.dimensions[player.dimension_shifts + 3].amt.lt(dimboostRequirement())) return false;
  return true;
}

function performDimboost() {
  if (!canDimboost()) return;

  player.dimension_boosts += 1;

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