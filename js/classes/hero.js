const HERO_NAMES = {
  "common-dim1": "Silver Surfer",
  "common-dim2": "Flash",
  "common-dim3": "Sonic",
  "common-dim4": "Nyan Cat",
  "common-dim5": "Usain Bolt",
  "common-dim6": "Zombie",
  "common-dim7": "Slowpoke",
  "common-dim8": "Snail",
  "common-dim9": "Photonic Wall",
  "common-dim10": "String Theorist",
  "uncommon-dim1": "Chuck Norris",
  "uncommon-dim2": "Trimps Colony",
  "uncommon-dim3": "Monolith",
  "uncommon-dim4": "Tesseract",
  "uncommon-dim5": "Superhero Team",
  "uncommon-dim6": "Prestige Tree",
  "uncommon-dim7": "Harry Potter",
  "uncommon-dim8": "dankesehr",
  "uncommon-dim9": "Glass Ceiling",
  "uncommon-dim10": "Grandma",
  "rare-cost": "CMOT Dibbler",
  "rare-sacrifice": "Itzpapalotl",
  "rare-action": "Flame Le Boosta",
  "rare-dim1": "Ouroboros",
  "rare-dim2": "Loop Hero",
  "rare-dim3": "Kronos",
  "rare-dim4": "Clover",
  "rare-dim5": "Middleman",
  "legendary-tickspeed": "ThePaperPilot",
  "legendary-dims": "asterisk_man",
  "legendary-softcap": "Jacorb",
  "legendary-xp": "VoidCloud",
  "legendary-lootboxes": "Florian"
}
const HERO_DESCS = {
  "common-dim1": "Boosts 1st <span class='points-capitalized'></span> Dimension",
  "common-dim2": "Boosts 2nd <span class='points-capitalized'></span> Dimension",
  "common-dim3": "Boosts 3rd <span class='points-capitalized'></span> Dimension",
  "common-dim4": "Boosts 4th <span class='points-capitalized'></span> Dimension",
  "common-dim5": "Boosts 5th <span class='points-capitalized'></span> Dimension",
  "common-dim6": "Boosts 6th <span class='points-capitalized'></span> Dimension",
  "common-dim7": "Boosts 7th <span class='points-capitalized'></span> Dimension",
  "common-dim8": "Boosts 8th <span class='points-capitalized'></span> Dimension",
  "common-dim9": "Boosts 9th <span class='points-capitalized'></span> Dimension",
  "common-dim10": "Boosts 10th <span class='points-capitalized'></span> Dimension",
  "uncommon-dim1": "DimShifts and DimBoosts boost 1st <span class='points-capitalized'></span> Dimension more",
  "uncommon-dim2": "DimShifts and DimBoosts boost 2nd <span class='points-capitalized'></span> Dimension more",
  "uncommon-dim3": "DimShifts and DimBoosts boost 3rd <span class='points-capitalized'></span> Dimension more",
  "uncommon-dim4": "DimShifts and DimBoosts boost 4th <span class='points-capitalized'></span> Dimension more",
  "uncommon-dim5": "DimShifts and DimBoosts boost 5th <span class='points-capitalized'></span> Dimension more",
  "uncommon-dim6": "DimShifts and DimBoosts boost 6th <span class='points-capitalized'></span> Dimension more",
  "uncommon-dim7": "DimShifts and DimBoosts boost 7th <span class='points-capitalized'></span> Dimension more",
  "uncommon-dim8": "DimShifts and DimBoosts boost 8th <span class='points-capitalized'></span> Dimension more",
  "uncommon-dim9": "DimShifts and DimBoosts boost 9th <span class='points-capitalized'></span> Dimension more",
  "uncommon-dim10": "DimShifts and DimBoosts boost 10th <span class='points-capitalized'></span> Dimension more",
  "rare-cost": "Discount all <span class='points-capitalized'></span> Dimensions and their automation",
  "rare-sacrifice": "Dimensional Sacrifice is stronger",
  "rare-action": "Actions work faster",
  "rare-dim1": "Each bought 1st and 10th <span class='points-capitalized'></span> Dimension boosts itself more",
  "rare-dim2": "Each bought 2nd and 9th <span class='points-capitalized'></span> Dimension boosts itself more",
  "rare-dim3": "Each bought 3rd and 8th <span class='points-capitalized'></span> Dimension boosts itself more",
  "rare-dim4": "Each bought 4th and 7th <span class='points-capitalized'></span> Dimension boosts itself more",
  "rare-dim5": "Each bought 5th and 6th <span class='points-capitalized'></span> Dimension boosts itself more",
  "legendary-tickspeed": "Tickspeed Upgrades are more powerful",
  "legendary-dims": "Boosts all <span class='points-capitalized'></span> Dimensions",
  "legendary-softcap": "<span class='points-capitalized'></span> Dimensions and Tickspeed Upgrades softcap starts later",
  "legendary-xp": "Gain more XP from <span class='points-capitalized'></span> Points",
  "legendary-lootboxes": "Toolboxes contain more Heroes"
}
const HERO_EFFECTS = {
  "common-dim1": "×",
  "common-dim2": "×",
  "common-dim3": "×",
  "common-dim4": "×",
  "common-dim5": "×",
  "common-dim6": "×",
  "common-dim7": "×",
  "common-dim8": "×",
  "common-dim9": "×",
  "common-dim10": "×",
  "uncommon-dim1": "×",
  "uncommon-dim2": "×",
  "uncommon-dim3": "×",
  "uncommon-dim4": "×",
  "uncommon-dim5": "×",
  "uncommon-dim6": "×",
  "uncommon-dim7": "×",
  "uncommon-dim8": "×",
  "uncommon-dim9": "×",
  "uncommon-dim10": "×",
  "rare-cost": "×",
  "rare-sacrifice": "^",
  "rare-action": "×",
  "rare-dim1": "×",
  "rare-dim2": "×",
  "rare-dim3": "×",
  "rare-dim4": "×",
  "rare-dim5": "×",
  "legendary-tickspeed": "+",
  "legendary-dims": "×",
  "legendary-softcap": "+",
  "legendary-xp": "×",
  "legendary-lootboxes": "×"
}
const HERO_AFTEREFFECTS = {
  "common-dim1": "",
  "common-dim2": "",
  "common-dim3": "",
  "common-dim4": "",
  "common-dim5": "",
  "common-dim6": "",
  "common-dim7": "",
  "common-dim8": "",
  "common-dim9": "",
  "common-dim10": "",
  "uncommon-dim1": "",
  "uncommon-dim2": "",
  "uncommon-dim3": "",
  "uncommon-dim4": "",
  "uncommon-dim5": "",
  "uncommon-dim6": "",
  "uncommon-dim7": "",
  "uncommon-dim8": "",
  "uncommon-dim9": "",
  "uncommon-dim10": "",
  "rare-cost": "",
  "rare-sacrifice": "",
  "rare-action": "",
  "rare-dim1": "",
  "rare-dim2": "",
  "rare-dim3": "",
  "rare-dim4": "",
  "rare-dim5": "",
  "legendary-tickspeed": "%",
  "legendary-dims": "",
  "legendary-softcap": "",
  "legendary-xp": "",
  "legendary-lootboxes": ""
}

