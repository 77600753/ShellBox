var app = getApp()
Page({
  data: {
    uid: "",
    pwd: "",
    jsonStr: "",
    hasUserInfo: 0
  },
  start: function() {
    wx.switchTab({
      url: '../bookSearch/index',
    })
  },
  onLoad: function(options) {
    wx.showToast({
      title: "loading",
      icon: "loading",
      duration: 5000
    })
    var that = this

    this.setData({
      uid: options.uid,
      pwd: options.pwd,
    });
    wx.request({
      url: 'https://airmole.cn/wechat/wxapp/api/Airmole_jiaowuInfoQuery.php?uid=' + options.uid + '&pwd=' + options.pwd,
      success: function(res) {
        that.setData({
          jsonStr: res.data,
        })
        wx.hideToast();
        console.log(res.data);
      }
    })
  }
})