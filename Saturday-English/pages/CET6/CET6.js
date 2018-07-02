var app = getApp();
function two_char(n) {
  return n >= 10 ? n : "0" + n;
}
Page({

  /** 
   * 页面的初始数据 
   */
  data: {
    questions: ['What is the Chinese meaning of "digress"(）', 'What is the Chinese meaning of "circulate"(）', 'What is the Chinese meaning of "confirm"(）', 'What is the Chinese meaning of "inspire"(）', 'What is the Chinese meaning of "reservation"(）', 'What is the Chinese meaning of "get over"(）', 'What is the Chinese meaning of "patent"(）', 'What is the Chinese meaning of "efficient"(）', 'What is the Chinese meaning of "impulse"(）', 'Which of the following phrases or words means different from other words?(）', 'I hate this kind of （） so I left him.我讨厌这种肤浅的感情，所以我离开了他。', 'Are you ( ) your conduct?你对自己的行为感到害臊吗？', 'He is not fatuously ( ) existing conditions.他不会愚昧地满于现状的。', 'How do you( )the truth?事实如此，你如何解释？', 'I simply couldn\'t ( ) his intention.我简直揣摩不透他的用意。', 'The ( ) is also a romantic holiday.元宵节也是一个浪漫的节日。', 'His ( ) is vigorous and forceful.他的书法苍劲有力。', 'The sun had already sunk below the ( ).太阳已经落到了地平线以下。', 'Is this ( ) leather?', 'Cheese is a ( ); milk is a ( ).奶酪是固体，牛奶是液体。', 'We categorically ( ) this groundless charge.我们断然否认这种无理指责。', 'A postman\'s ( ) are 180 Per week.邮递员的工资为每周180英镑。', 'What is the Chinese meaning of "intensive"(）', 'What is the Chinese meaning of "explicit"(）', 'What is the Chinese meaning of "cumulative"(）', 'Which of the following words means "占优势地"( )', 'Which of the following words means "乏味的"( )', 'Which of the following words means "使...恢复精神"( )', 'What is the Chinese meaning of "prospective"(）', 'Which of the following words means "合法性；正确性"( )', 'Which of the following words means "申请书；正式请求"( )', 'Which of the following words means "破坏；冒犯"( )', 'What is the Chinese meaning of "hostile"(）', 'Which of the following words means "大体上"( )', 'Which of the following words means "联盟"( )', 'What is the Chinese meaning of "inflict"(）', 'What is the Chinese meaning of "property"(）', 'What is the Chinese meaning of "bonus"(）', 'What is the Chinese meaning of "recreation"(）', 'Which of the following words means "提倡；鼓吹"( )', 'Which of the following words means "品质；属性；归结于"( )', 'Which of the following words means "容量；才能；地位"( )', 'Which of the following words means "背离"( )', 'What is the Chinese meaning of "fatal"(）', 'What is the Chinese meaning of "generate"(）', 'Which of the following words means "直觉"( )', 'What is the Chinese meaning of "multiply"(）', 'What is the Chinese meaning of "overwhelming"(）', 'Which of the following words means "原始的；简单的"( )', 'Which of the following words means "错觉"( )', 'What is the Chinese meaning of "prejudice"(）', 'Which of the following words means "容纳；供应"( )', 'Which of the following words means "断言；批准"( )', 'We all have to stay ( ).我们大家都必须保持警惕。', 'Which of the following words means "授权与；委托"( )', 'What is the Chinese meaning of "barely"(）', 'What is the Chinese meaning of "disguise"(）', 'Which of the following words means "区别；声望"( )', 'I\'ve broken off my ( ) to Arthur.我已经解除了与阿瑟的婚约。', 'It is a ( ), nasty and vicious attack on a young man\'s character.这是对一个年轻人品格蓄意的、卑鄙的、恶毒的攻击。', 'These figures ( ) the loss of competitiveness.他觉得我在夸大其词。', 'Nearly all the houses were ( ).几乎所有的房子都一模一样。', 'The company was ( ) for shady deals.该公司因其不法交易而臭名昭著。', 'Having spent so long at a great club like Rangers, no other Scottish team could ( ) him away.在流浪者队这样优秀的俱乐部呆了这么久之后，其他苏格兰球队都吸引不了他了。', 'He is ( ) in his control of expenditure. 他对支出控制得非常严格。', 'Torture failed to make her ( ). 严刑拷打未使她屈服。', 'I ( ) my own shortcomings.我承认自己的缺点。', 'The cultural relics are displayed in chronological ( ).文物按年代顺序展出。', 'Many mothers and children ( ) into poverty after divorce.很多母亲和孩子在离婚后陷入贫困。', 'Which of the following words means "点燃；着火"( )', 'What is the Chinese meaning of "acute"(）', 'Which of the following words means "极度痛苦"( )', 'What is the Chinese meaning of "allocate"(）', 'Which of the following words means "绷带"( )', 'Which of the following words means "青铜色"( )', 'Which of the following words means "粗帆布；油画布"( )', 'What is the Chinese meaning of "category"(）', 'What is the Chinese meaning of "census"(）', 'What is the Chinese meaning of "chaos"(）', 'These people ( ) their independence and sovereignty.这些人民珍视他们的独立和主权。', 'He appears determined to ( ) to power.看来他决心要抓住权力不放。', 'What is the Chinese meaning of "coincidence"(）', 'Which of the following words means "日用品；商品"( )', 'What is the Chinese meaning of "commute"(）', 'What is the Chinese meaning of "composite"(）', 'What is the Chinese meaning of "configuration"(）', 'Which of the following words means "简洁的；简明的"( )', 'Which of the following words means "作为结果的;必然的"( )', 'Which of the following words means "强迫；驱使"( )', 'What is the Chinese meaning of "converge"(）', 'What is the Chinese meaning of "correspondence"(）', 'What is the Chinese meaning of "crucial"(）', 'What is the Chinese meaning of "discriminate"(）', 'What is the Chinese meaning of "dubious"(）', 'What is the Chinese meaning of "doom"(）', 'Which of the following words means "双重的；双数"( )', 'What is the Chinese meaning of "embed"(）'],
    questionsA: ['A.离正题，入歧路', 'A.环球飞行', 'A.强迫，抑制', 'A.鼓舞；启示', 'A.义务；职责', 'A.卷入；进入', 'A.天赋', 'A.生效的；效率的', 'A.举起', 'A.vigorous', 'A.shallow emotion', 'A.accustomed to', 'A.conscious of', 'A.account for', 'A.drop in', 'A．Lantern Festival', 'A.miracle', 'A.pole', 'A．fate', 'A．solid;liquid', 'A．inject', 'A．allowances', 'A.广泛的', 'A.主要的', 'A.累积的', 'A.instinctively', 'A.notorious', 'A.retreat', 'A.预期的', 'A.implement', 'A.assimilation', 'A.fragmentation', 'A.敌对的', 'A.intellectually', 'A.conviction', 'A.校准；适应', 'A.所有物；性能', 'A.困扰', 'A.矫正；调整', 'A.ascend', 'A.attribute', 'A.compensation', 'A.distract', 'A.进退两难的', 'A.产生；形成', 'A.invalid', 'A.目标', 'A.困难重重的', 'A.primitive', 'A.illusion', 'A.步行者；行人', 'A.accord', 'A.affirm', 'A.alternate', 'A.allege', 'A.灰心丧气地', 'A.隐瞒；伪装', 'A.discrimination', 'A.identification', 'A.feasible', 'A.exaggerate', 'A.humble', 'A.invalid', 'A.restrain', 'A.rigorous', 'A.speculate', 'A.refute', 'A.specification', 'A.tumble', 'A.kernel', 'A.突然的', 'A.advent', 'A.分派；分配', 'A.bald', 'A.bronze', 'A.capsule', 'A.教堂', 'A.陶器制品', 'A.混乱；混沌', 'A.chorus', 'A.clash', 'A.巧合', 'A.commentary', 'A.联邦', 'A.补充；补足', 'A.结构；配置', 'A.confidential', 'A.consecutive','A.contradict','A.集合；聚合','A.组织','A.累积的','A.分散；驱散','A.可疑的','A.粘贴','A.dock','A.资助；赋予'],
    questionsB: ['B.离婚', 'B.考虑周到', 'B.顺从；遵守', 'B.剥夺；使丧失', 'B.预约；保留', 'B.下班；结束工作', 'B.力量', 'B.有影响的', 'B.尝试', 'B.weary', 'B.shallow feeling', 'B.aware of', 'B.content with', 'B.appeal to', 'B.drop out of', 'B.Double-Ninth Festival', 'B.embroidery', 'B.edge', 'B．mask', 'B．liquid;solid', 'B．reject', 'B．wages', 'B.明白的', 'B.熟练的', 'B.调和的', 'B.predominantly', 'B.insidious', 'B.revolve', 'B.新生的', 'B.validity', 'B.perspiration', 'B.allegation', 'B.外来的', 'B.substantially', 'B.humiliation', 'B.处罚', 'B.功用；效用', 'B.奖金；红利', 'B.借口，托辞', 'B.absurd', 'B.assurance', 'B.capacity', 'B.distinction', 'B.孤高的;', 'B.同意；准予', 'B.intuition', 'B.除；减少', 'B.超现实的', 'B.prevalent', 'B.delusion', 'B.凭据；证据', 'B.abolish', 'B.affiliate', 'B.alert', 'B.assimilate', 'B.下决心地', 'B.派遣；调度', 'B.distinction', 'B.legislation', 'B.demanding', 'B.estimate', 'B.identical', 'B.minor', 'B.scan', 'B.skeptical', 'B.submit', 'B.reckon', 'B.reputation', 'B.tow', 'B.kindle', 'B.附属的', 'B.aerial', 'B.联盟；联合', 'B.batch', 'B.brood', 'B.canvas', 'B.俘虏', 'B.谷类；五谷', 'B.施舍', 'B.cherish', 'B.clasp', 'B.合作', 'B.commodity', 'B.纪念', 'B.复杂；混乱', 'B.让步；迁就', 'B.concise', 'B.constituent','B.contemplate','B.确信；信服','B.通信；符合','B.胆小的','B.隐瞒','B.激烈的','B.命运；毁灭','B.dome','B.体现；包含'],
    questionsC: ['C.使气馁', 'C.反复思索', 'C.确认；巩固', 'C.一致，符合', 'C.决定', 'C.克服；从...恢复', 'C.潜能', 'C.经济的', 'C.推动；推动力', 'C.exhausted', 'C.cheap emotion', 'C.ashamed of', 'C.consistent with', 'C.come up with', ' C.think of', ' C.Tomb-sweeping Festival', 'C.calligraphy', 'C.horizon', ' C．fabric', 'C．gas;solid', 'C．refuse', 'C．pensions', 'C.深刻的', 'C.含蓄的', 'C.考虑周到的', 'C.successively', 'C.tedious', 'C.regenerate', 'C.满足的', 'C.delicacy', 'C.petition', 'C.duration', 'C.诊断的', 'C.paradoxically', 'C.alliance', 'C.推动；激励', 'C.发展；改革', 'C.公开反对', 'C.消遣；娱乐', 'C.acquaint', 'C.admiration', 'C.comprehension', 'C.deviation', 'C.切实可行的', 'C.提升；升起', 'C.interpretation', 'C.乘；增加', 'C.永久的', 'C.profound', 'C.allusion', 'C.偏见', 'C.abrupt', 'C.afflict', 'C.arctic', 'C.authorize', 'C.勇敢地', 'C.谴责；声讨', 'C.deviation', 'C.engagement', 'C.delicate', 'C.exclude', 'C.feasible', 'C.notorious', 'C.terminate', 'C.sophisticated', 'C.smash', 'C.recognize', 'C.revenge', 'C.total', 'C.kinetic', 'C.敏锐的', 'C.agenda', 'C.减轻；缓和', 'C.badge', 'C.brace', 'C.cafeteria', 'C.种类；范畴', 'C.证明；保证', 'C.确实性', 'C.clamp', 'C.clause', 'C.掌握', 'C.commitment', 'C.交换；来往', 'C.强迫的', 'C.资格；能力', 'C.compulsory', 'C.consequent','C.contaminate','C.发明；设计','C.装束；服装','C.决定性的','C.揭开；透露','C.可怕的','C.干旱;旱灾','C.dual','C.引出；引起'],
    questionsD: ['D.不同意', 'D.流通', 'D.适应', 'D.发送；传播', 'D.命令；从...提取', 'D.起床；起立', 'D.专利', 'D.印象深刻的', 'D.以上说法均不正确', 'D.tired', 'D.cheap feeling', 'D.blind to', 'D.convenient to', ' D.deal with', 'D.figure out', 'D.Dragon-Boat Festival', 'D.Paper Cutting', ' D.border', 'D．fake', 'D．liquid;gas', 'D．eject', 'D．bonuses', 'D.智慧的', 'D.明白的', 'D.同类的', 'D.aggressively', 'D.dubious', 'D.rejuvenate', 'D.革命的', 'D.contradictory', 'D.obligation', 'D.violation', 'D.保护的', 'D.ironically', 'D.lamentation', 'D.把...强加给', 'D.评价', 'D.整修', 'D.补偿', 'D.advocate', 'D.assemble', 'D.compliment', 'D.diminish', 'D.重大的；致命的', 'D.解释；阐明', 'D.intricate', 'D.立法', 'D.压倒性的', 'D.prominent', 'D.elusion', 'D.假设', 'D.accommodate', 'D.alert', 'D.authentic', 'D.avail', 'D.仅仅；勉强', 'D.挑战；蔑视', 'D.drive', 'D.disengagement', 'D.deliberate', 'D.extend', 'D.crude', 'D.nasty', 'D.tempt', 'D.stationary', 'D.speculate', 'D.reclaim', 'D.sequence', 'D.tempt', 'D.knight', 'D.毗连的', 'D.agony', 'D.使交替', 'D.bandage', 'D.bruise', 'D.carve', 'D.漫画', 'D.户口普查', 'D.闲谈；聊天', 'D.clash', 'D.cling', 'D.殖民地', 'D.commemorate', 'D.注释；评论', 'D.合成的', 'D.赞助', 'D.consecutive', 'D.conspicuous','D.constrain','D.反驳；否认','D.商议；律师','D.照惯例的','D.区别对待','D.统治的','D.居住','D.dwell','D.插入；嵌入'],
    answer: ['A', 'D', 'C', 'A', 'B', 'C', 'D', 'A', 'C', 'A', 'C', 'C', 'B', 'A', 'D', 'A', 'C', 'C', 'D', 'A', 'B', 'B','C','D','A','B','C','D','A','B','C','D','A','B','C','D','A','B','C','D','A','B','C','D','A','B','C','D','A','B','C','D','A','B','C','D','A','B','C','D','A','B','C','D','A','B','C','D','A','B','C','D','A','D','A','B','C','D','A','B','D','A','B','C','D','A','B','C','D','A','B','C','D','A','B','C','D'],
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
    flag: 6
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
         /* wx.showModal({
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
    if (bindcount >= 10) {
      wx.redirectTo({
        url: '../result/result?count=' + that.data.count + '&flag=' + that.data.flag + ''
      })
    }
    if (bindcount >= 9) {
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