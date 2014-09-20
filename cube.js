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
    
    var top = $(window).scrollTop();
    var left = $(window).scrollLeft() * -1;
    
    if((top > lastScrollTop && top > 0) || 
          (top < lastScrollTop && top < 0)) {
      rotateX += top;
    }
    if((left > lastScrollLeft && left > 0) || 
          (left < lastScrollLeft && left < 0)) {
      rotateY += left;
    }
    
    console.log('left: ' + left);console.log('top: ' + top);console.log('')
    // top + => scrolling up
    // top - => scrolling down
    // left + => scrolling right
    // left - => scrolling left
    
    // order matters here - which axis is preserved is decided by which rotation happens first

    // $outerCube.css('transform', 'rotateX(' + rotateX + 
          // 'deg) rotateY('+ rotateY +'deg)');

    $outerCube.css('transform', 'rotateY('+ rotateY +
          'deg) rotateX(' + rotateX + 'deg) ');

    
    lastScrollTop = top;lastScrollLeft = left;
  })
})

