"use strict";

$(function(){
    let check_list=[];
    create_check_list(check_list);

    $("#output_btn").on("click",function(){

        // $("#num_list").html(check_list);
        create_check_list(check_list);

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

function create_check_list(check_list){
    $("#num_list").html("");

    let table_ele=document.createElement("table");
    $(table_ele).attr("border","1");
    let caption=document.createElement("caption");
    $(caption).html("出た数");
    table_ele.appendChild(caption);
    let tr_fragment=document.createDocumentFragment();

    let cnt=0;
    for (let i = 1; i <= 5; i++) {
        let tr_ele=document.createElement("tr");
        let td_fragment=document.createDocumentFragment();
        for (let j = 1; j <= 15; j++) {
            let td_ele=document.createElement("td");
            if (check_list.length>cnt) {
                $(td_ele).html(check_list[cnt]);
            }else{
                $(td_ele).html("　");
            }
            td_fragment.appendChild(td_ele);
            cnt++;

        }
        tr_ele.appendChild(td_fragment);
        tr_fragment.appendChild(tr_ele);
    }

    table_ele.appendChild(tr_fragment);

    document.getElementById("num_list").appendChild(table_ele);
}