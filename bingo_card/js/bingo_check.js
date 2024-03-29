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

function bingo_check(){
    let bingo_cnt_col=new Array(5).fill(true);
    // console.log(bingo_cnt_col);
    let bingo_cnt_diagonal={"left_to_right":true,"right_to_left":true};
  
    let bingo_alert=true;

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
            bingo_cnt_diagonal["left_to_right"]=false;
          }
          if ((tr_i==0&&td_i==4)||(tr_i==1&&td_i==3)||(tr_i==2&&td_i==2)||(tr_i==3&&td_i==1)||(tr_i==4&&td_i==0)) {
            // console.log("左下がり斜め");
            // console.log(td_e);
            bingo_cnt_diagonal["right_to_left"]=false;
          }
        }
      })
      if (bingo_cnt_row && bingo_alert) {
        // console.log(tr_i+"　bingo");
        bingo_alert=false;
        bingo_effect();
        return;
      }
  
    })
  
    // console.log(bingo_cnt_diagonal["left_to_right"]);
    if (bingo_cnt_diagonal["left_to_right"] && bingo_alert) {
        // console.log("右下がり斜めビンゴ");
        bingo_alert=false;
        bingo_effect();
        return;
    }
    if (bingo_cnt_diagonal["right_to_left"] && bingo_alert) {
        // console.log("左下がり斜めビンゴ");
        bingo_alert=false;
        bingo_effect();
        return;
    }
  
    for (const key in bingo_cnt_col) {
      if (Object.hasOwnProperty.call(bingo_cnt_col, key)) {
        if (bingo_cnt_col[key] && bingo_alert) {
          // console.log(key+"　bingo");
          bingo_alert=false;
          bingo_effect();
          return;
        }
      }
    } 
}

function bingo_effect() {
  let bingo_LvUp=new Audio("../common/audio/LvUp.mp3");
  bingo_LvUp.play();
  setTimeout(() => {
    // $("#float_screen").fadeIn();
    $("#float_screen").addClass("appear");
    $("#float_screen").animate({ opacity: 1 }, 500);
    // alert("ビンゴ！！");
    
  }, 100);
}

$(window).on("load",function(){
  $("#float_close").on("click",function(){
    // $("#float_screen").fadeOut();
    $("#float_screen").animate({ opacity: 0 }, 500,function(){
      $("#float_screen").removeClass("appear");
    })
  })
})