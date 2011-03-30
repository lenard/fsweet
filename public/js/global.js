function hasBorderRadius() {
  var d = document.createElement("div").style;
  if (typeof d.borderRadius !== "undefined") return true;
  if (typeof d.WebkitBorderRadius !== "undefined") return true;
  if (typeof d.MozBorderRadius !== "undefined") return true;
  return false;
};
if (hasBorderRadius()) { // 1
  $("img.thin_border").each(function() { // 2
  $(this).wrap('<div class="thin_border" />'); // 3
  var imgSrc = $(this).attr("src"); // 4
  var imgHeight = $(this).height(); // 4
  var imgWidth = $(this).width(); // 4
  $(this).parent()
  .css("background-image", "url(" + imgSrc + ")")
  .css("background-repeat","no-repeat")
  .css("height", imgHeight + "px")
  .css("width", imgWidth + "px"); // 5
  $(this).remove(); // 6
  });
}

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
  console.log(Date.now());
  var a=$('#rotate .thin_border_outer:last');
  //fade out
  a.fadeTo(1000,0.0,function(){
    $('#rotate').prepend(a);
    a.fadeTo(1,1.0);
  });
  setTimeout(function(){rotate_images()},3000);
}
rotate_images();
// $('#rotate .thin_border_outer:first').fadeTo(500, 0.0).addClass('hidden') // fade out
// $('#rotate .thin_border_outer:hidden:random').fadeTo(500, 1.0).removeClass('hidden') // fade in


