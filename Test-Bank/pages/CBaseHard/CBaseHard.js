Page({
  data: {
    item:{
    questions: ['下面程序运行的结果是（）\nchar a = 101;\nint sum=200;\na+=27;sum+=a;\nprintf("%d\\n",sum);', '设有int a=1,b=2,c=3,d=4,m=2,n=2;执行(m=a>b)&&(n=c>d)后n的值是（）', '为表示关系x≥y≥z, 应使用C语言表达式（）', '已知a=12,则表达式a+=a-=a*=a的结果是（）', '下面程序的输出结果是（）\n#include<stdio.h>\nvoid main()\n{int a=-1,b=4,k;\nk=(++a<=0)&&(b--<=0);\nprintf("%d,%d,%d\\n",k,a,b);}', '下面程序的输出结果是（）\n#include<stdio.h>\nvoid main()\n{int a=5,b=3;\nfloat x=3.14,y=6.5;\nprintf("%d,%d\\n",a+b!=a-b,x<=(y-=6.1));}', '若有定义int a=12,n=5,则表达式a%=(n%2)运算后,a的值（）', '设有说明:char w; int x;float y;double z;则表达式:w*x+z-y值的数据类型是（）', '设int a=12,则执行完语句a+=a-=a*a后,a的值是（）', '执行下面程序中的输出语句后,输出结果是（）\n#include<stdio.h>\nvoid main()\n{int a;\nprintf("%d\\n",(a=3*5,a*4,a+5));}', '下面程序的输出是（）\n#include<stdio.h>\nvoid main()\n{int x=023;\nprintf("%d\\n",--x);}', '阅读下面的程序\n#include<stdio.h>\nvoid main()\n{int i,j;\ni=010;\nj=9;}', '若有以下定义和语句:\nint a=010,b=0x10,c=10;\nprintf("%d,%d,%d\\n",a,b,c);\n则输出结果是（）', '已知有double型变量x=2.5,y=4.7,整型变量a=7,则表达式 x+a%3*(int)(x+y)%2/4 的值是（）', '若已定义x和y是整型变量,x=2;则表达式y=2.75+x/2的值是（）', '若有定义int x=3,y=2和float a=2.5,b=3.5,则表达式:(x+y)%2+(int)a/(int)b的值是（）', '式子7*15=133成立,则用的是几进制（）', '下面程序执行的结果是（）\nint a=1;\nvoid test()\n{int a=2;\na+=1;}\nint main()\n{test();\nprintf("%d\\n",a);return 0;}', '若有宏定义：#define MOD(x，y) x％y,则执行以下语句后的输出结果是（）\nint a=13,b=94;\nprintf("％d\\n",MOD(b,a+4);', '输出结果(32位机器上)\nvoid Func(char str_arg[2]){int m = sizeof(str_arg);\nint n = strlen(str_arg);\nprintf("%d\\n", m);printf("%d\\n", n);}\nint main(){char str[] = "Hello";\nFunc(str);}', '下面函数的执行结果是（）\nint main()\n{int a,x;\nfor(a = 0,x = 0;a<=1 && !x++;a++)\n{a++;}\nprintf("%d %d",a,x);\nreturn 0;}', '下面函数的执行结果是（）\nint fun(int x){\nint count = 0;\nwhile(x){\ncount++;x = x &(x-1);}\nreturn count;}\nint main(){\nprintf("%d",fun(2018));}', '下面函数的执行结果是（）\nint f(int x,int y){\nreturn (x&y)+((x^y)>>1);}\nint main(){\nf(2,4);\nreturn 0;}', '下面函数的执行结果是（）\n#define sum(a,b,c) a+b+c\nint main(){\nint i = 3;\nint j = 2;\nprintf("%d\\n",i*sum(i,(i+j),j));\nreturn 0;}', '设x、y、z、t均为int型变量,则执行以下语句后,t的值为（）\nx=y=z=1;\nt=++x || ++y && ++z;', '以下条件表达式中能完全等价于条件表达式x的是（）', 'i=4,那么语句：j=i+++1,执行后的结果应该是( )', '有变量int i = 0;int a = i++;int b=++a;int c = a+b;请问表达式a?b:c的值是( )', '以下程序的输出结果是( )\nint main(){\nchar x=2,y=2,z;\nz=(y<<1)&(x>>1);\nprintf("%d\\n",z);\n}', '在16位C编译系统上,下列程序执行后的输出结果是( )\nvoid main(){\nint a=-32769;\nprintf("%8U\\n",a);\n}', '以下程序的输出结果是( )\nvoid main(){\nchar x = 040;\nprintf("%0\\n",x<<1);\n}', '在下面代码中,fun(3)的值为( )\nint fun(int i = 1,int j = 2){\nreturn (i + j);\n}', '32位机上根据下面的代码,下列说法正确的是( )\nsigned char a = 0xe0;\nunsigned int b = a;\nunsigned char c = a;', '以下程序的输出结果是( )\nint main(){\nint a=5,b=4,c=6,d;\nprintf("%d\\n",d=a>b?(a>c?a:c):(b));\n}', '下面程序的输出结果是( )\n#define add(a,b) a+b\nint main(){\nprintf("%d\\n",3*add(4,7));\nreturn 0;\n}', '以下程序的运行结果是( )\n#define MIN (x,y) (x)<(y) ? (x):(y)\nvoid main(){\nint i=10,j=15,k;\nk=10*MIN(i,j);\nprintf("%d\\n",k);}', '设a为int型变量,执行下列赋值语句后,a的取值分别是(  )\na=125.534;\na=(int)125.521%4;\na=5<<2;', '以下程序运行后的输出结果是( )\n#define SUB(X,Y) (X+1)*Y\nvoid main( ){\nint a=3,b=4;\nprintf("%d\\n",SUB(a++,b++));}', '下面程序的输出是( )\n#define f(x) x*xvoid main(){\nint a=6,b=2,c;\nc=f(a)/f(b);\nprintf("%d",c);}', '以下程序运行后的输出结果是( )\nint fun(int a, int b){return a+b;}\nvoid main(){\nint x=6 ,y=7,z=8,r;\nr=fun(fun(x,y),z--);\nprintf("%d\\n",r);}', '下面程序的输出结果是( )\n#define SQR(A) A*A\nvoid main(){\nint x=6,y=3,z=2;\nx/=SQR(y+z)/SQR(y+z);\nprintf("%d",x);}', '执行"int x=1;int y=~x;"语句后,y的值为( )', '设有定义语句：char c1=92,c2=92;,则以下表达式中值为零的是( )', '#define N 3+1\n#define Y(n) ((N+1)*n)\n则执行语句z=2*(N+Y(5+1))后,z的值为( )', '以下程序的输出结果是( )\nvoid main(){\nint i,j,k,a=3,b=2;\ni=(--a==b++)?--a:++b;\nj=a++;k=b;\nprintf("i=%d,j=%d,k=%d\n",i,j,k);}', '已知int x=10,y=20,z=30;以下语句执行后x,y,z的值是( )\nif(x>y)\nz=x;x=y;y=z;', '将逻辑代码：if(x % 2){return x-1 ;}\nelse{return x;}\n用表达式：return x & -2;替代,以下说法中不正确的是( )', '若有以下定义和语句：\nint u=010,v= 0x10,w=10;\nprintf("%d,%d,%d\\n",u,v,w);\n则输出结果是( )','请写出下列代码的输出内容( )\nint a, b, c, d;\na = 10;\nb = a++;c = ++a;\nd = 10 * a++;\nprintf("b,c,d:%d,%d,%d",b,c,d);'],

    questionsA: ['A.327', 'A.1', 'A.(x>=y)&&(y>=z)', 'A.0', 'A.1,1,2', 'A.1,0', 'A.0', 'A.float', 'A.552', 'A.65', 'A.17', 'A.1,19', 'A.10,10,10', 'A.2.4', 'A.5.5', 'A.0', 'A.7', 'A.1', 'A.9', 'A.5 5', 'A.2 2', 'A.2018', 'A.3', 'A.16', 'A.不定值', 'A.(x==0)', 'A.i=4,j=6', 'A.0', 'A.1', 'A.32769', 'A.100', 'A.5', 'A.a>0 && c>0 为真', 'A.5', 'A.33', 'A.10', 'A.125,31,1', 'A.25', 'A.3', 'A.21', 'A.5', 'A.1', 'A.c1^c2', 'A.60', 'A.i=2,j=1,k=3', 'A.x=10,y=20,z=30', 'A.计算机的补码表示使得两段代码等价', 'A.8,16,10','A.b,c,d:10,12,120'],

    questionsB: ['B.99', 'B.2', 'B.(x>=y)AND(y>=z)', 'B.144', 'B.1,0,3', 'B.0,1', 'B.1', 'B.char', 'B.264', 'B.20', 'B.18', 'B.-1,19', 'B.8,16,10', 'B.2.5', 'B.5', 'B.2', 'B.8', 'B.2', 'B.3', 'B.5 4', 'B.2 1', 'B.0', 'B.5', 'B.33', 'B.4', 'B.(x!=0)', 'B.i=5,j=5', 'B.1', 'B.0', 'B.8U', 'B.80', 'B.4', 'B.a == c 为真', 'B.4', 'B.19', 'B.15', 'B.125,1,20', 'B.20', 'B.18', 'B.15', 'B.6', 'B.0', 'B.c1&c2', 'B.190', 'B.i=1,j=1,k=2', 'B.x=20,y=30,z=30', 'B.用第二段代码执行起来会更快一些', 'B.10,10,10','B.b,c,d:11 12 120'],

    questionsC: ['C.328', 'C.3', 'C.(x>=y>=z)', 'C.12', 'C.0,1,2', 'C.1,1', 'C.12', 'C.int', 'C.144', 'C.15', 'C.23', 'C.1,17', 'C.8,10,10', 'C.2.75', 'C.3', 'C.1.5', 'C.9', 'C.3', 'C.7', 'C.4 5', 'C.2 0', 'C.1', 'C.1', 'C.26', 'C.1', 'C.(x==1)', 'C.i=5,j=6', 'C.2', 'C.4', 'C.32767', 'C.64', 'C.3', 'C.b的十六进制表示是：0xffffffe0', 'C.6', 'C.25', 'C.100', 'C.125,31,20', 'C.12', 'C.36', 'C.20', 'C.1', 'C.-1', 'C.~c2', 'C.248', 'C.i=4,j=2,k=4', 'C.x=20,y=30,z=10', 'C.这段代码只适用于x为正数的情况', 'C.8,8,10','C.b,c,d:11,12,130'],

    questionsD: ['D.72', 'D.4', 'D.(x>=y)&(y>=z)', 'D.264', 'D.0,0,3', 'D.0,0', 'D.6', 'D.double', 'D.-264', 'D.10', 'D.24', 'D.-1,17', 'D.8,8,10', 'D.0', 'D.4.0', 'D.1', 'D.11', 'D.程序崩溃', 'D.5', 'D.4 4', 'D.1 1', 'D.7', 'D.没有输出', 'D.14', 'D.0', 'D.(x!=1)', 'D.i=6,j=6', 'D.3', 'D.8', 'D.-32767', 'D.32', 'D.2', 'D.上面都不对', 'D.不确定', 'D.49', 'D.150', 'D.125.534,2,20', 'D.16', 'D.9', 'D.31', 'D.0', 'D.-2', 'D.c1|c2', 'D.上述答案都不对', 'D.i=1,j=1,k=3', 'D.x=20,y=30,z=20', 'D.第一段代码更适合阅读', 'D.8,10,10','D.b,c,d:11,12,130'],

    answer: ['D','B','A','A','D','A','A','D','D','B','B','D','B','B','C','D','B','A','C','C','B','D','D','A','C','B','B','B','B','B','A','A','C','C','B','B','B','D','C','A','D','D','A','A','D','B','C','A','A'],

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
          item:item
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
    var item = this.data.item;
    if (this.data.item.countj) {
      if (id == 'A') {
          item.borA ="1rpx solid #00a57a;",
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
        if(this.data.item.rightcount == 40) {
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
      item:item
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