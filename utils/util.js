// 判断网络
function networkStatus() {
    wx.getNetworkType({
        success: function (res) {
            if (res.errMsg !== 'getNetworkType:ok') {
                wx.showModal({
                    content: '获取网络状态失败'
                })
                return false;
            }
            if (res.networkType === 'none') {
                wx.showModal({
                    content: '当前网络不可用，请检查网络设置'
                })
                return false;
            }
        }
    })
}
// 登录
// function login(avatarUrl, nickName, gender, _that) {
//     var __that = _that;
//     wx.login({
//         success: function (res) {
//             console.log(res.code)
//             wx.request({
//                 url: 'https://beta.goldenalpha.com.cn/fundworks/learn/wxLogin',
//                 data: { 'code': res.code, 'headimgurl': avatarUrl, 'nickname': nickName, 'sex': gender },
//                 success: function (res) {

//                     _that.setData({
//                         userId: res.data.attachment.user.uid
//                     })
//                     console.log(res.data.attachment.user.uid)
//                     console.log(_that.data.userId)
//                 }
//             })
//         }

//     })

//     // return _that.data.userId
// }




function showToast() {
    wx.showToast({
        title: '加载中-',
        icon: 'loading',
        duration: 1500
    })
}


function hideToast() {
   setTimeout(function(){
      wx.showToast({
        title: '加载成功-',
        icon: 'success',
        duration: 2000
      })
    },1500)
}

function substr(str){
    if(str.length>=35){
        str = str.substring(0,32) +'...';
    }
    return str;
}


module.exports = {
    networkStatus: networkStatus,
    
    showToast:showToast,
    hideToast:hideToast,
    substr:substr
}