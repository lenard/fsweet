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
function rotate_images(){
  if( $('#rotate .thin_border_outer').size()>1 ){
    var a=$('#rotate .thin_border_outer:last');
    //fade out
    a.fadeTo(1000,0.0,function(){
      $('#rotate').prepend(a);
      a.fadeTo(1,1.0);
    });
    setTimeout(function(){rotate_images()},3000);
  }
}


// MAIN 
$(document).ready(function() {
  setTimeout(function(){rotate_images()},6000);
  
  // convert images into background divs
  if (hasBorderRadius()) {
    $("img.thin_border").each(function() {
    $(this).wrap('<div class="thin_border" />');
    var imgSrc = $(this).attr("src");
    var imgHeight = $(this).height();
    var imgWidth = $(this).width();
    $(this).parent()
    .css("background-image", "url(" + imgSrc + ")")
    .css("background-repeat","no-repeat")
    .css("height", imgHeight + "px")
    .css("width", imgWidth + "px");
    $(this).remove();
    });
  }
  
});


