Page({
  data: {
    questions: ['下面程序运行的结果是（）\nchar a = 101;\nint sum=200;\na+=27;sum+=a;\nprintf("%d\\n",sum);', '设有int a=1,b=2,c=3,d=4,m=2,n=2;执行(m=a>b)&&(n=c>d)后n的值是（）', '为表示关系x≥y≥z, 应使用C语言表达式（）', '已知a=12,则表达式a+=a-=a*=a的结果是（）', '下面程序的输出结果是（）\n#include<stdio.h>\nvoid main()\n{int a=-1,b=4,k;\nk=(++a<=0)&&(b--<=0);\nprintf("%d,%d,%d\\n",k,a,b);}', '下面程序的输出结果是（）\n#include<stdio.h>\nvoid main()\n{int a=5,b=3;\nfloat x=3.14,y=6.5;\nprintf("%d,%d\\n",a+b!=a-b,x<=(y-=6.1));}', '若有定义int a=12,n=5,则表达式a%=(n%2)运算后,a的值（）', '设有说明:char w; int x;float y;double z;则表达式:w*x+z-y值的数据类型是（）', '设int a=12,则执行完语句a+=a-=a*a后,a的值是（）', '执行下面程序中的输出语句后,输出结果是（）\n#include<stdio.h>\nvoid main()\n{int a;\nprintf("%d\\n",(a=3*5,a*4,a+5));}', '下面程序的输出是（）\n#include<stdio.h>\nvoid main()\n{int x=023;\nprintf("%d\\n",--x);}', '阅读下面的程序\n#include<stdio.h>\nvoid main()\n{int i,j;\ni=010;\nj=9;}', '若有以下定义和语句:\nint a=010,b=0x10,c=10;\nprintf("%d,%d,%d\\n",a,b,c);\n则输出结果是（）', '已知有double型变量x=2.5,y=4.7,整型变量a=7,则表达式 x+a%3*(int)(x+y)%2/4 的值是（）', '若已定义x和y是整型变量,x=2;则表达式y=2.75+x/2的值是（）', '若有定义int x=3,y=2和float a=2.5,b=3.5,则表达式:(x+y)%2+(int)a/(int)b的值是（）', '式子7*15=133成立,则用的是几进制（）', '下面程序执行的结果是（）\nint a=1;\nvoid test()\n{int a=2;\na+=1;}\nint main()\n{test();\nprintf("%d\\n",a);return 0;}', '若有宏定义：#define MOD(x，y) x％y,则执行以下语句后的输出结果是（）\nint a=13,b=94;\nprintf("％d\\n",MOD(b,a+4);', '输出结果(32位机器上)\nvoid Func(char str_arg[2]){int m = sizeof(str_arg);\nint n = strlen(str_arg);\nprintf("%d\\n", m);printf("%d\\n", n);}\nint main(){char str[] = "Hello";\nFunc(str);}', '下面函数的执行结果是（）\nint main()\n{int a,x;\nfor(a = 0,x = 0;a<=1 && !x++;a++)\n{a++;}\nprintf("%d %d",a,x);\nreturn 0;}', '下面函数的执行结果是（）\nint fun(int x){\nint count = 0;\nwhile(x){\ncount++;x = x &(x-1);}\nreturn count;}\nint main(){\nprintf("%d",fun(2018));}', '下面函数的执行结果是（）\nint f(int x,int y){\nreturn (x&y)+((x^y)>>1);}\nint main(){\nf(2,4);\nreturn 0;}', '下面函数的执行结果是（）\n#define sum(a,b,c) a+b+c\nint main(){\nint i = 3;\nint j = 2;\nprintf("%d\\n",i*sum(i,(i+j),j));\nreturn 0;}', '设x、y、z、t均为int型变量,则执行以下语句后,t的值为（）\nx=y=z=1;\nt=++x || ++y && ++z;','以下条件表达式中能完全等价于条件表达式x的是（）',''],

    questionsA: ['A.327', 'A.1','A.(x>=y)&&(y>=z)','A.0','A.1,1,2','A.1,0','A.0','A.float','A.552','A.65','A.17','A.1,19','A.10,10,10','A.2.4','A.5.5','A.0','A.7','A.1','A.9','A.5 5','A.2 2','A.2018','A.3','A.16','A.不定值','A.(x==0)'],

    questionsB: ['B.99', 'B.2','B.(x>=y)AND(y>=z)','B.144','B.1,0,3','B.0,1','B.1','B.char','B.264','B.20','B.18','B.-1,19','B.8,16,10','B.2.5','B.5','B.2','B.8','B.2','B.3','B.5 4','B.2 1','B.0','B.5','B.33','B.4','B.(x!=0)'],

    questionsC: ['C.328', 'C.3','C.(x>=y>=z)','C.12','C.0,1,2','C.1,1','C.12','C.int','C.144','C.15','C.23','C.1,17','C.8,10,10','C.2.75','C.3','C.1.5','C.9','C.3','C.7','C.4 5','C.2 0','C.1','C.1','C.26','C.1','C.(x==1)'],

    questionsD: ['D.72', 'D.4','D.(x>=y)&(y>=z)','D.264','D.0,0,3','D.0,0','D.6','D.double','D.-264','D.10','D.24','D.-1,17','D.8,8,10','D.0','D.4.0','D.1','D.11','D.程序崩溃','D.5','D.4 4','D.1 1','D.7','D.没有输出','D.14','D.0','D.(x!=1)'],

    answer: ['D','B','A','A','D','A','A','D','D','B','B','D','B','B','C','D','B','A','C','C','B','D','D','A','C','B'],

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
        cflag:0,
        eflag:0
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