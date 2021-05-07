const ACTION_REFRESH_TIME = 60000;
const BASE_ACTION_TIME = 3000;

const ACTION_RESOURCES = [
  "Rocks",
  "Logs",
  "Bars",
  "Boards",
  "Screws",
  "Joints",
  "Beams",
  "Rods",
  "Gems",
  "Roads",
  "Towers",
  "Ships",
  "Nukes"
];

const ACTION_RESOURCES_VALUE = {
  "Rocks": 1,
  "Logs": 1.2,
  "Bars": 1.6,
  "Boards": 2.5,
  "Screws": 4,
  "Joints": 6,
  "Beams": 9,
  "Rods": 15,
  "Gems": 25,
  "Roads": 40,
  "Towers": 75,
  "Ships": 120,
  "Nukes": 200
};

const ACTION_RESOURCES_EXTRA = {
  "Rocks": 0.1,
  "Logs": 0.1,
  "Bars": 0.2,
  "Boards": 0.3,
  "Screws": 0.5,
  "Joints": 0.8,
  "Beams": 1.3,
  "Rods": 2.1,
  "Gems": 3.4,
  "Roads": 5.5,
  "Towers": 8.9,
  "Ships": 14.4,
  "Nukes": 23.3
};

class Action {
  constructor(id) {
    this.id = id;

    this.is_active = false;
    this.is_locked = false;

    this.generateAction();
    this.subscribe();
  }

  subscribe() {
    let container = document.createElement('button');
    container.classList.add('action');
    container.id = 'action_' + this.id;
    container.setAttribute('action_id', this.id);
    container.onclick = function() { player.actions[this.attributes.action_id.value].enable() };

    let desc = document.createElement('p');
    desc.classList.add('desc');
    container.appendChild(desc);

    let delimiter = document.createElement('div');
    delimiter.classList.add('delimiter');
    container.appendChild(delimiter);

    let metadata = document.createElement('div');
    metadata.classList.add('metadata');
    metadata.innerHTML = "<input type='checkbox' class='lock' action_id='" + this.id + "' onclick='player.actions[this.attributes.action_id.value].lock()'><div class='time-stats'><p class='time'></p><div class='progress'><div class='progress-filled'></div></div></div>";
    container.appendChild(metadata);

    document.getElementsByClassName('actions')[0].appendChild(container);
  }

  generateAction() {
    if (this.is_active) player.free_actions += 1;
    if (this.is_locked) player.free_locks += 1;

    this.is_active = false;
    this.is_locked = false;

    this.time_passed = 0;

    let target_type;
    if (Math.random() < 0.8) target_type = "resource";
    else target_type = "XP";

    let output_type;
    if (target_type == "resource") output_type = Math.floor(Math.random() * getTotalResources());
    else {
      output_type = Math.floor(Math.random() * 2);
      if (player.current_version >= 23) output_type = Math.floor(Math.random() * 3);
    }

    let weights;
    if (target_type == "resource") weights = [1, output_type, Math.pow(Math.max(0, output_type - 1), 2) / 6];
    else weights = [0, 1];

    let weight_sum = 0;
    for (let x of weights) weight_sum += x;
    weight_sum *= Math.random();

    let input_amt = 0;
    for (let i = 0; i < weights.length; i++) {
      weight_sum -= weights[i];
      if (weight_sum < 0) {
        input_amt = i;
        break;
      }
    }

    let last_elem = getTotalResources();
    if (target_type == "resource") last_elem = output_type;
    let inputs = [];
    for (let i = 0; i < input_amt; i++) {
      let first_elem = -1;
      if (i > 0) first_elem = inputs[i - 1];
      inputs.push(Math.floor(Math.random() * (last_elem - first_elem - input_amt + i)) + first_elem + 1);
    }

    this.inputs = {};
    this.output_name = "";
    this.output_amt = 0;
    this.base_duration = 0;

    if (target_type == "resource") {
      this.output_name = ACTION_RESOURCES[output_type];
      this.output_amt = randint(1, getTotalResources() - output_type + 1);

      let speedup = Math.pow(input_amt, 2) + 1;
      let output_usefulness = this.output_amt * ACTION_RESOURCES_VALUE[this.output_name] * randbetween(0.8, 1.4 - player.action_upgrades[2] / 10);

      this.base_duration = output_usefulness * BASE_ACTION_TIME / speedup;

      let input_wt = [];
      let total_input_wt = 0;
      for (let i = 0; i < input_amt; i++) {
        input_wt.push(Math.random() + 0.1);
        total_input_wt += input_wt[i];
      }

      for (let i = 0; i < input_amt; i++) {
        input_wt[i] *= output_usefulness * randbetween(0.8, 1.4 - player.action_upgrades[2] / 10) / (total_input_wt * ACTION_RESOURCES_VALUE[ACTION_RESOURCES[inputs[i]]]);
        this.inputs[ACTION_RESOURCES[inputs[i]]] = Math.ceil(input_wt[i]);
      }
    }
    else {
      this.output_name = "DP";
      if (output_type == 1) this.output_name = "HP";
      if (output_type == 2) this.output_name = "XP";

      this.base_duration = randbetween(1 * BASE_ACTION_TIME, 4 * BASE_ACTION_TIME);

      let input_wt = [];
      let total_input_wt = 0;
      for (let i = 0; i < input_amt; i++) {
        input_wt.push(randint(1, Math.floor((getTotalResources() - output_type) * this.base_duration / BASE_ACTION_TIME)));
        total_input_wt += input_wt[i] * randbetween(0.8, 1.4 - player.action_upgrades[2] / 10) * ACTION_RESOURCES_VALUE[ACTION_RESOURCES[inputs[i]]] * ACTION_RESOURCES_EXTRA[ACTION_RESOURCES[inputs[i]]];
        this.inputs[ACTION_RESOURCES[inputs[i]]] = Math.ceil(input_wt[i]);
      }

      let speedup = Math.pow(input_amt, 2) + 1;
      let output_usefulness = total_input_wt * speedup;

      this.output_amt = Math.ceil(output_usefulness);
    }
  }

