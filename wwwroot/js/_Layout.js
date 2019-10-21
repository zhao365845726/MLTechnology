//登录页面
var dengle = document.getElementById('dengle');
dengle.onclick = function () {
  document.getElementById('shade').classList.remove('hide');
  document.getElementById('modal').classList.remove('hide');
  document.getElementById('example-navbar-collapse').style.zIndex = '0';
}
function Hide() {
  document.getElementById('shade').classList.add('hide');
  document.getElementById('modal').classList.add('hide');
  document.getElementById('example-navbar-collapse').style.zIndex = '10';
}

//导航下划线
$(document).ready(function () {
  $("#coll a").each(function () {
    $this = $(this);
    console.log($this[0].href == String(window.location))
    if ($this[0].href == String(window.location)) {
      $this.addClass("actv");
    }
  });
})

//悬浮导航
var suspena = document.getElementById('suspena')
var suspena1 = document.getElementById('suspena1');
var suspenb = document.getElementById('suspenb')
var suspenb1 = document.getElementById('suspenb1');
var suspenc = document.getElementById('suspenc')
var suspenc1 = document.getElementById('suspenc1');
var widthb = window.screen.width;
if (widthb > 768) {
  suspena.onmouseover = function () {
    suspena1.style.display = 'block'
    suspena.style.background = '#F2D292'
    suspena1.onmouseover = function () {
      suspena1.style.display = 'block'
      suspena.style.background = '#F2D292'
    }
    suspena1.onmouseout = function () {
     suspena1.style.display = 'none'
     suspena.style.background = '#353535'
    }
    suspenb1.style.display = 'none'
    suspenb.style.background = '#353535'
    suspenc1.style.display = 'none'
    suspenc.style.background = '#353535'
  }
  //suspena.onmouseout = function () {
  //  suspena1.style.display = 'none'
  //  suspena.style.background = '#353535'
  //}
  suspenb.onmouseover = function () {
    suspenb1.style.display = 'block'
    suspenb.style.background = '#F2D292'
    suspenb1.onmouseover = function () {
      suspenb1.style.display = 'block'
      suspenb.style.background = '#F2D292'
    }
    suspenb1.onmouseout = function () {
      suspenb1.style.display = 'none'
      suspenb.style.background = '#353535'
    }
    suspena1.style.display = 'none'
    suspena.style.background = '#353535'
    suspenc1.style.display = 'none'
    suspenc.style.background = '#353535'
  }
  //suspenb.onmouseout = function () {
  //  suspenb1.style.display = 'none'
  //  suspenb.style.background = '#353535'
  //}
  suspenc.onmouseover = function () {
    suspenc1.style.display = 'block'
    suspenc.style.background = '#F2D292'
    suspenc1.onmouseover = function () {
      suspenc1.style.display = 'block'
      suspenc.style.background = '#F2D292'
    }
    suspenc1.onmouseout = function () {
      suspenc1.style.display = 'none'
      suspenc.style.background = '#353535'
    }
    suspena1.style.display = 'none'
    suspena.style.background = '#353535'
    suspenb1.style.display = 'none'
    suspenb.style.background = '#353535'
  }
  //suspenc.onmouseout = function () {
  //  suspenc1.style.display = 'none'
  //  suspenc.style.background = '#353535'
  //}
}
else {
  suspena.onclick = function () {
    if (suspena1.style.display == 'none') {
      suspena1.style.display = 'block'
      suspena.style.background = '#F2D292'
    } else {
      suspena1.style.display = 'none'
      suspena.style.background = 'rgba(0,0,0,0.5)'
    }
    suspenb.style.background = 'rgba(0,0,0,0.5)';
    suspenb1.style.display = 'none'
    suspenc.style.background = 'rgba(0,0,0,0.5)';
    suspenc1.style.display = 'none'
  }
  suspenb.onclick = function () {
    if (suspenb1.style.display == 'none') {
      suspenb1.style.display = 'block'
      suspenb.style.background = '#F2D292'
    } else {
      suspenb1.style.display = 'none'
      suspenb.style.background = 'rgba(0,0,0,0.5)'
    }
    suspena.style.background = 'rgba(0,0,0,0.5)';
    suspena1.style.display = 'none'
    suspenc.style.background = 'rgba(0,0,0,0.5)';
    suspenc1.style.display = 'none'
  }
  suspenc.onclick = function () {
    if (suspenc1.style.display == 'none') {
      suspenc1.style.display = 'block'
      suspenc.style.background = '#F2D292'
    } else {
      suspenc1.style.display = 'none'
      suspenc.style.background = 'rgba(0,0,0,0.5)'
    }
    suspena.style.background = 'rgba(0,0,0,0.5)';
    suspena1.style.display = 'none'
    suspenb.style.background = 'rgba(0,0,0,0.5)';
    suspenb1.style.display = 'none'
  }
}
$(document).ready(function () {
  $(document).on("mouseleave", ".suspension .a-top", function () {
    $(".suspension").find(".d").hide();
  });
  $(document).on("mouseenter", ".suspension .a-top", function () {
    $(".suspension").find(".d").hide();
  });
  $(document).on("click", ".suspension .a-top", function () {
    $("html,body").animate({ scrollTop: 0 });
  });
  $(window).scroll(function () {
    var st = $(document).scrollTop();
    var $top = $(".suspension .a-top");
    if (st > 400) {
      $top.css({ display: 'block' });
    } else {
      if ($top.is(":visible")) {
        $top.hide();
      }
    }
  });
})
var hrefa = document.getElementById('hrefa');
var hrefb = document.getElementById('hrefb');
var hrefc = document.getElementById('hrefc');
hrefa.onclick = function () {
  window.location.href = "Product"
}
hrefb.onclick = function () {
  window.location.href = "About#agency"
}
hrefc.onclick = function () {
  window.location.href = "About"
}
//手机端导航
var bodya = document.getElementById('bodya');
var dibua = document.getElementById('dibua');
var btn = document.getElementById('btn');
btn.onclick = function () {
  if (bodya.style.display == 'none') {
    bodya.style.display = 'block';
  } else {
    bodya.style.display = 'none';
  }
  if (dibua.style.display == 'none') {
    dibua.style.display = 'block';
  } else {
    dibua.style.display = 'none';
  }
}