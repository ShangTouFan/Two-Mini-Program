Page({
  data: {
    item:{
    questions: ['设umask为002,则新建立的文件的权限是什么?', '以下哪些命令不可以查看当前系统的启动时间( )', '使用ln命令将生成了一个指向文件old的符号链接new,如果你将文件old删除,是否还能够访问文件中的数据?', '在给定文件中查找与设定条件相符字符串的命令为?', '对于Linux说法,下列说法正确的是( )', '什么命令可以查看曾经登录到此系统的用户清单?', 'Linux下查看服务程序占用的端口命令是( )', '下列关于管道(Pipe)通信的叙述中,正确的是( )', '以下关于linux操作系统中硬链接和软链接的描述,正确的是( )', '当前目录下有a和b两个文件,执行命令“ls>c”,请问文件c里面的内容是( )', '我希望看最近执行的3个命令(不包括history),需要用哪个命令?( )', '用ls –al命令列出下面的文件列表,哪个文件是符号连接文件?( )', '使用In命令将生成了一个指向文件old的符号链接new,如果你将文件old删除,是否还能够访问文件中的数据?( )', 'UNIX系统中进程由三部分组成：进程控制块,正文段和数据段｡这意味着一个程序的正文与数据可以是分开的,这种分开的目的不是为了( )', '设fp已定义,执行语句fp=fopen("file","w");后,以下针对文本文件file操作叙述的选项正确的是( )', '内核不包括的子系统是( )','下列关于链接描述,错误的是( )'],

    questionsA: ['A.-rw-rw-r--', 'A.w', 'A.不可能再访问', 'A.gzip', 'A.线性访问内存非法时,当前线程会进入信号处理函数', 'A.ps', 'A.ps -aux', 'A.一个管道可以实现双向数据传输', 'A.硬链接和软链接指向的inode的编号是一样的', 'A.a', 'A.history -n 3', 'A.-rw-rw-rw- 2 hel-s users 56 Sep 09 11:05 hello', 'A.不可能再访问', 'A.可共享正文', 'A.可以随意读和写', 'A.进程管理系统','A.硬链接就是让链接文件的i节点号指向被链接文件的i节点'],

    questionsB: ['B.rwxrwx-w-', 'B.top', 'B.仍然可以访问', 'B.grep', 'B.用mv命令移动文件时,文件的修改时间会发生变化', 'B.last', 'B.netstat –apn', 'B.管道的容量仅受磁盘容量大小限制', 'B.可以建立一个空文件的软链接', 'B.b', 'B.history 3', 'B.-rwxrwxrwx 2 hel-s users 56 Sep 09 11:05 goodbye', 'B.仍然可以访问', 'B.可共享数据', 'B.只能写不能读', 'B.内存管理系统','B.硬链接和符号连接都是产生一个新的i节点'],

    questionsC: ['C.-------w-', 'C.ps', 'C.能否访问取决于文件的所有者', 'C.sort', 'C.ulimit -c设置的是函数调用栈的大小', 'C.lastcomm', 'C.watch', 'C.进程对管道进行读操作和写操作都可能被阻塞', 'C.linux操作系统可以对目录进行硬链接', 'C.ab', 'C.history 4', 'C.drwxr--r-- 1 hel users 1024 Sep 10 08:10 zhang', 'C.能否访问取决于文件的所有者', 'C.可重入', 'C.可以在原有内容后追加写', 'C.I/O管理系统','C.链接分为硬链接和符号链接'],

    questionsD: ['D.rwxrwxr-x', 'D.uptime', 'D.能否访问取决于文件的权限', 'D.find', 'D.malloc函数是应用程序向操作系统申请内存的接口', 'D.accton', 'D.lsof', 'D.一个管道只能有一个读进程或一个写进程对其操作', 'D.硬链接指向inode节点', 'D.abc', 'D.history -n 4', 'D.lrwxr--r-- 1 hel users 2024 Sep 12 08:12 cheng > peng.yan1', 'D.能否访问取决于文件的权限', 'D.方便编程', 'D.写操作结束后可以从头开始读', 'D.硬件管理系统','D.硬连接不能链接目录文件'],
    
    answer: ['A','C','A','B','A','B','B','C','B','D','C','D','A','D','B','D','B'],

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