Page({
  data: {
    questions: ['运行下面程序后,输出是( )\nvoid main( ){\nint k=-3;\nif (k<=0) printf("****\\n");\nelse printf("####\\n");}', '执行下面程序的输出结果是( )\nvoid main( ){\nint a=5,b=0,c=0;\nif (a=a+b) printf("****\\n");\nelse  printf("####\\n");}', '以下程序运行结果是( )\nvoid main( ){\nint x=41,y=1;\nif (x%3==0 && x%7==0)\ny+=x;printf("y=%d\\n",y);\nelse y=x;printf("y=%d",y);}', '执行下列程序段后的输出结果是( )\nint x=1,y=1,z=1;\nx+=y+=z;\nprintf("%d\\n",x<y?y:x);', '设ch是char型变量,值为\'A\',则表达式ch=(ch>=\'A\' && ch<=\'Z\')?ch+32:ch的值是( )', '以下程序的执行结果是( )\nvoid main( ){int a,b,c,d,x;\na=c=0;b=1;d=20;\nif(a) d=d-10;\nelse if(!b)\n    if(!c) x=15;\n    else x=25;\nprintf("d=%d\\n",d);}', '下列程序执行后的输出结果是( )\nvoid main( ){\nint x,y=1,z;\nif((z=y)<0)  x=4;\nelse if (y==0) x=5;\nelse x=6;\nprintf("%d,%d\\n",x,y);}', '假定w、x、y、z、m均为int型变量,则以下程序段执行后,m的值是( )\nw=1;x=2;y=3;z=4;\nm=(w<x)?w:x;\nm=(m<y)?m:y;\nm=(m<z)?m:z;', '若执行下面的,程序从键盘上输入9,则输出结果是( )\nvoid main( ){\nint n;\nscanf("%d",&n);\nif(n++<10) printf("%d\\n",n);\nelse printf("%d\\n",n--);}', '以下程序输出结果是( )\nvoid main( ){\nint m=4;\nif(++m>5) printf("%d\\n",m--);\nelse printf("%d\\n",--m);}', '若执行下面的程序从键盘上输入5,则输出结果是( )\nvoid main( ){\nint x;\nscanf("%d",&x);\nif(x++>5) printf("%d\\n",x);\nelse printf("%d\\n",x--);}', '以下程序段运行结果是( )\nint x=1,y=1,z=-1;\nx+=y+=z;\nprintf("%d\\n",x<y?y:x);', '对下面程序段描述正确的是( )\nint x=0,s=0;\nwhile(!x!=0) s+=++x;\nprintf("%d",s);', '下面程序段的输出结果是( )\nx=3;\ndo{y=x--;\nif(!y) printf("*");continue;\nprintf("#");\n}while(x=2);', '下面程序的运行结果是( )\nvoid main( ){\nint a=1,b=10;\ndo{\nb-=a;a++;\n}while(b--<0);\nprintf("%d,%d\\n",a,b);}', '下面程序段的运行结果是( )\nint n=0;\nwhile(n++<=2)\nprintf("%d",n);', '下面程序段的运行结果是( )\nint x=0,y=0;\nwhile(x<15) y++,x+=++y;\nprintf("%d,%d",y,x);', '函数pi的功能是根据以下近似公式求π值\n(π*π)/6=1+1/(2*2)+1/(3*3)+..+1/(n*n)\n请填空,完成求π的功能( )\ndouble s=0.0; int i,n;\nscanf("%ld",&n);\nfor(i=1;i<=n;i++) s=s+____;\ns=(sqrt(6*s));', '下面程序段的运行结果是( )\nfor(x=10;x>3;x--){\nif(x%3) x--;\n--x; --x;\nprintf("%d ",x);}', '下面程序的运行结果是( )\nvoid main( ){\nint a=-1, b=0;do{++a;++a;b+=a;\n}while(a<9);\nprintf("%d\\n",b);}', '下面程序段的运行结果是( )\nfor(i=1;i<=5;)\nprintf("%d",i);\ni++;', '下面程序的输出结果是( )\n#include<stdio.h>\nvoid main( ){\nint n=4;\nwhile(n--) printf("%d ",n--);\n}', '以下程序的输出结果是( )\nvoid main(){\nint i=10,j=0;\ndo{\nj=j+1; i--;\n}while(i>2);\nprintf("%d\\n",j);}', '以下函数的功能是：求x的y次方,请填空( )\nvoid main(){int i,x,y;double z;\nscanf("%d %d",&x,&y);\nfor(i=1,z=x;i<y;i++) z=z*____;\nprintf("x^y=%e\\n",z);}', '以下程序段的执行结果是( )\nint i,j,m=0;\nfor(i=1;i<=15;i+=4)\nfor(j=3;j<=19;j+=4)\nm++;\nprintf("%d\\n",m);', '下面程序的输出结果是( )\nvoid main( ){int i;\nfor(i=1;i<6;i++)\n{\nif (i%2!=0) printf("#");continue;\nprintf("*");}}', '下面程序的输出结果是( )\nvoid main( ){\nint x=10,y=10,i;\nfor(i=0;x>8;y=++i)\nprintf("%d %d ",x--,y);\n}', '执行以下程序后,输出的结果是( )\nvoid main( ){\nint y=10;do{y--;\n}while (--y);\nprintf("%d\\n",y--);}', '有如下程序,该程序段的输出结果是( )\nvoid main( ){\nint n=9;\nwhile(n>6) {n--;printf("%d",n);}\n}', '有如下程序,该程序的执行结果是( )\nvoid main( ){\nint i,sum=0;\nfor(i=1;i<=3;sum++) sum+=i;\nprintf("%d\\n",sum);\n}', '以下循环体的执行次数是( )\nvoid main( ){\nint i,j;\nfor(i=0,j=1; i<=j+1; i+=2, j--)\nprintf("%d \\n",i);\n}', '在执行以下程序时,如果从键盘上输入：ABCdef<回车>,则输出为( )\nchar ch;\nwhile((ch=getchar( ))!=\'\n\'){\nif(ch>=\'A\' && ch<=\'Z\') ch=ch+32;\nelse if(ch>=\'a\' && ch<\'z\') ch=ch-32;\nprintf("%c",ch);}', '下面程序的输出结果是( )\nint i,k=0, a=0, b=0;\nfor(i=1;i<=4;i++){\nk++;\nif (k%2==0) {a=a+k; continue;}\nb=b+k;a=a+k;}\nprintf("k=%d a=%d b=%d\\n",k,a,b);', '执行下面程序段后,k的值是( )\nint i,j,k;\nfor(i=0,j=10;i<j;i++,j--)\nk=i+j;', '下面程序是计算n个数的平均值,请填空( )\nint i,n;float x,avg=0.0;\nscanf("%d",&n);\nfor(i=0;i<n;i++){\nscanf("%f",&x);\navg=avg+_____;}\navg=______;', '从键盘上输入若干个学生的成绩, 统计并输出最高成绩和最低成绩,当输入负数时结束输入｡请填空( )\nfloat x,amax,amin;\nscanf("%f",&x);amax=x;amin=x;\nwhile (__){if(x>amax) amax=x;\nif(______) amin=x;\nscanf("%f",&x);}', '阅读以下程序,程序运行后的输出结果是( )\nvoid main( ){\nint x;\nfor(x=5;x>0;x--)\nif(x--<5) printf("%d,",x);\nelse printf("%d,",x++);}', '以下程序段的输出结果是( )\nint k,n,m;\nn=10;m=1;k=1;\nwhile (k<=n) {m*=2;k+=4;}\nprintf("%d\\n",m);', '下面程序的输出结果是( )\nint y=9;\nfor(;y>0;y--){\nif(y%3==0){\nprintf("%d",--y);\ncontinue;}}', '下面程序的输出结果是( )\nint x=3;\ndo{\nprintf("%d ",x-=2);\n}while(!(--x));', '定义如下变量:int n=10; 则下列循环的输出结果是( )\nwhile(n>7){\nn--;\nprintf("%d  ",n);}', '下面程序的输出结果是( )\nfor(int i=1;i<=5;i++){\nif(i%2) printf("*");\nelse continue;\nprintf("#");\n}', '下面程序段中,循环体的执行次数是( )\nint a=10,b=0;\ndo{\nb+=2;a-=2+b;\n}while(a>=0);','若i为整型变量,则以下循环语句的循环次数是( )\nfor(i=2;i==0;)\nprintf("%d",i--);'],

    questionsA: ['A.####', 'A.有语法错误不能编译', 'A.y=41', 'A.3', 'A.Z', 'A.d=20', 'A.4,1', 'A.4', 'A.11', 'A.7', 'A.7', 'A.1', 'A.运行程序段后输出0', 'A.##', 'A.3,11', 'A.012', 'A.20,7', 'A.1/i*i', 'A.6 3', 'A.34', 'A.12345', 'A.2 0', 'A.50', 'A.i++', 'A.12', 'A.#*#*#', 'A.10 1 9 2', 'A.-1', 'A.987', 'A.6', 'A.3', 'A.ABCdef', 'A.k=5 a=10 b=4', 'A.9', 'A.i   avg/i', 'A.A、x<=0  x>amin', 'A.4,3,2,', 'A.4', 'A.741', 'A.1', 'A.10  9  8','A.*#*#*#$','A.4','A.无限次'],

    questionsB: ['B.****', 'B.能通过编译,但不能通过连接', 'B.y=43', 'B.2', 'B.a', 'B.d=10', 'B.6,1', 'B.3', 'B.10', 'B.6', 'B.6', 'B.2', 'B.运行程序段后输出1', 'B.##*', 'B.2,8', 'B.123', 'B.6,12', 'B.1.0/i*i', 'B.7 4', 'B.24', 'B.1234', 'B.3 1', 'B.52', 'B.x++', 'B.15', 'B.#####', 'B.9 8 7 6', 'B.1', 'B.876', 'B.3', 'B.2', 'B.abcDEF', 'B.k=3 a=6 b=4', 'B.11', 'B.x   avg/n', 'B.x>0  x<=amin', 'B.4,3,1,', 'B.16', 'B.852', 'B.1 -2', 'B.9  8  7','B.#*#*#*$','B.5','B.0次'],

    questionsC: ['C.####****', 'C.输出 ****', 'C.y=42', 'C.1', 'C.z', 'C.d=15', 'C.5,0', 'C.2', 'C.9', 'C.5', 'C.5', 'C.4', 'C.程序段中的控制表达式是非法的', 'C.死循环', 'C.1,-1', 'C.234', 'C.20,8', 'C.1.0/(i*i)', 'C.6 2', 'C.26', 'C.15', 'C.3 2 1', 'C.51', 'C.x', 'C.20', 'C.*****', 'C.10 9 9 0', 'C.8', 'C.8765', 'C.死循环', 'C.1', 'C.abc', 'C.k=4 a=10 b=3', 'C.8', 'C.x   avg/x', 'C.x>0   x>amin', 'C.5,4,2,', 'C.8', 'C.963', 'C.3 0', 'C.10  9  8  7','C.#*#*$','C.3','C.1次'],

    questionsD: ['D.有语法错误不能通过编译', 'D.输出 ####', 'D.y=1', 'D.4', 'D.A', 'D.25', 'D.出错信息', 'D.1', 'D.8', 'D.4', 'D.4', 'D.不确定的值', 'D.程序段循环无数次', 'D.输出错误信息', 'D.4,9', 'D.错误信息', 'D.8,20', 'D.1.0/(n*n)', 'D.7 3', 'D.25', 'D.无限循环', 'D.2 1 0', 'D.8', 'D.i', 'D.25', 'D.*#*#*', 'D.10 10 9 1', 'D.0', 'D.9876', 'D.0', 'D.0', 'D.DEF', 'D.k=4 a=10 b=4', 'D.10', 'D.i   avg/n', 'D.x>=0   x<amin', 'D.5,3,1,', 'D.32', 'D.875421', 'D.是死循环', 'D.9  8  7  6','D.*#*#$','D.2','D.2次'],

    answer: ['D','C','A','A','B','A','B','D','B','D','B','A','B','C','B','B','D','C','B','D','D','B','D','C','C','A','D','D','B','C','D','B','D','D','B','D','B','C','B','B','B','A','C','C'],

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