$(function() {
  var $outerCube = $('.outer-cube');
  var $transformDisplay = $('.transform-display')
  var rotateY = 0, rotateX = 0, lastScrollTop = 0, lastScrollLeft = 0;
  var switchOrder = false;
  
  var scrollCube = function() {
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
    
    // top + => scrolling up
    // top - => scrolling down
    // left + => scrolling right
    // left - => scrolling left
    
    // Order matters here - which axis is preserved is decided by which 
    // rotation happens first. Switch the order of rotateY and rotateX 
    // to see what happens!
    var cssString;
    
    if(switchOrder) {
      cssString = 'transform: ' + 
            'rotateX(' + rotateX + 'deg) ' +
            'rotateY('+ rotateY + 'deg);'
    } else {
      cssString = 'transform: ' + 
            'rotateY('+ rotateY + 'deg) ' + 
            'rotateX(' + rotateX + 'deg);'
    }
    
    $outerCube.attr('style', cssString);
    $transformDisplay.html(cssString);
    
    lastScrollTop = top;lastScrollLeft = left;
  }
  
  $('button.switch').on('click', function() {
    switchOrder = !switchOrder;
    $transformDisplay.addClass('switch');
    
    if(switchOrder) {
      $('#lr').html('up-down');
      $('#ud').html('left-right');
    } else {
      $('#lr').html('left-right');
      $('#ud').html('up-down');
    }
    
    scrollCube();
    
    
    setTimeout(function() {
      $transformDisplay.removeClass('switch');
    }, 0);
  })
  
  $(window).on('scroll', scrollCube);
})

