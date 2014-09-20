// have internal preserve-3d thing
// each time, on release, set internal thing
// and reset outer scroll thing

$(function() {
  // grab elements as array, rather than as NodeList
  var $innerCube = $('.inner-cube');
  var $outerCube = $('.outer-cube');
  var rotateY = 0, rotateX = 0, lastScrollTop = 0, lastScrollLeft = 0;
  var lastResetY = 0, lastResetX = 0;
  
  $(window).on('scroll', function(event) {
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
      $innerCube.css('transform', 'rotateY(' + lastResetY + rotateY + 
          'deg) rotateX('+ lastResetX + rotateX +'deg)');
      lastResetY = lastResetY + rotateY;lastResetX = lastResetX + rotateX;
      rotateY = 0;rotateX = 0;
      $outerCube.css('transform', 'rotateY(' + rotateY + 
          'deg) rotateX('+ rotateX +'deg)');
          
      console.log('re-setting');
    }, 30));
    
    var top = $(window).scrollTop();
    var left = $(window).scrollLeft() * -1;
    
    // var lastRotateX = rotateX, lastRotateY = rotateY;
    if((top > lastScrollTop && top > 0) || 
          (top < lastScrollTop && top < 0)) {
      rotateX += top;
    }
    if((left > lastScrollLeft && left > 0) || 
          (left < lastScrollLeft && left < 0)) {
      rotateY += left;
    }
    
    // if(lastRotate !== lastScroll)
    
    console.log(top);console.log(left);
    
    $outerCube.css('transform', 'rotateY(' + rotateY + 
          'deg) rotateX('+ rotateX +'deg)');
    lastScrollTop = top;lastScrollLeft = left;
  })
})

