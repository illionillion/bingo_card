"use strict";
// console.log("ok");

$(function(){
  make_card();
  $("#make_card_btn")[0].addEventListener("click",function () { make_card(); })
  console.log($("td"));
  console.log($("td").length);

  // for (let i = 0; i < $("td").length; i++) {
  //   $("td")[i].addEventListener("click",function(){
  //     console.log($("td")[i]);
  //     $("td")[i].classList.toggle="hole";
  //     $("td")[i].toggleClass("hole");
  //   })    
  // }
})

