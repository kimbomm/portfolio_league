$(function() {
  var body_Width, barLeft, li_W;
  var scrWidth = 17;
  var body_move = false;

  $(window).resize(function() {
    body_Width = $('body,html').width()+scrWidth;
    li_W = $('.top_menu>li').width();
    barLeft = $('.top_menu li:first-child').offset().left - li_W;
    console.log(body_Width);
  })
  $(window).trigger('resize');
  //메인메뉴
  if(body_Width > 1080){
    console.log(body_Width);
    $('.bars').css({
      'left': 'barLeft',
      'display': 'block'
    });
    $('.top_menu > li').mouseenter(function() {
      $('.bars').stop().css('display', 'block').animate({
        'left': barLeft + (li_W * ($(this).index() + 1))
      })
      $('.top_menu div').stop().slideDown();
      $('header').stop().animate({
        'height': 250
      })
    }).mouseleave(function() {
      $('.bars').stop().animate({
        'left': barLeft
      }, function() {
        $(this).css('display', 'none')
      })
      $('.top_menu div').stop().slideUp();
      $('header').stop().animate({
        'height': 80
      })
    })
  }


  $('.com_sec li').mouseenter(function() {
    $(this).find('.bar').stop().animate({
      'width': 0
    });
    if(body_Width >= 1080){
      $(this).find('.line1').stop().animate({
        'width': 100 + '%'
      }, function() {
        $(this).next().stop().animate({
          'height': 100 + '%'
        }, function() {
          $(this).next().stop().animate({
            'width': 100 + '%'
          }, function() {
            $(this).next().stop().animate({
              'height': 100 + '%'
            })
          })
        })
      })
    }
  }).mouseleave(function() {
    $(this).find('.bar').stop().animate({
      'width': 20
    });
    if(body_Width >= 1080){
      $(this).find('.line1' + ',' + '.line3').stop().animate({
        'width': 0
      });
      $(this).find('.line2' + ',' + '.line4').stop().animate({
        'height': 0
      })
    }
  })

  //카테고리 클릭
  $('.cate').click(function() {
    if (body_Width <= 1080) {
      if (!body_move) {
        $('body').animate({
          'left': -240
        })
        body_move = true;
      } else if (body_move) {
        $('body').animate({
          'left': 0
        })
        body_move = false;
      }
    }
  })



})
