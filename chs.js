/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Get an additional Action': '获得一个额外操作',
    'Heroes': '英雄',
    'Import save': '导入存档',
    'Export save': '导出存档',
    'Infinity': '无限',
    'Quality': '优质',
    'HP': '生命值',
    ', you found the following heroes': '，您发现以下英雄',
    'Bars': '金属条',
    'Active': '激活',
    'Advanced': '高级',
    'Basic': '基础',
    'Boards': '板子',
    'Beams': '横梁',
    'Bought': '已购买',
    'Buy max (M': '购买最大 (M',
    'Buy max (T': '购买最大 (T',
    'Changelog': '更新日志',
    'Close': '关闭',
    'Common': '普通',
    'Cost': '成本',
    'Dimension': '维度',
    'Dimensions': '维度',
    'Default': '默认',
    'Final': '顶级',
    'Gems': '宝石',
    'Galaxy': '星系',
    'Infinity Points': '无限点',
    'Actions': '操作',
    'Actions left': '剩下的操作',
    'Automation': '自动化',
    'Control': '控制',
    'Continue': '继续',
    'Level': '等级',
    'Need': '需要',
    'Notation': '符号',
    'Nyan Cat': '彩虹猫',
    'Points': '点数',
    'Point': '点数',
    'Proceed': '继续进行',
    'Regular': '常规',
    'Unlock': '解锁',
    'Usain Bolt': '尤塞恩·博尔特',
    'Tickspeed Upgrades': 'Tick速度升级',
    'Tickspeed': 'Tick速度',
    'Towers': '塔',
    'Ships': '船',
    'Show newsticker': '显示新闻跑马灯',
    'Roads': '道路',
    'Rocks': '石头',
    'Rods': '棒子',
    'Slowpoke': '慢性子',
    'You have': '你有',
    'Your total playtime is': '你的累计游戏时长是',
    'Zombie': '僵尸',
    'Sonic': '音速',
    'Logs': '木头',
    'Next at': '下一个在',
    'Locks': '锁',
    'Joints': '关节',
    '×2 to all dimensions': 'x2 给所有维度',
    'Photonic Wall': '光子墙',
    'In the': '打开',
    'Master': '精通',
    'more at': ' 在',
    'XP': '经验',
    'String Theorist': '弦理论家',
    'Added automation for Tickspeed Upgrades.\n- Added a button and hotkey to buy max all Ranked Dimensions.': '添加了自动完成Tick速度升级的功能。\n-添加了一个按钮和快捷键，用于购买最大的所有等级的维度。',
    'Buying a dimension now grants you 10 dimensions of the same kind. Dimension Shift costs are changed accordingly.\n- Limited the number of Rented Dimensions to 10.': '现在购买一个维度可以授予您10种相同维度的维度。 维度偏移成本会相应更改。\n-租用维度的数量限制为10个。',
    'dankesehr': '非常感谢你',
    'Mete': '分界',
    'Harry Potter': '哈利·波特',
    'Glass Ceiling': '玻璃天花板',
    'Dimensional Shifts': '维度偏移',
    'Dimension more': '维度',
    'Trimps Colony': '脆皮殖民地',
    'Superhero Team': '超级英雄团队',
    'Tesseract': '超正方体',
    'Prestige Tree': '声望树',
    'Monolith': '巨石',
    'Mate': '元',
    'Chuck Norris': '查克·诺里斯',
    'Mater': '妈咪',
    'Inflation is scary': '通货膨胀令人恐惧',
    'In other news, it is still raining': '在其他新闻中，仍在下雨',
    'tickspeed goes brrr': 'tick速度变得brrr',
    'Is it January 1st, 1970 today?': '今天是1970年1月1日吗？',
    'Newsticker confirmed': '新闻跑马灯已确认',
    'Less than 5 hours left until the update': '距更新还剩不到5个小时',
    '99 bugs in the code, 99 bugs. Take one and patch it around... 127 bugs in the code...': '代码里有99个bug, 99个。拿一个，把它贴在周围……代码中有127个bug…',
    'Please stop asking for updates': '请停止要求更新',
    'es (additive, rounded down': ' (加法，四舍五入',
    'Matter': '物质',
    'Added Legendary Heroes that represent the best of the best.\n- Removed version tracker since it is no longer useful.': '添加了代表最好的传奇英雄。\n-删除版本跟踪器，因为它不再有用。',
    'Infinity no longer resets Heroes.\n- Added Actions that produce XP.': '无限不再重置英雄。\n-添加了产生经验的操作。',
    'Added an Infinity prestige layer that allows you to purchase new powerful upgrades.\n- Added an autobuyer for Lich Galaxies.': '添加了无限声望层，可让您购买新的强大升级。\n-为巫妖星系添加了自动购买器。',
    'Automation no longer resets on version update.\n- Added an autobuyer for Dimensional Boosts.': '自动化不再在版本更新时重置。\n-为维度提升添加了自动购买程序。',
    'Heroes automatically level up without spending any XP.\n- You can now lock certain Actions to keep them between refreshes.': '英雄无需花费任何经验值即可自动升级。\n-您现在可以锁定某些操作，以使其在刷新之间保持不变。',
    'Added Actions that can provide positive or negative boosts when launched.\n- Common Heroes now also automatically unlock corresponding Dimension automation.': '添加了可以在启动时提供正面或负面提升的动作。\n- 普通英雄现在还可以自动解锁相应的维度自动化。',
    'Added rare Heroes that provide even better boosts.\n- Renamed lootboxes to toolboxes.': '添加了稀有的英雄，它们甚至可以提供更好的提升。\n-将战利品箱重命名为工具箱。',
    'Your Mete Points now give you more XP per milestone based on their amount.\n- Added an option to disable lootbox opening window.': '您的元点数现在可以根据里程碑的数量为您提供更多经验。\n-添加了一个选项，用于禁用战利品打开弹框。',
    'You can now reset all your Dimension stuff to obtain Galaxies that boost Tickspeed Upgrade power.\n- Added an autobuyer for Dimensional Shifts.': '现在，您可以重置所有维度的东西，以获得增强Tick速度升级功能的星系。\n-为维度偏移添加了自动购买器。',
    'Added uncommon Heroes that boost dimension power indirectly.\n- The ads did not work, so they are scrapped. You do not need to watch an ad to get free XP, but the amount is reduced from 5 to 1.': '添加了不常见的英雄，这些英雄可以间接提高维度能力。\n-广告没有效果，因此被废弃了。 您无需观看广告即可获得免费的经验值，但数量会从5减少到1.1',
    'You can watch an advertisement to get 5 XP.\n- Matter Dimension and Tickspeed Upgrade costs are softcapped.': '您可以观看广告获得5 经验。\n -无内容维度和“Tick速度”升级费用没有上限。',
    'Everything is 20% better with blob emojis': '使用Blob表情符号，一切都会好20％',
    'Reset for': '重置',
    'Nothing can escape the gravity of a black hole, except the dedication of incremental gamers': '除了增量游戏玩家的奉献精神，任何事情都无法逃脱黑洞的引力',
    'This is not a TPT mod. On the other hand, you might find yourself enjoying TPT mods. TPT stands for The Prestige Tree, check it out': '这不是TPT mod。 另一方面，您可能会发现自己喜欢TPT mod。 TPT代表声望树，请查看',
    'Elite': '精品',
    'Added newsticker to the top of the page.\n- Added an ability to sacrifice all your Master Dimensions except 10th and get a boost to 10th Master Dimension.': '在页面顶部添加新闻跑马灯。增加了一个能力牺牲你所有的精通维度，除了第10次，并得到一个提升到第10次精通维度。',
    'Introduced Tickspeed Upgrades.\n- Removed \"Get a Rankless Point\" button, due to being not needed.': '引入了Tick速度升级。\n-由于不需要，已删除“获取无等级点数”按钮。',
    'This newsticker is softca': '这个新闻跑马灯是软的',
    'Refreshes in': '刷新于',
    'Please wait, we are loading the advertisement...': '请稍候，我们正在加载广告...',
    'Please accept 5 XP for your wait!': '请接受 5 经验，因为您的期待！',
    'Paste your save string into the box below': '将您的存档字符串粘贴到下面的框中',
    'Gain': '收益',
    'Added Heroes that boost Mester Dimensions. You can get them from lootboxes, bought with XP. Gain 1 XP for each power of 10 reached in Mester Points.\n- Added an ability to change notations, if you want to return to this April Fools prank.': '增加了可以提高掌握维度的英雄。 您可以从用经验购买的战利品箱中获得它们。 每获得10点乘以掌握点所获得的力量，则获得1点经验值。\n-如果您想返回到愚人节恶作剧，添加了一种更改符号的功能。',
    'Added automation for Rankled Dimensions.\n- First two Rankled Dimensions now work 2x faster.': '增加了对“分级维度”的自动化。\n-现在，前两个“分级维度”的工作速度提高了2倍。',
    'Rankled': '发炎',
    'Rankless': '无等级',
    'Rankles': '溃烂',
    'Do you wish to return to the Darkness Age?': '您想回到黑暗时代吗？',
    'Each level gives +100% to all': '每级给所有 +100％',
    'Each level gives +10% Heroes in': '每个等级提供+10％英雄',
    'Ask for your blessing from Hevipelle today!': '今天就向Hevipelle祈求您的祝福！',
    '\"Escape from Vantablack\" has better newstickers': '“逃离万塔布莱克”具有更好的新闻跑马灯',
    'You can find much more stuff like this on r/incremental_games subreddit': '您可以在r / incremental_games subreddit上找到更多类似的内容',
    'You can now buy max Tickspeed Upgrades.\n- Added version tracker.': '您现在可以购买最大的Tick速度升级。\n-添加了版本跟踪器。',
    'You won The Game!': '您赢了游戏！',
    'Rankness': '等级',
    'You start with 10 Rankness Points.\n- 1st Rankness Dimension now works 2x faster.': '您从10个等级点开始。\n-第一个等级维度现在的运行速度提高了2倍。',
    'Lootbox': '战利品箱',
    'Mester': '掌握',
    'Matter Dimensions': '物质维度',
    'All numbers are now presented in a clear and concise modern format.\n- April Fools!': '现在，所有数字均以简洁明了的现代格式显示。\n-愚人节！',
    'Get a': '获取1',
    'Dimension is more powerful based on unspent Infinity Points': '基于未花费的无限点，维度更强大',
    'Darkness': '黑暗',
    'Dankness': '潮湿',
    'Buying a Dankness Dimension now provides a 2x boost to itself.\n- Added a link to my other game, Matter Dimensions.': '现在，购买潮湿维度可以使自身提高2倍。\n-为我的其他游戏物质维度添加了一个链接。',
    'If you can time travel, click on newsticker before this one': '如果您可以抽空旅行，请在此之前点击新闻跑马灯',
    'Dimensions production (additive': '维度生产（附加',
    'Dimension Boosts and': '维度提升和',
    'Can you collect all Heroes?': '你可以收集所有英雄吗？',
    'Dimensional Sacrifice ×': '维度牺牲×',
    'Dimensional Sacrifice resets nothing, and Sacrifice once per tick': '维度牺牲不会重置任何值，每Tick牺牲一次',
    'Anybody wants to go meta?': '有人想达到元吗？',
    'Yep, this game was totally copied from Antimatter Dimensions': '是的，这个游戏完全是从反物质维度复制来的',
    'Newsticker confirmed': '新闻跑马灯确认',
    'Nukes': '核子',
    'opening window': '打开弹框',
    'Rare': '稀有',
    'Screws': '螺丝',
    'Snail': '蜗牛',
    'Rester': '停留',
    'Automation is cheaper.\n- The first three Rester Dimensions now work 2x faster.': '自动化的价格更低。\n-现在，前三个停留维度的运行速度提高了2倍。',
    '2% to Tickspeed Upgrade power': '2％至Ticks速度升级功率',
    'to': ' 为',
    'Rented': '租用',
    'Renamed': '重命名',
    'Rested': '休息',
    'Each Tickspeed Upgrade increases tickspeed by': '每次Tick速度升级将Tick速度提高了',
    'Galaxies do not reset other Dimension stuff': '星系不会重设其他维度的东西',
    'Legendary': '传奇',
    'Dimension Shift': '维度偏移',
    'Dimension Boost': '维度提升',
    'Congratulations! You have beaten the game!': '恭喜你！ 您已经击败了游戏！',
    'Actions are better': '操作更好了',
    'Hard Reset': '硬重置',
    'Extreme Dimensional Boost scaling starts 10 Boosts later': '极限维度提升的缩放将在10次提升之后开始',
    'Galaxies do not reset Dimension Boosts': '星系不会重置维度提升',
    'Here is your save string': '这是你的存档字符串',
    'Only Final Toolbox is left, with the cost scaling with the current XP': '只剩下最后的工具箱，成本随着当前经验的增加而增加',
    'You start with 6 Dimension Shifts': '你从第 6 维度偏移开始',
    'Watch an ad to get 5 XP': '观看广告获得5倍经验',
    'You can continue playing, if you want.': '如果你愿意，可以继续玩。',
    'Uncommon': '罕见',
    'Update to the version': '更新到版本',
    'Silver Surfer': '银色冲浪者',
    'Sorry, we were unable to load an advertisement.': '抱歉，我们无法加载广告。',
    'Subscribe to SuperSpruce': '订阅SuperSpruce',
    'The first Tickspeed upgrade now costs 10x less.\n- You can perform Dimension Boosts after you reached max Rested Dimensions, each for increased cost.': '现在，第一次Tickspeed升级的价格降低了10倍。\n-您可以在达到最大“静止维度”后执行“维度提升”，每一次都会增加成本。',
    'This action is irreversible!': '这个动作是不可逆的！',
    'This newsticker was specifically made unreasonably long to create an impression that there is much more meaning in it than seems at the first glance. There isn\'t.': '专门为使此新闻跑马灯过长而造成的印象是，它的含义比乍看之下要多得多。 没有。',
    'Unlock an additional dimension': '解锁其他维度',
    'Get an additional Lock': '得到一个额外的锁',
    'Check my other game,': '查看我的其他游戏，',
    'Are you sure you want to perform a Hard Reset?': '您确定要执行硬重置吗？',
    'Kronos': '克罗诺斯',
    'Loop Hero': '循环英雄',
    'Mech': '技工',
    'Meta': '元',
    'Meth': '方法',
    'Middleman': '中间人',
    'Ouroboros': '衔尾蛇',
    'Toolbox': '工具箱',
    'Grandma': '奶奶',
    'Dimensional Sacrifice is stronger': '维度牺牲更强',
    'Dimensions and their automation': '维度及其自动化',
    'CMOT Dibbler': 'CMOT饮水机',
    'Actions work faster': '操作工作更快',
    'Clover': '三叶草',
    'Dimension boosts itself more': '维度可以自我提升',
    'Flame Le Boosta"': '烈焰提升',
    'Dimensional Boosts': '维度提升',
    'asterisk_man': '星号人',
    'all': '全部',
    'Dimensions and Tickspeed Upgrades softcap starts later': '维度和Tick速度升级软上限后开始',
    'Discount all': '全部打折',
    'Florian': '弗洛里安',
    'Gain more XP from': '获得更多经验从',
    'Jacorb': '雅可布',
    'Light': '光',
    'ThePaperPilot': '纸飞行员',
    'Tickspeed Upgrades are more powerful': 'Tick速度升级功能更强大',
    'Toolboxes contain more Heroes': '工具箱中包含更多英雄',
    'VoidCloud': '虚空云',
    'Galaxies': '星系',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //原样
