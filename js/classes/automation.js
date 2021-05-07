function getAutomationCost(type) {
  if (typeof type == "number") {
    return function() {
      if (player.current_version < 10) return generateDimensionCostFunction(type)(2).mul(10);
      else return generateDimensionCostFunction(type)(1).mul(10);
    }
  }
  else {
    switch (type) {
      case "tickspeed": return function() { if (player.current_version < 10) return D("1e8"); else return D("1e5"); };
      case "dimshift": return function() { if (player.current_version < 10) return D("1e50"); else return D("1e30"); };
      case "dimboost": return function() { if (player.current_version < 10) return D("1e1000"); else return D("1e600"); };
      case "galaxy": return function() { if (player.current_version < 10) return D("1e6000"); else return D("1e4000"); };
    }
  }
}

class Automation {
  constructor(type) {
    this.is_dimensional = (typeof type == "number");
    this.type = type;
    this.cost = getAutomationCost(type);
    this.active = true;
    this.bought = false;

    this.subscribe();
  }

  subscribe() {
    let container = document.createElement('div');
    container.classList.add('autobuyer');
    if (!this.is_dimensional) container.classList.add('other');
    container.id = "autobuyer_" + this.type;

    let name = document.createElement('p');
    name.classList.add('title');
    let text_name = "";
    if (this.is_dimensional) {
      text_name = (this.type + 1).toString();
      if (this.type == 0) text_name += "st ";
      else if (this.type == 1) text_name += "nd ";
      else if (this.type == 2) text_name += "rd ";
      else text_name += "th ";
      text_name += "<span class='points-capitalized'></span> Dimension";
    }
    else {
      switch (this.type) {
        case "tickspeed": text_name = "Tickspeed Upgrades"; break;
        case "dimshift": text_name = "Dimensional Shifts"; break;
        case "dimboost": text_name = "Dimensional Boosts"; break;
        case "galaxy": text_name = "<span class='points-capitalized'></span> Galaxies"; break;
      }
    }
    name.innerHTML = text_name;
    container.appendChild(name);

    let settings = document.createElement('label');
    settings.classList.add('autobuyer-settings');

    let active_label = document.createElement('p');
    active_label.textContent = "Active";
    settings.appendChild(active_label);

    let active_checkbox = document.createElement('input');
    active_checkbox.type = "checkbox";
    active_checkbox.classList.add('is-active');
    active_checkbox.checked = "true";
    settings.appendChild(active_checkbox);
    container.appendChild(settings);

    let buy_btn = document.createElement('button');
    buy_btn.classList.add('buy-button');
    buy_btn.setAttribute('automation_id', this.type);
    buy_btn.onclick = function() { player.autobuyers[this.attributes.automation_id.value].buy() };

    let buy_amt = document.createElement('p');
    buy_amt.classList.add('buy');
    buy_btn.appendChild(buy_amt);
    container.appendChild(buy_btn);

    let outer_container = document.getElementsByClassName('autobuyers')[0];

    if (this.is_dimensional && outer_container.getElementsByClassName('other').length > 0) {
      outer_container.insertBefore(container, outer_container.getElementsByClassName('other')[0]);
    }
    else outer_container.appendChild(container);
  }

  processTimedelta(delta) {
    if (player.current_version >= 19 && typeof this.type == "number" && ("common-dim" + (this.type + 1)) in player.heroes && player.heroes["common-dim" + (this.type + 1)].level > 0) this.bought = true;

    this.active = document.getElementById('autobuyer_' + this.type).getElementsByClassName('is-active')[0].checked;
    if (!this.active || !this.bought) return;
    if (this.is_dimensional && (this.type in player.dimensions)) player.dimensions[this.type].buyMax();
    else {
      switch (this.type) {
        case "tickspeed": player.tickspeed.buyMax(); break;
        case "dimshift": performDimshift(); break;
        case "dimboost": performDimboost(); break;
        case "galaxy": performGalaxy(); break;
      }
    }
  }

  screenUpdate() {
    let container = document.getElementById('autobuyer_' + this.type);

    if (this.bought) {
      container.getElementsByClassName('buy-button')[0].classList.add('bought');
      container.getElementsByClassName('buy-button')[0].disabled = true;
      container.getElementsByClassName('buy')[0].textContent = "Bought";
    }
    else {
      container.getElementsByClassName('buy-button')[0].classList.remove('bought');
      container.getElementsByClassName('buy-button')[0].disabled = !this.canAfford();
      container.getElementsByClassName('buy')[0].textContent = formatNumber(this.cost(), true, true) + " (A)";
    }
  }

  canAfford() {
    return player.points.gte(this.cost());
  }

  buy() {
    if (!this.canAfford()) return;
    if (this.bought) return;
    player.points = player.points.sub(this.cost()).max(0);
    this.bought = true;
  }

  save() {
    let data = [];
    data.push(this.type);
    data.push(this.bought);
    data.push(this.active);
    return data;
  }

  load(data) {
    this.type = data[0];
    this.bought = data[1];
    this.active = data[2];

    document.getElementById('autobuyer_' + this.type).getElementsByClassName('is-active')[0].checked = this.active;
  }
}