function getHeroEffectFunction(layer, type) {
  if (layer == "common") return function(x) { return Math.pow(2, x); };
  if (layer == "uncommon") return function(x) { return 2 + x / 2; };
  if (layer == "rare") {
    if (type == "cost") return function(x) { return Math.pow(10, x); };
    if (type == "sacrifice") return function(x) { return 1 + x / 4; };
    if (type == "action") return function(x) { return 1 + x / 2; };
    return function(x) { return 2 + x / 20; };
  }
  if (layer == "legendary") {
    if (type == "tickspeed") return function(x) { return x; };
    if (type == "dims") return function(x) { return Math.pow(10, x); };
    if (type == "softcap") return function(x) { return x; };
    if (type == "xp") return function(x) { return 1 + x / 2; };
    if (type == "lootboxes") return function(x) { return 1 + x; };
  }
}

class Hero {
  constructor(layer, type) {
    this.layer = layer;
    this.type = type;

    this.effect_function = getHeroEffectFunction(layer, type);

    this.subscribe();

    this.copies = 0;
    this.level = 0;
  }

  subscribe() {
    let container = document.createElement('div');
    container.classList.add('hero');
    container.classList.add(this.layer);
    container.id = this.layer + "-" + this.type;

    let container_locked = document.createElement('p');
    container_locked.classList.add('hero-locked');
    container_locked.textContent = "🔒 Locked";
    container.appendChild(container_locked);

    let container_unlocked = document.createElement('div');
    container_unlocked.classList.add('hero-unlocked');

    let level = document.createElement('p');
    level.classList.add('level');
    container_unlocked.appendChild(level);

    let title = document.createElement('p');
    title.classList.add('title');
    title.textContent = HERO_NAMES[this.layer + "-" + this.type];
    container_unlocked.appendChild(title);

    let desc = document.createElement('p');
    desc.classList.add('desc');
    desc.innerHTML = HERO_DESCS[this.layer + "-" + this.type];
    container_unlocked.appendChild(desc);

    let effect = document.createElement('p');
    effect.classList.add('effect');
    effect.innerHTML = HERO_EFFECTS[this.layer + "-" + this.type] + "<span class='current'></span>" + HERO_AFTEREFFECTS[this.layer + "-" + this.type] + " <span>➟</span> " + HERO_EFFECTS[this.layer + "-" + this.type] + "<span class='next'></span>" + HERO_AFTEREFFECTS[this.layer + "-" + this.type];
    container_unlocked.appendChild(effect);

    let progress = document.createElement('div');
    progress.classList.add('progress');
    progress.innerHTML = "<div class='progress-filled'></div><p><span class='current-cards'></span>/<span class='next-cards'></span></p>";
    container_unlocked.appendChild(progress);

    let buy_btn = document.createElement('button');
    buy_btn.classList.add('buy-button');
    buy_btn.setAttribute('hero_id', this.layer + '-' + this.type);
    buy_btn.onclick = function() { player.heroes[this.attributes.hero_id.value].buy() };
    buy_btn.innerHTML = "<p><span class='buy'></span> XP</p>";
    container_unlocked.appendChild(buy_btn);

    container.appendChild(container_unlocked);

    let outer_container = document.getElementsByClassName('heroes')[0];
    if (this.layer == "common") outer_container.insertBefore(container, outer_container.getElementsByClassName('section-uncommon')[0]);
    if (this.layer == "uncommon") outer_container.insertBefore(container, outer_container.getElementsByClassName('section-rare')[0]);
    if (this.layer == "rare") outer_container.insertBefore(container, outer_container.getElementsByClassName('section-legendary')[0]);
    if (this.layer == "legendary") outer_container.appendChild(container);
  }

