class InfinityUpgrade {
  constructor(id, desc, cost, effect, effect_desc="") {
    this.id = id;
    this.desc = desc;
    this.cost = cost;
    this.effect = effect;
    this.effect_desc = effect_desc;

    this.bought = false;

    this.subscribe();
  }

  subscribe() {
    let container = document.createElement('button');
    container.classList.add('upgrade');
    container.id = 'iupg_' + this.id;
    container.setAttribute('infinity_upgrade_id', this.id);
    container.onclick = function() { player.infinity_upgrades[this.attributes.infinity_upgrade_id.value].buy(); };

    let desc = document.createElement('p');
    desc.classList.add('desc');
    desc.innerHTML = this.desc;
    container.appendChild(desc);

    if (this.effect_desc != "") {
      let effect = document.createElement('p');
      effect.classList.add('effect');
      effect.innerHTML = "Current: " + this.effect_desc;
      container.appendChild(effect);
    }

    let delimiter = document.createElement('div');
    delimiter.classList.add('delimiter');
    container.appendChild(delimiter);

    let cost = document.createElement('cost');
    cost.classList.add('cost');
    cost.innerHTML = "Cost: <span class='cost-amt'></span> IP";
    container.appendChild(cost);

    document.getElementsByClassName('infinity-upgrades')[0].appendChild(container);
  }

  canBuy() {
    return !this.bought && player.infinity_points.gte(this.cost);
  }

  buy() {
    if (!this.canBuy()) return;
    player.infinity_points = player.infinity_points.sub(this.cost).round();
    this.bought = true;
  }

  screenUpdate() {
    let container = document.getElementById('iupg_' + this.id);

    if (this.bought) container.classList.add('bought');
    else container.classList.remove('bought');

    container.disabled = !this.canBuy();
    if (container.getElementsByClassName('effect-amt').length > 0) container.getElementsByClassName('effect-amt')[0].textContent = formatNumber(this.effect());
    container.getElementsByClassName('cost-amt')[0].textContent = formatNumber(this.cost, false, true);
  }

  save() {
    let data = [];
    data.push(this.bought);
    return data;
  }

  load(data) {
    this.bought = data[0];
  }
}