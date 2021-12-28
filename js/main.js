"use strict";
// console.log("ok");

let create_status="init";

function make_hole(ele){
  console.log(ele);
  $(ele).toggleClass("hole");
}

$(function(){
  // make_card();
  $("#make_card_btn").on("click",function () { 
  
    switch (create_status) {
      case "init":
        create_status="start";
        $(this).val("ストップ");
        let intervalId=setInterval(() => {
          if (create_status=="stop") {
            clearInterval(intervalId);
          }
          make_card();
          
        }, 100);
        break;
      case "start":
        create_status="stop";
        $(this).val("終了");
        break;
    
      default:
        break;
    }
  
  
  })
  // console.log($("td"));
  // console.log($("td").length);
})

