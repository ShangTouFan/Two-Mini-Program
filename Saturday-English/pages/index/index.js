//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    randnumber:0
  },
  onLoad: function (options) {
  },
  //事件处理函数
  Call_CET4: function () {
    var that = this
    var random = Math.floor(Math.random() * 10);
    this.setData({
      randnumber: random
    })
    wx.navigateTo({
      url: '../CET4/CET4?randnumber=' + that.data.randnumber + ''
    })
  },  
  Call_CET6: function () {
    var that = this
    var random = Math.floor(Math.random() * 10);
    this.setData({
      randnumber: random
    })
    wx.navigateTo({
      url: '../CET6/CET6?randnumber=' + that.data.randnumber + ''
    })
  },
})