  getEffect(x=this.level) {
    return this.effect_function(x);
  }

  getCost() {
    if (this.layer == "common") return Math.round(Math.pow(2, this.level - 1));
    if (this.layer == "uncommon") return Math.round(Math.pow(3, this.level));
    if (this.layer == "rare") return Math.round(Math.pow(4, this.level + 1));
    if (this.layer == "legendary") return Math.round(Math.pow(5, this.level + 2));
  }

  canBuy() {
    return player.current_version >= 20 || player.xp >= this.getCost();
  }

  nextLevelReq() {
    if (this.level == 99) return 1e300;
    if (this.level % 3 == 0) return Math.round(1 * Math.pow(10, Math.floor(this.level / 3)));
    if (this.level % 3 == 1) return Math.round(2 * Math.pow(10, Math.floor(this.level / 3)));
    if (this.level % 3 == 2) return Math.round(5 * Math.pow(10, Math.floor(this.level / 3)));
  }

  updateHero() {
    if (this.copies >= 1) this.level = Math.max(this.level, 1);
    if (player.current_version >= 20) {
      while (this.copies >= this.nextLevelReq()) this.buy();
    }
  }

  buy() {
    if (!(this.canBuy())) return;
    if (this.copies < this.nextLevelReq()) return;

    this.copies -= this.nextLevelReq();
    if (player.current_version < 20) player.xp -= this.getCost();
    this.level += 1;
  }

  screenUpdate() {
    let container = document.getElementById(this.layer + "-" + this.type);

    if (this.level == 0) {
      container.getElementsByClassName('hero-locked')[0].style.visibility = "";
      container.getElementsByClassName('hero-unlocked')[0].style.visibility = "hidden";
    }
    else {
      container.getElementsByClassName('hero-locked')[0].style.visibility = "hidden";
      container.getElementsByClassName('hero-unlocked')[0].style.visibility = "";
    }

    container.getElementsByClassName('level')[0].textContent = formatNumber(this.level, true, true);

    if (this.copies < this.nextLevelReq()) {
      container.getElementsByClassName('progress')[0].style.setProperty('--percentage', (this.copies * 100 / this.nextLevelReq()) + "%");
      container.getElementsByClassName('progress')[0].style.visibility = "";
      container.getElementsByClassName('buy-button')[0].style.visibility = "hidden";
    }
    else {
      container.getElementsByClassName('progress')[0].style.visibility = "hidden";
      container.getElementsByClassName('buy-button')[0].style.visibility = "";
    }

    container.getElementsByClassName('effect')[0].getElementsByClassName('current')[0].textContent = formatNumber(this.getEffect(), false, false, player.settings['notation'], true);
    container.getElementsByClassName('effect')[0].getElementsByClassName('next')[0].textContent = formatNumber(this.getEffect(this.level + 1), false, false, player.settings['notation'], true);

    container.getElementsByClassName('buy-button')[0].disabled = !(this.canBuy());
    container.getElementsByClassName('buy-button')[0].getElementsByClassName('buy')[0].textContent = formatNumber(this.getCost(), true, true);

    container.getElementsByClassName('current-cards')[0].textContent = formatNumber(this.copies, true, true);
    container.getElementsByClassName('next-cards')[0].textContent = formatNumber(this.nextLevelReq(), true, true);

  }

  save() {
    let data = [];
    data.push(this.layer);
    data.push(this.type);
    data.push(this.copies);
    data.push(this.level);
    return data;
  }

  load(data) {
    this.copies = data[2];
    this.level = data[3];
  }
}