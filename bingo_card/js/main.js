"use strict";
// console.log("ok");

let create_status="init";

function make_hole(ele){
  console.log(ele);
  $(ele).toggleClass("hole");
}

$(function(){
  // make_card();

  if (JSON.parse(localStorage.getItem("bingo_card_data"))) {
    // console.log(JSON.parse(localStorage.getItem("bingo_card_data")));
    make_card(JSON.parse(localStorage.getItem("bingo_card_data")));
    create_status="start";
    $("#make_card_btn").val("作成済み");
  }

  $("#make_card_btn").on("click",function () { 
  
    switch (create_status) {
      case "init":
        create_status="start";
        $(this).val("ストップ");
        let intervalId=setInterval(() => {
          if (create_status=="stop") {
            clearInterval(intervalId);
          }
          make_card(make_data());
          
        }, 100);
        break;
      case "start":
        create_status="stop";
        $(this).val("作成済み");
        break;
    
      default:
        break;
    }
  
  
  })
  // console.log($("td"));
  // console.log($("td").length);
})

