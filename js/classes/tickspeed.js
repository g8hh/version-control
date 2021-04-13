class Tickspeed extends Expensive {
  constructor() {
    super();
  }

  cost_function(amt) {
    let base_cost = D(1000);
    if (player.current_version >= 9) base_cost = D(100);
    let cost_increase = D(10);

    let softcapped_amt = D(amt);
    let softcap = 100;
    if ("legendary-softcap" in player.heroes) softcap += player.heroes['legendary-softcap'].getEffect();
    if (player.current_version >= 14 && softcapped_amt.gt(softcap)) softcapped_amt = D(softcap).add(softcapped_amt.sub(softcap).pow(1.1));

    return base_cost.mul(cost_increase.pow(softcapped_amt)).round();
  }

  getEffectOne() {
    let base = 13;
    if (player.current_version >= 16) base += 2 * player.galaxies;
    if ("legendary-tickspeed" in player.heroes) base += player.heroes['legendary-tickspeed'].getEffect();
    return D(1 + base / 100);
  }

  getEffect() {
    return this.getEffectOne().pow(this.amt_bought);
  }

  screenUpdate() {
    let container = document.getElementsByClassName('tickspeed')[0];
    
    container.getElementsByClassName('effect')[0].textContent = formatNumber(this.getEffect(), true);
    container.getElementsByClassName('effect-one')[0].textContent = formatNumber(this.getEffectOne().sub(1).mul(100), true, true);
    container.getElementsByClassName('buy')[0].disabled = !this.canAfford();
    container.getElementsByClassName('cost')[0].textContent = formatNumber(this.getCost(), true, true);
  }

  canAfford(bulk=D(1)) {
    return player.points.gte(this.getCost(bulk));
  }

  buy(bulk=D(1)) {
    if (!this.canAfford(bulk)) return;
    if (this.getCost(bulk).layer < 2) player.points = player.points.sub(this.getCost(bulk)).max(0);
    this.amt_bought = this.amt_bought.add(bulk);
  }

  save() {
    let data = [];
    data.push(this.amt_bought.toJSON());
    return data;
  }

  load(data) {
    this.amt_bought = D(data[0]);
  }
}