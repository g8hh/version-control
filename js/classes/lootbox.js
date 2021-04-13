const TYPE_NAMES = ["common", "uncommon", "rare", "legendary"];
const BASE_CHANCES = [1, 1/10, 1/1000, 1/100000000];
const CHANCE_MULTIPLIER = {
  "basic": [1,1,1,1],
  "regular": [1,2,4,16],
  "advanced": [1,3,9,81],
  "quality": [1,4,16,256], 
  "elite": [1,6,36,1296], 
  "final": [1,8,64,4096]
};
const BASE_PACK_SIZE = {
  "basic": 4,
  "regular": 10,
  "advanced": 25,
  "quality": 80,
  "elite": 400,
  "final": 3000
};
const COST_PER_CARD = {
  "basic": 2.5,
  "regular": 4,
  "advanced": 6,
  "quality": 8.75,
  "elite": 15, 
  "final": 25
}

const RARITY_NAMES = {
  "common": "Common",
  "uncommon": "Uncommon",
  "rare": "Rare",
  "legendary": "Legendary"
}
const LOOTBOX_NAMES = {
  "basic": "Basic",
  "regular": "Regular",
  "advanced": "Advanced",
  "quality": "Quality",
  "elite": "Elite", 
  "final": "Final"
}

const UNLOCK_CONDITION = {
  "common": function() { return true; },
  "uncommon": function() { return player.current_version >= 15; },
  "rare": function() { return player.current_version >= 18; },
  "legendary": function() { return player.current_version >= 24; }
}

function weightDistributionRandom(total, weights, predictive=0.5) {
  let mod_weights = {};
  let sum_weights = 0;
  for (let key of Object.keys(weights)) {
    mod_weights[key] = weights[key] * (Math.random() + predictive);
    sum_weights += mod_weights[key];
  }

  let res = {};
  let remainder = {};
  let sum_remainder = 0;

  let left = total;

  for (let key of Object.keys(mod_weights)) {
    mod_weights[key] *= total / sum_weights;
    res[key] = Math.floor(mod_weights[key]);
    remainder[key] = mod_weights[key] - res[key];
    left -= res[key];
    sum_remainder += remainder[key];
  }

  for (let i = 0; i < Math.min(left, Object.keys(mod_weights).length); i++) {
    let rng = sum_remainder * Math.random();
    for (let key of Object.keys(remainder)) {
      rng -= remainder[key];
      if (rng < 0) {
        res[key] += 1;
        sum_remainder -= remainder[key];
        remainder[key] = 0;
        break;
      }
    }
  }

  let final_res = {};
  for (let key of Object.keys(res)) {
    if (res[key] > 0) final_res[key] = res[key];
  }

  return final_res;
}

class Lootbox {
  constructor(type) {
    this.type = type;

    this.weights = {};
    for (let i = 0; i < TYPE_NAMES.length; i++) {
      this.weights[TYPE_NAMES[i]] = BASE_CHANCES[i] * CHANCE_MULTIPLIER[this.type][i];
    }

    this.subscribe();
  }

  getPackSize() {
    let base_pack_size = Math.floor(BASE_PACK_SIZE[this.type] + BASE_PACK_SIZE[this.type] * player.heroes_level / 10);
    if ("legendary-lootboxes" in player.heroes) base_pack_size *= player.heroes['legendary-lootboxes'].getEffect();
    if ('lootboxexp' in player.infinity_upgrades && player.infinity_upgrades['lootboxexp'].bought && this.type == "final") base_pack_size = Math.floor(base_pack_size * Math.max(1, player.xp / Math.round(BASE_PACK_SIZE[this.type] * COST_PER_CARD[this.type])));
    return base_pack_size;
  }

  getCost() {
    let base_cost = Math.round(BASE_PACK_SIZE[this.type] * COST_PER_CARD[this.type]);
    if ('lootboxexp' in player.infinity_upgrades && player.infinity_upgrades['lootboxexp'].bought && this.type == "final") base_cost = Math.max(base_cost, player.xp);
    return base_cost;
  }

  canBuy() {
    if ('lootboxexp' in player.infinity_upgrades && player.infinity_upgrades['lootboxexp'].bought && this.type != "final") return false;
    return player.xp >= this.getCost();
  }

  getAvgPack() {
    let result = {};
    let weight_sum = 0;
    for (let type of TYPE_NAMES) {
      if (UNLOCK_CONDITION[type]()) {
        result[type] = this.weights[type];
        weight_sum += result[type];
      }
      else result[type] = 0;
    }
    for (let type of Object.keys(result)) {
      if (result[type] > 0) result[type] *= this.getPackSize() / weight_sum;
    }
    return result;
  }

