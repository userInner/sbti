export const PERSONALITIES = [
  { code: 'OJBK', name: '无所谓人', desc: '看淡世间万物，只要活着就行。' },
  { code: 'THAN-K', name: '感恩者', desc: '谢谢你，因为有你，温暖了四季。' },
  { code: 'FAKE', name: '伪人', desc: '表面上看起来是个人，实际上可能不是。' },
  { code: 'SEXY', name: '尤物', desc: '魅力四射，走到哪里都是焦点。' },
  { code: 'MALO', name: '吗喽', desc: '早安吗喽，世界破破烂烂，吗喽缝缝补补。' },
  { code: 'Dior-s', name: '屌丝', desc: '虽然普通，但依然坚强地活着。' },
  { code: 'MUM', name: '妈妈', desc: '充满母爱，喜欢照顾身边的所有人。' },
  { code: 'ZZZZ', name: '装死者', desc: '遇到困难就躺平，闭上眼睛假装一切不存在。' },
  { code: 'LOVE-R', name: '多情者', desc: '见一个爱一个，心碎了一地。' },
  { code: 'IMSB', name: '傻者', desc: '阿巴阿巴，清澈的愚蠢。' },
  { code: 'SOLO', name: '孤儿', desc: '独自美丽，不需要任何人。' },
  { code: 'CTRL', name: '拿捏者', desc: '掌控一切，把每个人都拿捏得死死的。' },
  { code: 'FUCK', name: '草者', desc: '充满戾气，优美的中国话。' },
  { code: 'OH-NO', name: '哦不人', desc: '随时随地都在破防的边缘。' },
  { code: 'GOGO', name: '行者', desc: '说走就走，永远在路上。' },
  { code: 'JOKE-R', name: '小丑', desc: '原来小丑竟是我自己。' },
  { code: 'MONK', name: '僧人', desc: '阿弥陀佛，贫僧只是一只敲木鱼的吗喽。' },
  { code: 'SHIT', name: '愤世者', desc: '这世界是一坨巨大的答辩。' },
  { code: 'DEAD', name: '死者', desc: '已经是一具尸体了，有什么事烧纸。' },
  { code: 'ATM-er', name: '送钱者', desc: '行走的人民币，总是忍不住花钱。' },
  { code: 'THIN-K', name: '思考者', desc: '脑子里每天上演八百集连续剧。' },
  { code: 'IMFW', name: '废物', desc: '专业当废物，谁也别想让我努力。' },
  { code: 'WOC!', name: '握草人', desc: '一天到晚都在震惊之中。' },
  { code: 'POOR', name: '贫困者', desc: '穷得只剩下钱...的负债了。' },
  { code: 'BOSS', name: '领导者', desc: '天生的领导者，大家都得听我的。' },
  { code: 'DRUNK', name: '酒鬼', desc: '感情深一口闷，感情浅舔一舔。' },
  { code: 'HHHH', name: '傻乐者', desc: '哈哈哈哈哈哈，这世界上就没有什么能让我不开心的事情。' },
];

export const NORMAL_TYPES = {
    // 简化为 5 个维度 (自我, 情绪, 态度, 行动力, 社交) 的 H/M/L 模板
    "OJBK": "M-M-M-M-M", "THAN-K": "H-M-L-H-H", "FAKE": "H-L-M-H-L",
    "SEXY": "H-H-H-H-H", "MALO": "L-L-L-L-L", "Dior-s": "L-M-M-M-L",
    "MUM": "M-H-H-H-H", "ZZZZ": "L-L-M-L-L", "LOVE-R": "H-H-H-M-H",
    "IMSB": "L-M-H-L-M", "SOLO": "M-L-M-M-L", "CTRL": "H-H-L-H-H",
    "FUCK": "H-L-L-H-M", "OH-NO": "L-H-L-M-M", "GOGO": "H-M-H-H-M",
    "JOKE-R": "M-L-M-L-M", "MONK": "M-M-L-M-L", "SHIT": "H-L-L-L-L",
    "DEAD": "L-L-L-L-L", "ATM-er": "M-M-H-M-H", "THIN-K": "H-L-M-L-M",
    "IMFW": "L-L-L-L-L", "WOC!": "M-H-M-M-M", "POOR": "M-M-M-L-M",
    "BOSS": "H-M-M-H-H"
};

