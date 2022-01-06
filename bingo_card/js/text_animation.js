function hide_all(){
    $("caption span").css({"opacity":0});
    appear_animate();
}
  
function hide_animate(){

    let i=0;

    let animateId=setInterval(() => {
        if (i>=5) {
            clearInterval(animateId);
            appear_animate();
            return;
        }
        console.log($("caption").find("span").eq(i));
        console.log(i);
        $("caption").find("span").eq(i).css({"opacity":0});
            
        i++;

    }, 800);

}

function appear_animate(){

    let i=0;

    let animateId=setInterval(() => {

        if (i>=5) {
            clearInterval(animateId);
            // hide_animate();
            hide_all();
            return;
        }
        console.log($("caption").find("span").eq(i));
        console.log(i);
        $("caption").find("span").eq(i).css({"opacity":1});
            
        i++;

    }, 800);

}

function appear_animation(){

    let i=0;
    $("caption span").css({"opacity":0});

    setInterval(() => {
        
        // console.log($("caption").find("span").eq(i));
        // console.log(i);
        if (i<5) {
            $("caption").find("span").eq(i).css({"opacity":1});
            i++;            
        }else{
            $("caption span").css({"opacity":0});
            i=0;
        }

    }, 1000);

}