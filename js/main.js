"use strict";
// console.log("ok");

function make_hole(ele){
  console.log(ele);
  $(ele).toggleClass("hole");
}

$(function(){
  make_card();
  $("#make_card_btn")[0].addEventListener("click",function () { make_card(); })
  console.log($("td"));
  console.log($("td").length);
})

