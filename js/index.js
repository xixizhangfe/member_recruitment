var audio = document.getElementById('music');
var audio_text = document.getElementById('music_text');
$('body').on('touchstart', function() {
  if ($('.i_music').hasClass('inactive')) {
    audio.pause();
    audio_text.pause();
  } else {
    audio.play();
  }
})
var mySwiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  freeMode: false,
  mousewheelControl: true,
  height: document.documentElement.clientHeight,
  onSlideChangeStart: function(swiper) {
    $('.swiper-slide-active').children('.ink_mask').removeClass('printDown');
    $('.swiper-slide-active').children('.ink_mask_1').removeClass('printLeft');
    $('.swiper-slide-active').children('.ink_mask_2').removeClass('printRight');
    $('.swiper-slide-active').children('.i_ink_2').removeClass('printTop');
    $('.swiper-slide-active').children('.i_bg_text').removeClass('appearing');
    if ($('.i_music').hasClass('active')) {
      audio.play();
      if (swiper.activeIndex == 0) {
        audio_text.play();
      } else {
        audio_text.pause();
      }

    } else {
      audio.pause();
      audio_text.pause();
    }
  },
  onSlideChangeEnd: function(swiper) {
    if (swiper.activeIndex == 3) {
      $('.swiper-slide-active').children('.ink_mask_1').addClass('printLeft');
      $('.swiper-slide-active').children('.ink_mask_2').addClass('printRight');
    } else if (swiper.activeIndex == 5) {
      $('.swiper-slide-active').children('.ink_mask_1').addClass('printLeft');
      $('.swiper-slide-active').children('.i_ink_2').addClass('printTop');
    } else {
      $('.swiper-slide-active').children('.ink_mask').addClass('printDown');
    }
    $('.swiper-slide-active').children('.i_bg_text').addClass('appearing');

    if (swiper.activeIndex == 6) {
      var startY, endY;
      $('.box_wrap').bind("touchstart", function(event) {
        var touchpros = event.touches[0];
        startY = touchpros.clientY;
      });
      $('.box_wrap').bind("touchmove", function(event) {
        var touchpros = event.touches[0];
        endY = touchpros.clientY;
        if (startY - endY < 0 && $('.box_wrap').scrollTop() <= 0) {
          mySwiper.enableTouchControl();
        } else if (startY - endY >= 0 && $('.box_wrap').scrollTop() >= 0) {
          mySwiper.disableTouchControl();
        }
      });
    }
  }
});
$('.i_music').on('click', function() {
  if ($('.i_music').hasClass('active')) {
    $('.i_music').removeClass('active rotating').addClass('inactive');
    audio.pause();
    audio_text.pause();
  } else {
    $('.i_music').removeClass('inactive').addClass('active rotating');
    audio.play();
    if (mySwiper.activeIndex == 0) {
      audio_text.play();
    }
  }
});

if (window.DeviceMotionEvent) {
  window.addEventListener('devicemotion', deviceMotionHandler, false);
}

var moveFlag = false;

function deviceMotionHandler(event) {
  var angle = event.accelerationIncludingGravity;
  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  x = angle.x;

  z = angle.z;
  if (!moveFlag) {
    moveFlag = true;
    if (isAndroid) {
      y = -(angle.y - 5);
      $('.i_bg_text').css({
        'transform': 'translateX(' + x * 5 + 'px) translateY(' + y * 5 + 'px)',
        '-webkit-transform': 'translateX(' + x * 5 + 'px) translateY(' + y * 5 + 'px)'
      });
    } else {
      x = -x;
      y = angle.y + 5;
      $('.i_bg_text').css({
        'transform': 'translateX(' + x * 5 + 'px) translateY(' + y * 5 + 'px)',
        '-webkit-transform': 'translateX(' + x * 5 + 'px) translateY(' + y * 5 + 'px)'
      });
    }
    setTimeout(function() {
      moveFlag = false;
    }, 100);
  }


}

