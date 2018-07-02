Page({
  data: {
    questions: ['下面排序算法中,出现：初始数据有序时,花费的时间反而最多的情况是( )', '对待排序的元素序列进行划分,将其分为左、右两个子序列,再对两个子序列施加同样的排序操作,直到子序列为空或只剩一个元素为止｡这样的排序方法是( )', '若需在O(nlog2n)的时间内完成对数组的排序,且要求排序是稳定的,则排序方法是( )', '将5不同的数据进行交换排序,至多需要比较多少次( )', '以下哪种排序算法的最坏时间复杂度可以做到O(nlogn)( )', '下述几种排序方法中,要求内存最大的是( )', '下面( )排序算法在输入数据逆序情况下排序速度最快', '假设你只有100Mb的内存,需要对1Gb的数据进行排序,最合适的算法是( )', '堆排序平均执行的时间复杂度和需要附加的存储空间复杂度分别是( )', '下列排序算法中,元素的移动次数与关键字的初始排列次序无关的是( )', '为实现快速排序算法,待排序序列宜采用的存储方式是( )', '希尔排序的组内排序采用的是( )', '从1000个数据元素中选五个最小的,下面排序算法中,那个算法最快?', '快速排序在最坏情况下的时间复杂度为( )', '快速排序在下列哪种情况下最易发挥其长处( )', '关于排序算法的以下说法,正确的是( )', '于排序算法下列说法正确的是( )', '对同一待排序序列分别进行折半插入排序和直接插入排序,两者之间的不同之处是( )', '若用起泡排序方法对序列{10,14,26,29,41,52}从大到小排序,需进行( )次比较','在下列排序算法中,哪一个算法的时间复杂度与初始排序无关( )'],

    questionsA: ['A.堆排序', 'A.直接选择排序', 'A.快速排序', 'A.9', 'A.归并排序', 'A.快速排序', 'A.归并排序', 'A.归并排序', 'A.O(N2)和O(1)', 'A.直接插入排序', 'A.顺序存储', 'A.直接插入排序', 'A.希尔排序', 'A.O(log2n)', 'A.被排序的数据已基本有序', 'A.快速排序的平均时间复杂度为O(nlogn),最坏时间复杂度为O(nlogn)', 'A.快速排序在被排序的数据完全无序时最易发挥其长处', 'A.排序的总趟数', 'A.3','A.直接插入排序'],

    questionsB: ['B.冒泡排序', 'B.直接插入排序', 'B.堆排序', 'B.10', 'B.快速排序', 'B.插入排序', 'B.直接插入排序', 'B.插入排序', 'B.O(Nlog2N)和O(1)', 'B.起泡排序', 'B.散列存储', 'B.折半插入排序', 'B.快速排序', 'B.O(nlog2n)', 'B.被排序的数据中含有多个相同排序码', 'B.堆排序的平均时间复杂度为O(nlogn),最坏时间复杂度为O(n^2)', 'B.快速排序是稳定的排序算法', 'B.元素的移动次数', 'B.10','B.气泡排序'],

    questionsC: ['C.快速排序', 'C.快速排序', 'C.归并排序', 'C.15', 'C.冒泡排序', 'C.选择排序', 'C.冒泡排序', 'C.快速排序', 'C.O(Nlog2N)和O(N)', 'C.基数排序', 'C.链式存储', 'C.快速排序', 'C.堆排序', 'C.O(n)', 'C.被排序的数据完全无序', 'C.冒泡排序的平均时间复杂度为O(n^2),最坏时间复杂度为O(n^2)', 'C.堆排序最好情况和最坏情况下时间复杂度不同', 'C.使用辅助空间的数量', 'C.15','C.快速排序'],

    questionsD: ['D.希尔(Shell)排序', 'D.起泡排序', 'D.直接插入排序', 'D.20', 'D.插入排序', 'D.归并排序', 'D.简单选择排序', 'D.冒泡排序', 'D.O(N2)和O(N)', 'D.快速排序', 'D.索引存储', 'D.归并排序', 'D.简单选择排序', 'D.O(n*n)', 'D.被排序的数据中的最大值和最小值相差悬殊', 'D.归并排序的平均时间复杂度为O(nlogn),最坏时间复杂度为O(n^2)', 'D.快速排序所需的辅助空间少于堆排序', 'D.元素之间的比较次数', 'D.25','D.直接选择排序'],

    answer: ['C','C','C','B','A','D','A','A','B','C','A','A','C','D','C','A','D','C','D'],

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
    showcolor: '',
    length: 0,
    cflag: 0,
    eflag: 0
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
        questions: questions,
        questionsA: questionsA,
        questionsB: questionsB,
        questionsC: questionsC,
        questionsD: questionsD,
        answer: answer,
        index: index,
        show: '',
        countj: true,
        cflag: 0,
        eflag: 0,
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
          cflag: 1
        })
      }
      else {
        this.setData({
          show: '答案：' + num,
          countj: false,
          errorcount: errorcount + 1,
          showcolor: '#ee5757',
          eflag: 1
        })
      }
    }
  },
  Call_tips: function () {
    wx.showModal({
      title: '解析',
      content: '此题暂无解析',
      showCancel: false
    })
  }
})