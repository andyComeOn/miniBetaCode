var app = getApp();
Page({
  data: {
    userInfo: {},
    myUrl: '../ce/ce',
    nini: '&nbsp;'
  },
  onLoad: function () {
    //console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      //console.log(that.globalData.userInfo)
      that.setData({
        userInfo: userInfo
      })
    })
  }
})