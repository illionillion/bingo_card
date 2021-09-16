function make_card(){
  $("#bingo_card").html("");
  let bingo_data=[];//ビンゴカードに割り振る数字
  let bingo_rand=[];//ビンゴカードで既出の数字
  let r=0;          //総ループ回数

  for (let i = 0; i < 5; i++) {
    let bingo_data_r=[];//row
    for (let j = 0; j < 5; j++) {
      
      let flag=true;
      
      const min = 1 ;
      const max = 99 ;
      let num;

      while (flag) {
        num = Math.floor( Math.random() * (max + 1 - min) ) + min ;
        console.log(bingo_rand.indexOf(num));
        if (bingo_rand.indexOf(num)===-1) {
          flag=false;
        }
      }
      
      bingo_rand[r]=num;
      r++;
      if(i==2&&j==2)num="Go";//中央のみ
      bingo_data_r[j]=num ;

    }
    bingo_data[i]=bingo_data_r;
  }

  console.log(bingo_data);
  console.log(bingo_rand);
  let bingo_text="<caption>BINGO</caption><tbody>";

  //innnerHTMLよりcreateElementの方がDOM操作しやすい？
  for(let i=0;i<bingo_data.length;i++){
    // console.log(bingo_data[i]);
    // let bingo_text=$("#bingo_card").html();
    bingo_text+="<tr>";
    for (let j = 0; j < bingo_data[i].length; j++) {
      // console.log(bingo_data[i][j]);
      // console.log(bingo_text);
      bingo_text+="<td id="+i+"-"+j+" onclick='make_hole(this)'>"+bingo_data[i][j]+"</td>";
    }
    bingo_text+="</tr>";

  }
  bingo_text+="</tbody>"
  $("#bingo_card").html(bingo_text);

}