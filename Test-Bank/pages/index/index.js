//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    show:false
  },
  onShareAppMessage: function () {
    return {
      title: '图论刷题',
      desc: '你准备好了吗',
      path: '/pages/index/index'
    }
  },
  //事件处理函数
  Call_C: function() {
    var that = this
    wx.navigateTo({
      url: '../contentC/contentC'
    })
  },
  Call_Linux: function () {
    wx.navigateTo({
      url: '../contentLinux/contentLinux'
    })
  },
  Call_struct: function () {
    wx.navigateTo({
      url: '../contentstruct/contentstruct'
    })
  },
  Call_about: function () {
    this.setData({
      show:true
    })
  },
  exit:function(){
    this.setData({
      show:false
    })
  },
  onLoad: function () {
  },
})
