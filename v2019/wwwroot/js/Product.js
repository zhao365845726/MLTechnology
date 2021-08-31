/*
    *  init() 在初始化时调用
    *
    *  firstLoad() 是首次进入页面加载图片的方法
    *
    *  bindScroll() 是绑定滚动
    * */
var loadImga = {
  init: function () {
    this.firstLoad();
    var self = this;
    window.onscroll = function () {
      self.bindScroll();
    };
  },
  firstLoad: function () {
    //设备可用高度
    var availHeight = window.screen.availHeight;

    //遍历#one下的img，然后替换路径
    for (var x = 0; x < document.querySelectorAll('.loadImg').length; x++) {
      var el = document.querySelectorAll('.loadImg')[x];
      //如果是首屏显示的图片
      if (el.offsetTop < availHeight) {
        var imgUrl = el.dataset.url;
        var img = new Image();
        img.src = imgUrl;
        img.onload = (function (e) {
          el.src = el.dataset.url;
          el.removeAttribute('data-url');
        })();
      } else {
        break;
      }
    }
  },
  bindScroll: function () {
    // 设备可用高度
    var availHeight = window.screen.availHeight;
    // 滚动的高度
    var scrollHeight = document.documentElement.scrollTop;
    // 距img元素显露出的距离
    var diff = 50;

    // 判断如果显示出来了#two
    for (var x = 0; x < document.querySelectorAll('.loadImg').length; x++) {
      var el = document.querySelectorAll('.loadImg')[x];
      // img距顶部的高度
      var contentTop = el.offsetTop;
      // 判断此时显示出img
      if (scrollHeight + diff > contentTop - availHeight) {
        if (el.hasAttribute('data-url')) {
          var imgUrl = el.getAttribute('data-url');
          var img = new Image();
          img.src = imgUrl;
          img.onload = (function () {
            el.src = el.getAttribute('data-url');
            el.removeAttribute('data-url');
          })();
        }
      }
    }
  }
};
loadImga.init();