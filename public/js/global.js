function hasBorderRadius() {
  var d = document.createElement("div").style;
  if (typeof d.borderRadius !== "undefined") return true;
  if (typeof d.WebkitBorderRadius !== "undefined") return true;
  if (typeof d.MozBorderRadius !== "undefined") return true;
  return false;
};

// Random filter for jquery selector
jQuery.jQueryRandom = 0;
jQuery.extend(jQuery.expr[":"],{
  random: function(a,i,m,r){
    if(i==0){
      jQuery.jQueryRandom=Math.floor(Math.random()*r.length);
    };
    return i==jQuery.jQueryRandom;
  }
});

// add rotation code here
function rotate_images(id){
  if( $("#rotate2 .small_outer.hover").size()>0 ){
    setTimeout(function(){rotate_images(id)},3000);
  }else if( $(id+' .outer_border').size()>1 ){
    var a=$(id+' .outer_border:last');
    //fade out
    a.fadeTo(1000,0.0,function(){
      $(id).prepend(a);
      //console.log("trying to restore "+a.children(".inner_border").css("background-image")+" to "+a.children(".inner_border").attr("url_src"))
      a.children(".inner_border").css("background-image", a.children(".inner_border").attr("url_src"));
      a.fadeTo(1,1.0);
    });
    setTimeout(function(){rotate_images(id)},3000);
  }
}


// MAIN 
$(document).ready(function() {
  setTimeout(function(){rotate_images('#rotate')},6000);
  
  // convert images into background divs
  if (hasBorderRadius()) {
    $("img.inner_border").each(function() {
    $(this).wrap('<div class="inner_border" />');
    var imgSrc = $(this).attr("src");
    var imgHeight = $(this).height();
    var imgWidth = $(this).width();
    $(this).parent()
    .css("background-image", "url(" + imgSrc + ")")
    .css("background-repeat","no-repeat")
    .css("height", imgHeight + "px")
    .css("width", imgWidth + "px");
    $(this).parent().attr("url_src",$(this).parent().css("background-image"));
    $(this).remove();
    });
  }
  
  
  // GALLERY zoom code
  $("#rotate2 .small_outer:not(.hover)").live('mouseover', function() {
    $("#rotate2 .small_outer").removeClass('hover');
    var temp_new_image = $(this).children(".small").children(".inner_border").css('background-image')
    
    var x = $("#rotate .outer_border:last").children(".inner_border")
    x.css("background-image", temp_new_image);
    
    $(this).addClass('hover');
  });
  $("#rotate2 .small_outer.hover").live('mouseout', function() {
    $("#rotate2 .small_outer").removeClass('hover');
  });
  
  
});


