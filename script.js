$description = $(".description");
$info = $(".info");

$('.enabled').hover(function() {
  
  $(this).attr("class", "enabled heyo");
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



$(document).ready(function() {
  $("input[name$='map-reg']").click(function() {
      var test = $(this).val();

      $("div.desc").hide();
      $("#region" + test).show();
  });

  
});




$('#apple-click').click(function(){
  $('.apple').addClass('purple');
  $('.banan').removeClass('purple');
  $('.egg').removeClass('purple');
})

$('#banan-click').click(function(){
  $('.banan').addClass('purple');
  $('.apple').removeClass('purple');
  $('.egg').removeClass('purple');
})


$('#egg-click').click(function(){
  $('.egg').addClass('purple');
  $('.apple').removeClass('purple');
  $('.banan').removeClass('purple');
})

