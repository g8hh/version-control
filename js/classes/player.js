class Player {
  constructor() {
    this.reset();
  }

  reset() {
    this.last_ts = Date.now();

    this.current_version = 0;

    this.points = D(0);

    if (this.dimensions !== undefined) {
      for (let dimension of this.dimensions) {
        document.getElementById('dimension_' + dimension.layer).remove();
      }
    }
    this.dimensions = [new Dimension(0)];

    if (this.autobuyers !== undefined) {
      for (let key of Object.keys(this.autobuyers)) {
        document.getElementById('autobuyer_' + this.autobuyers[key].type).remove();
      }
    }
    this.autobuyers = {0: new Automation(0)};

    this.tickspeed = new Tickspeed();

    this.dimension_shifts = 0;
    this.dimension_boosts = 0;
    this.galaxies = 0;

    this.settings = {
      'notation': 'default',
      'newsticker': true,
      'lootbox-opening': true
    }

    this.xp = 0;
    this.xp_gained = 0;

    if (this.lootboxes !== undefined) {
      for (let key of Object.keys(this.lootboxes)) {
        document.getElementById('lootbox_' + this.lootboxes[key].type).remove();
      }
    }
    this.lootboxes = {
      'basic': new Lootbox('basic'),
      'regular': new Lootbox('regular'),
      'advanced': new Lootbox('advanced'),
      'quality': new Lootbox('quality'),
      'elite': new Lootbox('elite'),
      'final': new Lootbox('final')
    };

    if (this.heroes !== undefined) {
      for (let key of Object.keys(this.heroes)) {
        document.getElementById(this.heroes[key].layer + "-" + this.heroes[key].type).remove();
      }
    }
    this.heroes = {
      'common-dim1': new Hero('common', 'dim1')
    };

    this.total_dimsac = D(0);

    this.time_to_action_refresh = ACTION_REFRESH_TIME;

    this.dimensions_level = 0;
    this.dimensions_xp = 0;
    this.heroes_level = 0;
    this.heroes_xp = 0;

    if (this.actions !== undefined) {
      for (let action of this.actions) {
        document.getElementById('action_' + action.id).remove();
      }
    }
    this.actions = [];

    this.action_upgrades = [0, 0, 0, 0];

    this.action_resources = {};
    for (let key of ACTION_RESOURCES) {
      this.action_resources[key] = 0;
    }

    this.free_actions = 1;
    this.free_locks = 0;

    this.infinity_points = D(0);

    if (this.infinity_upgrades !== undefined) {
      for (let key of Object.keys(this.infinity_upgrades)) {
        document.getElementById('iupg_' + this.infinity_upgrades[key].id).remove();
      }
    }
    this.infinity_upgrades = {
      "autosac": new InfinityUpgrade("autosac", "Dimensional Sacrifice resets nothing, and Sacrifice once per tick", D(1), function() { return D(1); }),
      "dim1": new InfinityUpgrade("dim1", "1st <span class='points-capitalized'></span> Dimension is more powerful based on unspent Infinity Points", D(1), function() { return player.infinity_points.add(2); }, "×<span class='effect-amt'></span>"),
      "dim2": new InfinityUpgrade("dim2", "2nd <span class='points-capitalized'></span> Dimension is more powerful based on unspent Infinity Points", D(1), function() { return player.infinity_points.add(2); }, "×<span class='effect-amt'></span>"),
      "dim3": new InfinityUpgrade("dim3", "3rd <span class='points-capitalized'></span> Dimension is more powerful based on unspent Infinity Points", D(1), function() { return player.infinity_points.add(2); }, "×<span class='effect-amt'></span>"),
      "keepshifts": new InfinityUpgrade("keepshifts", "You start with 6 Dimension Shifts", D(5), function() { return D(1); }),
      "dim4": new InfinityUpgrade("dim4", "4th <span class='points-capitalized'></span> Dimension is more powerful based on unspent Infinity Points", D(20), function() { return player.infinity_points.add(2); }, "×<span class='effect-amt'></span>"),
      "dim5": new InfinityUpgrade("dim5", "5th <span class='points-capitalized'></span> Dimension is more powerful based on unspent Infinity Points", D(20), function() { return player.infinity_points.add(2); }, "×<span class='effect-amt'></span>"),
      "dim6": new InfinityUpgrade("dim6", "6th <span class='points-capitalized'></span> Dimension is more powerful based on unspent Infinity Points", D(20), function() { return player.infinity_points.add(2); }, "×<span class='effect-amt'></span>"),
      "lootboxexp": new InfinityUpgrade("lootboxexp", "Only Final Toolbox is left, with the cost scaling with the current XP", D(100), function() { return D(1); }),
      "dim7": new InfinityUpgrade("dim7", "7th <span class='points-capitalized'></span> Dimension is more powerful based on unspent Infinity Points", D(10000), function() { return player.infinity_points.add(2); }, "×<span class='effect-amt'></span>"),
      "dim8": new InfinityUpgrade("dim8", "8th <span class='points-capitalized'></span> Dimension is more powerful based on unspent Infinity Points", D(10000), function() { return player.infinity_points.add(2); }, "×<span class='effect-amt'></span>"),
      "dim9": new InfinityUpgrade("dim9", "9th <span class='points-capitalized'></span> Dimension is more powerful based on unspent Infinity Points", D(10000), function() { return player.infinity_points.add(2); }, "×<span class='effect-amt'></span>"),
      "keepboosts": new InfinityUpgrade("keepboosts", "<span class='points-capitalized'></span> Galaxies do not reset Dimension Boosts", D(1e9), function() { return D(1); }),
      "prog1": new InfinityUpgrade("prog1", "Extreme Dimensional Boost scaling starts 10 Boosts later", D(1e15), function() { return D(1); }),
      "dim10": new InfinityUpgrade("dim10", "10th <span class='points-capitalized'></span> Dimension is more powerful based on unspent Infinity Points", D(1e30), function() { return player.infinity_points.add(2); }, "×<span class='effect-amt'></span>"),
      "keepstuff": new InfinityUpgrade("keepstuff", "Dimension Boosts and <span class='points-capitalized'></span> Galaxies do not reset other Dimension stuff", D(1e50), function() { return D(1); }),
    };

    this.time_since_start = 0;
    this.won = false;
  }

  save() {
    let data = [];
    data.push(this.last_ts);
    data.push(this.current_version);
    data.push(this.points.toJSON());

    let dimension_data = [];
    for (let dimension of this.dimensions) {
      dimension_data.push(dimension.save());
    }
    data.push(dimension_data);

    let autobuyer_data = {};
    for (let key of Object.keys(this.autobuyers)) {
      autobuyer_data[key] = this.autobuyers[key].save();
    }
    data.push(autobuyer_data);

    data.push(this.tickspeed.save());
    data.push(this.dimension_shifts);
    data.push(this.dimension_boosts);
    data.push(this.galaxies);
    data.push(this.settings);
    data.push(this.xp);
    data.push(this.xp_gained);

    let hero_data = {};
    for (let key of Object.keys(this.heroes)) {
      hero_data[key] = this.heroes[key].save();
    }
    data.push(hero_data);

    data.push(this.total_dimsac.toJSON());
    data.push(this.time_to_action_refresh);
    data.push(this.dimensions_level);
    data.push(this.dimensions_xp);
    data.push(this.heroes_level);
    data.push(this.heroes_xp);

    let action_data = [];
    for (let action of this.actions) {
      action_data.push(action.save());
    }
    data.push(action_data);

    data.push(this.action_upgrades);
    data.push(this.action_resources);
    data.push(this.free_actions);
    data.push(this.free_locks);
    data.push(this.infinity_points.toJSON());

    let iupg_data = {};
    for (let key of Object.keys(this.infinity_upgrades)) {
      iupg_data[key] = this.infinity_upgrades[key].save();
    }
    data.push(iupg_data);

    data.push(this.time_since_start);
    data.push(this.won);

    return data;
  }

  load(data) {
    this.reset();

    this.last_ts = data[0];
    this.current_version = data[1];
    this.points = D(data[2]);

    for (let i = 0; i < data[3].length; i++) {
      if (this.dimensions.length <= i) this.dimensions.push(new Dimension(i));
      this.dimensions[i].load(data[3][i]);
    }

    for (let key of Object.keys(data[4])) {
      if (!(key in this.autobuyers)) this.autobuyers[key] = new Automation(data[4][key][0]);
      this.autobuyers[key].load(data[4][key]);
    }

    this.tickspeed.load(data[5]);
    this.dimension_shifts = data[6];
    this.dimension_boosts = data[7];
    this.galaxies = data[8];
    this.settings = data[9];
    this.xp = data[10];
    this.xp_gained = data[11];

    for (let key of Object.keys(data[12])) {
      if (!(key in this.heroes)) this.heroes[key] = new Hero(data[12][key][0], data[12][key][1]);
      this.heroes[key].load(data[12][key]);
    }

    this.total_dimsac = D(data[13]);
    this.time_to_action_refresh = data[14];
    this.dimensions_level = data[15];
    this.dimensions_xp = data[16];
    this.heroes_level = data[17];
    this.heroes_xp = data[18];

    for (let i = 0; i < data[19].length; i++) {
      if (this.actions.length <= i) this.actions.push(new Action(i));
      this.actions[i].load(data[19][i]);
    }

    this.action_upgrades = data[20];
    this.action_resources = data[21];
    this.free_actions = data[22];
    this.free_locks = data[23];
    this.infinity_points = D(data[24]);

    for (let key of Object.keys(data[25])) {
      if (!(key in this.infinity_upgrades)) this.infinity_upgrades[key] = new InfinityUpgrade(key);
      this.infinity_upgrades[key].load(data[25][key]);
    }

    this.time_since_start = data[26];
    this.won = data[27];

    cleanUp();
    loadUp();

    screenUpdate(0);
  }
}