export const QUESTIONS = [
  {
    id: 1,
    text: "你在大街上走着，突然有人在后面大喊一声“孙子！”你会：",
    options: [
      { text: "猛地回头：爷爷在此！", dims: { ego: 2, emotion: 0, attitude: -1, action: 2, social: 1 } },
      { text: "装作没听见，加快脚步走开", dims: { ego: -1, emotion: -1, attitude: 0, action: -1, social: -2 } },
      { text: "默默在心里把对方祖宗十八代问候一遍", dims: { ego: 0, emotion: 2, attitude: -2, action: -1, social: 0 } },
    ]
  },
  {
    id: 2,
    text: "好不容易到了周末，你的安排是：",
    options: [
      { text: "在床上躺成一具尸体，谁叫也不起", dims: { ego: -2, emotion: -1, attitude: 0, action: -2, social: -2 } },
      { text: "组局！喝酒！唱K！嗨起来！", dims: { ego: 1, emotion: 1, attitude: 1, action: 2, social: 2 } },
      { text: "打开电脑开始学（mo）习（yu）", dims: { ego: 1, emotion: 0, attitude: 1, action: 0, social: -1 } },
    ]
  },
  {
    id: 3,
    text: "如果给你一个超能力，你最想拥有哪个？",
    options: [
      { text: "不用上班也能月入百万", dims: { ego: 2, emotion: 1, attitude: 1, action: -1, social: 0 } },
      { text: "随时随地能变成一只无忧无虑的吗喽", dims: { ego: -1, emotion: -2, attitude: -1, action: -2, social: -1 } },
      { text: "能一眼看穿别人是不是在装B", dims: { ego: 1, emotion: 0, attitude: -1, action: 1, social: 1 } },
    ]
  },
  {
    id: 4,
    text: "面对突如其来的DDL（截止日期），你的真实状态：",
    options: [
      { text: "稳如老狗，早就做完了（骗人的）", dims: { ego: 2, emotion: 0, attitude: 1, action: 1, social: 1 } },
      { text: "只要我闭上眼睛，DDL就追不上我", dims: { ego: -2, emotion: -2, attitude: -1, action: -2, social: -1 } },
      { text: "疯狂敲键盘，一边敲一边流泪", dims: { ego: 0, emotion: 2, attitude: 0, action: 2, social: 0 } },
    ]
  },
  {
    id: 5,
    text: "朋友突然找你借钱，你的第一反应是：",
    options: [
      { text: "我比你还穷，要不你借我点？", dims: { ego: -1, emotion: 0, attitude: -1, action: -1, social: 1 } },
      { text: "兄弟，借多少？直接转你！", dims: { ego: 1, emotion: 1, attitude: 2, action: 2, social: 2 } },
      { text: "已读不回，假装账号被盗", dims: { ego: 0, emotion: -1, attitude: -2, action: -2, social: -2 } },
    ]
  },
  {
    id: 6,
    text: "如果世界上只有一种饮料可以喝，你会选：",
    options: [
      { text: "肥宅快乐水（可乐）", dims: { ego: 1, emotion: 1, attitude: 1, action: 1, social: 1 } },
      { text: "保温杯里泡枸杞（或者白酒）", dims: { isDrunk: true, ego: 0, emotion: 0, attitude: 0, action: 0, social: 0 } },
      { text: "白开水，平平淡淡才是真", dims: { ego: -1, emotion: -1, attitude: 0, action: 0, social: -1 } },
    ]
  },
  {
    id: 7,
    text: "男神/女神邀请你一起打游戏，但你今晚有很重要的晚自习/加班，你选择：",
    options: [
      { text: "果断鸽了晚自习，爱情大过天！", dims: { ego: 1, emotion: 2, attitude: 1, action: 2, social: 2 } },
      { text: "强忍泪水拒绝，毕竟我是个有原则的人", dims: { ego: 1, emotion: -1, attitude: 2, action: -1, social: -1 } },
      { text: "带上电脑去网吧，一边挂机晚自习一边打游戏", dims: { ego: 2, emotion: 0, attitude: 0, action: 1, social: 1 } },
    ]
  },
  {
    id: 8,
    text: "便秘坐在马桶上很难受，一直出不来怎么办：",
    options: [
      { text: "一边刷手机一边等，随缘吧", dims: { ego: 0, emotion: -1, attitude: -1, action: -2, social: 0 } },
      { text: "咬紧牙关，用力！相信奇迹！", dims: { ego: 1, emotion: 1, attitude: 2, action: 2, social: 0 } },
      { text: "开始思考人生的意义，为什么我会落得如此下场", dims: { ego: 2, emotion: 0, attitude: -2, action: -1, social: -1 } },
    ]
  },
  {
    id: 9,
    text: "（此题为无题目盲选，请凭直觉点击）：",
    options: [
      { text: "我选A，A是万物之始", dims: { ego: 1, emotion: 0, attitude: 1, action: 1, social: 0 } },
      { text: "选B吧，B看起来比较稳妥", dims: { ego: 0, emotion: -1, attitude: 0, action: -1, social: 1 } },
      { text: "C！我就是要与众不同！", dims: { ego: 2, emotion: 1, attitude: -1, action: 2, social: -1 } },
    ]
  },
  {
    id: 10,
    text: "走在人来人往的路上，突然平地摔了一跤：",
    options: [
      { text: "只要我不尴尬，尴尬的就是别人，顺势摆个pose", dims: { ego: 2, emotion: 0, attitude: 2, action: 1, social: 2 } },
      { text: "光速爬起来，假装什么事都没发生快步逃离", dims: { ego: -1, emotion: 1, attitude: -1, action: 2, social: -2 } },
      { text: "趴在地上不起来了，这地球没救了", dims: { ego: -2, emotion: -2, attitude: -2, action: -2, social: -1 } },
    ]
  },
  {
    id: 11,
    text: "去吃席，发现桌上只有一道你最讨厌的菜：",
    options: [
      { text: "为了不饿肚子，闭着眼睛硬吞", dims: { ego: -1, emotion: -1, attitude: 1, action: 1, social: 1 } },
      { text: "宁死不屈，我就是饿死也不吃一口", dims: { ego: 2, emotion: 1, attitude: 2, action: -1, social: -1 } },
      { text: "疯狂夹给旁边的人：多吃点，看你瘦的", dims: { ego: 1, emotion: 0, attitude: -1, action: 2, social: 2 } },
    ]
  },
  {
    id: 12,
    text: "被老板/老师在群里当众艾特并批评了一顿：",
    options: [
      { text: "立刻回复“收到，马上改”，私下里疯狂扎小人", dims: { ego: -1, emotion: 2, attitude: 1, action: 1, social: 1 } },
      { text: "直接在群里硬刚：你行你上啊！", dims: { ego: 2, emotion: 2, attitude: -2, action: 2, social: -2 } },
      { text: "已读不回，选择性失明", dims: { ego: 0, emotion: -2, attitude: -1, action: -2, social: -1 } },
    ]
  },
  {
    id: 13,
    text: "相亲发现对方是个地中海发型且迷之自信的奇葩：",
    options: [
      { text: "礼貌微笑，找借口尿遁逃跑", dims: { ego: 1, emotion: -1, attitude: 0, action: 1, social: 1 } },
      { text: "比他更自信，用魔法打败魔法", dims: { ego: 2, emotion: 1, attitude: 1, action: 2, social: 2 } },
      { text: "坐在那发呆，当做在看猴戏", dims: { ego: -1, emotion: -1, attitude: -2, action: -1, social: -2 } },
    ]
  },
  {
    id: 14,
    text: "半夜十二点，突然特别想吃烧烤：",
    options: [
      { text: "吃！胖死也比馋死强，马上下单！", dims: { ego: 1, emotion: 2, attitude: 1, action: 2, social: 0 } },
      { text: "摸摸肚子上的肉，喝口凉水强行睡觉", dims: { ego: -1, emotion: -1, attitude: 2, action: -1, social: 0 } },
      { text: "打开吃播视频，看别人吃就当自己吃过了", dims: { ego: 0, emotion: 0, attitude: 0, action: -2, social: -1 } },
    ]
  },
  {
    id: 15,
    text: "多年的异性好朋友突然向你深情表白：",
    options: [
      { text: "我把你当兄弟，你竟然想泡我？！绝交！", dims: { ego: 1, emotion: 2, attitude: -1, action: 2, social: -2 } },
      { text: "其实我也暗恋你很久了，马上在一起！", dims: { ego: 0, emotion: 1, attitude: 1, action: 1, social: 2 } },
      { text: "装傻充愣：哈哈哈你今天是不是喝多了？", dims: { ego: -1, emotion: -1, attitude: 0, action: -1, social: 1 } },
    ]
  },
  {
    id: 16,
    text: "抽奖中了一百万，但前提是必须分给你最讨厌的人一半：",
    options: [
      { text: "为了五十万，我忍了！捏着鼻子分钱", dims: { ego: -1, emotion: 0, attitude: 2, action: 1, social: 1 } },
      { text: "宁可我不要这钱，也不能便宜了那个王八蛋！", dims: { ego: 2, emotion: 2, attitude: -2, action: -2, social: -2 } },
      { text: "先拿钱，然后雇人去把他的五十万骗过来", dims: { ego: 2, emotion: 1, attitude: -1, action: 2, social: 0 } },
    ]
  },
  {
    id: 17,
    text: "在封闭的电梯里没忍住放了一个很响的屁，旁边只有一个陌生人：",
    options: [
      { text: "捂着鼻子看对方，先发制人！", dims: { ego: 2, emotion: 1, attitude: -2, action: 2, social: 1 } },
      { text: "盯着电梯天花板，只要我不动，屁就不是我放的", dims: { ego: -1, emotion: -1, attitude: 0, action: -2, social: -1 } },
      { text: "大声道歉：不好意思，晚上豆子吃多了", dims: { ego: 1, emotion: 0, attitude: 2, action: 1, social: 2 } },
    ]
  },
  {
    id: 18,
    text: "出门在外，手机只剩 1% 的电，且找不到充电宝：",
    options: [
      { text: "极度焦虑，感觉天都要塌下来了", dims: { ego: -1, emotion: 2, attitude: -1, action: 0, social: -1 } },
      { text: "关机保平安，终于有理由不回消息了，爽！", dims: { ego: 1, emotion: -2, attitude: 1, action: -1, social: -2 } },
      { text: "立刻用最后1%的电发条朋友圈：手机没电，有事烧纸", dims: { ego: 2, emotion: 1, attitude: 0, action: 2, social: 2 } },
    ]
  },
  {
    id: 19,
    text: "点外卖吃到一半，发现里面有一只完整的虫子：",
    options: [
      { text: "拍照，找商家疯狂索赔，绝不姑息！", dims: { ego: 2, emotion: 2, attitude: 1, action: 2, social: 1 } },
      { text: "默默把虫子挑出来，剩下的继续吃，不能浪费", dims: { ego: -1, emotion: -2, attitude: 2, action: -1, social: -1 } },
      { text: "跑到厕所大吐特吐，三天吃不下饭", dims: { ego: 0, emotion: 2, attitude: -1, action: 0, social: 0 } },
    ]
  },
  {
    id: 20,
    text: "走在街上，迎面走来你的前任和他的现任手牵手：",
    options: [
      { text: "抬头挺胸，走出六亲不认的步伐，气势不能输！", dims: { ego: 2, emotion: 1, attitude: 1, action: 1, social: 1 } },
      { text: "假装接电话，低头快速走过，别看见我别看见我", dims: { ego: -1, emotion: -1, attitude: 0, action: -1, social: -2 } },
      { text: "冲上去热情打招呼：哟，换新的啦？这个不如上一个啊", dims: { ego: 2, emotion: 2, attitude: -2, action: 2, social: 2 } },
    ]
  },
  {
    id: 21,
    text: "晚上打游戏排位连跪了十把，掉了一个大段：",
    options: [
      { text: "气得砸键盘/摔手机，破口大骂匹配机制", dims: { ego: 1, emotion: 2, attitude: -2, action: 2, social: -1 } },
      { text: "默默流下屈辱的泪水，卸载游戏", dims: { ego: -1, emotion: 1, attitude: -1, action: -2, social: -2 } },
      { text: "再来一把！我就不信赢不了一把！", dims: { ego: 2, emotion: 0, attitude: 2, action: 2, social: 1 } },
    ]
  },
  {
    id: 22,
    text: "一觉醒来，发现自己穿越到了古代，成了一个破碗乞丐：",
    options: [
      { text: "凭借现代人的智慧，我要逆袭当首富/当皇帝！", dims: { ego: 2, emotion: 1, attitude: 2, action: 2, social: 2 } },
      { text: "乞丐也挺好，不用上班不用还房贷，开摆！", dims: { ego: -2, emotion: -2, attitude: -1, action: -2, social: -1 } },
      { text: "到处问人：导演在哪？摄像机在哪？别搞恶作剧了！", dims: { ego: 1, emotion: 1, attitude: -2, action: 1, social: 1 } },
    ]
  },
  {
    id: 23,
    text: "突然被拉进一个全是不认识的人的微信群，大家都在发红包：",
    options: [
      { text: "管他是谁，闷声发大财，疯狂抢红包！", dims: { ego: 1, emotion: 1, attitude: 1, action: 2, social: 1 } },
      { text: "不敢抢，怕是新型诈骗，默默退群", dims: { ego: -1, emotion: -1, attitude: 0, action: -1, social: -2 } },
      { text: "发个表情包试探一下：这是哪个精神病院的群？", dims: { ego: 2, emotion: 0, attitude: -1, action: 1, social: 2 } },
    ]
  },
  {
    id: 24,
    text: "去剪头发，理发师一剪刀下去，把你剪成了个极丑的大光头：",
    options: [
      { text: "在理发店当场崩溃大哭，要理发师赔偿精神损失", dims: { ego: 1, emotion: 2, attitude: -1, action: 2, social: 1 } },
      { text: "含泪付钱，回家买十顶帽子换着戴", dims: { ego: -1, emotion: 1, attitude: 1, action: -1, social: -1 } },
      { text: "我觉得还挺酷的！买个反光墨镜，我就是整条街最靓的仔", dims: { ego: 2, emotion: 0, attitude: 2, action: 1, social: 2 } },
    ]
  },
  {
    id: 25,
    text: "正在参加非常重要的考试/面试，突然肚子剧痛想拉肚子：",
    options: [
      { text: "为了前途，我能憋到海枯石烂！", dims: { ego: 1, emotion: -1, attitude: 2, action: -1, social: 0 } },
      { text: "举手交白卷去厕所，命比考试重要多了", dims: { ego: -1, emotion: 1, attitude: 0, action: 2, social: -1 } },
      { text: "尝试通过深呼吸和自我催眠把粑粑吸回去", dims: { ego: 2, emotion: 0, attitude: 1, action: 0, social: -2 } },
    ]
  },
  {
    id: 26,
    text: "冬天洗澡洗到一半，满头满身都是泡沫，突然停水了：",
    options: [
      { text: "在浴室里无能狂怒，仰天长啸", dims: { ego: 1, emotion: 2, attitude: -2, action: 1, social: -1 } },
      { text: "用毛巾干擦，一边擦一边瑟瑟发抖", dims: { ego: -1, emotion: -1, attitude: 1, action: -1, social: 0 } },
      { text: "穿着内裤裹着泡沫跑出去买矿泉水冲洗", dims: { ego: 2, emotion: 0, attitude: 1, action: 2, social: 2 } },
    ]
  },
  {
    id: 27,
    text: "晚上一个人看恐怖片，看完后吓得不敢闭眼睛：",
    options: [
      { text: "开着所有的灯，把电视声音开到最大熬到天亮", dims: { ego: -1, emotion: 2, attitude: -1, action: 1, social: -2 } },
      { text: "用被子把自己裹成一个蚕蛹，妖魔鬼怪进不来", dims: { ego: 0, emotion: 1, attitude: 0, action: -1, social: -1 } },
      { text: "放一首《大悲咒》或者《好日子》跟鬼对线", dims: { ego: 2, emotion: 0, attitude: 1, action: 2, social: 1 } },
    ]
  },
  {
    id: 28,
    text: "假如新闻播报：明天就是世界末日，地球将被小行星撞击毁灭：",
    options: [
      { text: "把所有存款全取出来，疯狂吃喝玩乐一天！", dims: { ego: 2, emotion: 2, attitude: 1, action: 2, social: 2 } },
      { text: "终于不用上班/上学了！躺在床上安心等死", dims: { ego: -2, emotion: -2, attitude: -1, action: -2, social: -2 } },
      { text: "跟家里人聚在一起，平静地度过最后一天", dims: { ego: 0, emotion: -1, attitude: 2, action: 0, social: 1 } },
    ]
  }
];