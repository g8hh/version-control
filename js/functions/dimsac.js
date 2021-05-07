function canDimsac() {
  if (player.current_version < 13) return false;
  if (player.dimension_shifts < maxDimshifts()) return false;
  if (player.dimensions.length <= player.dimension_shifts + 3) return false;
  if (player.dimensions[player.dimension_shifts + 3].amt.lt(1)) return false;
  return true;
}

function getDimsacEffect(x=player.total_dimsac) {
  let sac_power = 0.04;
  if ("rare-sacrifice" in player.heroes) sac_power *= player.heroes["rare-sacrifice"].getEffect();
  return D(1).add(x.pow(sac_power).div(1000));
}

function getDimsacProfit() {
  return getDimsacEffect(player.total_dimsac.add(player.points)).div(getDimsacEffect());
}

function dimsac() {
  if (!canDimsac()) return;
  player.total_dimsac = player.total_dimsac.add(player.points);
  if ('autosac' in player.infinity_upgrades && player.infinity_upgrades['autosac'].bought) return;
  player.points = D(0);
  for (let i = 0; i < player.dimension_shifts + 3; i++) {
    player.dimensions[i].amt = D(0);
  }
}