Page({
  data: {
    item:{
    questions: ['下列哪些容器可以使用数组,但不能使用链表来实现?', '需要分配较大空间,插入和删除不需要移动元素的线性表,其存储结构是( )', '设一个链表最常用的操作是在末尾插入结点和删除尾结点,则选用( )最节省时间', '从一个具有 n 个结点的单链表中查找其值等于x结点时,在查找成功的情况下,需平均比较(  )个结点', '线性表的顺序存储结构是一种_____的存储结构｡', '以下关于线性表的说法不正确的是______｡', '若某线性表最常用的操作是在最后一个元素之后插入一个元素和删除进入表中的最后一个元素,则采用(  )存储方式最节省运算时间和存储空间｡', '设单链表中指针p指向结点m,若要删除m之后的结点(若存在),则需修改指针的操作为( )', '在一个以 h 为头指针的单循环链中,p 指针指向链尾结点的条件是( )', '循环链表H的尾结点P的特点是( )', '用数组r存储静态链表,结点的next域指向后继,工作指针j指向链中结点,使j沿链移动的操作为( )', '非空的循环单链表head的尾结点(由p所指向)满足( )', '设一条单链表的头指针变量为head且该链表没有头结点,则其判空条件是( )', '设指针变量p指向单链表的某中间结点,则删除该结点的后序结点需要的操作为( )', '在一个单链表中,若删除P所指结点的后续结点,则执行( )', '已知pPre为指向链表中某结点的指针,pNew是指向新结点的指针,以下哪段伪码算法是将一个新结点插入到链表中pPre所指向结点的后面?( )', '某线性表中最常用的操作是在最后一个元素之后插入一个元素和删除第一个元素,则采用( )存储方式最节省运算时间｡', '以下结构类型可用来构造链表的是( )', '双向链表中有两个指针域,llink和rlink,分别指回前驱和后继,设p指向链表中的一个结点,q指向一待插入结点,现要求在p前插入q,则正确的插入为( )', '判断一个单向链表中是否存在环的最佳方法是( )', '一个长度为100的循环链表,指针A和指针B都指向链表中的同一个节点,A以步长为1向前移动,B以步长为3向前移动,一共需要同时移动多少步A和B才能再次指向同一个节点｡', '关于双链表的搜索给定元素操作的说法正确的是( )', '设指针q指向单链表中结点A,指针p指向单链表中结点A的后继结点B,指针s指向被插入的结点X,则在结点A和结点B插入结点X的操作序列为( )', '在带头结点的双向循环链表中插入一个新结点,需要修改的指针域数量是( )', '在一个单链表HL中,若要在当前由指针p指向的结点后面插入一个由q指向的结点,则执行如下( )语句序列｡', '在一个单链表中,q的前一个节点为p,删除q所指向节点,则执行( )', '对于线性表(7,34,55,25,64,46,20,10)进行散列存储时,若选用H(K)=K%9作为散列函数,则计算的散列地址为1的元素有( )个｡', '一个单向链表队列中有一个指针p,现要将指针r插入到p之后,该进行的操作是( )', '单链表的每个结点中包括一个指针link,它指向该结点的后继结点｡现要将指针q指向的新结点插入到指针p指向的单链表结点之后,下面的操作系列中哪一个是正确的?', '将N条长度均为M的有序链表进行合并,合并后的链表也保持有序,时间复杂度为( )','对于顺序存储的线性表,访问结点和增加结点的时间复杂度为( )'],

    questionsA: ['A.队列', 'A.单链表', 'A.带头结点的双循环链表', 'A.n', 'A.随机存取', 'A.线性表中的数据元素可以是数字、字符、记录等不同类型｡', 'A.单链表', 'A.p->next=p->next->next', 'A.p->next==NULL', 'A.P->NEXT==H', 'A.j=r[j].next', 'A.p->next==NULL', 'A.head==0', 'A.p->next=p->next;free(p->next)', 'A.p=p->next;p->next=p->next->next;', 'A.pPre->link = pNew;		pNew = null;', 'A.单链表', 'A.struct aa{int a;int *b;};', 'A.p->llink=q;q->rlink=p;p->llink->rlink=q;q->llink:=p->llink;', 'A.两重遍历', 'A.100', 'A.从两个方向搜索双链表,比从一个方向搜索双链表的速度慢', 'A.s->next=p->next;p->next=-s;', 'A.2个', 'A.p=q; p->next=q;', 'A.delete q', 'A.1', 'A.p->next=p->next->next', 'A.q=p->link;p->link=q->link;', 'A.O(N*M*logN)','A.O(n) O(n)'],

    questionsB: ['B.栈', 'B.静态链表', 'B.单循环链表', 'B.n/2', 'B.顺序存取', 'B.线性表中包含的数据元素个数不是任意的｡', 'B.仅有头指针的单循环链表', 'B.p=p->next', 'B.p->next==h', 'B.P->NEXT==H->NEXT', 'B.j=j+1', 'B.p==NULL', 'B.head->next==0', 'B.free(p->next);p->next=p->next->next', 'B.p->next = p->next;', 'B.pPre->link = pNew->link;	pNew->link = null;', 'B.仅有头指针的单循环链表', 'B.struct bb{int a;bb *b;};', 'B.q->llink=p->llink;p->llink->rlink=q;q->rlink=p;', 'B.快慢指针', 'B.101', 'B.从两个方向搜索双链表,比从一个方向搜索双链表的方差要小', 'B.q->next=s; s->next=p;', 'B.6个', 'B.p->next=q; q->next=p;', 'B.q->next=p->next;delete p;', 'B.2', 'B.r->next=p;p->next=r->next', 'B.p=p->link=q->link;p->link;', 'B.O(N*M)','B.O(n) O(1)'],

    questionsC: ['C.优先级队列', 'C.线性链表', 'C.带尾指针的单循环链表', 'C.(n-1)/2', 'C.索引存取', 'C.线性表中的每个结点都有且只有一个直接前趋和直接后继｡', 'C.双向链表', 'C.p=p->next->next', 'C.p->next->next==h', 'C.P==H', 'C.j=j->next', 'C.p->next==head', 'C.head->next==head', 'C.p->next=p->next->next', 'C.p->next = p->next->next;', 'C.pNew->link = pPre->link;	pPre->link = pNew;', 'C.双链表', 'C.struct cc{int * a;cc b;};', 'C.q->rlink=p;p->rlink:=q;p->llink->rlink=q;q->rlink=p;', 'C.路径记录', 'C.49', 'C.从两个方向搜索双链表,比从一个方向搜索双链表速度要快', 'C.p->next=s->next;s->next=p;', 'C.3个', 'C.p->next=q->next; p=q;', 'C.p->next=q->next;delete p;', 'C.3', 'C.r->next=p->next;p->next=r', 'C.q->link=p->link;p->link=q;', 'C.O(N)','C.O(1) O(n)'],

    questionsD: ['D.Map或者Dict', 'D.顺序存储结构', 'D.单链表', 'D.(n+1)/2', 'D.散列存取', 'D.存在这样的线性表：表中各结点都没有直接前趋和直接后继｡', 'D.仅有尾指针的单循环链表', 'D.p->next=p', 'D.p->data==-1', 'D.P==H->NEXT', 'D.j=r[j]->next', 'D.p==head', 'D.head!=0', 'D.t=p->next;p->next=t->next;free(t)', 'D.p = p->next->next', 'D.pNew->link = pPre->link;	pPre->link = null;', 'D.仅有尾指针的单循环链表', 'D.struct dd{int *a;aa b;};', 'D.p->llink->rlink=q;q->rlink=p;q->llink=p->llink;p->llink=q;', 'D.哈希表辅助', 'D.50', 'D.以上说法都不正确', 'D.p->next=s;s->next=q;', 'D.4个', 'D.q->next=p->next; p->next=q;', 'D.p->next=q->next;delete q;', 'D.4', 'D.r=p->next;p->next=r->next', 'D.p->link=1;q->link=p->link;', 'D.O(M)','D.O(1) O(1)'],

    answer: ['D','B','A','D','B','C','D','A','B','A','A','C','A','D','C','C','D','B','D','B','D','B','B','D','D','D','D','C','C','A','C'],

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
        if (this.data.item.rightcount == 25) {
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