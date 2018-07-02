Page({
  data: {
    questions: ['输入序列为ABC,可以变为CBA时,经过的栈操作为( )', '下列关于栈的叙述中,错误的是( )\nⅠ.采用非递归方式重写递归程序时必须使用栈\nⅡ.函数调用时,系统要用栈保存必要的信息\nⅢ.只要确定了入桟次序,即可确定出栈次序\nⅣ.栈是一种受限的线性表,允许在其两端进行操作', '堆栈和队列的共同点是( )', ' 以下哪一个不是栈的基本运算?', '下列关于栈的叙述中正确的是( )', '设计一个判别表达式中左、右括号是否配对出现的算法,采用( )数据结构最佳｡', '设将整数1,2,3,4,5依次进栈,最后都出栈,出栈可以在任何时刻(只要栈不空)进行,则出栈序列不可能是( )', '若一个栈的输入顺序是1,2,…,n,输出序列的第一个元素是n,则第i(1<=i<=n)个输出元素是( )', '需要频繁的插入删除操作使用什么结构比较合适?', '采用顺序存储的栈,执行入栈运算,栈顶指针的变化是( )', '向一个栈顶指针为h的带头结点的链栈中插入指针s所指的结点时,应执行( )', '如果一个堆栈的入栈序列是A,B,C,D,E,则堆栈的不可能输出顺序是( )', '将一个递归算法改为对应的非递归算法时,通常需要使用( )', '后缀式 ab+cd+/可用表达式( )来表示', '在栈中,( )保持不变｡', '下面数据结构能够支持随机的插入和删除操作、并具有较好的性能的是____｡', '一个栈的入栈序列为1,2,3,...,n,其出栈序列是p1,p2,p3,...pn ｡若p2 = 3,则p3可能取值的个数是( )', '已知操作符包括\'+\'、\'-\'、\'*\'、\'/\'、\'(\'和\')\'｡将中缀表达式a+b-a*((c+d)/e-f)+g 转换为后缀表达式ab+acd+e/f-*-g+时,用栈来存放暂时还不能确定运算次序的操作符｡若栈初始时为空,则转换过程中同时保存在栈中的操作符的最大个数是( )', '递归式的先序遍历一个n节点,深度为d的二叉树,需要栈空间的大小为_____｡', '以下关于栈的说法正确的是( )', '下面的描述错误的是( )', '以下数据结构中,( )是非线性数据结构', '设循环队列中数组的下标范围是1~n,其头尾指针分别为f和r,则其元素个数为。', '将新元素插入到链式队列中时,新元素只能插入到( )', '一个队列的入队序列是1,2,3,4,则队列的输出序列是( )', '判定一个循环队列qu(最多元素为MaxSize)为空的条件是( )', '递归算法一般需要利用哪种数据结构实现?', '设栈S和队列Q的初始状态均为空,元素a,b,c,d,e,f,g依次进入栈S｡若每个元素出栈后立即进入推列Q,且7个元素出队的顺序是b,d,,c,f,e,a,g,则栈S的容量至少是( )', '栈在( )中应用', '输入序列ABCABC经过栈操作变成ABCCBA,下面哪个是可能的栈操作?', '下列叙述中正确的是?','栈底至栈顶一次存放A,B,C,D四个元素,在第五个元素E入栈前,栈中元素可以出栈,则出栈序列可能是( )'],

    questionsA: ['A.push,pop,push,pop,push,pop', 'A.仅I', 'A.都是先进后出', 'A.删除栈顶元素', 'A.在栈中只能插入数据', 'A.线性表的顺序存储结构', 'A.23415', 'A.n-i', 'A.数组', 'A.top++', 'A.h->next=s;', 'A.EDCBA', 'A.优先队列', 'A.a+b/c+d', 'A.栈的顶', 'A.数组和链表', 'A.n-3', 'A.5', 'A.O(n)', 'A.在栈空的情况下,一定不能作出栈操作,否则产生溢出', 'A.栈只能在一端进行入栈和出栈操作', 'A.树', 'A.r-f', 'A.链头', 'A.4,3,2,1', 'A.qu->rear – qu->front==MaxSize', 'A.数组', 'A.1', 'A.递归调用', 'A.push pop push pop push push pop push push pop pop pop', 'A.线性表是线性结构','A.ABCDE'],

    questionsB: ['B.push,push,push,pop,pop,pop', 'B.仅I、Ⅱ、Ⅲ', 'B.都是先进先出', 'B.删除栈底元素', 'B.在栈中只能删除数据', 'B.队列', 'B.54132', 'B.n-i-1', 'B.队列', 'B.top--', 'B.s->next=h;', 'B.DECBA', 'B.队列', 'B.(a+b)/c+d', 'B.栈的底', 'B.链表和哈希表', 'B.n-2', 'B.7', 'B.O(d)', 'B.栈一定是顺序存储的线性结构', 'B.队列在一端进行入队操作,另一端进行出队操作', 'B.字符串', 'B.r-f+1', 'B.链尾', 'B.1,2,3,4', 'B.qu->rear – qu->front-1==MaxSize', 'B.链表', 'B.2', 'B.子程序调用', 'B.push push push push push push pop pop pop pop pop pop', 'B.栈与队列是非线性结构','B.DECAB'],

    questionsC: ['C.push,push,pop,pop,push,pop', 'C.仅I、Ⅲ、Ⅳ', 'C.只允许在端点处插入和删除元素', 'C.判定栈是否为空', 'C.栈是先进先出的线性表', 'C.线性表的链式存储结构', 'C.23145', 'C.i+1', 'C.链表', 'C.不变', 'C.s->next=h;h->next=s;', 'C.DCEAB', 'C.循环队列', 'C.a+b/(c+d)', 'C.栈指针', 'C.堆栈和双向队列', 'C.n-1', 'C.8', 'C.O(logn)', 'C.空栈是所有元素都为0的栈', 'C.栈和队列都是"先进后出"', 'C.队', 'C.(r-f)%n+1', 'C.链中', 'C.1,4,3,2', 'C.qu->rear == qu->front', 'C.队列', 'C.3', 'C.表达式求值', 'C.push push push pop pop pop pushpush pop pop push pop', 'C.线性链表是非线性结构','C.DCEBA'],

    questionsD: ['D.push,pop,push,push,pop,pop', 'D.仅Ⅱ、Ⅲ、Ⅳ', 'D.没有共同点', 'D.将栈置为空栈', 'D.栈是先进后出的线性表', 'D.栈', 'D.15432', 'D.n-i+1', 'D.栈', 'D.(top++)++', 'D.s->next=h->next;h->next=s;', 'D.ABCDE', 'D.栈', 'D.(a+b)/(c+d)', 'D.栈中的数据', 'D.队列和堆栈', 'D.无法确定', 'D.11', 'D.O(nlogn)', 'D.一个栈的输入序列为：A,B,C,D,可以得到输出序列：C,A,B,D', 'D.链表的各个元素在内存中的保持位置可以是不连续的', 'D.栈', 'D.(r-f+n)%n', 'D.第i个位置,i大于等于1,大于等于表长加1', 'D.3,2,4,1', 'D.qu->rear = qu->front -1', 'D.栈', 'D.4', 'D.以上答案均正确', 'D.push push push push pop push pop push pop pop pop pop', 'D.二叉树是线性结构','D.CDEAB'],

    answer: ['B','C','C','B','D','D','B','D','C','A','D','C','D','D','B','B','C','A','B','A','C','A','D','B','B','C','D','C','D','D','A','C'],

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