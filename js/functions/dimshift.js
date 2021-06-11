function dimshiftRequirement() {
  if (player.current_version >= 8) return D(10);
  return D(1);
}

function maxDimshifts() {
  if (player.current_version >= 8) return 6;
  return 95;
}

function canDimshift() {
  if (player.current_version < 7) return false;
  if (player.dimensions.length <= player.dimension_shifts + 3) return false;
  if (player.dimensions[player.dimension_shifts + 3].amt.lt(dimshiftRequirement())) return false;
  return true;
}

function performDimshift() {
  if (!canDimshift()) return;
  if (player.dimension_shifts >= maxDimshifts()) return;

  player.dimension_shifts += 1;

  player.points = D(0);
  if (player.current_version >= 2) player.points = D(10);

  for (let dimension of player.dimensions) {
    document.getElementById('dimension_' + dimension.layer).remove();
  }
  player.dimensions = [new Dimension(0)];

  player.tickspeed.amt_bought = D(0);

  player.total_dimsac = D(0);
}