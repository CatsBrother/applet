// pages/store/store.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        nowsite:"生鲜传奇融科城",
        imglink:[
            '../img/cyc1.png',
            '../img/cyc1.png',
            '../img/cyc1.png',
            '../img/cyc1.png',
        ],
        isChoose:true,
        scroll:{
            box1:{
                image:'../img/show1.png',
                name:'台湾葡萄柚台湾葡萄柚台湾葡萄柚台湾葡萄柚',
                sell:'12.12',
                peo:'三人团',
                now:'已拼23件'
            },
            box2: {
                image: '../img/show2.png',
                name: '澳洲大龙虾澳洲大龙虾澳洲大龙虾',
                sell: '121.2',
                peo: '三人团',
                now: '已拼233件'
            }
        },
        item:{
            box1:{
                image:'../img/tag1.png',
                h:'雪碧汽水饮料水饮料雪碧汽水雪碧汽水饮料水饮料雪碧汽水饮料雪碧汽水饮料水饮料雪碧汽水饮料雪碧汽水饮料水饮料雪碧汽水饮料',
                p:'两排文字多出示两排文字多出示两排文字多出示两排文字多出示两排文字多出示两排',
                sell:'2.50',
                price: '￥3.00',
                peo:'三人团',
                gray:'23人成团，6人正在团23人成团，6人正在团23人成团，6人正在团23人成团，6人正在团'
            },
            box2: {
                image: '../img/tag2.png',
                h: '红宝石葡萄柚',
                p: '两排文字多出省略号显示，两排文字多出省略号显示',
                sell: '38.8',
                price: '￥27.00',
                peo: '阶梯团',
                gray: '23人成团，可返券￥20'
            },
            box3: {
                image: '../img/tag3.png',
                h: '进口贵妃橘',
                p: '两排文字多出省略号显示，两排文字多出省略号显示',
                sell: '17.50',
                price: '￥38.00',
                peo: '阶梯团',
                gray: '23人成团，可返券￥20'
            }
        },
        address:{
            first:{
                name: '生鲜传奇融科城店生鲜传',
                distance: '2.1km'
            },
            second:{
                name: '生鲜传奇融科城店',
                distance: '2.2km'
            },
        }

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
    gclick:function(e){
        var val = this.data.isChoose;
        if(val){
        }else{
            this.setData({
                isChoose: !val
            })
        }
    },
    mclick:function(e){
        var val = this.data.isChoose;
        if (!val) {
        } else {
            this.setData({
                isChoose: !val
            })
        }
    }
})