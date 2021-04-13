const VERSIONS = {
  0: {
    "name": "v0.0",
    "name_full": "Version 0.0",
    "date": "November 19th, 202X",
    "points_name": "darkness",
    "points_capitalized": "Darkness",
    "limit": "60"
  },
  1: {
    "name": "v0.0.1",
    "name_full": "Version 0.0.1",
    "date": "December 4th, 202X",
    "points_name": "dankness",
    "points_capitalized": "Dankness",
    "changelog": "- Buying a Dankness Dimension now provides a 2x boost to itself.\n- Added a link to my other game, Matter Dimensions.",
    "limit": "1e6"
  },
  2: {
    "name": "v0.0.2",
    "name_full": "Version 0.0.2",
    "date": "December 21st, 202X",
    "points_name": "rankness",
    "points_capitalized": "Rankness",
    "changelog": "- You start with 10 Rankness Points.\n- 1st Rankness Dimension now works 2x faster.",
    "limit": "2e7"
  },
  3: {
    "name": "v0.1",
    "name_full": "Version 0.1",
    "date": "December 30th, 202X",
    "points_name": "rankless",
    "points_capitalized": "Rankless",
    "changelog": "- Introduced Tickspeed Upgrades.\n- Removed \"Get a Rankless Point\" button, due to being not needed.",
    "limit": "1e10"
  },
  4: {
    "name": "v0.1.1",
    "name_full": "Version 0.1.1",
    "date": "January 21st, 202Y",
    "points_name": "rankles",
    "points_capitalized": "Rankles",
    "changelog": "- You can now buy max Tickspeed Upgrades.\n- Added version tracker.",
    "limit": "1e12"
  },
  5: {
    "name": "v0.2",
    "name_full": "Version 0.2",
    "date": "February 6th, 202Y",
    "points_name": "rankled",
    "points_capitalized": "Rankled",
    "changelog": "- Added automation for Rankled Dimensions.\n- First two Rankled Dimensions now work 2x faster.",
    "limit": "1e13"
  },
  6: {
    "name": "v0.2.1",
    "name_full": "Version 0.2.1",
    "date": "February 17th, 202Y",
    "points_name": "ranked",
    "points_capitalized": "Ranked",
    "changelog": "- Added automation for Tickspeed Upgrades.\n- Added a button and hotkey to buy max all Ranked Dimensions.",
    "limit": "1e15"
  },
  7: {
    "name": "v0.3",
    "name_full": "Version 0.3",
    "date": "February 29th, 202Y",
    "points_name": "ranted",
    "points_capitalized": "Ranted",
    "changelog": "- Added an ability to perform Dimension Shifts.\n- Each Dimension Shift gives a 2x boost to all dimensions unlocked before it.",
    "limit": "ee5"
  },
  8: {
    "name": "v0.3.1",
    "name_full": "Version 0.3.1",
    "date": "March 12th, 202Y",
    "points_name": "rented",
    "points_capitalized": "Rented",
    "changelog": "- Buying a dimension now grants you 10 dimensions of the same kind. Dimension Shift costs are changed accordingly.\n- Limited the number of Rented Dimensions to 10.",
    "limit": "2^1024"
  },
  9: {
    "name": "v0.4",
    "name_full": "Version 0.4",
    "date": "March 26th, 202Y",
    "points_name": "rested",
    "points_capitalized": "Rested",
    "changelog": "- The first Tickspeed upgrade now costs 10x less.\n- You can perform Dimension Boosts after you reached max Rested Dimensions, each for increased cost.",
    "limit": "e360"
  },
  10: {
    "name": "v0.4.1",
    "name_full": "Version 0.4.1",
    "date": "March 29th, 202Y",
    "points_name": "rester",
    "points_capitalized": "Rester",
    "changelog": "- Automation is cheaper.\n- The first three Rester Dimensions now work 2x faster.",
    "limit": "e500"
  },
  11: {
    "name": "v0.4.2",
    "name_full": "Version 0.4.2",
    "date": "April 1st, 202Y",
    "points_name": "🃏",
    "points_capitalized": "🃏",
    "changelog": "- All numbers are now presented in a clear and concise modern format.\n- April Fools!",
    "limit": "e520"
  },
  12: {
    "name": "v0.5",
    "name_full": "Version 0.5",
    "date": "April 2nd, 202Y",
    "points_name": "mester",
    "points_capitalized": "Mester",
    "changelog": "- Added Heroes that boost Mester Dimensions. You can get them from lootboxes, bought with XP. Gain 1 XP for each power of 10 reached in Mester Points.\n- Added an ability to change notations, if you want to return to this April Fools prank.",
    "limit": "e600"
  },
  13: {
    "name": "v0.5.1",
    "name_full": "Version 0.5.1",
    "date": "April 17th, 202Y",
    "points_name": "master",
    "points_capitalized": "Master",
    "changelog": "- Added newsticker to the top of the page.\n- Added an ability to sacrifice all your Master Dimensions except 10th and get a boost to 10th Master Dimension.",
    "limit": "e5000"
  },
  14: {
    "name": "v0.5.2",
    "name_full": "Version 0.5.2",
    "date": "May 4th, 202Y",
    "points_name": "matter",
    "points_capitalized": "Matter",
    "changelog": "- You can watch an advertisement to get 5 XP.\n- Matter Dimension and Tickspeed Upgrade costs are softcapped.",
    "limit": "e240"
  },
  15: {
    "name": "v0.5.3",
    "name_full": "Version 0.5.3",
    "date": "May 22th, 202Y",
    "points_name": "mater",
    "points_capitalized": "Mater",
    "changelog": "- Added uncommon Heroes that boost dimension power indirectly.\n- The ads did not work, so they are scrapped. You do not need to watch an ad to get free XP, but the amount is reduced from 5 to 1.",
    "limit": "e260"
  },
  16: {
    "name": "v0.6",
    "name_full": "Version 0.6",
    "date": "May 24th, 202Y",
    "points_name": "mate",
    "points_capitalized": "Mate",
    "changelog": "- You can now reset all your Dimension stuff to obtain Galaxies that boost Tickspeed Upgrade power.\n- Added an autobuyer for Dimensional Shifts.",
    "limit": "e320"
  },
  17: {
    "name": "v0.6.1",
    "name_full": "Version 0.6.1",
    "date": "June 9th, 202Y",
    "points_name": "mete",
    "points_capitalized": "Mete",
    "changelog": "- Your Mete Points now give you more XP per milestone based on their amount.\n- Added an option to disable lootbox opening window.",
    "limit": "e450"
  },
  18: {
    "name": "v0.6.2",
    "name_full": "Version 0.6.2",
    "date": "June 21st, 202Y",
    "points_name": "meta",
    "points_capitalized": "Meta",
    "changelog": "- Added rare Heroes that provide even better boosts.\n- Renamed lootboxes to toolboxes.",
    "limit": "e1000"
  },
  19: {
    "name": "v0.7",
    "name_full": "Version 0.7",
    "date": "July 2nd, 202Y",
    "points_name": "meth",
    "points_capitalized": "Meth",
    "changelog": "- Added Actions that can provide positive or negative boosts when launched.\n- Common Heroes now also automatically unlock corresponding Dimension automation.",
    "limit": "e2000"
  },
  20: {
    "name": "v0.7.1",
    "name_full": "Version 0.7.1",
    "date": "July 8th, 202Y",
    "points_name": "mech",
    "points_capitalized": "Mech",
    "changelog": "- Heroes automatically level up without spending any XP.\n- You can now lock certain Actions to keep them between refreshes.",
    "limit": "e4000"
  },
  21: {
    "name": "v0.7.2",
    "name_full": "Version 0.7.2",
    "date": "July 23th, 202Y",
    "points_name": "lech",
    "points_capitalized": "Lech",
    "changelog": "- Automation no longer resets on version update.\n- Added an autobuyer for Dimensional Boosts.",
    "limit": "e6000"
  },
  22: {
    "name": "v0.8",
    "name_full": "Version 0.8",
    "date": "August 3rd, 202Y",
    "points_name": "lich",
    "points_capitalized": "Lich",
    "changelog": "- Added an Infinity prestige layer that allows you to purchase new powerful upgrades.\n- Added an autobuyer for Lich Galaxies.",
    "limit": "e8000"
  },
  23: {
    "name": "v0.8.1",
    "name_full": "Version 0.8.1",
    "date": "August 20th, 202Y",
    "points_name": "licht",
    "points_capitalized": "Licht",
    "changelog": "- Infinity no longer resets Heroes.\n- Added Actions that produce XP.",
    "limit": "e16000"
  },
  24: {
    "name": "v1.0",
    "name_full": "Version 1.0",
    "date": "September 1st, 202Y",
    "points_name": "light",
    "points_capitalized": "Light",
    "changelog": "- Added Legendary Heroes that represent the best of the best.\n- Removed version tracker since it is no longer useful."
  }
}