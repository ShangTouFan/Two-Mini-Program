Page({
  data: {
    questions: ['在一棵高度为k的满二叉树中,结点总数为( )', '以下哪一个数据结构是非线性的( )', '若一棵二叉树具有8个度为2的结点,5个度为1的结点,则度为0的结点个数是( )', '二叉查找树的查找效率与二叉树的树型有关, 在( )时其查找效率最低', '一棵左右子树不空的二叉树在先序线索化后,其空指针域数为( )', '任何一棵二叉树的叶子结点在先序、中序和后序遍历中的相对次序( )', '一棵二叉树中有3个叶子结点,有8个度为1的结点,则该二叉树中总的结点数为( )', '下列二叉排序树中查找效率最高的是( )', '对于一棵排序二叉树：( )遍历可以得到有序序列｡', '设结点x和y是二叉树中的任意两结点,若在先根序列中x在y之前,而后根序列中x在y之后,则x和y的关系是( )', '若要惟一地确定一棵二叉树,只需知道该二叉树的( )', '深度为k的完全二叉树中最少有( )个结点', '在一非空二叉树的中序遍历序列中,根结点的右边( )', '具有 12 个结点的完全二叉树有( )', '关于非空二叉树的性质,下面哪个结论不正确( )', '二叉树第K层上至多有( )个节点｡(从第1层开始)', '如果T1是由有序树T转换而来的二叉树,那么T中结点的先序序列就是T1中结点的( )序列', '将一颗有100个结点的完全二叉树从根这一层开始,进行广度遍历编号(从1开始编号),那么编号最小的叶节点的编号是( )', '对于有n个结点的二叉树,其高度为( )', '一棵二叉树高度为h(根的高度为1),所有结点的度或为0或为2,则这棵二叉树最少有( )个结点｡','利用二叉链表存储树,则根结点的右指针是( )'],

    questionsA: ['A.2k-1', 'A.二叉树', 'A.6', 'A.结点太多', 'A.0', 'A.不发生改变', 'A.12', 'A.平衡二叉树', 'A.前序', 'A.x是y的左兄弟', 'A.前序序列', 'A.2^(k-1)-1', 'A.只有右子树上的所有结点', 'A.5个叶子结点', 'A.有两个节点的节点一定比没有子节点的节点少一个n0 = n2 + 1', 'A.2K-1', 'A.先序', 'A.49', 'A.不确定', 'A.2h','A.指向最左孩子'],

    questionsB: ['B.2k', 'B.链表', 'B.9', 'B.完全二叉树', 'B.1', 'B.发生改变', 'B.13', 'B.二叉查找树', 'B.中序', 'B.x是y的右兄弟', 'B.中序序列', 'B.2^(k-1)', 'B.只有右子树上的部分结点', 'B.5个度为2的结点', 'B.根节点所在的层数为第0层,则第i层最多有2^i个节点', 'B.2^(K-1)', 'B.中序', 'B.50', 'B.log2n', 'B.2h-1','B.指向最右孩子'],

    questionsC: ['C.2k-1', 'C.线性表', 'C.11', 'C.呈单枝树', 'C.2', 'C.不能确定', 'C.14', 'C.没有左子树的二叉排序树', 'C.后序', 'C.x是y的祖先', 'C.前序和后序序列', 'C.2^(k-1)+1', 'C.只有左子树上的部分结点', 'C.7个分支结点', 'C.若知道二叉树的前序遍历序列和中序遍历序列,则一定可以推出后序遍历序列', 'C.2^K-1', 'C.后序', 'C.51', 'C.nlog2n+1', 'C.2h+1','C.空'],

    questionsD: ['D.[log2k]+1', 'D.栈', 'D.不确定', 'D.结点太复杂', 'D.不确定', 'D.以上都不对', 'D.15', 'D.没有右子树的二叉排序树', 'D.都可以', 'D.x是y的后代', 'D.中序和后序序列', 'D.2^k-1', 'D.只有左子树上的所有结点', 'D.2个度为1的结点', 'D.堆一定是一个完全二叉树', '', 'D.层次', 'D.52', 'D.n', 'D.h+1','D.非空'],

    answer: ['C','A','B','C','B','A','B','A','B','C','D','B','A','B','D','B','A','C','A','B','C'],

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
    var that = this;
    wx.showModal({
      title: '解析',
      content: '此题暂无解析',
      showCancel: false
    })
  }
})