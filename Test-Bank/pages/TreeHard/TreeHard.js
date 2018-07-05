Page({
  data: {
    item:{
    questions: ['设F是由T1、T2和T3三棵树组成的森林,与F对应的二叉树为B,T1、T2和T3的结点数分别为N1、N2和N3,则二叉树B的根结点的左子树的结点数为( )', '一棵二叉树的中序遍历序列：badce,后序遍历序列：bdeca,则二叉树先序遍历序列为( )', '分别以下列序列构造二叉排序树,与用其它三个序列所构造的结果不同的是( )', '深度为7的二叉树共有127个结点,则下列说法中错误的是( )', '一棵树的前序遍历是”GDAFEMHZ”,中序遍历”ADEFGHMZ”,则后序遍历为( )', '某二叉树结点的中序序列为BDAECF,后序序列为DBEFCA,则该二叉树对应的森林包括( )棵树', '使用一个长度最大为150的队列,对满二叉树进行广度优先遍历时,能够容纳的二叉树的最大深度为( )｡(第一层深度为1)', '集合中任何两个元素都可以比较大小,但比较不满足传递性,则以下说法正确的有( )', '某二叉树中序序列为A,B,C,D,E,F,G, 后序序列为B,D,C,A,F,G,E 则前序序列是( )', '一个包含n个节点的四叉树,每个节点都有四个指向孩子节点的指针,这4n个指针中有多少个空指针( )', '设X是树T中的一个非根结点,B是T所对应的二叉树,在B中X是其双亲的右孩子,下列结论正确的是( )', '关于哈弗曼树,下列说法错误的是( )', '一个具有767个节点的完全二叉树,其叶子节点个数为( )', '初始序列为1 8 6 2 5 4 7 3的一组数采用堆排序,当建堆(小根堆)完毕时,堆所对应的二叉树中序遍历序列为：( )', 'm阶B-树是一棵( )', '在平衡二叉树中插入一个结点后造成了不平衡,设最低的不平衡结点为A,并已知A的左孩子的平衡因子为0,右孩子的平衡因子为1,则应作( )型调整以使其平衡', '关于二叉树,下面说法正确的是( )', '线索二叉树中某结点R没有左孩子的充要条件是( )', '二叉树的前序遍历和中序遍历序列如下:前序遍历:EFHIGJK;中序遍历:HFIEJKG｡该二叉树根的右子树的根是( )', '若一棵具有n(n>0)个结点的二叉树的先序序列与后序序列正好相反,则该二叉树一定( )', '下列关于m阶B-树的说法错误的是( )', '下列选项给出的是从根分别到达两个叶结点路径上的权值序列,能属于同一棵哈夫曼树的是( )', '设完全二叉树的第5层上有10个叶子结点,则二叉树最少有( )个结点｡', '线索化二叉树中某结点D,没有左孩子的主要条件是( )', '设一棵完全二叉树中有65个结点,则该完全二叉树的深度为( )', '若二叉树T2是由树T1转换而来的二叉树,那么T1中结点的先序就是T2中结点的( )', '若一颗二叉树的前序遍历为a,e,b,d,c,后序遍历为b,c,d,e,a,则根节点的孩子节点( )', '对n(n≥2)个权值均不相同的字符构成哈夫曼树,下列关于该哈弗曼树的叙述中,错误的是( )', '给定n个节点的平衡二叉搜索树,每个节点的值是整数｡给定一个整数,在树中找出与该整数最接近的节点的最小算法复杂度是( )', '一棵124个叶结点的完全二叉树,最多有( )个结点', '下列关于m阶B-树的说法错误的是( )', '在一棵具有15个关键字的4阶B树中,含关键字的结点个数最多是( )', '由3个结点可以构造出多少种不同的有向树(不区分节点,但是区分左右子树)?( )', '用三叉链表作二叉树的存储结构,当二叉树中有n个结点时,有( )个空指针｡', '已知一棵完全二叉树的第6层(设根为第1层)有8个叶结点,则完全二叉树的结点个数最多是( )', '某二叉树的先序遍历是12453,中序遍历是42513,那么其后续遍历是( )', '以下序列中不可能是一棵二叉查找树的后序遍历结构的是( )', '下列选项给出的是从根分别到达两个叶结点路径上的权值序列,能属于同一棵哈夫曼树的是( )','在一颗度为4的树T中,若有20个度为4的结点,10个度为3的结点,1个度为2的结点,10个度为1的结点,则树T的叶结点个数( )'],

    questionsA: ['A.N1-1', 'A.adbce', 'A.(100,80,90,60,120,110,130)', 'A.该二叉树有一个度为1的结点', 'A.ADEFGHMZ', 'A.1', 'A.8', 'A.通过建立二叉搜索树索引使得在集合中查找元素的时间复杂度降到O(logN)', 'A.E,G,F,A,C,D,B', 'A.2n+1', 'A.在树T中,X是其双亲的第一个孩子', 'A.为字符编码需要从叶节点开始再向上', 'A.383', 'A.8 3 2 5 1 6 4 7', 'A.m叉排序树', 'A.LL', 'A.对于N个节点的二叉树,其高度为nlog2n', 'A.R.lchild=NULL', 'A.E', 'A.结点均无左孩子的二叉树', 'A.根结点至多有m棵子树', 'A.24,10,5 和 24,10,7', 'A.20', 'A.D->Lchild=NULL', 'A.8', 'A.先序', 'A.只有e', 'A.该树一定是一棵完全二叉树', 'A.O(logn)', 'A.247', 'A.根结点至多有m棵子树', 'A.5', 'A.2', 'A.n+1', 'A.39', 'A.45231', 'A.1,2,3,4,5','A.24,10,5 和 24,10,7','A.41'],

    questionsB: ['B.N2-1', 'B.decab', 'B.(100,120,110,130,80,60,90)', 'B.该二叉树是满二叉树', 'B.DAEFHZMG', 'B.2', 'B.10', 'B.进行快排排序后用二分查找可使查找元素时间复杂度降到O(logN)', 'B.E,A,C,B,D,G,F', 'B.3n-1', 'B.在树T中,X一定无右兄弟', 'B.哈弗曼树可以通过在优先级队列中的插入和移除操作来创建', 'B.384', 'B.3 2 8 5 1 4 6 7', 'B.m叉平衡排序树', 'B.LR', 'B.一个具有1025个节点的二叉树,其高度范围在10~1025之间', 'B.R.ltag=0', 'B.F', 'B.结点均无右孩子的二叉树', 'B.所有叶子都在同一层次上', 'B.24,10,5 和 24,12,7', 'B.32', 'B.D->ltag=1', 'B.7', 'B.中序', 'B.有e,b', 'B.树中一定没有度为1的结点', 'B.O(n^2)', 'B.248', 'B.所有叶子都在同一层次上', 'B.6', 'B.3', 'B.n', 'B.52', 'B.42351', 'B.3,5,1,4,2','B.24,10,5 和 24,12,7','B.82'],

    questionsC: ['C.N2+N3', 'C.debac', 'C.(100,60,80,90,120,110,130)', 'C.该二叉树是完全二叉树', 'C.AEFDHZMG', 'C.3', 'C.9', 'C.通过B树索引使得在集合中查找元素的时间复杂度降到O(logN)', 'C.E,A,G,C,F,B,D', 'C.3n', 'C.在树T中,X一定是叶结点', 'C.最常出现的字符总是在靠近树顶附近出现', 'C.385', 'C.3 8 2 5 1 6 7 4', 'C.m-1叉平衡排序树', 'C.RL', 'C.先序遍历是EFHIGJK,中序遍历为HFIEJKG,该二叉树的右子树的根为G', 'C.R.ltag=1', 'C.G', 'C.高度为n的二叉树', 'C.非叶结点至少有m/2(m为偶数)或m/2+1(m为奇数)棵子树', 'C.24,10,10 和 24,14,11', 'C.50', 'C.D->Rchild=NULL', 'C.6', 'C.后序', 'C.有e,c', 'C.树中两个权值最小的结点一定是兄弟结点', 'C.O(nlogn)', 'C.249', 'C.非叶结点至少有m/2(m为偶数)或m/2+1(m为奇数)棵子树', 'C.10', 'C.4', 'C.n+2', 'C.111', 'C.12345', 'C.1,2,5,4,3','C.24,10,10 和 24,14,11','C.113'],

    questionsD: ['D.N1+N3', 'D.abcde', 'D.(100,80,60,90,120,130,110)', 'D.该二叉树有64个叶子结点', 'D.AFEDHMZG', 'D.4', 'D.7', 'D.通过hash索引使得在集合中查找元素的时间复杂度降到O(1)', 'D.上面的都不对', 'D.3n+1', 'D.在树T中,X一定有左兄弟', 'D.通常,信息解码需要重复的顺着根到叶的路径走', 'D.386', 'D.8 2 3 5 1 4 7 6', 'D.m+1叉平衡排序树', 'D.RR', 'D.二叉树中至少有一个节点的度为2', 'D.R.rchild=NULL', 'D.H', 'D.存在度为2的结点的二叉树', 'D根结点中的数据是有序的.', 'D.24,10,5 和 24,14,6', 'D.25', 'D.D->ltag=0', 'D.5', 'D.无对应关系', 'D.不确定', 'D.树中任一非叶结点的权值一定不小于下一层任一结点的权值', 'D.O(n)', 'D.250', 'D.根结点中的数据是有序的', 'D.15', 'D.5', 'D.n-1', 'D.119', 'D.54321', 'D.5,4,3,2,1','D.24,10,5 和 24,14,6','D.122'],

    answer: ['A','D','C','A','C','C','A','D','B','D','D','A','B','A','B','C','C','C','C','C','C','D','D','B','B','A','A','A','A','B','C','D','D','C','C','A','B','D','B'],

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