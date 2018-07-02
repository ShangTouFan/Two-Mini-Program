var app = getApp();
function two_char(n) {
  return n >= 10 ? n : "0" + n;
}
Page({

  /** 
   * 页面的初始数据 
   */
  data: {
    questions: ['What is the Chinese meaning of "quite"(）', 'What is the Chinese meaning of "latter"(）', 'What is the Chinese meaning of "custom"(）', 'What is the Chinese meaning of "abroad"(）', 'What is the Chinese meaning of "devise"(）', 'What is the Chinese meaning of "be said to"(）', 'which of the following is not the meaning of "make up"(）', 'What is the Chinese meaning of "not only...but also..."(）', 'What is the Chinese meaning of "could not help"(）', 'What is the Chinese meaning of "impact"(）', 'What is the Chinese meaning of "on the contrary"(）', 'What is the Chinese meaning of "represent"(）', 'Which of the following phrases or words means different from other words?(）', 'What is the Chinese meaning of "tend to"(）', 'Which of the following phrases or words means different from other words?(）', 'What is the Chinese meaning of "up to"(）', 'She came to dinner（）her boyfriend.她和男友一道来用餐。', 'He was ( ) drunk.他显然是喝醉了。', '( ), I don\'t feel I can trust him.不知什么缘故，我觉得无法信任他。', 'We can ( ) this recession.我们可以熬过这次经济萧条。', 'I really can\'t ( )any more interruptions right now.我现在真的承受不起更多的打扰了。', 'They are ( ) be here by now.他们现在应该到这儿了。', 'What is the Chinese meaning of "bargain"(）', 'We should brush our teeth ( ) twice a day.我们每天应该至少刷两次牙。', 'What is the Chinese meaning of "according to"(）', '（ ）, Bob sends his best wishes.顺便说一句，鲍勃送上他最诚挚的祝福。', 'What is the Chinese meaning of "blind"(）', 'which of the following is not the meaning of "crop"(）', 'What is the Chinese meaning of "go far"(）', 'It took them three years to ( ) the debt.他们用了三年时间才还清欠债。', 'What is the Chinese meaning of "issue"(）', 'What is the Chinese meaning of "emerge"(）', '( ), she behaved very reasonably.总体看来，她举止极为得体。', 'I ( ) who he is.我很想知道他是谁。', 'This research project is of great ( ).这一研究项目具有很高的价值。', 'Which of the following words means "适应"( )', 'Which of the following words means "原则"( )', 'Which of the following words means "冠军"( )', 'Which of the following words means "碰撞"( )', 'Which of the following words means "合同"( )', 'Which of the following words means "小丑"( )', 'Which of the following words means "感激"( )', 'Which of the following words means "期望"( )', 'Which of the following words means "意外"( )', 'Which of the following words means "向...保证"( )', 'Which of the following words means "比赛"( )', 'Which of the following words means "政治"()', 'Which of the following words means "促进"()', 'Which of the following words means "扩张"()', 'Which of the following words means "获得"()', 'Which of the following words means "坚持"()', 'Which of the following words means "目的"()', 'Which of the following words means "幻觉"()', 'Which of the following words means "损失"()', 'Which of the following words means "努力"()', 'Which of the following words means "跌落"()', 'Which of the following words means "偷"()', 'Which of the following words means "商店"()', 'Which of the following words means "日记"()', 'Which of the following words means "沙漠"()', 'Which of the following words means "地位"()', 'Which of the following words means "最近"()', 'Which of the following words means "税"()', 'Which of the following words means "角度"()', 'Which of the following words means "减少"()', 'What is the Chinese meaning of "eclipse"(）', 'What is the Chinese meaning of "definite"(）', 'What is the Chinese meaning of "vision"(）', 'What is the Chinese meaning of "canyon"(）', 'What is the Chinese meaning of "sweat"(）', 'The ( ) will take a bit of reading.这本小说不需要花很多时间来看。', 'Dad, I have a new ( ).爸爸，我有一个新同学。', 'My father is a highly ( ) person.我爸爸是一位十分受人尊敬的人。', 'What is the Chinese meaning of "area"(）', 'What is the Chinese meaning of "expert"(）', 'What is the Chinese meaning of "be equal to"(）', 'What is the Chinese meaning of "beat"(）', 'The more he earns, ( ) he wants.他赚的钱越多，就越想要更多的钱。', '( ), the busier he is, the happier he feels.事实上，他越忙就越高兴。', 'Which of the following words means "职业"()', 'Which of the following words means "无畏的"()', 'Which of the following words means "使目眩；赞叹"()', 'What is the Chinese meaning of "go camping"(）', 'What is the Chinese meaning of "loan"(）', 'What is the Chinese meaning of "offset"(）', 'What is the Chinese meaning of "cartoon"(）', 'Which of the following words means "减少"()', 'What is the Chinese meaning of "literature"(）', 'What is the Chinese meaning of "faint"(）', 'What is the Chinese meaning of "dominate"(）', 'What is the Chinese meaning of "intelligent"(）', 'Which of the following words means "十年"()', 'What is the Chinese meaning of "candidate"(）', 'What is the Chinese meaning of "transform"(）', 'What is the Chinese meaning of "fascinating"(）', 'What is the Chinese meaning of "extreme"(）', 'What is the Chinese meaning of "extraordinary"(）', 'What is the Chinese meaning of "Silk Route"(）', 'What is the Chinese meaning of "Peking opera"(）', 'What is the Chinese meaning of "shadow play"(）', 'What is the Chinese meaning of "Chinese knot"(）', 'What is the Chinese meaning of "Imperial Palace Museum"(）', 'What is the Chinese meaning of "responsibility"(）', 'What is the Chinese meaning of "Sustainable Development"(）', 'What is the Chinese meaning of "purchasing power"(）', 'What is the Chinese meaning of "relative affluence"(）', 'What is the Chinese meaning of "urban population"(）', 'What is the Chinese meaning of "natural growth rate"(）', 'What is the Chinese meaning of "college entrance examination"(）', 'What is the Chinese meaning of "online shopping"(）', 'What is the Chinese meaning of "artificial intelligence"(）', 'What is the Chinese meaning of "e-currency"(）', 'What is the Chinese meaning of "genetic mutation"(）', 'What is the Chinese meaning of "in advance"(）', 'What is the Chinese meaning of "the compass"(）', 'What is the Chinese meaning of "spring couplets"(）', 'What is the Chinese meaning of "be absorbed in"(）', 'What is the Chinese meaning of "above all"(）', 'What is the Chinese meaning of "in case"(）', 'What is the Chinese meaning of "on business"(）', 'What is the Chinese meaning of "opportunity"(）', 'What is the Chinese meaning of "innovation"(）', 'What is the Chinese meaning of "ambition"(）', 'What is the Chinese meaning of "appreciation"(）', 'Which of the following words means "完成；实行"()', 'What is the Chinese meaning of "barrier"(）', 'Which of the following words means "外部的"()', 'What is the Chinese meaning of "ruin"(）', 'What is the Chinese meaning of "abundant"(）', 'What is the Chinese meaning of "coincidence"(）', 'What is the Chinese meaning of "private"(）', 'What is the Chinese meaning of "optimistic"(）', 'What is the Chinese meaning of "victim"(）', 'What is the Chinese meaning of "consistent"(）', 'Which of the following words means "遥远的"()', 'Which of the following words means "勘探"()', 'What is the Chinese meaning of "advertise"(）', 'What is the Chinese meaning of "automatic"(）', 'Which of the following words means "打搅；妨碍"()', 'What is the Chinese meaning of "infer"(）', 'Which of the following words means "社会"()', 'What is the Chinese meaning of "distinguish"(）', 'What is the Chinese meaning of "strategy"(）', 'What is the Chinese meaning of "available"(）', 'What is the Chinese meaning of "attach"(）', 'What is the Chinese meaning of "illegal"(）', 'What is the Chinese meaning of "unique"(）', 'What is the Chinese meaning of "odd"(）', 'Which of the following words means "生物学"()', 'Which of the following words means "娱乐；招待"()',],
    questionsA: ['A.非常；相当', 'A.后来', 'A.公共的', 'A.在国外', 'A.离开；出发', 'A.被说成', 'A.构成，组成', 'A.不仅...而且...', 'A.帮不上', 'A.影响；碰撞', 'A.总而言之', 'A.相反', 'A.cause', 'A.倾向于；偏重 ', 'A.ban', 'A．取决于；直到', 'A.coming to', 'A.finally', 'A．however', 'A．get through', 'A．assume', 'A．truned to', 'A．养老金', 'A．at last', 'A.带路', 'A.On the way', 'A．哑的', 'A．下跌', 'A．扬名', 'A.pay up', 'A.商品', 'A.出现', 'A.Obviously speaking', 'A.wander', 'A.money', 'A.affect', 'A,principle', 'A.champion', 'A.crash', 'A.content', 'A.clown', 'A.altitude', 'A.except', 'A.accident', 'A.ensure', 'A.math', 'A.poly', 'A.promote', 'A.expand', 'A.require', 'A.swipe', 'A.suppose', 'A.allusion', 'A.loose', 'A.stride', 'A.slip', 'A.slot', 'A.slot', 'A.diary', 'A.data', 'A.statue', 'A.resent', 'A.taxi', 'A.angle', 'A.reduce', 'A.日食', 'A.确定的', 'A.虚拟', 'A.山谷', 'A.汗水', 'A.novel', 'A.classmate', 'A.considerable', 'A.监狱', 'A.专家;权威', 'A.对...特别', 'A.作弊', 'A.the sonner', 'A.Actually', 'A.vacation', 'A.bloom', 'A.dare', 'A.露营', 'A.利率', 'A.重置', 'A.颜料', 'A.decline', 'A.历史', 'A.佯攻', 'A.迷惑', 'A.聪明的', 'A.precede', 'A.表格', 'A.竞争', 'A.迷人的', 'A.可怕的', 'A.自动的', 'A.剑门蜀道', 'A.京剧', 'A.折子戏', 'A.中国画', 'A.颐和园', 'A.责任', 'A.经济发展', 'A.就业率', 'A.下岗', 'A.城市人口', 'A.出生率', 'A.期中考试', 'A.电子货币', 'A.人工智能', 'A.网络出版', 'A.基因重组', 'A.突然', 'A.指南针', 'A.春节', 'A.依照', 'A.总计', 'A.万一', 'A.上班', 'A.负担', 'A.挑战', 'A.抱负；野心', 'A.收到', 'A.approve', 'A.货物', 'A.external', 'A.路线', 'A.碰巧的', 'A.结果', 'A.私人的', 'A.悲观的', 'A.胜利', 'A.连续的', 'A.remote', 'A.find', 'A.评论', 'A.偶然的', 'A.disturb', 'A.促进', 'A.comment', 'A.混合', 'A.战略，策略', 'A.策略上的', 'A.模拟', 'A.骄傲的', 'A.独特的', 'A.统一的', 'A.geometry','A.enviroment'],
    questionsB: ['B.安静的', 'B.最近的', 'B.评论', 'B.上（飞机、船）', 'B.设计；发明', 'B.被当作', 'B.编造，虚构', 'B.虽然...但是...', 'B.不想做', 'B.重要性', 'B.大概说来', 'B.回答，相应', 'B.make out', 'B.打算做某事', 'B.forbid', 'B.多出', 'B.along to', 'B.immediately', 'B．therefore', 'B．come out of', 'B．bear', 'B．supposed to', 'B．报酬；付款', 'B．after about', 'B.概括', 'B.At the way', 'B．失明的', 'B．收成，收获', 'B．离家出走', 'B.pay off', 'B.试卷；题目', 'B.赞同', 'B.Finally speaking', 'B.wonder', 'B.worthwhile', 'B.adept', 'B.principal', 'B.champagne', 'B.crush', 'B.contact', 'B.crown', 'B.gratitude', 'B.expect', 'B.incident', 'B.insure', 'B.march', 'B.police', 'B.protect', 'B.expend', 'B.inquire', 'B.strike', 'B.purpose', 'B.illusion', 'B.lose', 'B.strive', 'B.slide', 'B.slice', 'B.storey', 'B.dairy', 'B.dissert', 'B.statute', 'B.recent', 'B.tax', 'B.angel', 'B.deduce', 'B.月食', 'B.不定的', 'B.朝代', 'B.蜡笔', 'B.甜的', 'B.naive', 'B.schoolmate', 'B.considering', 'B.围栏', 'B.期望', 'B.等于', 'B.承受', 'B.the most', 'B.Finally', 'B.vocation', 'B.blade', 'B.dance', 'B.烧烤', 'B.贷款', 'B.开启', 'B.木板', 'B.incline', 'B.文学', 'B.打击', 'B.想出', 'B.迟钝的', 'B.decade', 'B.校园', 'B.交通', 'B.温和的', 'B.极端的', 'B.舒服的', 'B.康庄大道', 'B.秦腔', 'B.皮影戏', 'B.中国功夫', 'B.圆明园', 'B.礼貌', 'B.可持续发展', 'B.人均收入', 'B.经济发达', 'B.农业人口', 'B.自然增长率', 'B.期末考试', 'B.信用支付', 'B.语音识别', 'B.电子货币', 'B.基因工程', 'B.毕竟', 'B.火药', 'B.春联', 'B.忠于', 'B.毕竟', 'B.基于', 'B.出差', 'B.选择', 'B.自信', 'B.奉献', 'B.欣赏', 'B.appeal', 'B.职业', 'B.vertical', 'B.毁灭；破坏', 'B.极端的', 'B.趋势', 'B.公共的', 'B.乐观的', 'B.虚拟', 'B.相似的', 'B.valid', 'B.explore', 'B.代理', 'B.学术的', 'B.distribute', 'B.推论；推断', 'B.commit', 'B.使痛苦', 'B.情况，情形', 'B.可获得的', 'B.适应', 'B.谦逊的', 'B.普通的', 'B.奇特的', 'B.architecture','B.entry'],
    questionsC: ['C.快的', 'C.最近adv', 'C.习惯', 'C.流产；夭折', 'C.决定', 'C.据说', 'C.化妆', 'C.只要...就...', 'C.禁不住 ', 'C.输入；进口', 'C.相反', 'C.代表；象征', 'C.result in', 'C.尝试做某事', ' C.prohibit', ' C.更新', 'C.along with', 'C.obviously', ' C．anyhow', 'C．make out', 'C．afford', 'C．happened to', 'C．津贴；补助', 'C．at about', 'C.统计；归纳', 'C.By the way', 'C．失聪的', 'C．播种', 'C．失败', 'C.pay back', 'C.项目；条款', 'C.命令', 'C.Totally speaking', 'C.want', 'C.worthy', 'C.adopt', 'C.purple', 'C.campaign', 'C.clash', 'C.contract', 'C.crow', 'C.latitude', 'C.accept', 'C.expect', 'C.assure', 'C.match', 'C.policy', 'C.protest', 'C.extend', 'C.enquire', 'C.strict', 'C.propose', 'C.delusion', 'C.loss', 'C.strike', 'C.glide', 'C.steel', 'C.store', 'C.decent', 'C.dessert', 'C.status', 'C.receive', 'C.tag', 'C.figure', 'C.induce', 'C.消逝', 'C.下决心的', 'C.译本', 'C.粉笔', 'C.漂流', 'C.nape', 'C.roommate', 'C.considered', 'C.海滩', 'C.除..外', 'C.期待某事', 'C.击打；打败', 'C.the better', 'C.Obviously', 'C.evocation', 'C.bold', 'C.damn', 'C.滑雪', 'C.本金', 'C.抵偿', 'C.纸盒', 'C.recline', 'C.博物馆', 'C.昏厥', 'C.捐款', 'C.可爱的', 'C.proceed', 'C.候选人', 'C.传播', 'C.可疑的', 'C.多余的', 'C.非凡的', 'C.阳关大道', 'C.昆曲', 'C.花鼓戏', 'C.中国结', 'C.天安门', 'C.道德', 'C.人口增长', 'C.购买力', 'C.安居乐业', 'C.人口分布', 'C.死亡率', 'C.高考', 'C.手机支付', 'C.智能手机', 'C.电子管理', 'C.基因突变', 'C.除此之外', 'C.印刷术', 'C.春卷', 'C.吸引', 'C.综上', 'C.陷入', 'C.忙碌', 'C.机遇', 'C.成功', 'C.爱好', 'C.支持', 'C.accomplish', 'C.电池', 'C.extinct', 'C.足迹', 'C.大量的', 'C.适应', 'C.可选的', 'C.相反的', 'C.受害者', 'C.巧合的', 'C.idle', 'C.exploit', 'C.做广告', 'C.智能的', 'C.distinct', 'C.合并', 'C.community', 'C.努力', 'C.紧张', 'C.方便的', 'C.贴；附属', 'C.合法的', 'C.值得注意的', 'C.末端的', 'C.biology','C.enthusiasm'],
    questionsD: ['D.小测验', 'D.后者', 'D.顾问', 'D.在上面', 'D.得到；从...提取', 'D.从头说', 'D.努力', 'D.因为...所以...', 'D.以上均不正确', 'D.部分；零件', 'D.从内容上说', 'D.重塑', 'D.lead to', ' D.努力做某事', 'D.disagree', 'D.升职', 'D.going with', ' D.normally', 'D．somehow', 'D．get rid of', 'D．affect', 'D．should', 'D．交易；便宜货', 'D．at least', 'D.根据，按照', 'D.In the way', 'D．残废的', 'D．修剪', 'D．旅游', 'D.pay for', 'D.问题；发行', 'D.管理', 'D.Generally speaking', 'D.desert', 'D.worth', 'D.adapt', 'D.grape', 'D.competition', 'D.craft', 'D.contrast', 'D.cow', 'D.attitude', 'D.excerpt', 'D.incitement', 'D.issue', 'D.method', 'D.politics', 'D.product', 'D.excel', 'D.acquire', 'D.stick', 'D.prepare', 'D.elusion', 'D.lost', 'D.stick', 'D.slice', 'D.steal', 'D.story', 'D.date', 'D.desert', 'D.stature', 'D.present', 'D.tail', 'D.angry', 'D.seduce', 'D.逃避', 'D.无限的', 'D.视觉', 'D.庄稼', 'D.划船', 'D.nation', 'D.teammate', 'D.considerate', 'D.区域；面积', 'D.躲避', 'D.尝试', 'D.伤害', 'D.the more', 'D.Absolutely', 'D.revocation', 'D.bald', 'D.dazzle', 'D.漂流', 'D.利润', 'D.破产', 'D.动画', 'D.dine', 'D.公告', 'D.信念', 'D.支配；统治', 'D.多才多艺的', 'D.exceed', 'D.帐篷', 'D.改变', 'D.变化的', 'D.大量的', 'D.迷人的', 'D.丝绸之路', 'D.越剧', 'D.木偶戏', 'D.中国书法', 'D.故宫博物馆', 'D.爱心', 'D.新能源发展', 'D.生活费用', 'D.小康', 'D.流动人口', 'D.负增长率', 'D.中考', 'D.网上购物', 'D.人脸识别', 'D.电子商务', 'D.克隆', 'D.事先；预告', 'D.造纸术', 'D.元宵', 'D.接近', 'D.尤其', 'D.除外', 'D.陷入困境', 'D.责任', 'D.创新', 'D.力量', 'D.爱好', 'D.acquire', 'D.障碍', 'D.tidy', 'D.冒险', 'D.预知的', 'D.巧合；一致', 'D.保护的', 'D.相同的', 'D.公民', 'D.一致的', 'D.radical', 'D.explode', 'D.建议', 'D.自动的', 'D.disappoint', 'D.预言', 'D.common', 'D.区分；辨别', 'D.意见', 'D.相对的', 'D.调整', 'D.非法的', 'D.不假思索的', 'D.大概的', 'D.geography','D.entertainment'],
    answer: ['A', 'D', 'C', 'A', 'B', 'C', 'D', 'A', 'C', 'A', 'C', 'C', 'B', 'A', 'D', 'A', 'C', 'C', 'D', 'A', 'C', 'B', 'D', 'D', 'D', 'C', 'B','A','A','B','D','A','D','B','D','D','A','A','A','C','A','B','B','A','C','C','D','A','A','D','D','B','B','C','B','A','D','C','A','D','C','B','B','A','A','A','B','D','A','A','A','A','C','D','A','B','C','D','A','B','C','D','A','B','C','D','A','B','C','D','A','B','C','D','A','B','C','D','A','B','C','D','A','B','C','D','A','B','C','D','A','B','C','D','A','B','C','D','A','B','C','D','A','B','C','D','A','B','C','D','A','B','C','D','A','B','C','D','A','B','C','D','A','B','C','D','A','B','C','D'],
    questionbody: '',
    A: '',
    B: '',
    C: '',
    D: '',
    Ans: '',
    show: '',
    countj: true,
    bindcount: 0,
    errorcount: 0,
    rightcount: 0,
    count: 0,
    time: '',
    index: '',
    next: "下一题",
    flag: 4
  },

  /*设置计数器5分钟*/
  onLoad: function (options) {
    var sec = options.sec;
    var that = this;
    var si = setInterval(function () {
      if (sec > 0) {
        sec--;
        var date = new Date(0, 0)
        date.setSeconds(sec);
        var h = date.getHours(), m = date.getMinutes(), s = date.getSeconds();
        that.setData({
          time: two_char(h) + ":" + two_char(m) + ":" + two_char(s)
        })
      }
      else {
        var count = that.data.count;
        if (that.data.bindcount == 0) {
          /*wx.showModal({
            title: '提示：',
            showCancel: false,
            content: '您还未答题，开始作答',
            success: function () {
              wx.switchTab({
                url: '/pages/index/index',
              })
            }
          })*/
          clearInterval(si);
        }
        else {
          clearInterval(si);
          app.globalData.bindcount = that.data.bindcount;
          app.globalData.errorcount = that.data.errorcount;
          app.globalData.rightcount = that.data.rightcount;
        }
      }
    }, 1000);
  },

  /** 
   * 生命周期函数--监听页面初次渲染完成 
   */
  onReady: function () {
    this.refresh();
  },

  /** 
   * 生命周期函数--监听页面显示 
   */
  onShow: function () {

  },

  /** 
   * 生命周期函数--监听页面隐藏 
   */
  onHide: function () {

  },

  /** 
   * 生命周期函数--监听页面卸载 
   */
  onUnload: function () {

  },

  /** 
   * 页面相关事件处理函数--监听用户下拉动作 
   */
  onPullDownRefresh: function () {

  },

  /** 
   * 页面上拉触底事件的处理函数 
   */
  onReachBottom: function () {

  },

  /** 
   * 用户点击右上角分享 
   */
  onShareAppMessage: function () {

  },
  refresh: function () {
    var that = this;
    var questions = that.data.questions;
    var questionsA = that.data.questionsA;
    var questionsB = that.data.questionsB;
    var questionsC = that.data.questionsC;
    var questionsD = that.data.questionsD;
    var answer = that.data.answer;
    var bindcount = that.data.bindcount;
    var next = that.data.next;
    var index = Math.floor(Math.random() * (questions.length - 1));
    if(bindcount >= 10){
      wx.redirectTo({
        url: '../result/result?count=' + that.data.count + '&flag='+that.data.flag+''
      })
    }
    if(bindcount >= 9){
      this.setData({
        next: "交卷"
      })
    }
    if (questions.length > 0) {
      this.setData({
        questionbody: questions.splice(index, 1),
        A: questionsA.splice(index, 1),
        B: questionsB.splice(index, 1),
        C: questionsC.splice(index, 1),
        D: questionsD.splice(index, 1),
        Ans: answer.splice(index, 1),
        questions: questions,
        questionsA: questionsA,
        questionsB: questionsB,
        questionsC: questionsC,
        questionsD: questionsD,
        answer: answer,
        index: index,
        show: '',
        countj: true,
        bindcount: bindcount + 1
      })
    }
    else {
      wx.showModal({
        title: '温馨提示',
        content: '没题了',
      })
    }
  },
  disp: function (e) {
    var id = e.currentTarget.id;
    var num = e.currentTarget.dataset.num;
    var count = e.currentTarget.dataset.count;
    var bindcount = e.currentTarget.dataset.bindcount;
    var rightcount = e.currentTarget.dataset.rightcount;
    var errorcount = e.currentTarget.dataset.errorcount;
      if (this.data.countj) {
        if (id == num) {
          this.setData({
            show: '正确！',
            count: count + 71,
            countj: false,
            rightcount: rightcount + 1,
          })
        }
        else {
          this.setData({
            show: '错误！' + '答案：' + num,
            countj: false,
            errorcount: errorcount + 1,
          })
        }
      }
  }
})  