  subscribe() {
    let container = document.createElement('button');
    container.classList.add('lootbox');
    container.id = 'lootbox_' + this.type;
    container.setAttribute('lootbox_id', this.type);
    container.onclick = function () { player.lootboxes[this.attributes.lootbox_id.value].open() };
    
    let name = document.createElement('p');
    name.classList.add('title');
    name.innerHTML = LOOTBOX_NAMES[this.type] + "<br><span class='lootbox-class'></span>";
    container.appendChild(name);

    let cost = document.createElement('p');
    cost.classList.add('cost');
    cost.innerHTML = "<span class='cost-xp'></span> XP";
    container.appendChild(cost);

    let heroes = document.createElement('p');
    heroes.innerHTML = "<span class='card-amount'></span> Heroes";
    container.appendChild(heroes);

    for (let type of TYPE_NAMES) {
      let type_gain = document.createElement('p');
      type_gain.classList.add('heroes-' + type);
      type_gain.innerHTML = "<span class='amount'></span> " + RARITY_NAMES[type];
      container.appendChild(type_gain);
    }

    document.getElementsByClassName('lootboxes')[0].appendChild(container);
  }

  open() {
    if (!this.canBuy()) return;

    let rarity_distr = weightDistributionRandom(this.getPackSize(), this.getAvgPack());

    player.xp -= this.getCost();

    let res_distr = {};
    for (let rarity of Object.keys(rarity_distr)) {
      let this_rarity_distr = {};
      let rarity_cards = [];
      for (let key of Object.keys(player.heroes)) {
        if (player.heroes[key].layer == rarity) rarity_cards.push(rarity + '-' + player.heroes[key].type);
      }
      let bites = Math.min(30, Math.floor(Math.log2(rarity_distr[rarity]) / 2 + 1));
      for (let i = 0; i < bites; i++) {
        let card = rarity_cards[Math.floor(Math.random() * rarity_cards.length)];
        if (!(card in this_rarity_distr)) this_rarity_distr[card] = 0;
        this_rarity_distr[card] += 1;
      }
      let rarity_distr_final = weightDistributionRandom(rarity_distr[rarity], this_rarity_distr, 1e-10);
      for (let key of Object.keys(rarity_distr_final)) {
        res_distr[key] = rarity_distr_final[key];
      }
    }

    for (let key of Object.keys(res_distr)) {
      player.heroes[key].copies += res_distr[key];
      player.heroes[key].updateHero();
    }

    // Display
    if (player.settings['lootbox-opening']) {
      document.getElementsByClassName('lootbox-name')[0].textContent = LOOTBOX_NAMES[this.type];

      let old_cards = document.getElementsByClassName('lootbox-hero-container')[0].children;
      while (old_cards[0]) old_cards[0].remove();

      let container = document.getElementsByClassName('lootbox-hero-container')[0];
      for (let key of Object.keys(res_distr)) {
        let element = document.createElement('div');
        element.classList.add('lootbox-hero');
        element.classList.add(player.heroes[key].layer);

        let level = document.createElement('p');
        level.classList.add('level');
        level.textContent = player.heroes[key].level;
        element.appendChild(level);

        let name = document.createElement('p');
        name.classList.add('title');
        name.textContent = HERO_NAMES[key];
        element.appendChild(name);

        let amount = document.createElement('p');
        amount.classList.add('amount');
        amount.textContent = '×' + formatNumber(res_distr[key], false, true);
        element.appendChild(amount);

        let progress = document.createElement('div');
        progress.classList.add('progress');
        progress.style.setProperty('--percentage', (player.heroes[key].copies * 100 / player.heroes[key].nextLevelReq()) + "%");
        progress.innerHTML = "<div class='progress-filled'></div><p>" + player.heroes[key].copies + "/" + player.heroes[key].nextLevelReq() + "</p>";
        element.appendChild(progress);

        container.appendChild(element);
      }

      openWindow('lootbox_contents');
    }
  }

  screenUpdate() {
    let container = document.getElementById('lootbox_' + this.type);

    if ('lootboxexp' in player.infinity_upgrades && player.infinity_upgrades['lootboxexp'].bought && this.type != "final") container.style.display = "none";

    container.disabled = !this.canBuy();

    container.getElementsByClassName('cost-xp')[0].textContent = formatNumber(this.getCost(), true, true);
    container.getElementsByClassName('card-amount')[0].textContent = formatNumber(this.getPackSize(), true, true);

    let card_avg = this.getAvgPack();
    for (let type of TYPE_NAMES) {
      container.getElementsByClassName('heroes-' + type)[0].getElementsByClassName('amount')[0].textContent = formatNumber(card_avg[type]);
    }
  }
}