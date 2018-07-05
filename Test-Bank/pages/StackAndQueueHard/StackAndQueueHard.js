Page({
  data: {
    item:{
    questions: ['解析XML时,需要校验节点是否闭合,如必须有与之对应,用( )数据结构实现比较好', '设有一个用数组Q[1..m]表示的环形队列,约定f为当前队头元素在数组中的位置,r为队尾元素的后一位置(按顺时针方向),若队列非空,则计算队列中元素个数的公式应为( )', '设输入序列是1,3,5....m,经过栈的作用后输出序列的第一个元素是m,则输出序列中第i个输出元素是( )', '用不带头结点的单链表存储队列,其队头指针指向队头结点,队尾指针指向队尾结点,则在进行出队操作时( )', ' 设数组Data[0..m]作为循环队列SQ的存储空间,front为队头指针,rear为队尾指针,则执行出队操作的语句为(  )', '若栈采用顺序存储方式存储,现两栈共享空间V[1m],top[1]、top[2]分别代表第1和第2个栈的栈顶,栈1的底在V[1],栈2的底在V[m],则栈满的条件是( )', '若一个栈的输入顺序是1,2,…,n,输出序列的第一个元素是n,则第i(1≤i≤n)个输出元素是( )', '表达式3*2^(4+2*2-6*3)-5,求值过程中当扫描到6时,对象栈和算符栈为( )', '在具有n个单元的顺序存储的循环队列中,假定front和rear分别为队头指针和队尾指针,则判断队满的条件为( )', '栈S最多能容纳4个元素｡现在6个元素按a、b、c、d、e、f的顺序进栈,下列哪一个序列不是可能的出栈序列( )', '一个栈的入栈序列是A、B、C、D、E,则栈的不可能输出序列是( )', '某带链的队列初始状态为 front=rear=NULL ｡经过一系列正常的入队与退队操作后,front=rear=10｡该队列中的元素个数为( )', '设指针变量top指向当前链式栈的栈顶,则删除栈顶元素的操作序列为( )', '若有一个栈的输入序列是1,2,3,...,n,输出序列的第一个元素是n,则第i个输出元素是( )', '栈是一种智能在某一端插入和删除的特殊线性表,它按照后进先出的原则存储数据,先进入的数据被压入栈底,最后的数据在栈顶,若6元素为A、B、C、D、E、F,出栈顺序为B、D、C、F、E、A,则S栈的最小容量为( )', '设输入序列为1,2,3,则经过栈的作用后可以得到( )中不同的输出序列', '设栈的顺序存储空间为S(0:49),栈底指针bottom=49,栈顶指针top=30(指向栈顶元素)｡则栈中的元素个数为( )', '表达式a*(b+c)-d的后缀表达式是( )', '14、设栈S和队列Q的初始状态均为空,元素a,b,c,d,e,f,g依次进入栈S｡若每个元素出栈后立即进入推列Q,且7个元素出队的顺序是b,d,,c,f,e,a,g,则栈S的容量至少是( )', '入栈序列：a1,a3,a5,a2,a4,a6,出栈序列：a5,a4,a2,a6,a3,a1,则栈的容量最小是( )', '向一个栈顶指针为top的带头结点的非空的链栈中删除结点,则其操作步骤是( )', '若已有一个栈,进栈顺序为ABCD,出栈顺序序列是BCDA,若用I表示进栈,O表示出栈,则进操作的顺序是( )', '有六个元素6,5,4,3,2,1的顺序进栈,问下列哪一个不是合法的出栈序列( )', '算术表达式a+b*(c+d/e)转为后缀表达式后为( )', '在具有n个单元的顺序存储的循环队列中,假定front和rear分别为队头指针和队尾指针,则判断队空的条件为( )', '判定一个队列QU(最多元素为m0)为满队列的条件是( )', '设指针变量fron t 表示链式队列的队头指针,指针变量rear表示链式队列的队尾指针,指针变量s指向将要入队列的结点X,则入队列的操作序列为( )', '若用一个大小为6的数组来实现循环队列,且当rear和front的值分别为0和3｡当从队列中删除一个元素,再加入两个元素后, rear和front的值分别为()', '循环队列A[0..m-1]存放其中元素值,用front和rear分别表示队头和队尾,则当前队列中的元素数是( )', '假设栈的输入序列是7,6,2,1,4,则以下不可能是其出栈序列( )', '判定一个循环队列qu(最多元素为MaxSize)为空的条件是( )', '设顺序循环队列Q[0：M-1]的头指针和尾指针分别为F和R,头指针F总是指向队头元素的前一位置,尾指针R总是指向队尾元素的当前位置,则该循环队列中的元素个数为( )', '循环队列A[0..m-1]存放其中元素值,用front和rear分别表示队头和队尾,则当前队列中的元素数是( )', '循环队列的存储空间为Q(1:100),初始状态为front=rear=100｡经过一系列正常的入队与退队操作后,front=rear=99,则循环队列中的元素个数为( )', '队列{a,b,c,d,e}依次入队,允许在其两端进行入队操作,但仅允许在一端进行出队操作,则不可能得到的出队序列是( )', '设输入序列为1、2、3、4、5、6,则通过栈的作用后可以得到的输出序列为( )', '设循环队列的存储空间为Q(1:35),初始状态为front = rear = 35｡现经过一系列入队与退队运算后,front = 15,rear = 15,则循环队列中的元素个数为( )', '一个栈的初始为空｡先将元素5,4,3,2,1依次入栈,然后退栈一次,再将元素A,B,C,D依次入栈,再将所有元素全部退栈,则所有元素退栈(包括中间退栈的元素)的顺序为( )', '设栈的存储空间为S(1:60),初始状态为top=61｡现经过一系列正常的入栈与退栈操作后,top=1,则栈中的元素个数为( )','若以1234作为双端队列的输入序列,则既不能由输入受限的双端队列得到,也不能由输出受限的双端队列得到的输出序列是( )'],

    questionsA: ['A.链表', 'A.(m+r-f)%m', 'A.m-2(i-1)', 'A.仅修改队头指针', 'A.front=front+1', 'A.top[2]-top[1]=0', 'A.n-i', 'A.3,2,8;*^-', 'A.rear％n==front', 'A.a、b、c、d、e、f', 'A.DCEAB', 'A.1', 'A.top=top+1;', 'A.n-i', 'A.3', 'A.3', 'A.30', 'A.abcd*+-', 'A.1', 'A.5', 'A.top->next=s;', 'A.IOIOIIOO', 'A.5 4 3 6 1 2', 'A.ab+cde/*', 'A.rear％n==front', 'A.QU->rear-QU->front==m0', 'A.front->next=s;front=s;', 'A.1和5', 'A.(rear-front+m+1)%m', 'A.6,7,4,1,2', 'A.qu->rear–qu->front ==MaxSize', 'A.R-F', 'A.(rear-front+m+1)%m', 'A.1', 'A.b,a,c,d,e', 'A.5,3,4,6,1,2', 'A.15','A.1DCAB2345','A.60','A.1234'],

    questionsB: ['B.树', 'B.r-f', 'B.m-i', 'B.仅修改队尾指针', 'B.front=(front+1)%m', 'B.top[1]+1=top[2]', 'B.n-i-1', 'B.3,2,4,2,2;*^+*-', 'B.(front+l)％n==rear', 'B.a、f、e、d、c、b', 'B.ABCDE', 'B.0', 'B.top=top-1;', 'B.n-i-1', 'B.4', 'B.7', 'B.29', 'B.abc+*d-', 'B.2', 'B.3', 'B.s->next=top->next;top->next=s;free(s)', 'B.IIOOIIOO', 'B.4 5 3 1 2 6', 'B.abcde/+*+', 'B.front+l= rear', 'B.QU->rear-QU->front-1==m0', 'B.s->next=rear;rear=s;', 'B.2和4', 'B.rear-front+1', 'B.其它都不是', 'B.qu->rear–qu->front-1==MaxSize', 'B.F-R', 'B.rear-front+1', 'B.2', 'B.d,b,a,c,e', 'B.3,2,5,6,4,1', 'B.16','B.1DCBA2345','B.59','B.4132'],

    questionsC: ['C.队列', 'C.(m-r-f)%m', 'C.m-1-i', 'C.队头、队尾指针都可能要修改', 'C.rear=(rear+1)%m', 'C.top[1]+top[2]=m', 'C.i+1', 'C.3,2,4,2,2,;*^(+*-', 'C.rear％n -1==front', 'C.c、b、e、d、a、f', 'C.EDCBA', 'C.1或0', 'C.top->next=top;', 'C.n-i-1', 'C.5', 'C.8', 'C.20', 'C.abc*+d-', 'C.3', 'C.6', 'C.s = top;top= top->next;free(s)', 'C.IIOIOIOO', 'C.3 4 6 5 2 1', 'C.abcde/*++', 'C.rear==front', 'C.QU->front==QU->rear', 'C.rear->next=s;rear=s;', 'C.4和2', 'C.rear-front-1', 'C.7,6,2,1,4', 'C.qu->rear ==qu->front', 'C.(R-F+M)％M', 'C.rear-front-1', 'C.99', 'C.d,b,c,a,e', 'C.3,1,2,5,4,6', 'C.20','C.54321ABCD','C.0','C.4231'],

    questionsD: ['D.栈', 'D.(m-r+f)%m', 'D.m+1-i,', 'D.队头、队尾指针都要修改', 'D.front=(front+1)%(m+1)', 'D.top[1]=top[2]', 'D.n-i+1', 'D.3,2,8;*^(-', 'D.(rear+l)％n==front', 'D.c、d、b、e、f、a', 'D.DECBA', 'D.不确定', 'D.top=top->next;', 'D.不确定', 'D.6', 'D.5', 'D.19', 'D.-+*abcd', 'D.4', 'D.4', 'D.s = top->next;top= top->next;free(s)', 'D.IIOIOOIO', 'D.2 3 4 1 5 6', 'D.abcde*/++', 'D.(rear+l)％n= front', 'D.QU->front==QU->rear+1', 'D.s->next=front;front=s;', 'D.5和1', 'D.rear-front', 'D.6,7,4,2,1', 'D.qu->rear=qu->front-1', 'D.(F-R+M)％M', 'D.rear-front', 'D.0或100', 'D.e,c,b,a,d', 'D.1,5,4,6,2,3', 'D.0或35','D.DCBA12345','D.1','D.4213'],

    answer: ['D','A','A','C','D','B','D','D','D','B','A','A','D','C','A','D','C','B','C','D','C','C','C','B','C','A','C','B','A','D','C','C','A','D','C','B','D','B','A','C'],

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
    eflag: 0,
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