var app = getApp();
var api = require('../../utils/api.js');
var formatTime = require('../../utils/formatTime.js');
var util = require('../../utils/util.js');
var globalId = 0;
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    feed: [],
    userId: 0
  },
  onLoad: function (option) {
    var that = this;
    var _that = this;
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    });
    this.login(that.data.userInfo.avatarUrl, that.data.userInfo.nickName, that.data.userInfo.gender, that);
    //this.getData();
  },
  // 调取登录获得uid
  login: function (avatarUrl, nickName, gender, that) {
    wx.login({
      success: function (res) {
        wx.request({
          url: 'https://beta.goldenalpha.com.cn/fundworks/learn/wxLogin',
          data: { 'code': res.code, 'headimgurl': avatarUrl, 'nickname': nickName, 'sex': gender },
          success: function (res) {
            console.log(res.data.attachment.user.uid)
            that.setData({ userId: res.data.attachment.user.uid })
            globalId = res.data.attachment.user.uid
            console.log(that.data.userId)
            that.getData();
          }
        })
      }
    })
  },
  // 赋值数据
  getData: function () {
    var that = this;
    console.log(that.data.userId);
    console.log(globalId);
    wx.request({
      url: api.host + api.apiList.getLearnPloyAll,
      method: 'GET',
      data: { "uid": globalId },
      
     
      success: function (res) {
        console.log(that.data.userId)
        that.setData({
          feed: that._modifData(res.data.attachment.ploys),
          feed: that._str(res.data.attachment.ploys)
        })
      }
    })
  },
  // 格式化时间
  _modifData: function (data) {
    for (var i in data) {
      data[i].create_time = formatTime.formatTime(data[i].create_time);
    }
    return data;
  },
  // str函数的调用
  _str:function(data){
    for (var i in data) {
      data[i].introduce = util.substr(data[i].introduce);
    }
    return data;

  },
  //事件处理
  bindTap: function (event) {
    wx.navigateTo({
      url: '../ceDetail/ceDetail?pid=' + event.currentTarget.dataset.pid+'&globalId='+globalId
    })
  }
})