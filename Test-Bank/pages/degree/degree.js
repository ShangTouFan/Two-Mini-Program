// pages/degree/degree.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      flag:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        var that = this
        var fg = options.flag
        this.setData({
          flag:fg//接收刚才目录选择时候传的值
        })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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
  
  Call_Easy:function(){
    var that = this
    if(that.data.flag == 1)//通过刚才的传值知道要抽哪个题库
    {
      wx.navigateTo({
        url: '../CBaseEasy/CBaseEasy'
      })
    }
    else if(that.data.flag == 2){
      wx.navigateTo({
        url: '../CLoopEasy/CLoopEasy'
      })
    }
    else if(that.data.flag == 3){
      wx.navigateTo({
        url: '../CArrayEasy/CArrayEasy'
      })
    }
    else if(that.data.flag == 4){
      wx.navigateTo({
        url: '../CFunEasy/CFunEasy'
      })
    }
    else if(that.data.flag ==5){
      wx.navigateTo({
        url: '../StructLineEasy/StructLineEasy'
      })
    }
    else if (that.data.flag == 6) {
      wx.navigateTo({
        url: '../StackAndQueueEasy/StackAndQueueEasy'
      })
    }
    else if (that.data.flag == 7) {
      wx.navigateTo({
        url: '../SortEasy/SortEasy'
      })
    }
    else if (that.data.flag == 8) {
      wx.navigateTo({
        url: '../TreeEasy/TreeEasy'
      })
    }
    else if (that.data.flag == 9) {
      wx.navigateTo({
        url: '../LinuxBaseEasy/LinuxBaseEasy'
      })
    }
    else if (that.data.flag == 10) {
      wx.navigateTo({
        url: '../LinuxServerEasy/LinuxServerEasy'
      })
    }
    else if (that.data.flag == 11) {
      wx.navigateTo({
        url: '../LinuxWebEasy/LinuxWebEasy'
      })
    }
  },
  Call_Hard:function(){
    var that = this
    if(that.data.flag == 1){
      wx.navigateTo({
        url: '../CBaseHard/CBaseHard'
      })
    }
    else if (that.data.flag == 2) {
      wx.navigateTo({
        url: '../CLoopHard/CLoopHard'
      })
    }
    else if (that.data.flag == 3) {
      wx.navigateTo({
        url: '../CArrayHard/CArrayHard'
      })
    }
    else if (that.data.flag == 4) {
      wx.navigateTo({
        url: '../CFunHard/CFunHard'
      })
    }
    else if(that.data.flag==5){
      wx.navigateTo({
        url: '../StructLineHard/StructLineHard'
      })
    }
    else if (that.data.flag == 6) {
      wx.navigateTo({
        url: '../StackAndQueueHard/StackAndQueueHard'
      })
    }
    else if (that.data.flag == 7) {
      wx.navigateTo({
        url: '../SortHard/SortHard'
      })
    }
    else if (that.data.flag == 8) {
      wx.navigateTo({
        url: '../TreeHard/TreeHard'
      })
    }
    else if (that.data.flag == 9) {
      wx.navigateTo({
        url: '../LinuxBaseHard/LinuxBaseHard'
      })
    }
    else if (that.data.flag == 10) {
      wx.navigateTo({
        url: '../LinuxServerHard/LinuxServerHard'
      })
    }
    else if (that.data.flag == 11) {
      wx.navigateTo({
        url: '../LinuxWebHard/LinuxWebHard'
      })
    }
  }
})