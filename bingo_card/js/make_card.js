function make_data(){

  let bingo_data=[];//ビンゴカードに割り振る数字
  let bingo_rand=[];//ビンゴカードで既出の数字
  let rnd_list=[[1,15],[16,30],[31,45],[46,60],[61,75]];
  let r=0;          //総ループ回数

  for (let i = 0; i < 5; i++) {
    let bingo_data_r=[];//row
    for (let j = 0; j < 5; j++) {
      
      let flag=true;
      
      const min = rnd_list[j][0] ;
      const max = rnd_list[j][1] ;
      let num;

      while (flag) {
        num = Math.floor( Math.random() * (max + 1 - min) ) + min ;
        // console.log(bingo_rand.indexOf(num));
        if (bingo_rand.indexOf(num)===-1) {
          flag=false;
        }
      }
      
      bingo_rand[r]=num;
      r++;
      if(i==2&&j==2)num="Free";//中央のみ
      bingo_data_r[j]=num ;

    }
    bingo_data[i]=bingo_data_r;
  }

  if (window.localStorage) {
    localStorage.setItem("bingo_card_data",JSON.stringify(bingo_data));
  }

  // make_card(bingo_data)
  return bingo_data;
}

function make_card(bingo_data){

  $("#bingo_card").html("");

  // console.log(bingo_data);
  // console.log(bingo_rand);
  let bingo_text='<caption><span class="b">B</span><span class="i">I</span><span class="n">N</span><span class="g">G</span><span class="o">O</span></caption>';
  $("#bingo_card").html(bingo_text);

  let tbody_ele=document.createElement("tbody");
  let tr_fragment=document.createDocumentFragment();
  //innnerHTMLよりcreateElementの方がDOM操作しやすい？
  for(let i=0;i<bingo_data.length;i++){
    let td_fragment=document.createDocumentFragment();
    let tr_ele=document.createElement("tr");
    // console.log(bingo_data[i]);
    for (let j = 0; j < bingo_data[i].length; j++) {
      // console.log(bingo_data[i][j]);
      let td_ele=document.createElement("td");
      td_ele.innerHTML=bingo_data[i][j];
      td_ele.dataset.hole_id=i+"-"+j;
      if (hole_list.indexOf(i+"-"+j)!=-1) {
        $(td_ele).addClass("hole");
      }
      td_ele.onclick=function(){make_hole(this);};
      td_fragment.appendChild(td_ele);
    }
    tr_ele.appendChild(td_fragment);
    tr_fragment.appendChild(tr_ele);

  }
  // console.log(tr_fragment);
  tbody_ele.appendChild(tr_fragment);
  document.getElementById("bingo_card").appendChild(tbody_ele);

}