//    '10th': '第十',
//    '9th': '第九',
//    '8th': '第八',
//    '7th': '第七',
//    '6th': '第六',
//    '5th': '第五',
//    '4th': '第四',
//    '3rd': '第三',
//    '2nd': '第二',
//    '1st': '第一',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    'DP': '伤害',
    'Emoji': 'Emoji',
    'Flash': 'Flash',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "Current:": "当前:",
    "Boosts ": "提升 ",
    "Dimensions: ": "维度: ",
    "Heroes: ": "英雄: ",
    "Version": "版本",
    "DimShifts and DimBoosts boost ": "维度偏移和维度提升提升",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    " Locked": " 未解锁",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.]+)$/,
//    /^([\d\.]+) 🎈$/,
//    /^([\d\.]+) 🎲$/,
//    /^([\d\.]+) ⛲$/,
//    /^([\d\.]+) 📧$/,
//    /^([\d\.]+) 🃏$/,
//    /^([\d\.]+) 🖱$/,
//    /^([\d\.]+) 🏰$/,
//    /^([\d\.]+) ⏳$/,
//    /^([\d\.]+) 🧊$/,
//    /^([\d\.]+) 🌍$/,
//    /^([\d\.]+) ☂$/,
//    /^([\d\.]+) 🧅$/,
//    /^([\d\.]+) 🧳$/,
//    /^([\d\.]+) ⌨$/,
//    /^([\d\.]+) ⌨$/,
//    /^([\d\.]+) 😐$/,
//    /^([\d\.]+) ❄$/,
//    /^([\d\.]+) 🚦$/,
//    /^([\d\.]+) 🌈$/,
//    /^([\d\.]+) 🪂$/,
//    /^([\d\.]+) 💤$/,
//    /^([\d\.]+) ❌$/,
//    /^([\d\.]+) 🚑🧊$/,
//    /^([\d\.]+) 🚑⏳$/,
//    /^([\d\.]+) 🚑🃏$/,
//    /^([\d\.]+) 🚑⛲$/,
//    /^([\d\.]+) 🚑☂$/,
//    /^([\d\.]+) 🚑🚑$/,
//    /^([\d\.]+) 🚑🧳$/,
//    /^([\d\.]+) 🚑❌$/,
//    /^([\d\.]+) 🎈🎲$/,
    /^([\d\.]+) (.+)$/,
    /^([\d\.,]+)$/,
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Spend (\d+) Rocks for (\d+) Towers$/, '花费 $1 石头获得 $2 塔'],
    [/^Spend (\d+) Rocks for (\d+) Rods$/, '花费 $1 石头获得 $2 棒子'],
    [/^Spend (\d+) Rocks for (\d+) Logs$/, '花费 $1 石头获得 $2 木头'],
    [/^Spend (\d+) Rocks for (\d+) Bars$/, '花费 $1 石头获得 $2 金属条'],
    [/^Spend (\d+) Rocks for (\d+) Boards$/, '花费 $1 石头获得 $2 板子'],
    [/^Spend (\d+) Rocks for (\d+) HP$/, '花费 $1 石头获得 $2 生命值'],
    [/^Spend (\d+) Rocks for (\d+) Screws$/, '花费 $1 石头获得 $2 螺丝'],
    [/^Spend (\d+) Rocks for (\d+) Joints$/, '花费 $1 石头获得 $2 关节'],
    [/^Spend (\d+) Rocks for (\d+) XP$/, '花费 $1 石头获得 $2 经验'],
    [/^Spend (\d+) Rocks for (\d+) Nukes$/, '花费 $1 石头获得 $2 核子'],
    [/^Spend (\d+) Rocks for (\d+) Gems$/, '花费 $1 石头获得 $2 宝石'],
    [/^Spend (\d+) Rocks for (\d+) Roads$/, '花费 $1 石头获得 $2 道路'],
    [/^Spend (\d+) Screws for (\d+) Rods$/, '花费 $1 螺丝获得 $2 棒子'],
    [/^Spend (\d+) Screws for (\d+) HP$/, '花费 $1 螺丝获得 $2 生命值'],
    [/^Spend (\d+) Screws for (\d+) Joints$/, '花费 $1 螺丝获得 $2 关节'],
    [/^Spend (\d+) Screws for (\d+) Beams$/, '花费 $1 螺丝获得 $2 横梁'],
    [/^Spend (\d+) Screws for (\d+) Gems$/, '花费 $1 螺丝获得 $2 宝石'],
    [/^Spend (\d+) Screws for (\d+) Roads$/, '花费 $1 螺丝获得 $2 道路'],
    [/^Spend (\d+) Screws for (\d+) DP$/, '花费 $1 螺丝获得 $2 伤害'],
    [/^Spend (\d+) Rods for (\d+) Roads$/, '花费 $1 棒子获得 $2 道路'],
    [/^Spend (\d+) Rods for (\d+) HP$/, '花费 $1 棒子获得 $2 生命值'],
    [/^Spend (\d+) Boards for (\d+) HP$/, '花费 $1 板子获得 $2 生命值'],
    [/^Spend (\d+) Boards for (\d+) DP$/, '花费 $1 板子获得 $2 伤害'],
    [/^Spend (\d+) Joints for (\d+) Beams$/, '花费 $1 关节获得 $2 横梁'],
    [/^Spend (\d+) Joints for (\d+) Gems$/, '花费 $1 关节获得 $2 宝石'],
    [/^Spend (\d+) Joints for (\d+) HP$/, '花费 $1 关节获得 $2 生命值'],
    [/^Spend (\d+) Joints for (\d+) Towers$/, '花费 $1 关节获得 $2 塔'],
    [/^Spend (\d+) Joints for (\d+) HP$/, '花费 $1 关节获得 $2 生命值'],
    [/^Spend (\d+) Joints for (\d+) DP$/, '花费 $1 关节获得 $2 伤害'],
    [/^Spend (\d+) Boards for (\d+) Beams$/, '花费 $1 板子获得 $2 横梁'],
    [/^Spend (\d+) Boards for (\d+) Screws$/, '花费 $1 板子获得 $2 螺丝'],
    [/^Spend (\d+) Boards for (\d+) Rods$/, '花费 $1 板子获得 $2 棒子'],
    [/^Spend (\d+) Boards for (\d+) Roads$/, '花费 $1 板子获得 $2 道路'],
    [/^Spend (\d+) Boards for (\d+) Joints$/, '花费 $1 板子获得 $2 关节'],
    [/^Spend (\d+) Gems for (\d+) DP$/, '花费 $1 宝石获得 $2 伤害'],
    [/^Spend (\d+) Beams for (\d+) DP$/, '花费 $1 横梁获得 $2 伤害'],
    [/^Spend (\d+) Beams for (\d+) Rods$/, '花费 $1 横梁获得 $2 棒子'],
    [/^Spend (\d+) Beams for (\d+) HP$/, '花费 $1 横梁获得 $2 生命值'],
    [/^Spend (\d+) Beams for (\d+) Roads$/, '花费 $1 螺丝获得 $2 道路'],
    [/^Spend (\d+) Towers for (\d+) DP$/, '花费 $1 塔获得 $2 伤害'],
    [/^Spend (\d+) Rocks for (\d+) DP$/, '花费 $1 石头获得 $2 伤害'],
    [/^Spend (\d+) Rocks for (\d+) Beams$/, '花费 $1 石头获得 $2 横梁'],
    [/^Spend (\d+) Roads and (\d+) Screws for (\d+) Beams$/, '花费 $1 道路和 $2 螺丝 获得 $3 横梁'],
    [/^Spend (\d+) Roads and (\d+) Screws for (\d+) Joints$/, '花费 $1 道路和 $2 螺丝 获得 $3 关节'],
    [/^Spend (\d+) Roads and (\d+) Towers for (\d+) Ships$/, '花费 $1 道路和 $2 塔 获得 $3 船'],
    [/^Spend (\d+) Rocks and (\d+) Boards for (\d+) Joints$/, '花费 $1 石头和 $2 板子 获得 $3 关节'],
    [/^Spend (\d+) Rocks and (\d+) Boards for (\d+) Screws$/, '花费 $1 石头和 $2 板子 获得 $3 螺丝'],
    [/^Spend (\d+) Rocks and (\d+) Logs for (\d+) Bars$/, '花费 $1 石头和 $2 木头 获得 $3 金属条'],
    [/^Spend (\d+) Rocks and (\d+) Logs for (\d+) Boards$/, '花费 $1 石头和 $2 木头 获得 $3 板子'],
    [/^Spend (\d+) Rocks and (\d+) Logs for (\d+) Screws$/, '花费 $1 石头和 $2 木头 获得 $3 螺丝'],
    [/^Spend (\d+) Rocks and (\d+) Bars for (\d+) Screws$/, '花费 $1 石头和 $2 金属条 获得 $3 螺丝'],
    [/^Spend (\d+) Rocks and (\d+) Bars for (\d+) Boards$/, '花费 $1 石头和 $2 金属条 获得 $3 板子'],
    [/^Spend (\d+) Rocks and (\d+) Bars for (\d+) Joints$/, '花费 $1 石头和 $2 金属条 获得 $3 关节'],
    [/^Spend (\d+) Rocks and (\d+) Beams for (\d+) Roads$/, '花费 $1 石头和 $2 横梁 获得 $3 道路'],
    [/^Spend (\d+) Logs and (\d+) Bars for (\d+) Screws$/, '花费 $1 木头和 $2 金属条 获得 $3 螺丝'],
    [/^Spend (\d+) Logs and (\d+) Bars for (\d+) Joints$/, '花费 $1 木头和 $2 金属条 获得 $3 关节'],
    [/^Spend (\d+) Logs and (\d+) Bars for (\d+) Boards$/, '花费 $1 木头和 $2 金属条 获得 $3 板子'],
    [/^Spend (\d+) Logs and (\d+) Boards for (\d+) Screws$/, '花费 $1 木头和 $2 板子 获得 $3 螺丝'],
    [/^Spend (\d+) Logs and (\d+) Boards for (\d+) Nukes$/, '花费 $1 木头和 $2 板子 获得 $3 核子'],
    [/^Spend (\d+) Logs and (\d+) Joints for (\d+) Beams$/, '花费 $1 木头和 $2 关节 获得 $3 横梁'],
    [/^Spend (\d+) Logs and (\d+) Joints for (\d+) Gems$/, '花费 $1 木头和 $2 关节 获得 $3 横梁'],
    [/^Spend (\d+) Logs and (\d+) Screws for (\d+) Joints$/, '花费 $1 木头和 $2 螺丝 获得 $3 关节'],
    [/^Spend (\d+) Logs and (\d+) Screws for (\d+) Gems$/, '花费 $1 木头和 $2 螺丝 获得 $3 宝石'],
    [/^Spend (\d+) Gems and (\d+) Towers for (\d+) Ships$/, '花费 $1 宝石和 $2 塔 获得 $3 船'],
    [/^Spend (\d+) Gems and (\d+) Towers for (\d+) Nukes$/, '花费 $1 宝石和 $2 塔 获得 $3 核子'],
    [/^Spend (\d+) Boards and (\d+) Screws for (\d+) Joints$/, '花费 $1 板子和 $2 螺丝 获得 $3 关节'],
    [/^Spend (\d+) Boards and (\d+) Screws for (\d+) Nukes$/, '花费 $1 板子和 $2 螺丝 获得 $3 核子'],
    [/^Spend (\d+) Boards and (\d+) Screws for (\d+) Rods$/, '花费 $1 板子和 $2 螺丝 获得 $3 棒子'],
    [/^Spend (\d+) Boards and (\d+) Screws for (\d+) Beams$/, '花费 $1 板子和 $2 螺丝 获得 $3 横梁'],
    [/^Spend (\d+) Boards and (\d+) Rods for (\d+) Gems$/, '花费 $1 板子和 $2 棒子 获得 $3 宝石'],
    [/^Spend (\d+) Boards and (\d+) Beams for (\d+) Gems$/, '花费 $1 板子和 $2 横梁 获得 $3 宝石'],
    [/^Spend (\d+) Boards and (\d+) Joints for (\d+) Rods$/, '花费 $1 板子和 $2 关节 获得 $3 棒子'],
    [/^Spend (\d+) Boards and (\d+) Joints for (\d+) Roads$/, '花费 $1 板子和 $2 关节 获得 $3 道路'],
    [/^Spend (\d+) Boards and (\d+) Joints for (\d+) Beams$/, '花费 $1 板子和 $2 关节 获得 $3 横梁'],
    [/^Spend (\d+) Beams and (\d+) Towers for (\d+) Ships$/, '花费 $1 横梁和 $2 塔 获得 $3 船'],
    [/^Spend (\d+) Beams and (\d+) Rods for (\d+) Ships$/, '花费 $1 横梁和 $2 棒子 获得 $3 船'],
    [/^Spend (\d+) Beams and (\d+) Rods for (\d+) Gems$/, '花费 $1 横梁和 $2 棒子 获得 $3 宝石'],
    [/^Spend (\d+) Screws and (\d+) Beams for (\d+) Nukes$/, '花费 $1 螺丝和 $2 横梁 获得 $3 核子'],
    [/^Spend (\d+) Screws and (\d+) Rods for (\d+) Gems$/, '花费 $1 螺丝和 $2 棒子 获得 $3 宝石'],
    [/^Spend (\d+) Bars and (\d+) Rods for (\d+) Ships$/, '花费 $1 金属条和 $2 棒子 获得 $3 船'],
    [/^Spend (\d+) Bars and (\d+) Rods for (\d+) Towers$/, '花费 $1 金属条和 $2 棒子 获得 $3 塔'],
    [/^Spend (\d+) Bars and (\d+) Screws for (\d+) Rods$/, '花费 $1 金属条和 $2 螺丝 获得 $3 棒子'],
    [/^Spend (\d+) Bars and (\d+) Screws for (\d+) Joints$/, '花费 $1 金属条和 $2 螺丝 获得 $3 关节'],
    [/^Spend (\d+) Bars and (\d+) Screws for (\d+) Roads$/, '花费 $1 金属条和 $2 螺丝 获得 $3 道路'],
    [/^Spend (\d+) Bars and (\d+) Beams for (\d+) Towers$/, '花费 $1 金属条和 $2 横梁 获得 $3 塔'],
    [/^Spend (\d+) Bars and (\d+) Beams for (\d+) Rods$/, '花费 $1 金属条和 $2 横梁 获得 $3 棒子'],
    [/^Spend (\d+) Bars and (\d+) Gems for (\d+) Roads$/, '花费 $1 金属条和 $2 宝石 获得 $3 道路'],
    [/^Spend (\d+) Bars and (\d+) Boards for (\d+) Screws$/, '花费 $1 金属条和 $2 板子 获得 $3 螺丝'],
    [/^Spend (\d+) Bars and (\d+) Boards for (\d+) Joints$/, '花费 $1 金属条和 $2 板子 获得 $3 关节'],
    [/^Spend (\d+) Bars and (\d+) Boards for (\d+) Beams$/, '花费 $1 金属条和 $2 板子 获得 $3 横梁'],
    [/^Spend (\d+) Bars and (\d+) Joints for (\d+) Beams$/, '花费 $1 金属条和 $2 关节 获得 $3 横梁'],
    [/^Spend (\d+) Rods and (\d+) Gems for (\d+) Roads$/, '花费 $1 棒子和 $2 宝石 获得 $3 道路'],
    [/^Spend (\d+) Joints and (\d+) Gems for (\d+) Gems$/, '花费 $1 关节和 $2 宝石 获得 $3 宝石'],
    [/^Spend (\d+) Joints and (\d+) Beams for (\d+) Roads$/, '花费 $1 关节和 $2 横梁 获得 $3 道路'],
    [/^Spend (\d+) Joints and (\d+) Rods for (\d+) Gems$/, '花费 $1 关节和 $2 棒子 获得 $3 宝石'],
    [/^Spend (\d+) Rods and (\d+) Towers for (\d+) Nukes$/, '花费 $1 棒子和 $2 塔 获得 $3 核子'],
    [/^Spend (\d+) Logs for (\d+) Rods$/, '花费 $1 木头获得 $2 棒子'],
    [/^Spend (\d+) Logs for (\d+) Boards$/, '花费 $1 木头获得 $2 板子'],
    [/^Spend (\d+) Logs for (\d+) XP$/, '花费 $1 木头获得 $2 经验'],
    [/^Spend (\d+) Logs for (\d+) Screws$/, '花费 $1 木头获得 $2 螺丝'],
    [/^Spend (\d+) Logs for (\d+) Beams$/, '花费 $1 木头获得 $2 横梁'],
    [/^Spend (\d+) Beams for (\d+) DP$/, '花费 $1 螺丝获得 $2 伤害'],
    [/^Spend (\d+) Roads for (\d+) HP$/, '花费 $1 道路获得 $2 生命值'],
    [/^Spend (\d+) Roads for (\d+) DP$/, '花费 $1 道路获得 $2 伤害'],
    [/^Spend (\d+) Roads for (\d+) XP$/, '花费 $1 道路获得 $2 经验'],
    [/^Spend (\d+) Roads for (\d+) Ships$/, '花费 $1 道路获得 $2 船'],
    [/^Spend (\d+) Logs for (\d+) DP$/, '花费 $1 木头获得 $2 伤害'],
    [/^Spend (\d+) Logs for (\d+) Bars$/, '花费 $1 木头获得 $2 金属条'],
    [/^Spend (\d+) Logs for (\d+) HP$/, '花费 $1 木头获得 $2 生命值'],
    [/^Spend (\d+) Logs for (\d+) Gems$/, '花费 $1 木头获得 $2 宝石'],
    [/^Spend (\d+) Towers for (\d+) HP$/, '花费 $1 塔获得 $2 生命值'],
    [/^Spend (\d+) Gems for (\d+) Roads$/, '花费 $1 宝石获得 $2 道路'],
    [/^Spend (\d+) Logs for (\d+) Joints$/, '花费 $1 木头获得 $2 关节'],
    [/^Spend (\d+) Bars for (\d+) Beams$/, '花费 $1 金属条获得 $2 横梁'],
    [/^Spend (\d+) Bars for (\d+) Joints$/, '花费 $1 金属条获得 $2 关节'],
    [/^Spend (\d+) Bars for (\d+) HP$/, '花费 $1 金属条获得 $2 生命值'],
    [/^Spend (\d+) Gems for (\d+) HP$/, '花费 $1 宝石获得 $2 生命值'],
    [/^Spend (\d+) Bars for (\d+) DP$/, '花费 $1 金属条获得 $2 伤害'],
    [/^Spend (\d+) Bars for (\d+) Gems$/, '花费 $1 金属条获得 $2 宝石'],
    [/^Spend (\d+) Bars for (\d+) Screws$/, '花费 $1 金属条获得 $2 螺丝'],
    [/^Spend (\d+) Bars for (\d+) Boards$/, '花费 $1 金属条获得 $2 板子'],
    [/^Spend (\d+) Joints for (\d+) Ships$/, '花费 $1 关节获得 $2 船'],
    [/^Spend (\d+) Joints for (\d+) Rods$/, '花费 $1 关节获得 $2 棒子'],
    [/^Spend (\d+) Roads for (\d+) Towers$/, '花费 $1 道路获得 $2 塔'],
    [/^Spend (\d+) Rods for (\d+) Nukes$/, '花费 $1 棒子获得 $2 核子'],
    [/^Spend (\d+) Rods for (\d+) DP$/, '花费 $1 棒子获得 $2 伤害'],
    [/^Cost: (.+) Towers$/, '成本: $1 塔'],
    [/^Cost: (.+) Gems$/, '成本: $1 宝石'],
    [/^Cost: (.+) Rods$/, '成本: $1 棒子'],
    [/^Cost: (.+) Boards$/, '成本: $1 板子'],
    [/^Cost: (.+) Bars$/, '成本: $1 金属条'],
    [/^Cost: (.+) Logs$/, '成本: $1 木头'],
    [/^Cost: (.+) Joints$/, '成本: $1 关节'],
    [/^Cost: (.+) Screws$/, '成本: $1 螺丝'],
    [/^Cost: (.+) Beams$/, '成本: $1 横梁'],
    [/^Cost: (.+) Roads$/, '成本: $1 道路'],
    [/^Cost: (.+) Ships$/, '成本: $1 船'],
    [/^Get (.+) Beams$/, '获得 $1 横梁'],
    [/^Get (.+) Screws$/, '获得 $1 螺丝'],
    [/^Get (.+) Boards$/, '获得 $1 板子'],
    [/^Get (.+) Rocks$/, '获得 $1 石头'],
    [/^Get (.+) Gems$/, '获得 $1 宝石'],
    [/^Get (.+) Logs$/, '获得 $1 木头'],
    [/^Get (.+) Bars$/, '获得 $1 金属条'],
    [/^Get (.+) Rods$/, '获得 $1 棒子'],
    [/^Get (.+) Joints$/, '获得 $1 关节'],
    [/^Get (.+) XP$/, '获得 $1 经验'],
    [/^Each bought (.+) and (.+)$/, '分别购买 $1 和 $2'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);