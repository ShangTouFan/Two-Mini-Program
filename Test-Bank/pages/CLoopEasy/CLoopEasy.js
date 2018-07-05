Page({
  data: {
    item:{
    questions: ['C语言的if语句嵌套时,if与else的最正确的配对关系是( )', 'C语言的当型循环是先执行循环后判断条件。请问这句话的说法是正确的吗?', '以下不是无限循环的语句为?', '下列描述中正确的是( )', 'or循环语句能够被改写为( )语句。', '下列叙述中正确的是( )', '关于"while(条件表达式)循环体",以下叙述正确的是?(假设循环体里面没有break,continue,return,goto等等语句)', '有关for循环的描述：for循环的循环体语句中,可以包含多条语句,但必须用花括号括起来 是否正确?', '下面有关for循环的正确描述是( )', '设m和n都是int类型,那么以下for循环语句,______。\nfor(m=0,n=-1;n=0;m++,n++)\nn++;', '以下程序中,while循环的循环次数是( )\nint i=0;\nwhile(i<10)\n{\nif(i<1)continue;\nif(i==5)break;\ni++;}', '语句 while(!E);中的表达式!E 等价于,( )', '下列for循环的循环体执行次数为( )\nfor(int i=10, j=1; i=j=0; i++, j--)', '以下程序段的输出结果为( )\nfor(i=4;i>1;i--)\nfor(j=1;j<i;j++)\nputchar(\'#\');', '以下程序的运行结果为：( )\nint main()\n{int i, j, k = 10;\nfor (i = 0; i < 2; i++){k++;\nfor (j = 0; j <= 3; j++){if(j%2)continue;\nk++;}}\nk++;printf("%d",k)}', 'switch语句能够改写为( )语句', '在下面循环语句中循环体执行的次数为( )\nint i=0;\ndo{\ni++;}while(i*i<10);', '下列叙述中正确的是( )', 'int main()\n{int k, j, s;\nfor(k=2;k<6;k++,k++){s = 1;\nfor(j=k;j<6;j++)\ns += j;}\nprintf("％d\\n",s);}\n程序运行后的输出结果是( )', '以下描述中正确的是( )', '在下面的do-while循环语句中,其循环体语句被执行的次数为( )\nint i=0;\ndo{\ni++;}while(i<10);', '下列程序执行后的输出结果是( )\nvoid main(){\nint a=5,b=60,c;\nif (a<b){c=a*b;printf("%d*%d=%d\\n",b,a,c);}\nelse\n{c=b/a;printf("%d/%d=%d\\n",b,a,c);}}', '执行下列程序后的输出结果是( )\n#include <stdio.h>\nvoid main( ){\nint k=4,a=3,b=2,c=1;\nprintf("%d\\n",k<a?k:c<b?c:a);}', '若运行下面程序时,给变量a输入15,则输出结果是( )\n#include <stdio.h>\nvoid main( ){\nint a,b;\nscanf("%d",&a);\nb=a>15?a+10:a-10;\nprintf("%d\\n",b) ;}', '以下程序的输出结果是( )\nvoid main(){\nfloat x=5.0,y;\nif(x<0.0) y=0.0;\nelse if(x<10.0) y=1.0/x;\nelse y=1.0;\nprintf("%f\\n",y);}', '以下程序的执行结果是( )\nvoid main(){\nint x=1,y=0;switch(x){\ncase 1:switch (y){\ncase 0:printf("first\\n");break;\ncase 1:printf("second\\n");break;\n}\ncase 2:printf("third\\n");}}', '以下程序的输出结果是( )\nvoid main( ){\nint x=1,a=0,b=0;\nswitch(x){\ncase 0: b++;\ncase 1: a++;\ncase 2: a++;b++;}\nprintf("a=%d,b=%d\\n",a,b);}', '下面程序的输出结果是( )\nvoid main( ){\nint a=-1,b=1,k;\nif ((++a<0) && (b--<=0))\nprintf("%d %d\\n",a,b);\nelse printf("%d %d\\n",b,a);}', '以下程序的输出结果是( )\nint main(){\nint a=100;\nif(a>100)\nprintf("%d\\n",a>100);else\nprintf("%d\\n",a<=100);}', '以下程序的输出结果是( )\nvoid main( ){\nint a=2,b=-1,c=2;\nif(a<b)\nif(b<0)c=0;\nelse c++;\nprintf("%d\\n",c);}', '下列程序的执行结果是( )\nvoid main( ){\nint x=0,y=1,z=0;\nif(x=z=y)\nx=3;\nprintf("%d,%d\\n",x,z);}', '运行下面程序时,若从键盘输入"5 <CR>",则程序的输出结果是( )\nvoid main( ){\nint a;\nscanf("%d",&a);\nif (a++>5)printf("%d\\n",a);\nelse\nprintf("%d\\n",a--) ;}', '运行下面程序时,若从键盘输入"3,4<CR>",则程序的输出结果是( )\nvoid main( ){\nint a,b,s;\nscanf("%d,%d",&a,&b);\ns=a;\nif (s<b) s=b;\ns=s*s;printf("%d\\n",s);}', '下面程序的输出结果是( )\nvoid main( ){\nint x=8,y=-7,z=9;\nif(x<y)\nif (y<0) z=0;\nelse z-=1;\nprintf("%d\\n",z);}', '运行下面程序时,从键盘输入"12,34,9<CR>",则输出结果是( )\nvoid main( ){int x,y,z;\nscanf("%d,%d,%d",&x,&y,&z);\nif(x<y) if(y<z)printf("%d\\n",z); else printf("%d\\n",y);\nelse if (x<z)printf("%d\\n",z);\nelse printf("%d\\n",x);}', '有float a,b;从键盘输入"2.0<CR>",则输出结果是( )\nscanf("%f",&a);\nif(a<0.0) b=0.0;\nelse if((a<0.5) && (a!=2.0)) b=1.0/(a+2.0);\nelse if(a<10.0) b=1.0/2;\nelse b=10.0;printf("%f\\n",b);', '如果c为字符型变量,判断c是否为空格不能使用( )｡(假设已知空格ASCII码为32)', '运行下面程序时,若从键盘输入"3,5<CR>",则程序的输出结果是( )\nvoid main( ){\nint x,y;\nscanf("%d,%d",&x,&y);\nif(x==y) printf("x==y");\nelse if(x>y) printf("x>y");\nelse printf("x<y");}', '以下叙述正确的是( )', 'C语言中while和do-while循环的主要区别是( )', '以下程序段( )\nx=-1;\ndo{\nx=x*x;\n}while(!x);', '有如下程序,该程序的执行结果是( )\nvoid main(){\nint x=23;\ndo{\nprintf("%d",x--);}while(!x);}', '若变量已正确定义for( x=0,y=0;(y!=99 && x<4 ); x++ );则以上for循环( )', '语句for(a=0,b=0;b！=100&&a<5;a++)scanf("%d",&b);scanf最多可执行次数为( )', 's1和s2已正确定义并分别指向两个字符串｡若要求：当s1所指串大于s2所指串时,执行语句S;则以下选项中正确的是(  )', '执行下面语句后的输出为( )\nint I=1;\nif(I<=0) printf("****\\n");\nelse printf("%%%%\\n");', '当n=5时,下列函数的返回值是( )\nint foo(int n){\nif(n<2){\nreturn n;}\nelse return 2*foo(n-1)+foo(n-2);}', '设有程序段：\nint k=10;\nwhile (k=0) k=k-1;\n则下面描述中正确的是( )', 'float x与"零值"比较的if语句为( )', '下面程序段的输出结果是( )\nchar a[] = "xyz", b[]={\'x\',\'y\',\'z\'};\nif(strlen(a) > strlen(b))\nprintf("a > b\\n");\nelse printf("a <= b\\n");'],

    questionsA: ['A.每个else总是与它上面的最近的未配对的if配对', 'A.正确', 'A.for (y=0,x=1; x>++y; x=i++) i=x;', 'A.表示m>n为true或者m<n为true的表达式为m>n&&m<n', 'A.复合', 'A.break语句只能用于switch语句体中', 'A.循环体的执行次数总是比条件表达式的执行次数多一次', 'A.正确', 'A.for循环只能用于循环次数已经确定的情况', 'A.循环体一次也不执行', 'A.1', 'A.E==0', 'A.0', 'A.无', 'A.17', 'A.for', 'A.4', 'A.break语句只能用于switch语句', 'A.6', 'A.do-while循环体语句只能是一条可执行语句,循环体内不能用复合语句', 'A.8', 'A.60/5=12', 'A.4', 'A.5', 'A.0.000000', 'A.first second(另起一行)', 'A.a=2,b=1', 'A.-1 1', 'A.a<=100', 'A.0', 'A.3,0', 'A.7', 'A.14', 'A.8', 'A.34', 'A.0.000000', 'A.if(c==\'32\')', 'A.3<5', 'A.continue语句的作用是结束整个循环的执行', 'A.do-while的循环体至少无条件执行一次', 'A.是死循环', 'A.321', 'A.执行3次', 'A.4', 'A.if(s1>s2) S;', 'A.%%', 'A.5', 'A.while循环执行10次','A.if (x == 0)','A.a>b'],

    questionsB: ['B.每个else总是与最外层的if配对', 'B.错误', 'B.for (;; x+=1);', 'B.switch语句结构中必须有default语句', 'B.if', 'B.continue语句的作用是使程序的执行流程跳出包含它的所有循环', 'B.条件表达式的执行次数总是比循环体的执行次数多一次', 'B.错误', 'B.for循环是先执行循环体语句,后判断表达式', 'B.循环体执行一次', 'B.10', 'B.E!=1', 'B.1', 'B.######', 'B.18', 'B.if', 'B.3', 'B.在switch语句中必须使用default', 'B.10', 'B.do-while循环由do开始,用while结束,在while(表达式)后面不能写分号', 'B.9', 'B.300', 'B.3', 'B.25', 'B.0.500000', 'B.first third(另起一行)', 'B.a=1,b=1', 'B.0 1', 'B.100', 'B.1', 'B.0,0', 'B.6', 'B.16', 'B.1', 'B.12', 'B.0.500000', 'B.if(c==32)', 'B.5>3', 'B.只能在循环体内和switch语句体内使用break语句', 'B.while的循环控制条件比do-while的循环控制条件严格', 'B.循环执行两次', 'B.23', 'B.执行4次', 'B.6', 'B.if(strcmp(s1,s2)) S;', 'B.****', 'B.11', 'B.循环是无限循环','B.if (x < 0.00001f)','B.a<=b'],

    questionsC: ['C.每个else与if的配对是任意的', '', 'C.while(1){x++;}', 'C.如果至少有一个操作数为true,则包含"||"运算符的表达式true', 'C.switch', 'C.break语句只能用在循环体内和switch语句体内', 'C.条件表达式的执行次数与循环体的执行次数一样', '', 'C.在 for循环中,不能用break语句跳出循环体', 'C.是无限循环', 'C.6', 'C.E!=0', 'C.无限', 'C.#', 'C.8', 'C.do-while', 'C.5', 'C.break 语句必须与switch语句中的case配对使用', 'C.24', 'C.在do-while循环体中,一定要有使while表达式的值变为"假"的操作', 'C.10', 'C.60*5=300', 'C.2', 'C.15', 'C.0.200000', 'C.second first(另起一行)', 'C.a=1,b=0', 'C.1 0', 'C.0', 'C.2', 'C.0,1', 'C.5', 'C.18', 'C.9', 'C.9', 'C.1.000000', 'C.if(c==\'\\40\')', 'C.x>y', 'C.在循环体内使用break语句或continue语句的作用相同', 'C.do-while允许从外部转到循环体内', 'C.循环执行一次', 'C.不输出任何内容', 'C.执行无限次', 'C.5', 'C.if(strcmp(s2,s1)>0) S;', 'C.有语法错,不能正确执行', 'C.29', 'C.循环体语句一次也不执行','C.if(fabs(x) < 0.00001f) 或 if(Math.abs(x) < 0.00001f)','C.编译不通过'],

    questionsD: ['D.每个else总是与它上面的if配对', '', 'D.for(i=10; ;i--)sum+=i;', 'D.if语句结构中必须有else语句', 'D.while', 'D.在循环体内使用break语句和continue语句的作用相同', 'D.条件表达式的执行次数与循环体的执行次数无关', '', 'D.for循环的循环体语句中,可以包含多条语句,但必须用花括号括起来', 'D.有限次循环', 'D.死循环，不能确定次数', 'D.E==1', 'D.以上都不对', 'D.###', 'D.4', 'D.while', 'D.2', 'D.在switch语句中，不一定使用break语句', 'D.40', 'D.do-while循环中,根据情况可以省略while', 'D.11', 'D.12', 'D.1', 'D.10', 'D.1.000000', 'D.second third(另起一行)', 'D.a=2,b=2', 'D.0 0', 'D.1', 'D.3', 'D.3,1', 'D.4', 'D.20', 'D.0', 'D.不确定的值', 'D.0.250000', 'D.if(c==\' \')', 'D.x<y', 'D.从多层循环嵌套中退出时,只能使用goto语句', 'D.do-while的循环体不能是复合语句', 'D.有语法错误', 'D.陷入死循环', 'D.执行次数不定', 'D.1', 'D.if(strcmp(s1,s2)>0) S;', 'D.%%%%', 'D.10', 'D.循环体语句执行一次','D.if(x > -0.00001f)','D.以上都不对'],

    answer: ['A','B','A','C','D','C','B','A','D','A','D','A','A','B','A','B','A','D','B','C','C','C','D','A','C','B','A','C','D','C','D','B','B','C','A','B','A','D','B','A','C','B','B','C','D','A','C','C','C','B'],

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
        if (this.data.item.rightcount == 40) {
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