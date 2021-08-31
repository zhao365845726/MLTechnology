var mySwiper = new Swiper('.swiper-container', {
  loop: true, // 循环模式选项
  effect: 'fade',//淡入
  speed: 5000,
  autoplay: {
    delay: 3000
  },
})
var mea = document.getElementById('mea');
var whiteBtnOne = document.getElementById('whiteBtnOne_1');
var blackBtn = document.getElementById('blackBtn_1');
var mea1 = document.getElementById('mea1');
var whiteBtnOne2 = document.getElementById('whiteBtnOne_2');
var blackBtn2 = document.getElementById('blackBtn_2');
var mea3 = document.getElementById('mea3');
var RedArrowBtn3 = document.getElementById('RedArrowBtn_3');
var whiteArrowBtn3 = document.getElementById('whiteArrowBtn_3');
var widtha = window.screen.width;
if (widtha > 768) {
  mea.onmouseover = function () {
    mea.style.backgroundColor = 'white';
    mea.style.color = 'black';
    mea.style.textDecoration = 'none';
    whiteBtnOne.style.display = 'none';
    blackBtn.style.display = 'inline';
    mea.style.border = '0px';
  }
  mea.onmouseout = function () {
    mea.style.backgroundColor = '';
    mea.style.color = '';
    whiteBtnOne.style.display = 'inline';
    blackBtn.style.display = 'none';
    mea.style.border = '1px solid #f0bc58';
  }
  mea1.onmouseover = function () {
    mea1.style.backgroundColor = 'white';
    mea1.style.color = 'black';
    mea1.style.textDecoration = 'none';
    whiteBtnOne2.style.display = 'none';
    blackBtn2.style.display = 'inline';
    mea1.style.border = '0px';
  }
  mea1.onmouseout = function () {
    mea1.style.backgroundColor = '';
    mea1.style.color = '';
    whiteBtnOne2.style.display = 'inline';
    blackBtn2.style.display = 'none';
    mea1.style.border = '1px solid #f0bc58';
  }
  mea3.onmouseover = function () {
    mea3.style.backgroundColor = '#FDA409';
    mea3.style.color = 'white';
    mea3.style.textDecoration = 'none';
    RedArrowBtn3.style.display = 'none';
    whiteArrowBtn3.style.display = 'inline';
    mea3.style.border = '0px';
  }
  mea3.onmouseout = function () {
    mea3.style.backgroundColor = '';
    mea3.style.color = '';
    RedArrowBtn3.style.display = 'inline';
    whiteArrowBtn3.style.display = 'none';
    mea3.style.border = '1px solid #f0bc58';
  }
  mea.onclick = function () {
    window.location.href = "About";
  }
  mea1.onclick = function () {
    window.location.href = "https://ke.qq.com/course/302211?taid=3825196658367619";
  }
  mea3.onclick = function () {
    window.location.href = "http://www.hanjiazhuang.cn";
  }
} else {
  mea.onclick = function () {
    document.getElementById('shadeone').classList.remove('nonea');
    document.getElementById('modalone').classList.remove('nonea');
    mea.style.backgroundColor = 'white';
    mea.style.color = 'black';
    mea.style.textDecoration = 'none';
    mea.style.border = '0px';
    window.location.href = "Index#guanyuone";
  }
  var lonea = document.getElementById('lonea');
  lonea.onclick = function () {
    document.getElementById('shadeone').classList.add('nonea');
    document.getElementById('modalone').classList.add('nonea');
    mea.style.backgroundColor = '';
    mea.style.color = '';
    mea.style.border = '1px solid #f0bc58';
  }
  mea1.onclick = function () {
    document.getElementById('shadeone').classList.remove('nonea');
    document.getElementById('modalone').classList.remove('nonea');
    mea1.style.backgroundColor = 'white';
    mea1.style.color = 'black';
    mea1.style.textDecoration = 'none';
    mea1.style.border = '0px';
    window.location.href = "Index#guanyutwo";
  }
  var loneb = document.getElementById('loneb');
  loneb.onclick = function () {
    document.getElementById('shadeone').classList.add('nonea');
    document.getElementById('modalone').classList.add('nonea');
    mea1.style.backgroundColor = '';
    mea1.style.color = '';
    mea1.style.border = '1px solid #f0bc58';
  }
  mea3.onclick = function () {
    document.getElementById('shadeone').classList.remove('nonea');
    document.getElementById('modalone').classList.remove('nonea');
    mea3.style.backgroundColor = '#f0bc58';
    mea3.style.color = 'white';
    mea3.style.textDecoration = 'none';
    mea3.style.border = '0px';
    window.location.href = "Index#guanyuthree";
  }
  var lonec = document.getElementById('lonec');
  lonec.onclick = function () {
    document.getElementById('shadeone').classList.add('nonea');
    document.getElementById('modalone').classList.add('nonea');
    mea3.style.backgroundColor = '';
    mea3.style.color = '';
    mea3.style.border = '1px solid #f0bc58';
  }
}



