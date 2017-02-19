var api = require('../../utils/api.js');

Page({
    data: {
    	feed:[],
        iconUrl: '../../img/ic.png',
        orderJumpUrl: '../articleList/articleList',
        orderFlag: 0,
        ceIndex:0,
        globalId:0
    },
    onLoad: function (e) {
    	var that = this;
        console.log(e.pid);
        console.log(e.globalId);
        that.setData({ceIndex: e.pid,globalId:e.globalId})
    	this.getData();
    },
    getData: function () {
	    var that = this;
	    wx.request({
	     	url: api.host+api.apiList.getLearnPloyDetail,
			method: 'GET',
	    	data: { 'uid': 10060,'pid':that.data.ceIndex},
	    	success: function (res) {
	        	// console.log(res)
		        that.setData({
		          feed: res.data.attachment.ploy
		        })
	      	}
	    })
    },
    bindTap: function () {
        wx.navigateTo({
            url: '../articleList/articleList'
        })
    }
})