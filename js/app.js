$(function(){
  //filtering out each exotic
  $('nav li a').on('click', function(){
    var exotic = $(this).attr('class');
    //reset the active on all the buttons
    $('nav li ').removeClass('active');
    //update the active state on our clicked button
    $(this).parent().addClass('active');
      if(exotic === 'exotics'){
        //show all elements
        $('.items').children('.single-item').show(500);
      } else {
        //hide all elements that don't share class
        $('.items').children('.single-item:not(.' + exotic + ')').hide(200);
        //show all elements that do share class
        $('.items').children('div.' + exotic).show(500);
      }
    return false;
  });

  //adding tooltip
  $('[data-toggle="tooltip"]').tooltip();


  //adding on click function to button
$('.add-cart').on('click', function(){
    var cart = $('#shopping-cart');

    //targeting each image seperately
    var imgdrag = $(this).parent('.single-item').find('img').eq(0);
    if(imgdrag){
      //cloning image and offset of where cloned image goes to cart
      var imgclone = imgdrag.clone().offset({
        top: imgdrag.offset().top,
        left: imgdrag.offset().left
        //setting css properties to image when cloned
      }).css({
        'opacity':'0.6',
          'position': 'absolute',
          'height': '400px',
          'width': '400px',
          'z-index': '200'
          //setting image size and appending cloned image to cart
      }).appendTo($('body')).animate({
        'top': cart.offset().top + 5,
         'left': cart.offset().left,
          'width': 100,
          'height': 100
        }, 1000, 'easeInOutExpo');
          //setting jquery effect to cart
        setTimeout(function(){
          cart.effect('shake',{
            times:3
          }, 200);
        }, 1500);
        //setting animate cloned image size right before going into cart
        imgclone.animate({
          'width':10,
            'height':10
        }, function(){
          $(this).detach()
        });
      }
  });
});
