const AUTOMATION_PURCHASE_LIMIT = 100;

class Expensive {
  constructor() {
    this.amt_bought = D(0);
  }
  
  getCost(bulk=D(1)) {
    return this.cost_function(this.amt_bought.add(bulk).sub(1));
  }

  canAfford(bulk=D(1)) {
    // Make your own realization!
  }

  buy(bulk=D(1)) {
    // Make your own realization!
  }

  buyMax() {
    let l = 0, r = 1;
    let k = 0;
    for (let i = 0; i < AUTOMATION_PURCHASE_LIMIT && this.canAfford(D(r)); i++) {
      r = 2 * r;
      k++;
    }
    for (let i = 0; i < k; i++) {
      let m = (l + r) / 2;
      if (this.canAfford(D(m))) l = m;
      else r = m;
    }
    if (l > 0) this.buy(D(l));
  }
}