var api = require('../../utils/api.js');
var util = require('../../utils/util.js');

Page({
  data: {
    titleC: '你对台湾的认识怎么样？',
    name: '场长',
    iconUrl: '../../img/x.jpg',
    timeDesc: '10分钟前更新',
    authorDesc: '阿尔法工场CEO，擅长投资、股票',
    feed:[],
    articleAid:0
  },
  onLoad: function (options) {
    var that = this;
    util.showToast()
    that.setData({
        articleAid:options.aid
    })
    this.getData();
  },
  getData: function () {
    var that = this;
    wx.request({
      url: api.host+api.apiList.getLearnArticleDetail,
      method: 'GET',
      data: { 'uid': 10060 ,'aid':that.data.articleAid},
      success: function (res) {
      	// console.log(res)
        util.hideToast()

        that.setData({
          feed: res.data.attachment.article
        })
      }
    })
  }
})