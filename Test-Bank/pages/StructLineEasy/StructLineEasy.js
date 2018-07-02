Page({
  data: {
    questions: ['链表要求元素的存储地址( )', '在具有n个结点的单链表中,实现( )的操作,其算法的时间复杂度都是O(n)。', '在一个单链表中,q的前一个节点为p,删除q所指向节点,则执行( )', '若频繁删除某线性表的第1个元素，则不宜采用以下哪种存储方式', '设有100个元素的有序表，采用折半查找方法，成功时最大的比较次数是( )', '有一个有序表为{1,3,9,12,32,41,45,62,75,77,82,95,100},当二分查找值82为的结点时,______次比较后查找成功。', '下列叙述中正确的是?', '单链表的存储密度( )', '设指针q指向单链表中结点A,指针p指向单链表中结点A的后继结点B,指针s指向被插入的结点X,则在结点A和结点B插入结点X的操作序列为( )', '在双向链表存储结构中,删除p所指的结点时须修改指针( )', '在顺序表中,只要知道_______,就可在相同时间内求出任一结点的存储地址｡', '在一个单链表中,若p所指的结点不是最后结点,在p所指结点之后插进s所指结点,则应执行操纵( )', '下列链表中,其逻辑结构属于非线性结构的是( )', '对于双向循环链表,每个结点有两个指针域prior和next,分别指向前驱和后继｡在p指针所指向的结点之后插入s指针所指结点的操作应为?', '对于顺序存储的线性表,访问结点和增加结点的时间复杂度为( )', '若某线性表最常用的操作是存取任一指定序号的元素和在最后进行插入和删除运算,则利用()存储方式最节省时间｡', '与单链表相比,双链表的优点之一是( )', '.在一个长度为n的单链表的第i(0<=i<n)个元素后面插入一个元素时,需要向后移动( )个元素｡', '以下描述中错误的是( )', '静态链表中指针表示的是( )', '带头结点head的单向循环链表L为空的判断条件是( )', '在长度为n的顺序表的第i(1<=i<=n)个位置上删除一个元素,元素的移动次数为( )', '在双向链表存储结构中,删除p所指的结点时需要修改指针_____｡', '若线性表最常用的操作是存取第i个元素及其前趋的值,则采用( )存储方式节省时间', '在等概率情况下,顺序表的插入操作要移动_____结点｡', '链表不具有的特点是(  )', '在双向循环链表中,在p所指的结点之后插入s指针所指的结点,其操作是____｡', '有一个单向链表队列中有一个A、B两个相邻元素,有一个指针p指向元素A,现将一个指针r指向的S元素要插入到A和B之间,该进行操作( )', '在一个具有n个结点有序单链表中插入一个新结点并仍然保持有序的时间复杂度是( )', '在单链表中,要将s所指结点插入到p所指结点之后,其语句应为( )', '单循环链表的主要优点是( )', '能用二分法进行查找的是( )', '对于一个头指针为head的带头结点的单链表,判定该表为空表的条件是( )', '以下关于链式存储结构说法错误的是( )','如果最常用的操作是取第i个结点及其前驱,则采用( )存储方式最节省时间｡'],

    questionsA: ['A.必须连续', 'A.遍历链表或求链表的第i个结点', 'A.q->next=p->next;delete q;', 'A.单链表', 'A.25', 'A.1', 'A.线性表是线性结构', 'A.大于1', 'A.s->next=p->next;p->next=-s;', 'A.p->next->prior=p->prior; p->prior->next=p->next;', 'A.基地址', 'A.s->next=p;p->next=s', 'A.二叉链表', 'A.p->next =s;p->next ->prior =s;s ->prior =p;s->next = p->next;', 'A.O(n) O(n)', 'A.顺序表', 'A.插入,删除操作更简单', 'A.n-i', 'A.顺序表可以存储非线性结构', 'A.内存地址', 'A.head==NULL', 'A.n-i+1', 'A.p->next->prior=p->prior; p->prior->next=p->next', 'A.单链表', 'A.全部', 'A.插入、删除不需要移动元素', 'A.p->next=s;s->prior=p;\np->next->prior=s;s->next=p->next;', 'A.p->next=p->next->next', 'A.O(1)', 'A.s->next=p+1; p->next=s;', 'A.从表中任一结点出发都能扫描到整个链表', 'A.顺序存储的有序线性表', 'A.head==NULL', 'A.查找节点时链式存储比顺序存储快','A.单链表'],

    questionsB: ['B.部分连续', 'B.在地址为P的结点之后插入一个结点', 'B.q->next=p->next;delete p;', 'B.顺序表', 'B.50', 'B.2', 'B.栈与队列是非线性结构', 'B.等于1', 'B.q->next=s;s->next=p;', 'B.p->next=p->next->next;p->next->prior=p;', 'B.结点大小', 'B.s->next=p->next;p->next=s', 'B.循环链表', 'B.s->prior =p;s->next = p ->next;p ->next = s;p->next ->prior =s;', 'B.O(n) O(1)', 'B.双链表', 'B.可以进行随机访问', 'B.n-i+1', 'B.顺序表的优点是存储密度大,且插入,删除运算效率高', 'B.数组下标', 'B.head->next==NULL', 'B.n-i', 'B.p->next=p->next->next; p->next->prior=p', 'B.双链表', 'B.一半', 'B.可随机访问任一元素', 'B.s->prior=p;  s->next=p->next;\np->next=s;  p->next->prior=s;', 'B.r-next=p;p->next=r->next', 'B.O(n)', 'B.(*p).next=s; (*s).next=(*p).next;', 'B.不再需要头指针了', 'B.线性链表', 'B.head->next==NULL', 'B.每个节点是由数据域和指针域组成','B.双链表'],

    questionsC: ['C.必须不连续', 'C.删除开始结点', 'C.p->next=q->next;delete p;', 'C.单向循环链表', 'C.10', 'C.4', 'C.线性链表是非线性结构', 'C.小于1', 'C.p->next=s->next;s->next=p;', 'C.p->prior->next=p;p->prior=p->prior->prior;', 'C.向量大小', 'C.s->next=p->next;p=s', 'C.双向链表', 'C.p ->next =s;s ->prior =p;p->next ->prior =s;s ->next = p ->next;', 'C.O(1) O(n)', 'C.带头结点的双循环链表', 'C.可以省略表头指针或表尾指针', 'C.n-i-1', 'C.散列法存储的基本思量是由关键字的值决定数据的存储位置', 'C.下一元素地址', 'C.head->next==head', 'C.i', 'C.p->prior->next=p; p->prior=p->prior->prior', 'C.单循环链表', 'C.三分之一', 'C.不必事先估计存储空间', 'C.p->next=s;   p->next->prior=s;\ns->prior=p;  s->next=p->next;', 'C.r->next=p->next;p->next=r', 'C.O(n^2)', 'C.s->next=p->next; p->next=s->next;', 'C.在进行插入、删除操作时,能更好地保证链表不断开', 'C.二叉链表', 'C.head->next==head', 'C.比顺序存储结构的存储密度小','C.单循环链表'],

    questionsD: ['D.连续与否均可', 'D.删除地址为P的结点的后继结点', 'D.p->next=q->next;delete q;', 'D.双链表', 'D.7', 'D.8', 'D.二叉树是线性结构', 'D.不能确定', 'D.p->next=s;s->next=q;', 'D.p->prior=p->next->next;p->next=p->prior->prior;', 'D.基地址和结点大小', 'D.p->next=s;s->next=p', 'D.带链的栈', 'D.s->prior =p;s->next =p->next;p->next ->prior =s;p ->next = s;', 'D.O(1) O(1)', 'D.单循环链表', 'D.顺序访问相邻结点更灵活', 'D.0', 'D.栈和队列存储方式既可是顺序方式,也可是链式方式', 'D.左、右孩子地址', 'D.head!=NULL', 'D.i-1', 'D.p->prior=p->next->next; p->next=p->prior->prior', 'D.顺序表', 'D.四分之一', 'D.所需空间与线性长度成正比', 'D.s->prior=p;  s->next=p->next;\np->next->prior=s;  p->next=s;', 'D.r=p->next;p->next=r->next', 'D.O(nlogn)', 'D.s->next=p->next; p->next=s;', 'D.已知某个结点的位置后,能够容易找到它的直接前趋', 'D.有序线性链表', 'D.head!=NULL', 'D.逻辑上不相邻的节点物理上可能相邻','D.顺序表'],

    answer: ['D','A','D','B','D','C','A','C','B','A','D','B','A','D','C','A','D','D','B','B','C','B','A','D','B','B','D','C','B','D','A','A','B','A','D'],

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
        showCancel:false
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
    wx.showModal({
      title: '解析',
      content: '此题暂无解析',
      showCancel: false
    })
  }
})