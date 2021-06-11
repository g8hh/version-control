function generateDimensionCostFunction(layer) {
  return function(amt) {
    let base_cost = D("1e" + (1/6 * layer * layer * layer + 5/6 * layer + 1));
    let cost_increase = D("1e" + (layer * (layer + 1) / 2 + 2));

    let softcapped_amt = D(amt);
    let softcap = 100;
    if ("legendary-softcap" in player.heroes) softcap += player.heroes['legendary-softcap'].getEffect();
    if (player.current_version >= 14 && softcapped_amt.gt(softcap)) softcapped_amt = D(softcap).add(softcapped_amt.sub(softcap).pow(1.1));

    let discount = 1;
    if ("rare-cost" in player.heroes) discount = player.heroes['rare-cost'].getEffect();

    return base_cost.mul(cost_increase.pow(softcapped_amt)).div(discount).round();
  }
}

function getDimensionLimit() {
  return 4 + player.dimension_shifts;
}

class Dimension extends Expensive {
  constructor(layer) {
    super();

    this.layer = layer;
    this.amt = D(0);
    this.cost_function = generateDimensionCostFunction(layer);

    this.subscribe();
  }

  subscribe() {
    let container = document.createElement('div');
    container.classList.add('dimension');
    container.id = 'dimension_' + this.layer;

    let name = document.createElement('p');
    let text_name = (this.layer + 1).toString();
    if (this.layer == 0) text_name += "st ";
    else if (this.layer == 1) text_name += "nd ";
    else if (this.layer == 2) text_name += "rd ";
    else text_name += "th ";
    text_name += "<span class='points-capitalized'></span> Dimension";
    name.innerHTML = text_name;
    container.appendChild(name);

    let mult = document.createElement('p');
    mult.innerHTML = "×<span class='multiplier'></span>";
    container.appendChild(mult);

    let dims = document.createElement('p');
    dims.innerHTML = "<span class='total-dims'></span> (<span class='bought-dims'></span>)";
    container.appendChild(dims);

    let buy_btn = document.createElement('button');
    buy_btn.classList.add('buy-button');
    buy_btn.setAttribute('dimension_id', this.layer);
    buy_btn.onclick = function() { player.dimensions[this.attributes.dimension_id.value].buy() };
    
    let buy_price = document.createElement('p');
    buy_price.classList.add('buy');
    buy_btn.appendChild(buy_price);
    container.appendChild(buy_btn);

    document.getElementsByClassName('dimensions')[0].appendChild(container);
  }

  processTimedelta(delta) {
    let prod = D(delta).div(1000).mul(this.amt).mul(this.getMultiplier()).mul(player.tickspeed.getEffect());

    if (this.layer > 0) player.dimensions[this.layer - 1].amt = player.dimensions[this.layer - 1].amt.add(prod);
    else player.points = player.points.add(prod);
  }

  getMultiplier() {
    let base = D(1);
    let bought_pow = 2;
    if ("rare-dim" + Math.min(10 - this.layer, this.layer + 1) in player.heroes) bought_pow = player.heroes["rare-dim" + Math.min(10 - this.layer, this.layer + 1)].getEffect();
    if (player.current_version >= 1) base = base.mul(D(bought_pow).pow(this.amt_bought));
    if (player.current_version >= 2 && this.layer <= 0) base = base.mul(2);
    if (player.current_version >= 5 && this.layer <= 1) base = base.mul(2);
    if (player.current_version >= 10 && this.layer <= 2) base = base.mul(2);
    let dimboost_pow = 2;
    if ("uncommon-dim" + (this.layer + 1) in player.heroes) dimboost_pow = player.heroes["uncommon-dim" + (this.layer + 1)].getEffect();
    if (player.current_version >= 7) base = base.mul(D(dimboost_pow).pow(player.dimension_shifts - Math.max(0, this.layer - 3)));
    if (player.current_version >= 9) base = base.mul(D(dimboost_pow).pow(player.dimension_boosts));
    if (player.current_version >= 12) base = base.mul(player.heroes["common-dim" + (this.layer + 1)].getEffect());
    if (player.current_version >= 13 && this.layer == maxDimshifts() + 3) base = base.mul(getDimsacEffect());
    if ('dim' + (this.layer + 1) in player.infinity_upgrades && player.infinity_upgrades['dim' + (this.layer + 1)].bought) base = base.mul(player.infinity_upgrades['dim' + (this.layer + 1)].effect());
    if ("legendary-dims" in player.heroes) base = base.mul(player.heroes['legendary-dims'].getEffect());
    base = base.mul(1 + player.dimensions_level);
    return base;
  }

  screenUpdate() {
    let container = document.getElementById('dimension_' + this.layer);
    
    container.getElementsByClassName('multiplier')[0].textContent = formatNumber(this.getMultiplier(), true);
    container.getElementsByClassName('total-dims')[0].textContent = formatNumber(this.amt, true);
    container.getElementsByClassName('bought-dims')[0].textContent = formatNumber(this.amt_bought, true, true);
    container.getElementsByClassName('buy-button')[0].disabled = !this.canAfford();
    container.getElementsByClassName('buy')[0].textContent = formatNumber(this.getCost(), true, true);
  }

  canAfford(bulk=D(1)) {
    return player.points.gte(this.getCost(bulk));
  }

  buy(bulk=D(1)) {
    if (!this.canAfford(bulk)) return;
    if (this.getCost(bulk).layer < 2) player.points = player.points.sub(this.getCost(bulk)).max(0);
    if (player.current_version >= 8) this.amt = this.amt.add(bulk.mul(10));
    else this.amt = this.amt.add(bulk);
    this.amt_bought = this.amt_bought.add(bulk);

    if (this.layer == player.dimensions.length - 1 && this.layer < getDimensionLimit() - 1) {
      player.dimensions.push(new Dimension(player.dimensions.length));
      if (!((this.layer + 1) in player.autobuyers)) player.autobuyers[this.layer + 1] = new Automation(this.layer + 1);
      if (!(("common-dim" + (this.layer + 2)) in player.heroes)) player.heroes["common-dim" + (this.layer + 2)] = new Hero("common", "dim" + (this.layer + 2));
      if (player.current_version >= 15 && !(("uncommon-dim" + (this.layer + 2)) in player.heroes)) player.heroes["uncommon-dim" + (this.layer + 2)] = new Hero("uncommon", "dim" + (this.layer + 2));
      if (player.current_version >= 18 && (("rare-dim" + (this.layer + 2)) in HERO_NAMES) && !(("rare-dim" + (this.layer + 2)) in player.heroes)) player.heroes["rare-dim" + (this.layer + 2)] = new Hero("rare", "dim" + (this.layer + 2));
      screenUpdate(0);
    }
  }

  save() {
    let data = [];
    data.push(this.amt.toJSON());
    data.push(this.amt_bought.toJSON());
    return data;
  }

  load(data) {
    this.amt = D(data[0]);
    this.amt_bought = D(data[1]);
  }
}