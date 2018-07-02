Page({
  data: {
    questions: ['以下哪个函数可以在源地址和目的地址的位置任意的情况下，在源地址和目的地址的空间大小任意的情况下实现二进制代码块的复制？', 'fseek函数的正确调用形式是（）', '共同体变量所占的内存长度等于最长的成员的长度。请问这句话的说法是正确的吗？', '在调用函数时，如果实参是简单变量，它与对应形参之间的数据传递方式是（ ）', '下列关于联合的描述中，错误的是？', '以下叙述中正确的是（）', '函数原型语句正确的是（ ）', '以下叙述中不正确的是( )', '以下叙述中正确的是（）', 'sizeof(double)是（）', '在32位系统环境，编译选项为4字节对齐，那么sizeof(A)和sizeof(B)是（）\nstruct A\n{int a;short b;int c;char d;};\nstruct B\n{int a;short b;char c;int d;};', '在游戏设计中,经常会根据不同的游戏状态调用不同的函数,我们可以通过函数指针来实现这一功能,请声明一个参数为int *,返回值为int的函数指针。', 'int (*s[10])(int)表示的是什么（ ）', '有一个如下的结构体：\nstruct A{long a1;\nshort a2;\nint a3;\nint *a4;};请问在64位编译器下用sizeof(struct A)计算出的大小是多少？', '以下定义错误的是（）', '对结构体类型的变量的成员的访问，无论数据类型如何都可使用的运算符是（）', '函数fun的声明为int fun(int *p[4]),以下哪个变量可以作为fun的合法参数（）', '以下正确的函数原型为（）', '对于以下递归函数f,调用f(4),其返回值为（ ）\nint f(int n){\nif(n)return f(n -1) + n;\nelse return n;}', '选项（ ）可以使下面的程序从0....n-1中随机等概率的输出m个不重复的数。这里我们假设n远大于m。\nknuth(int n, int m){srand((unsigned int)time(0));\nfor (int i = 0; i < n; i++){if ( ________) {cout << i << endl;\n( _________);}}}', '字符串复制函数strcpy(字符数组1, 字符数组2),字符数组1的长度应大于等于字符数组2的长度。说法是否正确？', '以下对C语言函数的描述中，正确的是（）', '有如下程序段,请问k的值是（）\nenum {a, b=5, c, d=4, e}k;\nk=c;', '下面两个结构体\nstruct One{double d;char c;int i;}\nstruct Two{char c;double d;int i;}\n在#pragma pack(4)和#pragma pack(8)的情况下,结构体的大小分别是（）', '设有以下函数void fun(int n,char *s)(......),则下面对函数指针的定义和赋值均是正确的是：（）', '以下对C语言函数的有关描述中,正确的是( )', '变量的指针,其含义是指该变量的( )', '设有数组定义:char array[]="China";则数组array所占的存储空间为( )', '如果一个函数位于C程序文件的上部,在该函数体内说明语句后的复合语句中定义了一个变量,则该变量( )', '调用函数时,当实参和形参都是简单变量时,它们之间数据传递的过程是( )', '以下叙述中,不正确的是( )', '若函数调用时参数为基本数据类型的变量(俗称简单变量),以下叙述正确的是( )', 'C语言中,若未说明函数的类型,则系统默认该函数的类型是( )', '对于C语言的函数,下列叙述中正确的是( )', '以下说法中正确的是( )','在调用函数时,如果实参是简单变量,它与对应形参之间的数据传递方式是( )'],

    questionsA: ['A.memcpy()', 'A.fseek(文件类型指针，起始点，位移量)', 'A.正确', 'A.地址传递', 'A.联合变量定义时不可初始化', 'A.用户自己定义的函数只能调用库函数', 'A.int Function(void a);', 'A.在不同的函数中可以使用相同名字的变量', 'A.在scanf函数的格式串中,必须有与输入项一一对应的格式转换说明符', 'A.一个整型表达式', 'A.16,16', 'A.int (*fun)(int)', 'A.指针数组,每个指针指向长度为1的int数组', 'A.24', 'A.struct A{A  _a};', 'A..', 'A.int a[4][4];', 'A.f1(int x;int y);', 'A.10', 'A.rand()%(n-i)<=m   m--', 'A.正确', 'A.C程序必须由一个或一个以上的函数组成', 'A.3', 'A.16 24,16 24', 'A.void (*pf)(int，char);  pf=&fun;', 'A.在C中,调用函数时,只能把实参的值传送给形参,形参的值不能传送给实参', 'A.值', 'A.4个字节', 'A.为全局变量,在本程序文件范围内有效', 'A.实参将其地址传递给形参,并释放原先占用的存储单元', 'A.在同一C程序文件中,不同函数中可以使用同名变量', 'A.实参与其对应的形参共占存储单元', 'A.float型', 'A.函数的定义不能嵌套,但函数调用可以嵌套', 'A.C语言程序总是从第一个定义的函数开始执行','A.地址传递'],

    questionsB: ['B.memmove()', 'B.fseek(fp，位移量，起始点)', 'B.错误', 'B.单向值传递', 'B.联合的成员是共址的', 'B.实用的C语言源程序总是由一个或多个函数组成', 'B.void Function (int);', 'B.函数中的形式参数是局部变量', 'B.只能在printf函数中指定输入数据的宽度,而不能在scanf函数中指定', 'B.一个双精度型表达式', 'B.13,12', 'B.int (*fun)(int *)', 'B.指针数组,每个指针指向长度为10的int数组', 'B.28', 'B.struct A{A* _a;};', 'B.-', 'B.int **a;', 'B.void f1(x, y);', 'B.4', 'B.rand()%(n-i)<m   m--', 'B.错误', 'B.C函数既可以嵌套定义又可以递归调用', 'B.4', 'B.16 20,16 20', 'B.void (*pf)(int n，char *s);  pf=fun;', 'B.C函数既可以嵌套定义又可以递归调用', 'B.地址', 'B.5个字节', 'B.为局部变量,只在该函数内有效', 'B.实参将其地址传递给形参,调用结束时形参再将其地址回传给实参', 'B.在main函数体内定义的变量是全局变量', 'B.只有当实参与对应的形参同名时才共占存储单元', 'B.long型', 'B.函数的定义可以嵌套,但函数调用不能嵌套', 'B.在C语言程序中,要调用的函数必须在main()函数中定义','B.单向值传递'],

    questionsC: ['C.memset()', 'C.fseek(位移量，起始点，fp)', '', 'C.由实参传给形参，再由形参传回实参', 'C.联合的成员在某一个时刻只有当前的是有效的', 'C.不同函数的形式参数不能使用相同名称的标识符', 'C.int Function(a);', 'C.在一个函数内定义的变量只在本函数范围内有效', 'C.scanf函数中的字符串,是提示程序员的，输入数据时不必管它', 'C.一个不合法的表达式', 'C.16,12', 'C.int* fun(int *)', 'C.函数指针数组，每个指针指向一个int func(int* param)的函数', 'C.16', 'C.struct A{A& _a;};', 'C.*', 'C.int **a[4]', 'C.void f1(int x, y);', 'C.0', 'C.rand()%(n-i)>=m   m++', '', 'C.函数必须有返回值,否则不能使用函数', 'C.5', 'C.16 16,16 24', 'C.void *pf();  *pf=fun;', 'C.函数必须有返回值,否则不能使用函数', 'C.名', 'C.6个字节', 'C.为局部变量,只在该复合语句中有效', 'C.实参将其值传递给形参,调用结束时形参再将其值回传给实参', 'C.形参是局部变量,函数调用完成即失去意义', 'C.实参与其对应的形参分别占用不同的存储单元', 'C.int型', 'C.函数的定义和调用都不能嵌套', 'C.C语言程序总是从main()函数开始执行','C.由实参传给形参,再由形参传回实参'],

    questionsD: ['D.strcpy()', 'D.fseek(起始点，位移量，文件类型指针)', '', 'D.传递方式由用户指定', 'D.联合变量占有的内存空间是该联合变量中占有最大内存空间的成员在内存对齐时所需的存储空间', 'D.在C语言的函数内部，可以定义局部嵌套函数', 'D.void int(double a);', 'D.在一个函数内的复合语句中定义的变量在本函数范围内有效', 'D.复合语句也被称为语句块,它至少要包含两条语句', 'D.一种函数调用', 'D.11,16', 'D.int* (*fun)(int *)', 'D.函数指针数组，每个指针指向一个int func(int param)的函数', 'D.18', 'D.struct B;struct A{B& _b;};struct B{A& _a;};', 'D.&', 'D.int (*a)[4];', 'D.void f1(int, int);', 'D.以上均不是', 'D.rand()%(n-i)>m   m++', '', 'D.程序中有调用关系的所有函数必须放在同一个程序文件中', 'D.6', 'D.16 16,24 24', 'D.void *pf();  pf=fun;', 'D.C程序中有调用关系的所有函数必须放在同一个源程序文件中', 'D.一个标志', 'D.7个字节', 'D.定义无效,为非法变量', 'D.实参将其值传递给形参,调用结束时形参并不将其值回传给实参', 'D.若同一文件中全局变量和局部变量同名,则全局变量在局部变量作用范围内不起作用', 'D.实参将数据传递给形参后,立即释放原先占用的存储单元', 'D.double型', 'D.函数的定义和调用都可以嵌套', 'D.C语言程序中的main()函数必须放在程序的开始部分','D.传递方式由用户指定'],

    answer: ['B','B','B','B','A','B','B','D','A','A','C','B','D','A','A','A','B','D','A','B','A','A','D','C','B','A','B','C','C','D','B','C','C','A','C','B'],

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
    length:0,
    cflag:0,
    eflag:0
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
        cflag:0,
        eflag:0,
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