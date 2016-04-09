$(document).ready(function(){
	//https://api.myjson.com/bins/1z97y
	//http://myjson.com/
  var Shirts=true;
  var Pants =false;
  var Shoes = false;
  var DropDown = "";
  var PantUrl = "http://scene7.zumiez.com/is/image/zumiez/pdp_hero/Free-World-Messenger-Dark-Khaki-Skinny-Twill-Pants--_209802.jpg";
   var ShirtUrl = "http://images.menswearhouse.com/is/image/TMW/MW40_6M69_14_EGARA_BLUE_MAIN?$40GridLrg$";
$("#clothes").on('change', function () {
    //alert($(this).val());
     DropDown = $(this).val();
      if(DropDown == "Pants"){
   $('.avatar').css('background-image', 'url(' + PantUrl + ')');
      }else if(DropDown == "Shirts"){
       $('.avatar').css('background-image', 'url(' + ShirtUrl + ')');
      }else if(DropDown == "Shoes"){
        alert("You got Shoes");
      }
});



    $(".buddy").on("swiperight",function(){
      $(this).addClass('rotate-left').delay(700).fadeOut(1);
      $('.buddy').find('.status').remove();

      $(this).append('<div class="status like">Like!</div>');
      if ( $(this).is(':last-child') ) {
        $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
       } else {
          $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
       }
    });

   $(".buddy").on("swipeleft",function(){
    $(this).addClass('rotate-right').delay(700).fadeOut(1);
    $('.buddy').find('.status').remove();
    $(this).append('<div class="status dislike">Dislike!</div>');

    if ( $(this).is(':last-child') ) {
     $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
      alert('Na-na!');
     } else {
        $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
    }
  });
    //data is the JSON string
});
