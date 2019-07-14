




$(function() {
  var $winbtn = $('.win-btn');
  var $alertbg = $('.alert-bg');
  var $closebtn = $('.close-btn');

  // 新闻轮播
  var index = 0;
  var len = $('.footer-bg-list-items').length;
  var timer = null;
  //  鼠标进入事件
  $('.footer-bg-list-items').mouseenter(function() {
    var index = $(this).index();
    showTab(index);
  })
  //  鼠标事件  
  function showTab(index) {
    $('.footer-bg-list-items').eq(index).addClass('active').siblings().removeClass('active');
    $('.new-wrap-list ul').eq(index).stop(true, true).fadeIn('slow').siblings().fadeOut('slow');
  }
  // hover 触发函数
  function auto() {
    timer = setTimeout(function() {
      index = (index + 1) % len;
      showTab(index);
      timer = setTimeout(arguments.callee, 2000);
    }, 2000)
  }
  auto();
 // hover 事件
 $('.new-wrap,.footer-bg-list-items').hover(
   function() {
     clearTimeout(timer);
   },
   function() {
     auto();
   }
 )

// 翻页
var $nextbtn = $('.next-btn');
var $prevbtn = $('.prev-btn');
// 加
$nextbtn.on('click', function() {
  var $this = $(this),
      $add = $this.next('.add'),
      addNum = $this.next('.add').val();
      addNum ++;
      if(addNum >5) {
        addNum = 1
      }
     $add.val(addNum);
     showTable(addNum);
})
// 减
$prevbtn.on('click', function() {
  var $this = $(this),
      $les = $this.prev('.add'),
      lesNum = $this.prev('.add').val();
      lesNum --;
      if(lesNum < 1) {
        lesNum = 1
      }
      $les.val(lesNum);
      showLes(lesNum);
})
//下一页
function showTable(addNum) {
  addNum --;
  $('.luggage-table table').eq(addNum).stop(true, true).fadeIn('solw').siblings().fadeOut('solw');
}
//上一页
function showLes(lesNum) {
  lesNum --;
  $('.luggage-table table').eq(lesNum).stop(true, true).fadeIn('solw').siblings().fadeOut('solw');
}


  // 点击首测资格
  $winbtn.on('click', 'a', function() {
    // console.log('1')
    $alertbg.css('visibility', 'visible');
  });
  // 关闭弹窗
  $closebtn.on('click', function() {
    $alertbg.css('visibility', 'hidden');
  })
  //初始化轮播图代码
  initBannerSwiper();
})



//初始化轮播图代码
function initBannerSwiper() {
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        speed:300,
        loop: true, // 循环模式选项
        autoplay: true,
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
        // 如果需要前进后退按钮
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
        
        // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      });        
}

