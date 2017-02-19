var api = require('../../utils/api.js');

Page({
    data: {
        feed: [],
        ban:'../../img/ban.png'
    },
    onLoad: function (option) {
        var that = this;
        this.getData();
    },
    getData: function () {
        var that = this;
        wx.request({
            url: api.host + api.apiList.getLearnArticles,
            method: 'GET',
            data: { 'pid': 1, 'size': 20, 'start': 0, 'uid': 10060 },
            success: function (res) {
                console.log(res)
                console.log('---')
                that.setData({
                    feed: res.data.attachment.articles
                })
            }
        })
    }
})
