Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    result:'',
    flag: 0,
    English:'',
    Chinese:'',
    randnum:0,
    EnglishArr: ['A book that remains shut is but a block.', 'A friend in need is a friend indeed.', 'A stitch in time save nine.', 'Actions speak louder than words.', 'It is easier to say than to do.', 'To say is one thing and to do is another.', 'A constant guest is never welcome. ', 'The early bird catches the worm.', 'A real man never goes back on his words.', 'Life is like riding a bicycle. To keep balance you must keep going on.', 'Learn wisdom by the follies of others.', 'Constant dropping wears the stone.', 'While there is life, there is hope.', 'If you would know the value of money, go and try to borrow some.', 'The greater a man is, the more distasteful is praise and flattery to him.', 'A man can fail many times,but he isn\'t a failure until he begins to blame somebody else.', 'A great ship asks for deep waters.', 'If a thing is worth doing it is worth worth doing well.', 'He that can have patience, can have what he will.', 'Asking costs nothing. ', 'Do not pull all your eggs in one basket.', 'The way to win an atomic war is to make certain it never starts.', 'If you don\'t learn to think when you are young, you may never learn.', 'Love is ever the beginning of knowledge as fire is of light.', 'One thorn of experience is worth a whole wilderness of warning.', 'Bad luck often brings good luck.', 'Admonish your friends privately, but praise them openly.', 'Do not change horses in mid-stream.', 'The greatest lesson in life is to know that even fools are right sometimes.', 'Big mouthfuls ofter choke.', 'Birth is much, but breeding is more.', 'The unexamined life is not worth living.', 'Progress is the activity of today and the assurance of tomorrow.', 'All desires have in them little pleasant taste but rather much potential suffering.', 'When the whole world is about to rain, let\'s make it clear in our heart together.', 'I\'ll think of you every step of the way.', 'Until you make peace with who you are, you’ll never be content with what you have.', 'Do not, for one repulse,give up the purpose that you resolved to effect.', 'A man is not old as long as he is seeking something.A man is not old until regrets take the place of dreams.', 'Most of the trouble in the world is caused by people wanting to be important.','The man who has made up his mind to win will never say \"impossible\".'],
    ChineseArr: ['书本不常翻,犹如一块砖。', '患难见真情。', '一针不缝，九针难补。', '事实胜于雄辩。', '说起来容易，做起来难。', '说归说，做归做。', '久住非佳宾,常来不欢迎。', '早起的鸟儿有虫吃。', '一言既出,驷马难追。', '生活就像骑自行车。只有不断前行才能保持平衡。', '从旁人的愚行中学到聪明。', '滴水穿石。', '留得青山在，不怕没柴烧。', '要想知道钱的价值，就想办法去借钱试试。', '一个人越伟大，对表扬和奉承就越反感。', '一个人可以失败多次，但是只要他没有开始责怪旁人，他还不是一个失败者。', '大船要走深水。', '如果事情值得做，就值得好好做。', '唯坚韧者始能遂其志。', '问人不费分文。', '别把所有的蛋都放在一个篮子里。', '赢得核战争的方法是确保它永远不会发生。', '如果你年轻时没有学会思考，那就永远学不会思考。', '知识总是从爱好开始，犹如光总是从火开始一样。', '一次痛苦的经验抵得上千百次的告诫。', '塞翁失马，安知非福。', '要私下告诫朋友，但是要公开夸奖朋友。', '别在河流中间换马。', '人生最大的教训是要知道即使傻瓜有时候也是对的。', '贪多嚼不烂。', '出身固然重要，教养更且重要。', '混混噩噩的生活不值得过。', '进步是今天的活动，明天的保证。', '所有的欲望，只有小小的甜味，而却隐藏着相当多的苦头。', '当全世界约好一起下雨，让我们约好一起在心里放晴。', '我会想你，在漫漫长路的每一步。', '除非你能和真实的自己和平相处，否则你永远不会对已拥有的东西感到满足。', '不要只因一次失败，就放弃你原来决心想要达到的目的。', '只要有一个人还有所追求，他就没有老。直到后悔取代了梦想，一个人才算老。', '人世间的大多数烦恼都是由那些想成为重要人物的人惹出来的。','凡是决心取得胜利的人是从来不说“不可能的”。']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var count = options.count
    var flag = options.flag
    var rand = Math.floor(Math.random() * 40);
    that.setData({
      randnum: rand
    })
    if(flag == 4)
    {
      if (count >= 425) {
        that.setData({
          result: '哟哟哟！四级词汇也不过如此'
        })
      }
      else {
        that.setData({
          result: '词汇不足请及时充值'
        })
      }}
    if(flag == 6)
    {
      if (count >= 425) {
        that.setData({
          result: '哟哟哟！六级词汇也不过如此'
        })
      }
      else {
        that.setData({
          result: '词汇不足请及时充值'
        })
      }}

    that.setData({
      count: options.count,
      English: that.data.EnglishArr[rand],
      Chinese: that.data.ChineseArr[rand]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
   * 用户点击分享
   */
  onShareAppMessage: function () {
    return {
      title: '英语四六级水平测试',
      desc: '你的词汇量真的够吗',
      path: '/pages/result/result'
    }
  }
})