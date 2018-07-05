Page({
  data: {
    item:{
    questions: ['在一棵高度为k的满二叉树中,结点总数为( )', '以下哪一个数据结构是非线性的( )', '若一棵二叉树具有8个度为2的结点,5个度为1的结点,则度为0的结点个数是( )', '二叉查找树的查找效率与二叉树的树型有关, 在( )时其查找效率最低', '一棵左右子树不空的二叉树在先序线索化后,其空指针域数为( )', '任何一棵二叉树的叶子结点在先序、中序和后序遍历中的相对次序( )', '一棵二叉树中有3个叶子结点,有8个度为1的结点,则该二叉树中总的结点数为( )', '下列二叉排序树中查找效率最高的是( )', '对于一棵排序二叉树：( )遍历可以得到有序序列｡', '设结点x和y是二叉树中的任意两结点,若在先根序列中x在y之前,而后根序列中x在y之后,则x和y的关系是( )', '若要惟一地确定一棵二叉树,只需知道该二叉树的( )', '深度为k的完全二叉树中最少有( )个结点', '在一非空二叉树的中序遍历序列中,根结点的右边( )', '具有 12 个结点的完全二叉树有( )', '关于非空二叉树的性质,下面哪个结论不正确( )', '二叉树第K层上至多有( )个节点｡(从第1层开始)', '如果T1是由有序树T转换而来的二叉树,那么T中结点的先序序列就是T1中结点的( )序列', '将一颗有100个结点的完全二叉树从根这一层开始,进行广度遍历编号(从1开始编号),那么编号最小的叶节点的编号是( )', '对于有n个结点的二叉树,其高度为( )', '一棵二叉树高度为h(根的高度为1),所有结点的度或为0或为2,则这棵二叉树最少有( )个结点｡', '利用二叉链表存储树,则根结点的右指针是( )', '在二叉排序树(二叉搜索树)中,最小值结点的( )', '具有n个节点的完全二叉树的深度为(  )(向下取整)', '以下数据结构中,( )是非线性数据结构｡', '一棵二叉树的前序遍历序列为ABCDEFG,它的中序遍历序列可能( )', '设非空二叉树中度数为0的结点数为n0,度数为1的结点数为n1,度数为2的结点数为n2,则下列等式成立的是( )', '在下列存储形式中,哪一个不是树的存储形式?', '将一棵二叉树的根节点放入队列,然后将队头元素出队,将出队结点所有子节点入队,递归执行上述操作｡以下操作可以实现哪种遍历( )', '任何一个带权的无向连通图的最小生成树( )', '先序序列为a,b,c,d的不同二叉树的个数是( )', '二叉树的前序遍历和中序遍历序列如下:前序遍历:EFHIGJK;中序遍历:HFIEJKG｡该二叉树根的右子树的根是( )', '若一棵完全二叉树有768个结点,则该二叉树中叶结点的个数是( )', '引入二叉线索树的目的是( )', '(  )二叉排序树可以得到一个从小到大的有序序列｡', '将一棵有100个结点的完全二叉树从根这一层开始,开始进行层次遍历编号,那么编号最小的叶节点的编号为(根节点为1)｡', '下列二叉排序树中查找效率最高的是( )', '二叉树中的结点总数为49,若用二叉链表作为存储结构,则该二叉树中总共有多少个空指针域( )', '在下述论述中,正确的是( )\n1、只有一个结点的二叉树的度为0;\n2、二叉树的度为2;\n3、二叉树的左右子树可任意交换;\n4、深度为K的顺序二叉树的结点个数小于或等于深度相同的满二叉树｡', '二叉树在线索化后,仍不能有效求解的问题是( )','下列应用中,适合使用B+树的是( )'],

    questionsA: ['A.2k-1', 'A.二叉树', 'A.6', 'A.结点太多', 'A.0', 'A.不发生改变', 'A.12', 'A.平衡二叉树', 'A.前序', 'A.x是y的左兄弟', 'A.前序序列', 'A.2^(k-1)-1', 'A.只有右子树上的所有结点', 'A.5个叶子结点', 'A.有两个节点的节点一定比没有子节点的节点少一个n0 = n2 + 1', 'A.2K-1', 'A.先序', 'A.49', 'A.不确定', 'A.2h', 'A.指向最左孩子', 'A.左孩子一定为空指针', 'A.log2(n+1)-1', 'A.树', 'A.CABDEFG', 'A.n0=n1+n2', 'A.双亲表示法', 'A.前序遍历', 'A.只有一颗', 'A.13', 'A.E', 'A.257', 'A.加快查找结点的前驱或后继的速度', 'A.先序遍历', 'A.49', 'A.平衡二叉树', 'A.51', 'A.1,2,3', 'A.先序线索二叉树中求先序后继','A.编译器中的词法分析'],

    questionsB: ['B.2k', 'B.链表', 'B.9', 'B.完全二叉树', 'B.1', 'B.发生改变', 'B.13', 'B.二叉查找树', 'B.中序', 'B.x是y的右兄弟', 'B.中序序列', 'B.2^(k-1)', 'B.只有右子树上的部分结点', 'B.5个度为2的结点', 'B.根节点所在的层数为第0层,则第i层最多有2^i个节点', 'B.2^(K-1)', 'B.中序', 'B.50', 'B.log2n', 'B.2h-1', 'B.指向最右孩子', 'B.右孩子一定为空指针', 'B.log2n+1', 'B.字符串', 'B.ABCDEFG', 'B.n0=2n1+1', 'B.孩子链表表示法', 'B.中序遍历', 'B.有一棵或多棵', 'B.14', 'B.F', 'B.258', 'B.为了能在二叉树中方便的进行插入与删除', 'B.中序遍历', 'B.50', 'B.二叉查找树', 'B.52', 'B.2,3,4', 'B.中序线索二叉树中求中序后继','B.关系数据库系统中的索引'],

    questionsC: ['C.2k-1', 'C.线性表', 'C.11', 'C.呈单枝树', 'C.2', 'C.不能确定', 'C.14', 'C.没有左子树的二叉排序树', 'C.后序', 'C.x是y的祖先', 'C.前序和后序序列', 'C.2^(k-1)+1', 'C.只有左子树上的部分结点', 'C.7个分支结点', 'C.知道二叉树的前序遍历序列和中序遍历序列,则定可以推出后序遍历序列', 'C.2^K-1', 'C.后序', 'C.51', 'C.nlog2n+1', 'C.2h+1', 'C.空', 'C.左、右指针均为空', 'C.log2n-1', 'C.队', 'C.DACEFBG', 'C.n0=n2+1', 'C.孩子兄弟表示法', 'C.后序遍历', 'C.一定有多棵', 'C.15', 'C.G', 'C.384', 'C.为了能方便的找到双亲', 'C.后序遍', 'C.51', 'C.没有左子树的二叉排序树', 'C.50', 'C.2,4', 'C.中序线索二叉树中求中序前驱','C.网络中的路由表快速查找'],

    questionsD: ['D.[log2k]+1', 'D.栈', 'D.不确定', 'D.结点太复杂', 'D.不确定', 'D.以上都不对', 'D.15', 'D.没有右子树的二叉排序树', 'D.都可以', 'D.x是y的后代', 'D.中序和后序序列', 'D.2^k-1', 'D.只有左子树上的所有结点', 'D.2个度为1的结点', 'D.堆一定是一个完全二叉树', '', 'D.层次', 'D.52', 'D.n', 'D.h+1', 'D.非空', 'D.左、右指针均不为空', 'D.log2n', 'D.栈', 'D.ADCFEG', 'D.n0=n1+1', 'D.顺序存储表示法', 'D.层序遍历', 'D.可能不存在', 'D.16', 'D.H', 'D.385', 'D.使二叉树的遍历结果唯一', 'D.层次遍历', 'D.52', 'D.没有右子树的二叉排序树', 'D.49', 'D.1,4', 'D.后序线索二叉树中求后序后继','D.操作系统的磁盘空闲块管理'],

    answer: ['C','A','B','C','B','A','B','A','B','C','D','B','A','B','D','B','A','C','A','B','C','A','B','A','B','C','D','D','B','B','C','C','A','B','C','A','C','D','D','B'],

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
    }
  },
  onReady: function () {
    var that = this
    var item = that.data.item
    item.length = that.data.item.questions.length
    this.setData({
      item: item
    })
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
    return {
      title: '图论刷题',
      desc: '你准备好了吗',
      path: '/pages/index/index'
    }
  },
  refresh: function () {
    var that = this;
    var questions = that.data.item.questions;
    var questionsA = that.data.item.questionsA;
    var questionsB = that.data.item.questionsB;
    var questionsC = that.data.item.questionsC;
    var questionsD = that.data.item.questionsD;
    var answer = that.data.item.answer;
    var bindcount = that.data.item.bindcount;
    var next = that.data.item.next;
    var item = that.data.item
    var index = Math.floor(Math.random() * (questions.length));
    if (questions.length > 0) {
      item.questionbody = questions.splice(index, 1),
        item.A = questionsA.splice(index, 1),
        item.B = questionsB.splice(index, 1),
        item.C = questionsC.splice(index, 1),
        item.D = questionsD.splice(index, 1),
        item.Ans = answer.splice(index, 1),
        item.questions = questions,
        item.questionsA = questionsA,
        item.questionsB = questionsB,
        item.questionsC = questionsC,
        item.questionsD = questionsD,
        item.answer = answer,
        item.index = index,
        item.show = '',
        item.countj = true,
        item.bindcount = bindcount + 1,
        item.borA = "1rpx solid #FFF;",
        item.backcolorA = "rgba(0,0,0,0);",
        item.borB = "1rpx solid #FFF;",
        item.backcolorB = "rgba(0,0,0,0);",
        item.borC = "1rpx solid #FFF;",
        item.backcolorC = "rgba(0,0,0,0);",
        item.borD = "1rpx solid #FFF;",
        item.backcolorD = "rgba(0,0,0,0);",
        item.fontcolorA = "#FFF",
        item.fontcolorB = "#FFF",
        item.fontcolorC = "#FFF",
        item.fontcolorD = "#FFF",
        item.cflag = 0,
        item.eflag = 0
      this.setData({
        item: item
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
    var item = this.data.item;
    if (this.data.item.countj) {
      if (id == 'A') {
        item.borA = "1rpx solid #00a57a;",
          item.backcolorA = "#FFF",
          item.fontcolorA = "#00a57a"
      }
      else if (id == 'B') {
        item.borB = "1rpx solid #00a57a;",
          item.backcolorB = "#FFF",
          item.fontcolorB = "#00a57a"
      }
      else if (id == 'C') {
        item.borC = "1rpx solid #00a57a;",
          item.backcolorC = "#FFF",
          item.fontcolorC = "#00a57a"
      }
      else {
        item.borD = "1rpx solid #00a57a;",
          item.backcolorD = "#FFF",
          item.fontcolorD = "#00a57a"
      }

      if (id == num) {
        item.show = '正确',
          item.count = count + 71,
          item.countj = false,
          item.rightcount = rightcount + 1,
          item.showcolor = '#ffc20f',
          item.cflag = 1;
        if (this.data.item.rightcount == 32) {
          wx.showModal({
            title: '中彩蛋啦',
            content: '一次答对' + this.data.item.rightcount + '道题,快去找贺老师领取奖品',
            showCancel: false
          })
          item.rightcount = 0
        }
      }
      else {
        item.show = '答案：' + num,
          item.countj = false,
          item.errorcount = errorcount + 1,
          item.showcolor = '#ee5757',
          item.eflag = 1
      }
    }
    this.setData({
      item: item
    })
  },
  Call_tips: function () {
    wx.showModal({
      title: '解析',
      content: '此题暂无解析',
      showCancel: false
    })
  }
})