document.addEventListener("keydown", e => {
  switch (e.key) {
    case "m":
    case "M": if (player.current_version >= 6) for (let i = 0; i < player.dimensions.length; i++) player.dimensions[i].buyMax(); break;
    case "t":
    case "T": if (player.current_version >= 4) player.tickspeed.buyMax(); break;
    case "a":
    case "A": if (player.current_version >= 5) for (let key of Object.keys(player.autobuyers)) player.autobuyers[key].buy(); break;
    case "s":
    case "S": if (player.current_version >= 13) dimsac(); break;
  }
});