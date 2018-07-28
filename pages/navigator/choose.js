// pages/navigator/choose-site.js
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isChecked: false,
        item:{
            shop1: "生鲜传奇东海星城店",
            shop2: "生鲜传奇东海星城店生鲜",
            shop3: "生鲜传奇东海星城店传奇",
        },
        nowsite:'',
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
    
    },
    changeShop:function(e){
        let t = e.currentTarget.dataset.shop;
        var pages = getCurrentPages();
        var currPage = pages[pages.length - 1];   //当前页面
        var prevPage = pages[pages.length - 2];  //上一个页面
        prevPage.setData({
            nowsite:t,
            isChecked: true
        })
        wx.navigateBack();
    }
})
