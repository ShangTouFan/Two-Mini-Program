// pages/contentC/contentC.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        flag:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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

  Call_Base:function( ){
    wx.navigateTo({
      url: "../degree/degree?flag=1"//页面跳转加传值
    })
  },
  Call_Loop: function () {
    wx.navigateTo({
      url: "../degree/degree?flag=2"
    })
  },
  Call_Array: function () {
    wx.navigateTo({
      url: "../degree/degree?flag=3"
    })
  },
  Call_Fun: function () {
    wx.navigateTo({
      url: "../degree/degree?flag=4"
    })
  },
})