function companyInfoGray(a) {
  if (a === 1) {
    document.getElementById('brandInfoGray_1').style.display = 'none'
    document.getElementById('brandInfo_1').style.display = 'inline'
  }
  if (a === 2) {
    document.getElementById('brandInfoGray_2').style.display = 'none'
    document.getElementById('brandInfo_2').style.display = 'inline'
  }
  if (a === 3) {
    document.getElementById('brandInfoGray_3').style.display = 'none'
    document.getElementById('brandInfo_3').style.display = 'inline'
  }
  if (a === 4) {
    document.getElementById('brandInfoGray_4').style.display = 'none'
    document.getElementById('brandInfo_4').style.display = 'inline'
  }
  if (a === 5) {
    document.getElementById('brandInfoGray_5').style.display = 'none'
    document.getElementById('brandInfo_5').style.display = 'inline'
  }
  if (a === 6) {
    document.getElementById('brandInfoGray_6').style.display = 'none'
    document.getElementById('brandInfo_6').style.display = 'inline'
  }
  if (a === 7) {
    document.getElementById('brandInfoGray_7').style.display = 'none'
    document.getElementById('brandInfo_7').style.display = 'inline'
  }
  if (a === 8) {
    document.getElementById('brandInfoGray_8').style.display = 'none'
    document.getElementById('brandInfo_8').style.display = 'inline'
  }
  //if (a === 9) {
  //  document.getElementById('brandInfoGray_9').style.display = 'none'
  //  document.getElementById('brandInfo_9').style.display = 'inline'
  //}
  //if (a === 10) {
  //  document.getElementById('brandInfoGray_10').style.display = 'none'
  //  document.getElementById('brandInfo_10').style.display = 'inline'
  //}
  //if (a === 11) {
  //  document.getElementById('brandInfoGray_11').style.display = 'none'
  //  document.getElementById('brandInfo_11').style.display = 'inline'
  //}
  //if (a === 12) {
  //  document.getElementById('brandInfoGray_12').style.display = 'none'
  //  document.getElementById('brandInfo_12').style.display = 'inline'
  //}
  if (a === 13) {
    document.getElementById('brandInfoGray_13').style.display = 'none'
    document.getElementById('brandInfo_13').style.display = 'inline'
  }
  //if (a === 14) {
  //  document.getElementById('brandInfoGray_14').style.display = 'none'
  //  document.getElementById('brandInfo_14').style.display = 'inline'
  //}
}
function companyInfo(a) {
  document.getElementById('brandInfoGray_1').style.display = 'inline'
  document.getElementById('brandInfo_1').style.display = 'none'
  document.getElementById('brandInfoGray_2').style.display = 'inline'
  document.getElementById('brandInfo_2').style.display = 'none'
  document.getElementById('brandInfoGray_3').style.display = 'inline'
  document.getElementById('brandInfo_3').style.display = 'none'
  document.getElementById('brandInfoGray_4').style.display = 'inline'
  document.getElementById('brandInfo_4').style.display = 'none'
  document.getElementById('brandInfoGray_5').style.display = 'inline'
  document.getElementById('brandInfo_5').style.display = 'none'
  document.getElementById('brandInfoGray_6').style.display = 'inline'
  document.getElementById('brandInfo_6').style.display = 'none'
  document.getElementById('brandInfoGray_7').style.display = 'inline'
  document.getElementById('brandInfo_7').style.display = 'none'
  document.getElementById('brandInfoGray_8').style.display = 'inline'
  document.getElementById('brandInfo_8').style.display = 'none'
  //document.getElementById('brandInfoGray_9').style.display = 'inline'
  //document.getElementById('brandInfo_9').style.display = 'none'
  //document.getElementById('brandInfoGray_10').style.display = 'inline'
  //document.getElementById('brandInfo_10').style.display = 'none'
  //document.getElementById('brandInfoGray_11').style.display = 'inline'
  //document.getElementById('brandInfo_11').style.display = 'none'
  //document.getElementById('brandInfoGray_12').style.display = 'inline'
  //document.getElementById('brandInfo_12').style.display = 'none'
  document.getElementById('brandInfoGray_13').style.display = 'inline'
  document.getElementById('brandInfo_13').style.display = 'none'
  //document.getElementById('brandInfoGray_14').style.display = 'inline'
  //document.getElementById('brandInfo_14').style.display = 'none'
}



/*
     *  init() 在初始化时调用
     *
     *  firstLoad() 是首次进入页面加载图片的方法
     *
     *  bindScroll() 是绑定滚动
     * */
var loadImg = {
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
loadImg.init();