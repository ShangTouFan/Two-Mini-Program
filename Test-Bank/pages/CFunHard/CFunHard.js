Page({
  data: {
    questions: ['定义了一维int型数组a[10]后,下面错误的引用是( )', '在函数调用过程中,如果函数funA调用函数funB,函数funB又调用函数funA,则( )', '以下叙述中正确的是( )', 'C++里面如何声明const void f(void)函数为C程序中的库函数( )', 's1和s2是两个结构类型变量,若要使赋值s1=s2合法,则它们的说明应该是( )', '以下叙述中正确的是( )', '有如下说明: int a[10]={0,1,2,3,4,5,6,7,8,9};\n则数值不为9的表达式是( )', '下面程序的输出是( )\nint m=13;\nint fun2(int x, int y){int m=3;return(x*y-m);}\nvoid main(){\nint a=7, b=5;\nprintf("%d\\n",fun2(a,b)/m);}', '下面程序的输出是( )\nf(char s[]){int i,j;i=0;j=0;\nwhile(s[j]!= \'\\0\') j++;\nreturn  (j-i);}\nvoid main(){printf("%d\\n",f("ABCDEF"));}', '对以下程序,正确的说法是( )\nsub (char x,char y){int z; z=x%y;return z;}\nvoid main( ){\nint g=5,h=3;\nint k=sub(g,h);\nprintf("%d\\n",k);}', '若已定义实参数组int a[3][4]={2,4,6,8,10};,则在被调用函数f的下述定义中,对形参数组b定义正确的选项是( )', '若函数调用时用数组名作为函数参数,以下叙述中,不正确的是( )', '以下叙述中,不正确的是( )', '若主调用函数类型为double,被调用函数定义中没有进行函数类型说明,而return语句中的表达式类型为float型,则被调函数返回值的类型是( )', '在以下叙述中,不正确的选项是( )', '下面函数的功能是( )\nsss(char s[],char t[]){\nint i=0;\nwhile((s[i])&&(t[i])&&(t[i]== s[i]))\ni++;\nreturn (s[i]-t[i]);}', '设有如下函数定义:\nint f(char s[ ]){int i=0;\nwhile(s[i++]!=\'\\0\');\nreturn (i-1);}\n如果在主程序中用下面的语句调用上述函数,则输出结果为( )\nprintf("%d\\n",f("goodbey!"));', '以下程序的输出结果是( )\nint a,b;\nvoid fun(){a=100; b=200;}\nvoid main(){\nint a=5,b=7;\nfun();\nprintf("%d%d\\n",a,b);}', '以下函数func()的功能是：使具有n个元素的一维数组b的每个元素的值都增加2,划线处应填入( )\nfunc(int b[ ],int n){\nint i;\nfor(i=0;i<n;i++)\n__________;}', 'C语言规定,除主函数外,程序中各函数之间( )', '以下函数fun形参的类型是( )\nfun(float x){\nfloat y;\ny=3*x-4;\nreturn y;}', 'C语言中规定函数的返回值的类型是由( )', '以下程序的输出结果是( )\nfun(int x,int y,int z){z=x*x+y*y;}\nvoid main(){\nint a=31;\nfun(5,2,a);\nprintf("%d",a);}', '以下函数调用语句中含有实参个数为( )\nfunc((exp1,exp2),(exp3,exp4,exp5));', '有如下程序,该程序的输出结果是( )\nint func(int a,int b){return(a+b);}\nvoid main(){\nint x=2,y=5,z=8,r;\nr=func(func(x,y),z);\nprintf("%d\\n",r);}', '有如下函数调用语句\nfunc(rec1,rec2+rec3,rec4,rec5);该函数调用语句中,含有的实参个数是( )','有如下函数调用语句\nfunc(rec1,rec2+rec3,(rec4, rec5));该函数调用语句中,含有的实参个数是( )'],

    questionsA: ['A.a[0] = 1;', 'A.称为函数的直接递归调用', 'A.使用typedef定义新类型名后,新类型名与原类型名实际上是等价的', 'A.static "C"', 'A.s1只能接收相同类型的数据成员', 'A.由printf输出的数据都隐含左对齐', 'A.a[10-1]', 'A.1', 'A.0', 'A.实参与其对应的形参类型不一致,程序不能运行', 'A.f(int b[][6])', 'A.实参与其对应的形参共占用同一段存储空间', 'A.使用static float a定义的外部变量存放在内存中的静态存储区', 'A.int 型', 'A.C语言程序总是从main( )函数开始执行', 'A.求字符串的长度', 'A.3', 'A.100200', 'A.b[i++]', 'A.既允许直接递归调用也允许间接递归调用', 'A.int', 'A.return语句中的表达式类型所决定', 'A.0','A.1个','A.12','A.3','A.3'],

    questionsB: ['B.a[0] = 5*2;', 'B.称为函数的间接递归调用', 'B.结构体类型中的各个成分均不能是数组或指针', 'B.extern "C"', 'B.结构中的成员相同', 'B.scanf和printf是C语言提供的输入和输出语句', 'B.a[8]', 'B.2', 'B.6', 'B.被调函数缺少数据类型说明,程序不能运行', 'B.f(b) int b[ ][4]', 'B.实参将其地址传递给形参,结果等同于实现了参数之间的双向值传递', 'B.使用float b定义的外部变量存放在内存中的动态存储区', 'B.float 型', 'B.在C语言程序中,被调用的函数必须在main( )函数中定义', 'B.比较两个字符串的大小', 'B.6', 'B.57', 'B.b[i]++', 'B.不允许直接递归调用也不允许间接递归调用', 'B.不确定','B.调用该函数时的主调用函数类型所决定','B.29','B.2个','B.13','B.4','B.4'],

    questionsC: ['C.a[10] = 2;', 'C.称为函数的循环调用', 'C.结构体类型的变量,不能在声明结构体类型组成时一起定义', 'C.explict "C"', 'C.同一结构类型的变量', 'C.赋值语句是一种执行语句,必须放在函数的可执行部分', 'C.a[9]-0', 'C.7', 'C.7', 'C.主函数中缺少对被调函数的说明语句,程序不能运行', 'C.f(int b[3][ ])', 'C.实参与其对应的形参分别占用不同的存储空间', 'C.使用static float c定义的内部变量存放在内存中的静态存储区', 'C.double 型', 'C.C程序是函数的集合,在这个函数集中包括标准函数和用户自定义函数', 'C.将字符串s复制到字符串t中', 'C.8', 'C.200100', 'C.b[i+=2]', 'C.允许直接递归调用不允许间接递归调用', 'C.void','C.调用该函数时系统临时决定','C.31','C.4个','C.14','C.5','C.5'],

    questionsD: ['D.a[1] = a[2] * a[0];', 'D.C语言中不允许这样的递归调用', 'D.元素为结构体类型的数组,只能在声明过结构体类型之后,单独进行定义', 'D.register "C"', 'D.存储字节长度一样的变量', 'D.由printf输出的数据的实际精度是由格式控制中的域宽和小数的域宽来完全决定的', 'D.a[9]-a[0]', 'D.10', 'D.8', 'D.程序中没有错误,可以正常运行', 'D.f(b) int b[4][5]', 'D.在调用函数中必须说明数组的大小,但在被调函数中可以使用不定尺寸数组', 'D.使用float d定义的内部变量存放在内存中的动态存储区', 'D.由系统当时的情况而定', 'D.在C语言程序中,函数的定义不能嵌套,但函数的调用可以嵌套', 'D.将字符串s接续到字符串t中', 'D.9', 'D.75', 'D.b[i]+=2', 'D.不允许直接递归调用允许间接递归调用', 'D.float','D.在定义该函数时所指定的类型所决定','D.无定值','D.5个','D.15','D.有语法错误','D.有语法错误'],

    answer: ['C','B','A','B','C','C','B','B','B','D','B','C','B','A','B','B','C','B','D','A','D','D','C','B','D','B','A'],

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