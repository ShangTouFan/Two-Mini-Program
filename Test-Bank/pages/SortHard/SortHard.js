Page({
  data: {
    questions: ['设一组初始记录关键字序列(5,2,6,3,8),以第一个记录关键字5为基准进行一趟快速排序的结果为( )', '数据序列(8,9,10,4,5,6,20,1,2)只能是下列排序算法中的( )的两趟排序后的结果', '将两个各有N个元素的有序表归并成一个有序表,其最少的比较次数是( )', '用直接插入排序方法对下面4个序列进行排序(由小到大),元素比较次数最少的是( )', '一组记录的关键字为(46,79,56,38,40,84),则利用快速排序的方法,以第一个记录为基准得到的一次划分结果为( )', '对数列(25,84,21,47,15,27,68,35,20)进行排序,元素序列的变化情况如下,则选用的排序方法是( )\n(1)25,84,21,47,15,27,68,35,20\n(2)20,15,21,25,47,27,68,35,84\n(3)15,20,21,25,35,27,47,68,84\n(4)15,20,21,25,27,35,47,68,84', '对n个元素的数组进行快速排序,所需要的额外空间为( )', '一台机器对200个单词进行排序花了200秒(使用冒泡排序),那么花费800秒,大概可以对多少个单词进行排序( )', '将整数数组(7-6-3-5-4-1-2)按照堆排序的方式原地进行升序排列,请问在第一轮排序结束之后,数组的顺序是( )', '对序列{15,9,7,8,20,-1,4}进行排序,进行一趟后数据的排列变为{4,9,-1,8,20,7,15};则采用的排序是( )', '设一组初始记录关键字序列为(50,40,95,20,15,70,60,45),则以增量d=4的一趟希尔排序结束后前4条记录关键字为( )', '排序过程中,对尚未确定最终位置的所有元素进行一遍处理称为一趟排序｡下列排序方法中,每一趟排序结束时都至少能够确定一个元素最终位置的方法是( )\nⅠ.简单选择排序  Ⅱ.希尔排序  Ⅲ.快速排序  Ⅳ.堆排序  Ⅴ.二路归并排序', '利用归并排序方法对数字序列：5,19,17,21,11,8,1进行排序,共需要进行( )次比较', '将N条长度均为M的有序链表进行合并,合并以后的链表也保持有序,时间复杂度为( )', '对n个记录的线性表进行快速排序为减少算法的递归深度,以下叙述正确的是( )', '对序列{15,9,7,8,20,-1,4}用希尔排序方法排序,经一趟后序列变为{15,-1,4,8,20,9,7}则该次采用的增量是( )', '字符序列｛Q,H,C,Y,P,A,M,S,R,D,F,X｝,新序列{F,H,C,D,P,A,M,Q,R,S,Y,X},是下列( )排序算法一趟扫描的结果｡', '以下程序段的功能是( )\nint a[]={4,0,2,3,1},i,j,t;\nfor(i=1;i<5;i++){t=a[i];j=i-1;\nwhile(j>=0&&t>a[j]){\na[j+1]=a[j];\n--j;}\na[j+1]=t;}', '对下列关键字序列用快速排序法进行排序时,速度最快的情形是( )','设有n个待排序的记录关键字,则在堆排序中需要( )个辅助记录单元'],

    questionsA: ['A.2,3,5,8,6', 'A.选择排序', 'A.N', 'A.94,32,40,90,80,46,21,69', 'A.38,40,46,56,84,79', 'A.快速排序', 'A.O(1)', 'A.400', 'A.2-6-3-5-4-1-7', 'A.选择排序', 'A.40,50,20,95', 'A.仅Ⅰ、 Ⅲ、 Ⅳ', 'A.10', 'A.O(N*M*logN)', 'A.每次分区后,先处理较短的部分', 'A.1', 'A.二路归并排序', 'A.对数组a进行插入排序(升序)','A.{21,25,5,17,9,23,30}','A.1'],

    questionsB: ['B.3,2,5,8,6', 'B.起泡排序', 'B.2N-1', 'B.32,40,21,46,69,94,90,80', 'B.40,38,46,79,56,84', 'B.简单选择排序', 'B.O(n)', 'B.500', 'B.6-2-3-5-4-1-7', 'B.快速排序', 'B.15,40,60,20', 'B.仅Ⅰ、 Ⅲ、 Ⅴ', 'B.11', 'B.O(N*M)', 'B.每次分区后,先处理较长的部分', 'B.4', 'B.快速排序', 'B.对数组a进行插入排序(降序)','B.{25,23,30,17,21,5,9}','B.n'],

    questionsC: ['C.3,2,5,6,8', 'C.插入排序', 'C.2N', 'C.21,32,46,40,80,69,90,94', 'C.40,38,46,56,79,84', 'C.希尔排序', 'C.O(logn)', 'C.600', 'C.6-5-3-2-4-1-7', 'C.希尔排序', 'C.15,20,40,45', 'C.仅Ⅱ、 Ⅲ、 Ⅳ', 'C.12', 'C.O(N)', 'C.与算法每次分区后的处理顺序无关', 'C.3', 'C.堆排序', 'C.对数组a进行选择排序(升序)','C.{21,9,17,30,25,23,5}','C.nlog2n'],

    questionsD: ['D.2,3,6,5,8', 'D.堆排序', 'D.N-1', 'D.90,69,80,46,21,32,94,40', 'D.40,38,46,84,56,79', 'D.归并排序', 'D.O(n^2))', 'D.800', 'D.1-5-3-2-4-6-7', 'D.起泡排序', 'D.45,40,15,20', 'D.仅Ⅲ、 Ⅳ、 Ⅴ', 'D.14', 'D.O(M)', 'D.以上三者都不对', 'D.2', 'D.冒泡排序', 'D.对数组a进行选择排序(降序)','D.{5,9,17,21,23,25,30}','D.n^2'],

    answer: ['C','C','A','C','C','A','C','A','C','C','B','A','B','A','A','B','B','B','A','A'],

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