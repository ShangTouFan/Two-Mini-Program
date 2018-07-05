Page({
  data: {
    item:{
    questions: ['退出交互式的shell,应键入( )', 'linux系统中,给文件授予可执行权限的命令是( )', 'linux文件的权限–rwxr-xr-x是什么意思', 'vi编辑器中,删除一行的命令是?', '在Linux系统的vi编辑器中,如果不保存对文件进行的修改,应使用( )命令强制退出vi编辑', 'Linux文件权限一共10位长度,从前数第5-7位表示的内容是( )', '在Linux中,file.sh文件的权限为-rw-r--r-x,其对应权限用数值形式表示为( )', 'Linux的非root用户,在自己的目录中,可以删除非空目录dirs的方法是：', 'linux查看系统活跃进程的命令是?', '如何删除一个非空子目录/tmp( )', '终止一个前台进程可能用到的命令和操作是?', '在Linux 系统中,在运行一个程序时,程序中未初始化的全局变量会被加载到以下哪个内存段中?', '在Linux系统下,你用vi编辑器对文本文件test.txt进行了修改,想保存对该文件所做的修改并正常退出vi编辑器,可以( )', '以下哪个环境变量表示当前路径( )', '下面关于i节点描述错误的是( )', '为脚本程序指定执行权限命令的参数是( )', '文件exer1的访问权限为rw-r--r--,现要增加所有用户的执行权限和同组用户的写权限,下列哪个命令是对的?', '如果系统的umask设置为244,创建一个新文件后,它的权限( )', '将/home/stud1/wang目录做归档压缩,压缩后生成wang.tar.gz文件,并将此文件保存到/home目录下,实现此任务的tar格式为( )', 'Linux文件系统的目录结构是一棵倒挂的树,文件都按其作用分门别类地放在相关的目录中｡现有一个外部设备文件,我们应该将其放在( )', '以下函数中,和其他函数不属于一类的是( )', '以下不属于Linux系统命令的是( )', 'Linux文件权限一共10位长度,从前数第5-7位表示的内容是( )', '终止一个前台进程可能用到的命令和操作是( )', '关闭linux系统(不重新启动)可使用命令( )', '在Linux系统,关于硬链接的描述正确的是( )', '某文件的组外成员的权限为只读;所有者有全部权限;组内的权限为读与写,则该文件的权限为( )', '在重新启动Linux系统的同时把内存中的信息写入硬盘,应使用( )命令实现｡', '以下哪个命令可以显示当前目录?','下列哪些命令不能看到文件的大小( )'],

    questionsA: ['A.Esc', 'A.chown', 'A.属主有读,写,执行权限;而属组用户和其他用户只有读,执行权限;', 'A.yy', 'A.:q', 'A.文件所有者所在组的权限', 'A.645', 'A.rm dir dirs', 'A.ps', 'A.del /tmp/*', 'A.kill', 'A.BSS', 'A.在命令模式下执行q!命令', 'A.PATH', 'A.i节点和文件是一一对应的', 'A.chmod +x filename.sh', 'A.chmod a+x,g+w exer1', 'A.--w-r--r--', 'A.tar zcvf /home/wang.tar.gz /home/stud1/wang', 'A./bin', 'A.read', 'A.kill', 'A.文件所有者所在组的权限', 'A.kill', 'A.Ctrl+Alt+Del', 'A.跨文件系统', 'A.4 6 7', 'A.#shutdown -r now','A.echo $(pwd)','A.ls'],

    questionsB: ['B.q', 'B.mv', 'B.属主有读,写,执行权限;而属组用户和其他用户只有读,写权限;', 'B.pp', 'B.:wq', 'B.文件类型', 'B.643', 'B.rm -r dirs', 'B.netstat', 'B.rm -rf /tmp', 'B.CTRL+C', 'B.TEXT', 'B.在命令模式下执行wq命令', 'B.PWD', 'B.i节点能描述文件占用的块数', 'B.chown +x filename.sh', 'B.chmod g+w exer1', 'B.-r-xr--r--', 'B.tar xcvf /home/stud1/wang /home/wang', 'B./etc', 'B.pread', 'B.ifconfig', 'B.文件类型', 'B.ctrl+c', 'B.halt', 'B.可以跨文件系统', 'B.6 7 4', 'B.#halt','B.echo pwd','B.df'],

    questionsC: ['C.exit', 'C.sudo', 'C.属主有读,写,执行权限;而属组用户和其他用户只有写,执行权限;', 'C.dd', 'C.:q!', 'C.文件所有者的权限', 'C.775', 'C.mv dirs /dev/null', 'C.df', 'C.rm -Ra /tmp/*', 'C.shut down', 'C.DATA', 'C.在末行模式下执行:q!', 'C.HOME', 'C.i节点描述了文件大小和指向数据块的指针', 'C.chmod +w filename.sh', 'C.chmod 765 exer1', 'C.-r---w--w-', 'C.tar zcv /home/stud1/wang /home/wang', 'C./dev', 'C.write', 'C.mv', 'C.文件所有者的权限', 'C.shut down', 'C.shutdown -r now', 'C.为链接文件创建新的i节点', 'C.4 7 6', 'C.#reboot','C.$pwd','C.du'],

    questionsD: ['D.quit', 'D.chmod', 'D.属主有读,写,执行权限;而属组用户和其他用户只有写,执行权限;', 'D.rm', 'D.:!q', 'D.其他用户的权限', 'D.745', 'D.destroy dirs', 'D.ifconfig', 'D.rm –rf /tmp/*', 'D.halt', 'D.STACK', 'D.在末行模式下执行:wq', 'D.ROOT', 'D.通过i节点实现文件的逻辑结构和物理结构的转换', 'D.chown +r filename.sh', 'D.chmod o+x exer1', 'D.-r-x-wx-wx', 'D.tar zcvf /home/stud1/wang /home/wang.tar.gz', 'D./lib', 'D.fseek', 'D.remove', 'D.其他用户的权限', 'D.halt', 'D.reboot', 'D.链接文件的i节点与被链接文件的i节点相同', 'D.7 6 4', 'D.#init3','D.pwd | echo','D.find'],

    answer: ['C','D','A','C','C','A','A','B','A','B','B','A','D','B','A','A','A','C','A','C','D','D','A','B','B','D','D','A','A','D'],

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