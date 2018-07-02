Page({
  data: {
    questions: ['下列哪些容器可以使用数组,但不能使用链表来实现?', '需要分配较大空间,插入和删除不需要移动元素的线性表,其存储结构是( )', '设一个链表最常用的操作是在末尾插入结点和删除尾结点,则选用( )最节省时间', '从一个具有 n 个结点的单链表中查找其值等于x结点时,在查找成功的情况下,需平均比较(  )个结点', '线性表的顺序存储结构是一种_____的存储结构｡', '以下关于线性表的说法不正确的是______｡','若某线性表最常用的操作是在最后一个元素之后插入一个元素和删除进入表中的最后一个元素,则采用(  )存储方式最节省运算时间和存储空间｡'],

    questionsA: ['A.队列', 'A.单链表', 'A.带头结点的双循环链表', 'A.n', 'A.随机存取', 'A.线性表中的数据元素可以是数字、字符、记录等不同类型｡','A.单链表'],

    questionsB: ['B.栈', 'B.静态链表', 'B.单循环链表', 'B.n/2', 'B.顺序存取', 'B.线性表中包含的数据元素个数不是任意的｡','B.仅有头指针的单循环链表'],

    questionsC: ['C.优先级队列', 'C.线性链表', 'C.带尾指针的单循环链表', 'C.(n-1)/2', 'C.索引存取', 'C.线性表中的每个结点都有且只有一个直接前趋和直接后继｡','C.双向链表'],

    questionsD: ['D.Map或者Dict', 'D.顺序存储结构', 'D.单链表', 'D.(n+1)/2', 'D.散列存取', 'D.存在这样的线性表：表中各结点都没有直接前趋和直接后继｡','D.仅有尾指针的单循环链表'],

    answer: ['D','B','A','D','B','C','D'],

    tips: ['Map或者Dict(字典)是可以按key索引值,这个只有数组能实现,链表不能', 'A,B满足插入和删除不移动数据,但分配较大的空间应该使用静态链表', '此题暂无提示', '此题暂无提示', '顺序表必须从头开始连续存储,不能随便存放', 'C、头没有前驱,尾没有后继;D、只有一个头节点的情况｡','单链表：尾插入O(n),尾删O(n);\n仅有头的单循环链表：尾插入O(n),尾删O(n);\n仅有尾指针的单循环链表：尾插入O(1),尾删O(n);\n相比较而言时间上还是D最好｡空间上,D项只多用一个尾指针空间复杂度尾O(1);'],

    questionbody: '',
    A: '',
    B: '',
    C: '',
    D: '',
    Ans: '',
    curtip:"",
    show: '',
    countj: true,
    bindcount: 0,
    errorcount: 0,
    rightcount: 0,
    count: 0,
    index: '',
    borA: "1rpx solid #FFF;",
    backcolorA: "rgba(0,0,0,0);",
    borB: "1rpx solid #FFF;",
    backcolorB: "rgba(0,0,0,0);",
    borC: "1rpx solid #FFF;",
    backcolorC: "rgba(0,0,0,0);",
    borD: "1rpx solid #FFF;",
    backcolorD: "rgba(0,0,0,0);",
    fontcolorA: "#FFF",
    fontcolorB: "#FFF",
    fontcolorC: "#FFF",
    fontcolorD: "#FFF",
    cflag: 0,
    eflag: 0,
    showcolor: '',
    length: 0
  },
  onReady: function () {
    this.refresh();
  },

  /** 
   * 生命周期函数--监听页面显示 
   */
  onShow: function () {
    var that = this;
    var questions = that.data.questions;
    this.setData({
      length: questions.length
    })
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
    return {
      title: '图论刷题',
      desc: '你准备好了吗',
      path: '/pages/index/index'
    }
  },
  refresh: function () {
    var that = this;
    var questions = that.data.questions;
    var questionsA = that.data.questionsA;
    var questionsB = that.data.questionsB;
    var questionsC = that.data.questionsC;
    var questionsD = that.data.questionsD;
    var tips = that.data.tips;
    var answer = that.data.answer;
    var bindcount = that.data.bindcount;
    var next = that.data.next;
    var index = Math.floor(Math.random() * (questions.length));
    if (questions.length > 0) {
      this.setData({
        questionbody: questions.splice(index, 1),
        A: questionsA.splice(index, 1),
        B: questionsB.splice(index, 1),
        C: questionsC.splice(index, 1),
        D: questionsD.splice(index, 1),
        Ans: answer.splice(index, 1),
        curtip:tips.splice(index,1),
        questions: questions,
        questionsA: questionsA,
        questionsB: questionsB,
        questionsC: questionsC,
        questionsD: questionsD,
        tips:tips,
        answer: answer,
        index: index,
        show: '',
        countj: true,
        bindcount: bindcount + 1,
        borA: "1rpx solid #FFF;",
        backcolorA: "rgba(0,0,0,0);",
        borB: "1rpx solid #FFF;",
        backcolorB: "rgba(0,0,0,0);",
        borC: "1rpx solid #FFF;",
        backcolorC: "rgba(0,0,0,0);",
        borD: "1rpx solid #FFF;",
        backcolorD: "rgba(0,0,0,0);",
        fontcolorA: "#FFF",
        fontcolorB: "#FFF",
        fontcolorC: "#FFF",
        fontcolorD: "#FFF",
        cflag: 0,
        eflag: 0
      })
    }
    else {
      wx.showModal({
        title: '温馨提示',
        content: '没题了',
        showCancel: false
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
      if (id == 'A') {
        this.setData({
          borA: "1rpx solid #00a57a;",
          backcolorA: "#FFF",
          fontcolorA: "#00a57a"
        })
      }
      else if (id == 'B') {
        this.setData({
          borB: "1rpx solid #00a57a;",
          backcolorB: "#FFF",
          fontcolorB: "#00a57a"
        })
      }
      else if (id == 'C') {
        this.setData({
          borC: "1rpx solid #00a57a;",
          backcolorC: "#FFF",
          fontcolorC: "#00a57a"
        })
      }
      else {
        this.setData({
          borD: "1rpx solid #00a57a;",
          backcolorD: "#FFF",
          fontcolorD: "#00a57a"
        })
      }

      if (id == num) {
        this.setData({
          show: '正确',
          count: count + 71,
          countj: false,
          rightcount: rightcount + 1,
          showcolor: '#ffc20f',
          cflag:1
        })
      }
      else {
        this.setData({
          show:'答案：' + num,
          countj: false,
          errorcount: errorcount + 1,
          showcolor: '#ee5757',
          eflag:1
        })
      }
    }
  },
  Call_tips: function () {
    var that = this;
    wx.showModal({
      title: '解析',
      content:that.data.curtip.toString(),
      showCancel: false
    })
  }
})