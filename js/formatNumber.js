function roundToPrecision(x, prec) {
  return Math.round(x * prec) / prec;
}

function padNumber(x, prec_points) {
  let num = x.toString();
  if (prec_points > 0) {
    if (!num.includes('.')) num += '.';
    let point_pos = num.indexOf('.');
    for (let i = num.length; i <= point_pos + prec_points; i++) num += '0';
  }
  return num;
}

function addDelimiters(x, delim=',') {
  let num = x.toString();
  let res = "";
  for (let i = 0; i < num.length; i++) {
    res += num[i];
    if (i < num.length - 1 && (num.length - i) % 3 == 1) res += delim;
  }
  return res;
}

function convertAlphanumeric(x, alphabet) {
  let res = "";
  if (x < [...alphabet].length) return [...alphabet][x];
  else return convertAlphanumeric(Math.floor(x / [...alphabet].length) - 1, alphabet) + [...alphabet][x % [...alphabet].length];
}

function formatNumber(x, fixed=false, integer=false, notation=player.settings['notation'], limited=false) {
  if (player.current_version == 11) notation = "emoji";

  let num = D(x);
  if (integer) num = num.round();
  let result = "";
  if (num.sign == -1) {
    result += "-";
    num.sign = 1;
  }
  if (num.gte("eeeeeeee10")) {
    result += "Infinity";
  }
  else {
    if (notation == "default") {
      if (num.gte("ee9")) result += "e" + formatNumber(num.log10(), fixed, false, notation);
      else if (num.gte("e9") || (limited && num.gte("e3"))) {
        let lg = num.log10().toNumber();
        let exp = Math.floor(lg);
        let mts = Math.pow(10, lg - exp);
        let prec_points = 2;
        mts = roundToPrecision(mts, Math.pow(10, prec_points));
        if (mts == 10) {
          mts = 1;
          exp += 1;
        }
        if (fixed) result += padNumber(mts, prec_points);
        else result += mts;
        result += "e" + addDelimiters(exp);
      }
      else {
        let mts = num.toNumber();
        let prec_points = 3;
        if (mts > 1e2) prec_points = 2;
        if (mts > 1e4) prec_points = 1;
        if (mts > 1e6) prec_points = 0;
        mts = roundToPrecision(mts, Math.pow(10, prec_points));
        if (!fixed) prec_points = 0;
        if (integer) result += addDelimiters(mts);
        else result += padNumber(mts, prec_points);
      }
    }

    if (notation == "emoji") {
      const EMOJI_ALPHABET = "🚑🎈🏰🎲📧⛲🌍⏳🧊🃏⌨🧳🖱😐🧅🪂❓🌈❄🚦☂🌋🌊❌🟡💤";
      if (num.gte("ee9")) result += "e" + formatNumber(num.log10(), fixed, false, notation);
      else if (num.gte("e6") || (limited && num.gte("e3"))) {
        let lg = num.log(1000).toNumber();
        let exp = Math.floor(lg);
        let mts = Math.pow(1000, lg - exp);
        let prec_points = 2;
        if (mts >= 10) prec_points = 1;
        if (mts >= 100) prec_points = 0;
        mts = roundToPrecision(mts, Math.pow(10, prec_points));
        if (mts == 1000) {
          mts = 1;
          exp += 1;
        }
        prec_points = 2;
        if (mts >= 10) prec_points = 1;
        if (mts >= 100) prec_points = 0;
        if (fixed) result += padNumber(mts, prec_points);
        else result += mts;
        result += " " + convertAlphanumeric(exp - 1, EMOJI_ALPHABET);
      }
      else {
        let mts = num.toNumber();
        let prec_points = 3;
        if (mts > 1e2) prec_points = 2;
        if (mts > 1e4) prec_points = 1;
        if (mts > 1e6) prec_points = 0;
        mts = roundToPrecision(mts, Math.pow(10, prec_points));
        if (!fixed) prec_points = 0;
        if (integer) result += addDelimiters(mts);
        else result += padNumber(mts, prec_points);
      }
    }
  }
  return result;
}