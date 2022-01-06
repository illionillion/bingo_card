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
  bingo_check();
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

  // hide_animate();
  // hide_all();
  appear_animation();

})

function bingo_check(){
  let bingo_cnt_col=new Array(5).fill(true);
  // console.log(bingo_cnt_col);
  $("tr").each(function(tr_i,tr_e){
    // console.log(tr_e);
    let bingo_cnt_row=true;
    $(tr_e).find("td").each(function(td_i,td_e){
      if (!$(td_e).hasClass("hole")) {
        // console.log(td_i+"："+$(td_e).html());
        bingo_cnt_row=false;
        bingo_cnt_col[td_i]=false;
        if ((tr_i==0&&td_i==0)||(tr_i==1&&td_i==1)||(tr_i==2&&td_i==2)||(tr_i==3&&td_i==3)||(tr_i==4&&td_i==4)) {
          // console.log("右下がり斜め");
          // console.log(td_e);
        }
      }
    })
    if (bingo_cnt_row) {
      console.log(tr_i+"　bingo");
    }

  })

  for (const key in bingo_cnt_col) {
    if (Object.hasOwnProperty.call(bingo_cnt_col, key)) {
      if (bingo_cnt_col[key]) {
        console.log(key+"　bingo");
      }
    }
  }


}