  getDescription() {
    if (Object.keys(this.inputs).length == 0) return "Get " + this.output_amt + " " + this.output_name;
    else {
      let res = "Spend ";
      let inputs_left = Object.keys(this.inputs).length;
      for (let key of Object.keys(this.inputs)) {
        res += this.inputs[key] + " " + key;
        inputs_left -= 1;
        if (inputs_left > 1) res += ", ";
        if (inputs_left == 1) res += " and ";
      }
      res += " for " + this.output_amt + " " + this.output_name;
      return res;
    }
  }

  getDuration() {
    let duration = this.base_duration;
    if ("rare-action" in player.heroes) duration /= player.heroes["rare-action"].getEffect();
    return duration;
  }

  enable() {
    if (this.is_active) {
      this.is_active = false;
      player.free_actions += 1;
    }
    else if (player.free_actions > 0) {
      this.is_active = true;
      player.free_actions -= 1;
    }
  }

  lock() {
    this.enable(); // double-click fix

    if (this.is_locked) {
      this.is_locked = false;
      player.free_locks += 1;
    }
    else if (player.free_locks > 0) {
      this.is_locked = true;
      player.free_locks -= 1;
    }

    document.getElementById('action_' + this.id).getElementsByClassName('lock')[0].checked = this.is_locked;
  }

  processTimedelta(delta) {
    if (!this.is_active) return;

    this.time_passed += delta;
    let repeats = Math.floor(this.time_passed / this.getDuration());
    this.time_passed -= repeats * this.getDuration();

    for (let key of Object.keys(this.inputs)) {
      repeats = Math.min(repeats, Math.floor(player.action_resources[key] / this.inputs[key]));
    }

    for (let key of Object.keys(this.inputs)) {
      player.action_resources[key] -= this.inputs[key] * repeats;
    }

    if (this.output_name == "DP") player.dimensions_xp += this.output_amt * repeats;
    else if (this.output_name == "HP") player.heroes_xp += this.output_amt * repeats;
    else if (this.output_name == "XP") player.xp += this.output_amt * repeats;
    else player.action_resources[this.output_name] += this.output_amt * repeats;
  }

  screenUpdate() {
    let container = document.getElementById('action_' + this.id);

    if (this.is_active) container.classList.add('enabled');
    else container.classList.remove('enabled');

    container.getElementsByClassName('lock')[0].checked = this.is_locked;
    container.getElementsByClassName('desc')[0].textContent = this.getDescription();
    container.getElementsByClassName('time')[0].textContent = roundToPrecision(this.getDuration() / 1000, 10) + " s";
    container.getElementsByClassName('progress')[0].style.setProperty('--percentage', (this.time_passed * 100 / this.getDuration()) + "%");
  }

  save() {
    let data = [];
    data.push(this.is_active);
    data.push(this.is_locked);
    data.push(this.base_duration);
    data.push(this.time_passed);
    data.push(this.inputs);
    data.push(this.output_name);
    data.push(this.output_amt);
    return data;
  }

  load(data) {
    this.is_active = data[0];
    this.is_locked = data[1];
    this.base_duration = data[2];
    this.time_passed = data[3];
    this.inputs = data[4];
    this.output_name = data[5];
    this.output_amt = data[6];
  }
}