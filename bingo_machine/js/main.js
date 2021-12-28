"use strict";

$(function(){
    let check_list=[];
    $("#output_btn").on("click",function(){
        const min=1;
        const max=75;
        let num=0;
        while (true) {
            num = Math.floor( Math.random() * (max + 1 - min) ) + min ;
            if (check_list.indexOf(num)===-1) {
                check_list.push(num);
                break;
            }
            if (check_list.length==75) {
                num="終了";
                break;
            }
        }
        console.log(check_list);
        $("#output_num").html(num);
    })

})