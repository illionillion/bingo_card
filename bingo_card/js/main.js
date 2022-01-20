"use strict";
import { make_data } from "./make_card.js";
import { make_card } from "./make_card.js";
// console.log("ok");

let create_status="init";
let hole_list=[];

$(function(){

  $("*").on("contextmenu",function(){return false;})
  
  if (JSON.parse(localStorage.getItem("bingo_card_hole_data"))) {
    hole_list=JSON.parse(localStorage.getItem("bingo_card_hole_data"));
  }

  if (JSON.parse(localStorage.getItem("bingo_card_data"))) {
    // console.log(JSON.parse(localStorage.getItem("bingo_card_data")));
    make_card(JSON.parse(localStorage.getItem("bingo_card_data")),hole_list);
    create_status="start";
    $("#make_card_btn").val("作成済み");
  }else{

    let initarr=new Array(5).fill(new Array(5).fill(""));
    make_card(initarr,hole_list);
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
          make_card(make_data(),hole_list);
          
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

  // hide_animate();
  // hide_all();
  appear_animation();

})