var imgUrl = window.location.protocol + "//m.360buyimg.com/babel/jfs/t10072/162/1387077510/25329/d9759819/59e0b8f9N15f04c42.jpg";
// 微信分享事件绑定
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
  // 发送给好友
  WeixinJSBridge.on('menu:share:appmessage', function(argv) {
    WeixinJSBridge.invoke('sendAppMessage', {
      "img_url": imgUrl,
      "img_width": "200",
      "img_height": "200",
      "link": window.location.href,
      "desc": "京东会员邀你免费云南自驾游",
      "title": "听说Homie你很酷，云南一起赴？"
    }, function(res) {
      _report('send_msg', res.err_msg);
    })
  });
  // 分享到朋友圈
  WeixinJSBridge.on('menu:share:timeline', function(argv) {
    WeixinJSBridge.invoke('shareTimeline', {
      "img_url": imgUrl,
      "img_width": "200",
      "img_height": "200",
      "link": window.location.href,
      "desc": "京东会员邀你免费云南自驾游",
      "title": "听说Homie你很酷，云南一起赴？"
    }, function(res) {
      _report('timeline', res.err_msg);
    });
  });
}, false);
var host = '';
imgload({
  imgList: [
    host + '/img/i2.png',
    host + '/img/i2_1.png',
    host + '/img/i3_1.png',
    host + '/img/i3_2.png',
    host + '/img/i4.png',
    host + '/img/i5.png',
    host + '/img/i6.png',
    host + '/img/i7.png',
    host + '/img/i8.png',
    host + '/img/i9.png',
    host + '/img/i10.png',
    host + '/img/i11.png',
    host + '/img/i12.png',
    host + '/img/i13_1.png',
    host + '/img/i13_2.png',
    host + '/img/i15.png',
    host + '/img/i16_1.png',
    host + '/img/i16_2.png',
    host + '/img/i17_1.png',
    host + '/img/i17_2.png',
    host + '/img/i19.png',
    host + '/img/i20_1.png',
    host + '/img/i20_2.png',
    host + '/img/i21.png',
    host + '/img/i28.png',
    host + '/img/i30.png',
    host + '/img/i32.jpg',
    host + '/img/i33.png',
    host + '/img/i34.png',
    host + '/img/i35.png',
    host + '/img/i36.png',
    host + '/img/i37.jpg',
    host + '/img/i38.png',
    host + '/img/i39.png',
    host + '/img/i40.jpg',
    host + '/img/i41.jpg',
    host + '/img/i42.png',
    host + '/img/img1.jpg'
  ],
  hide: '.loading',
  img: false
});

function imgload(options, callback) {
  var setting = {
    name: null,
    attr: null,
    hide: null,
    imgList: [],
    img: true
  };

  setting = $.extend(setting, options);
  var imgList = setting.imgList;

  //是否自定义属性名获取src
  if (setting.name) {
    $(setting.name).each(function() {
      imgList.push($(this).attr(setting.attr))
    });
  }
  //是否通过img标签获取src    
  if (setting.img) {
    $('img').each(function() {
      imgList.push($(this).attr('src'))
    });
  }
  //判断加载路径的总个数
  var loadingP = imgList.length;
  var timer = null;
  var load_percent;
  var total_width = $('.load_progress_wrap').width();
  var car_width = $('.load_img').width();
  var target_width = total_width - car_width;
  var car_step = (total_width - car_width) / (loadingP);
  var progress_step = (total_width) / (loadingP);

  function updateLoadedTotal(n) {
    // loadingN++;
    loadingN = n;
    var cur_car_width = loadingN * car_step;
    var cur_progress_width = loadingN * progress_step;
    if (cur_car_width >= target_width) {
      cur_car_width = target_width;
    }
    $('.load_img').css('margin-left', cur_car_width);
    $('.load_progress').css('width', cur_progress_width);
    if (loadingN == loadingP) {
      clearInterval(timer);
      var audio = document.getElementById('music');
      audio.load();
      audio.loop = true;
      var audio_text = document.getElementById('music_text');
      audio_text.load();
      // audio.addEventListener('canplay', function() {
      $('.load_img').css('left', target_width);
      $('.load_progress').css('width', '100%');
      setTimeout(function() {
        $(setting.hide).hide();
        audio.play();
        audio_text.play();
      }, 2000);
      // }, false);    
    }
  }
  var img = [];
  timer = setInterval(function() {
    var n = 0;
    for (var i = 0; i < loadingP; i++) {

      img[i] = new Image();
      img[i].src = imgList[i];

      if (img[i].complete || img[i].readyState) {
        n++;
      }
    }
    updateLoadedTotal(n);
  }, 500);

}
