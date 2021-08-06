//Varaibles Start

$description = $(".description");
$info = $(".info");

$descriptionProduct = $(".descriptionProduct");
$infoProduct = $(".infoProduct");

//Varaibles End

//First Map Start
$('.enabled').hover(function() {
  
  $(this).attr("class", "enabled");
  $description.addClass('active');
  $description.html($(this).attr('title'));

  $info.addClass('active');
  $info.html($(this).attr('data-info'));
}, function() {
  $description.removeClass('active');
  $info.removeClass('active');
});

$(document).on('mousemove', function(e){

$description.css({
  left:  e.pageX,
  top:   e.pageY - 70
});

});
//First Map End



//Second Map Start

$('.proenabled').hover(function() {

  $descriptionProduct.addClass('active');
  $descriptionProduct.html($(this).attr('title'));

  $infoProduct.addClass('active');
  $infoProduct.html($(this).attr('data-info'));
}, function() {
  $descriptionProduct.removeClass('active');
  $infoProduct.removeClass('active');
});

$(document).on('mousemove', function(e){

$descriptionProduct.css({
  left:  e.pageX,
  top:   e.pageY - 70
});

});

//Second Map End

//Show Map Start

$(document).ready(function() {
  $("input[name$='map-reg']").click(function() {
      var test = $(this).val();

      $("div.desc").hide();
      $("#region" + test).show();
  });

  
});

//Show Map End


//Select map category Start

$('#apple-click').click(function(){

  $('.apple').addClass('purple').removeClass('disable');
  $('.banan').removeClass('purple').addClass('disable');
  $('.egg').removeClass('purple').addClass('disable');
})

$('#banan-click').click(function(){
  $('.banan').addClass('purple ').removeClass('disable');
  $('.apple').removeClass('purple').addClass('disable');
  $('.egg').removeClass('purple').addClass('disable');
})


$('#egg-click').click(function(){
  $('.egg').addClass('purple').removeClass('disable');
  $('.apple').removeClass('purple').addClass('disable');
  $('.banan').removeClass('purple').addClass('disable');
})

//Select map category End

