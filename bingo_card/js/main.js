"use strict";
// console.log("ok");

let create_status="init";
let hole_list=[];

function make_hole(ele){
  // console.log(ele);
  $(ele).toggleClass("hole");
  // console.log($(ele).data("hole_id"));
  if ($(ele).hasClass("hole")) {
    hole_list.push($(ele).data("hole_id"));
  }else{
    hole_list=hole_list.filter((x)=>{return x!=$(ele).data("hole_id");});
  }
  // console.log(hole_list);
  localStorage.setItem("bingo_card_hole_data",JSON.stringify(hole_list));
}

$(function(){
  
  if (JSON.parse(localStorage.getItem("bingo_card_hole_data"))) {
    hole_list=JSON.parse(localStorage.getItem("bingo_card_hole_data"));
  }

  if (JSON.parse(localStorage.getItem("bingo_card_data"))) {
    // console.log(JSON.parse(localStorage.getItem("bingo_card_data")));
    make_card(JSON.parse(localStorage.getItem("bingo_card_data")));
    create_status="start";
    $("#make_card_btn").val("作成済み");
  }else{

    let initarr=new Array(5).fill(new Array(5).fill(""));
    // for (let i = 0; i < initarr.length; i++) {
    //   initarr[i]=new Array(5).fill("");      
    // }
    // console.log(initarr);
    make_card(initarr);
  }

  $("#make_card_btn").on("click",function () { 
  
    let roulette_audio=new Audio("../common/audio/bell.mp3");
    let roulette_check_audio=new Audio("../common/audio/zyaaaann.mp3");
  
    switch (create_status) {
      case "init":
        create_status="start";
        $(this).val("ストップ");
        let intervalId=setInterval(() => {
          roulette_audio.play();
          roulette_audio.loop=true;
    
          if (create_status=="stop") {
            clearInterval(intervalId);
            roulette_audio.pause();
            roulette_audio.currentTime=0;
            roulette_check_audio.play();
  
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

  hide_animate();

  // console.log($("td"));
  // console.log($("td").length);
  // $("caption span").animate({display:"none",display:"block"}, 2000, function(){console.log(this);});
  
  // (async function(){
    // $("caption span").each(function(i,e){


    // });
  // })();

  // $("caption span").css("opacity",0);
})

function hide_animate(){

  let i=0;

  let animateId=setInterval(() => {
      if (i>=5) {
        clearInterval(animateId);
        // setTimeout(() => {
          appear_animate();
          return;
        // }, 1000);
      }
      console.log($("caption").find("span").eq(i));
      console.log(i);
      $("caption").find("span").eq(i).css({"opacity":0});
        
      i++;

  }, 1000);

}
function appear_animate(){

  let i=0;

  let animateId=setInterval(() => {

      if (i>=5) {
        clearInterval(animateId);
        // setTimeout(() => {
          hide_animate();
          return;
        // }, 1000);

      }
      console.log($("caption").find("span").eq(i));
      console.log(i);
      $("caption").find("span").eq(i).css({"opacity":1});
        
      i++;

  }, 1000);

}